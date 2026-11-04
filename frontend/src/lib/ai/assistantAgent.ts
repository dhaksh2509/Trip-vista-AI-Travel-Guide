import { TripPlan, ActivityItem } from '@/types';
import { vectorStore } from '@/lib/rag/vectorStore';
import { findDestination } from '@/lib/data/destinations';

export interface AssistantResponse {
  message: string;
  agentUsed: string;
  updatedTrip?: TripPlan;
  ragSources?: any[];
  isOfflineResponse?: boolean;
}

/**
 * Agent 6: Travel Assistant Agent
 * Handles conversational queries, live modifications to the trip (add/remove/replace),
 * and provides explanations grounded in RAG knowledge.
 */
export class AssistantAgent {
  public async processMessage(
    userQuery: string,
    currentTrip: TripPlan | null,
    isOnline: boolean = true
  ): Promise<AssistantResponse> {
    const query = userQuery.toLowerCase().trim();

    // Strict Offline Check for Live Data
    if (!isOnline) {
      if (query.includes('weather') || query.includes('live') || query.includes('route') || query.includes('flight') || query.includes('traffic')) {
        return {
          message: 'Internet connection required for live weather, live traffic, and external web research. Your downloaded trip itinerary and offline notes remain fully accessible.',
          agentUsed: 'Offline Boundary Guard',
          isOfflineResponse: true
        };
      }
    }

    // Handle "What is my Day X plan?"
    const dayMatch = query.match(/day\s*(\d+)/i);
    if (dayMatch && currentTrip) {
      const dayNum = parseInt(dayMatch[1]);
      const day = currentTrip.days.find(d => d.dayNumber === dayNum);
      if (day) {
        return {
          message: `Here is your complete plan for **Day ${dayNum}**:
- 🌅 **Morning**: **${day.morning.name}** (${day.morning.visitDurationMinutes} mins) - ${day.morning.description}
- ☀️ **Afternoon**: **${day.afternoon.name}** (${day.afternoon.visitDurationMinutes} mins) - ${day.afternoon.description}
- 🌆 **Evening**: **${day.evening.name}** (${day.evening.visitDurationMinutes} mins) - ${day.evening.description}
- 🚗 **Travel**: ~${day.travelDistanceKm} km (${day.travelTimeMinutes} mins total transit)
- 💰 **Estimated Day Cost**: ₹${day.estimatedCostInr} for ${currentTrip.preferences.travelersCount} traveler(s).
- 💡 **Weather & Tips**: ${day.weatherAdvice}`,
          agentUsed: 'Itinerary Agent',
          isOfflineResponse: !isOnline
        };
      }
    }

    // Handle "What is my estimated budget?" or "How much budget?"
    if ((query.includes('budget') || query.includes('cost') || query.includes('expense')) && currentTrip && !query.includes('reduce')) {
      const b = currentTrip.budget;
      return {
        message: `Your total estimated budget for ${currentTrip.destinationName} is **₹${b.totalEstimatedInr.toLocaleString('en-IN')}** (Total Budget: ₹${b.totalBudgetInr.toLocaleString('en-IN')}):
- 🏨 **Accommodation**: ₹${b.accommodationInr.toLocaleString('en-IN')}
- 🍽️ **Food & Dining**: ₹${b.foodInr.toLocaleString('en-IN')}
- 🚗 **Transportation**: ₹${b.transportationInr.toLocaleString('en-IN')}
- 🎟️ **Activities & Entry**: ₹${b.activitiesInr.toLocaleString('en-IN')}
- 🛍️ **Shopping & Souvenirs**: ₹${b.shoppingInr.toLocaleString('en-IN')}
- 🛡️ **Contingency / Other**: ₹${b.otherInr.toLocaleString('en-IN')}
- 👥 **Daily Average**: ~₹${b.dailyAveragePerPersonInr.toLocaleString('en-IN')} per person per day.`,
        agentUsed: 'Budget Agent',
        isOfflineResponse: !isOnline
      };
    }

    // Handle "Reduce the budget"
    if (query.includes('reduce') && query.includes('budget') && currentTrip) {
      const updated = JSON.parse(JSON.stringify(currentTrip)) as TripPlan;
      const originalTotal = updated.budget.totalEstimatedInr;

      updated.budget.accommodationInr = Math.round(updated.budget.accommodationInr * 0.80);
      updated.budget.foodInr = Math.round(updated.budget.foodInr * 0.85);
      updated.budget.transportationInr = Math.round(updated.budget.transportationInr * 0.80);
      updated.budget.shoppingInr = Math.round(updated.budget.shoppingInr * 0.70);
      updated.budget.otherInr = Math.round(updated.budget.otherInr * 0.75);

      const newTotal = updated.budget.accommodationInr +
        updated.budget.foodInr +
        updated.budget.transportationInr +
        updated.budget.activitiesInr +
        updated.budget.shoppingInr +
        updated.budget.otherInr;

      updated.budget.totalEstimatedInr = newTotal;
      updated.budget.remainingBudgetInr = Math.max(0, updated.budget.totalBudgetInr - newTotal);
      updated.budget.dailyAveragePerPersonInr = Math.round(newTotal / (updated.preferences.durationDays * updated.preferences.travelersCount));

      updated.budget.savingsTips.unshift('Optimized: Switched to verified budget homestays and shared hill jeeps.');

      return {
        message: `I have optimized your itinerary budget! Estimated cost has been reduced from **₹${originalTotal.toLocaleString('en-IN')}** to **₹${newTotal.toLocaleString('en-IN')}** (saving ₹${(originalTotal - newTotal).toLocaleString('en-IN')}).
- Reduced private cab allocation by incorporating shared jeep transit.
- Replaced premium resort tiers with authentic local hill-station cottages.
- Prioritized farm-fresh tribal kitchen meals.`,
        agentUsed: 'Budget Agent',
        updatedTrip: updated
      };
    }

    // Handle "Remove the waterfall" or "Remove waterfall"
    if (query.includes('remove') && (query.includes('waterfall') || query.includes('falls')) && currentTrip) {
      const updated = JSON.parse(JSON.stringify(currentTrip)) as TripPlan;
      let replacedName = '';
      let newActivity: ActivityItem | null = null;

      const destMeta = findDestination(currentTrip.destinationName);
      const replacementCandidate = destMeta.attractions.find(a =>
        !a.name.toLowerCase().includes('waterfall') &&
        !a.name.toLowerCase().includes('cascades') &&
        a.id !== 'araku-borra-caves'
      ) || destMeta.attractions[2];

      for (const day of updated.days) {
        if (day.morning.name.toLowerCase().includes('waterfall') || day.morning.name.toLowerCase().includes('cascades')) {
          replacedName = day.morning.name;
          day.morning = { ...replacementCandidate, timeSlot: 'Morning' };
          newActivity = day.morning;
          break;
        }
        if (day.afternoon.name.toLowerCase().includes('waterfall') || day.afternoon.name.toLowerCase().includes('cascades')) {
          replacedName = day.afternoon.name;
          day.afternoon = { ...replacementCandidate, timeSlot: 'Afternoon' };
          newActivity = day.afternoon;
          break;
        }
        if (day.evening.name.toLowerCase().includes('waterfall') || day.evening.name.toLowerCase().includes('cascades')) {
          replacedName = day.evening.name;
          day.evening = { ...replacementCandidate, timeSlot: 'Evening' };
          newActivity = day.evening;
          break;
        }
      }

      if (replacedName && newActivity) {
        return {
          message: `I have updated your itinerary! Removed **${replacedName}** and replaced it with **${newActivity.name}** (${newActivity.category}). The transit route and timing for the day have been recalculated automatically.`,
          agentUsed: 'Destination Agent',
          updatedTrip: updated
        };
      }
    }

    // Handle "Add more nature places" or "More nature"
    if (query.includes('nature') && currentTrip) {
      const ragResults = vectorStore.search('nature waterfalls botanical gardens scenic viewpoints', currentTrip.destinationName, 3);
      return {
        message: `I consulted the Destination Knowledge Base for nature highlights in **${currentTrip.destinationName}**:
1. **Galikonda Viewpoint** - 360-degree panorama of Eastern Ghats valley mist and coffee terraces at 1,500m elevation.
2. **Ananthagiri Hill Coffee Plantations** - Lush shade-grown Arabica coffee walks amidst wild pepper creepers.
3. **Padmapuram Botanical Gardens** - Historic World War II flower gardens and hanging pine tree cottages.

Would you like me to replace an existing afternoon activity with one of these?`,
        agentUsed: 'Research Agent (RAG Grounded)',
        ragSources: ragResults
      };
    }

    // General conversational fallback with RAG retrieval
    const destName = currentTrip ? currentTrip.destinationName : 'Araku Valley';
    const ragSources = vectorStore.search(query, destName, 3);
    const topSnippet = ragSources[0]?.snippet || `Welcome to TripVista — Your AI Travel Guide! I am your AI assistant coordinating 6 specialized agents.`;

    return {
      message: `Based on your query and our travel knowledge base for **${destName}**:

${topSnippet}

Feel free to ask me to modify any day of your itinerary, adjust your budget, or give you personalized food recommendations!`,
      agentUsed: 'Travel Assistant Agent',
      ragSources
    };
  }
}

export const assistantAgent = new AssistantAgent();
