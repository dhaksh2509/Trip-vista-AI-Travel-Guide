import { OfflineTripRecord, getOfflineDb } from './db';

export interface OfflineAssistantResponse {
  answer: string;
  source: 'IndexedDB Local Cache' | 'Offline Knowledge Base';
  isRefusal: boolean;
}

/**
 * Offline AI Assistant:
 * Uses locally stored trip information and local retrieval in IndexedDB.
 * Never pretends cloud AI or live web data works without internet.
 */
export class OfflineAIAssistant {
  public static async answerQuestion(
    query: string,
    currentTripRecord: OfflineTripRecord | null
  ): Promise<OfflineAssistantResponse> {
    const q = query.toLowerCase().trim();

    // 1. Boundary Refusals: Live weather, live flight, live map updates
    if (
      q.includes('weather') ||
      q.includes('live') ||
      q.includes('current temperature') ||
      q.includes('traffic') ||
      q.includes('flight status') ||
      q.includes('web search')
    ) {
      return {
        answer: 'Internet connection required for live weather. Live weather, live traffic, and web search are unavailable in offline mode.',
        source: 'IndexedDB Local Cache',
        isRefusal: true
      };
    }

    if (!currentTripRecord) {
      return {
        answer: 'No offline trip is currently selected. Please open a downloaded trip from the Offline Trips tab to query your itinerary, places, or budget.',
        source: 'IndexedDB Local Cache',
        isRefusal: false
      };
    }

    const trip = currentTripRecord.tripData;

    // 2. Day-specific queries: "What is my Day 2 plan?", "What's on Day 1?"
    const dayMatch = q.match(/day\s*(\d+)/i);
    if (dayMatch) {
      const dayNum = parseInt(dayMatch[1]);
      const day = trip.days.find(d => d.dayNumber === dayNum);
      if (day) {
        return {
          answer: `[OFFLINE RETRIEVAL - DAY ${dayNum}]
📍 Morning: ${day.morning.name} (${day.morning.visitDurationMinutes} mins)
📍 Afternoon: ${day.afternoon.name} (${day.afternoon.visitDurationMinutes} mins)
📍 Evening: ${day.evening.name} (${day.evening.visitDurationMinutes} mins)
🚗 Estimated transit: ${day.travelDistanceKm} km (~${day.travelTimeMinutes} mins)
💰 Estimated Day Expenses: ₹${day.estimatedCostInr}
💡 Offline Notes: ${day.weatherAdvice || 'Follow planned schedule.'}`,
          source: 'IndexedDB Local Cache',
          isRefusal: false
        };
      } else {
        return {
          answer: `Your downloaded trip for ${trip.destinationName} has ${trip.days.length} day(s). There is no Day ${dayNum} in your saved itinerary.`,
          source: 'IndexedDB Local Cache',
          isRefusal: false
        };
      }
    }

    // 3. Budget queries: "How much is my estimated budget?", "Show budget"
    if (q.includes('budget') || q.includes('cost') || q.includes('how much') || q.includes('expense')) {
      const b = trip.budget;
      return {
        answer: `[OFFLINE RETRIEVAL - BUDGET DASHBOARD]
Destination: ${trip.destinationName}
Total Budget: ₹${b.totalBudgetInr.toLocaleString('en-IN')}
Estimated Cost: ₹${b.totalEstimatedInr.toLocaleString('en-IN')}
Remaining Contingency: ₹${b.remainingBudgetInr.toLocaleString('en-IN')}

Breakdown:
• Accommodation: ₹${b.accommodationInr.toLocaleString('en-IN')}
• Food & Dining: ₹${b.foodInr.toLocaleString('en-IN')}
• Transportation: ₹${b.transportationInr.toLocaleString('en-IN')}
• Activities/Tickets: ₹${b.activitiesInr.toLocaleString('en-IN')}
• Shopping: ₹${b.shoppingInr.toLocaleString('en-IN')}
• Daily Average: ₹${b.dailyAveragePerPersonInr.toLocaleString('en-IN')} per traveler.`,
        source: 'IndexedDB Local Cache',
        isRefusal: false
      };
    }

    // 4. Places planned query: "Which places are planned today?" or "Which places"
    if (q.includes('places') || q.includes('attractions') || q.includes('spots')) {
      const placesList = trip.days.map(d => 
        `• Day ${d.dayNumber}: ${d.morning.name}, ${d.afternoon.name}, ${d.evening.name}`
      ).join('\n');

      return {
        answer: `[OFFLINE RETRIEVAL - PLANNED ATTRACTIONS]
Here are the places planned across your ${trip.days.length}-day itinerary for ${trip.destinationName}:
${placesList}`,
        source: 'IndexedDB Local Cache',
        isRefusal: false
      };
    }

    // 5. Restaurant queries: "What restaurants did I save?"
    if (q.includes('restaurant') || q.includes('food') || q.includes('eat') || q.includes('dining') || q.includes('meals')) {
      const allMeals = trip.days.flatMap(d => d.meals || []);
      const uniqueMeals = Array.from(new Set(allMeals.map(m => m.name)))
        .map(name => allMeals.find(m => m.name === name)!);

      if (uniqueMeals.length > 0) {
        const mealText = uniqueMeals.map(m => 
          `• ${m.name} (${m.cuisine}) - Famous for: ${m.famousFor} (~₹${m.estimatedCostPerPersonInr}/person)`
        ).join('\n');
        return {
          answer: `[OFFLINE RETRIEVAL - SAVED DINING RECOMMENDATIONS]
${mealText}`,
          source: 'IndexedDB Local Cache',
          isRefusal: false
        };
      }
    }

    // 6. Travel notes query: "Show my travel notes"
    if (q.includes('note') || q.includes('notes') || q.includes('checklist')) {
      const notes = trip.notes && trip.notes.length > 0
        ? trip.notes.map((n, i) => `${i + 1}. ${n}`).join('\n')
        : 'No personal notes recorded yet. You can add notes offline in the Offline Trips tab!';
      
      return {
        answer: `[OFFLINE RETRIEVAL - YOUR TRAVEL NOTES]
${notes}`,
        source: 'IndexedDB Local Cache',
        isRefusal: false
      };
    }

    // 7. Local search across downloaded RAG knowledge chunks
    const matchingSources = currentTripRecord.ragKnowledge.filter(k => 
      k.snippet.toLowerCase().includes(q) ||
      k.section.toLowerCase().includes(q) ||
      k.documentTitle.toLowerCase().includes(q)
    );

    if (matchingSources.length > 0) {
      return {
        answer: `[OFFLINE RETRIEVAL - DOWNLOADED KNOWLEDGE]
${matchingSources[0].section}:
${matchingSources[0].snippet}`,
        source: 'Offline Knowledge Base',
        isRefusal: false
      };
    }

    return {
      answer: `[OFFLINE MODE] I retrieved your saved data for ${trip.destinationName}. You can ask me:
- "What is my Day 2 plan?"
- "How much is my estimated budget?"
- "Which places are planned today?"
- "What restaurants did I save?"
- "Show my travel notes."`,
      source: 'IndexedDB Local Cache',
      isRefusal: false
    };
  }
}
