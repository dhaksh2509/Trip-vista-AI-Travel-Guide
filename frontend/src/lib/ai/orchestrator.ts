import { TravelPreferences, TripPlan, AgentStep, RAGSource } from '@/types';
import { researchAgent } from './researchAgent';
import { destinationAgent } from './destinationAgent';
import { itineraryAgent } from './itineraryAgent';
import { budgetAgent } from './budgetAgent';
import { weatherAgent } from './weatherAgent';
import { vectorStore } from '@/lib/rag/vectorStore';

export interface OrchestrationResult {
  tripPlan: TripPlan;
  steps: AgentStep[];
}

/**
 * AI Orchestrator
 * Coordinates specialized autonomous agents in a sequential pipeline:
 * 1. Research Agent -> 2. RAG Retrieval -> 3. Destination Agent ->
 * 4. Itinerary Agent -> 5. Budget Agent -> 6. Weather Agent -> Final Travel Plan
 */
export class AIOrchestrator {
  public async generateTrip(
    preferences: TravelPreferences,
    onStepUpdate?: (step: AgentStep) => void
  ): Promise<TripPlan> {
    const startPrompt = preferences.startingLocation && preferences.startingLocation.trim().length > 0
      ? `from ${preferences.startingLocation.trim()} to ${preferences.destination}`
      : preferences.destination;

    const steps: AgentStep[] = [
      {
        id: 'step-1',
        agentName: 'Research Agent',
        status: 'pending',
        title: 'Destination & Logistical Feasibility',
        description: `Researching travel route ${startPrompt}, climate, seasonal patterns, and transit feasibility for ${preferences.travelersCount} traveler(s)...`
      },
      {
        id: 'step-2',
        agentName: 'Research Agent',
        status: 'pending',
        title: 'RAG Semantic Vector Search',
        description: `Querying vector database for local heritage, cultural food, and insider travel tips...`
      },
      {
        id: 'step-3',
        agentName: 'Destination Agent',
        status: 'pending',
        title: 'Attraction Selection & Categorization',
        description: `Filtering spots matching interests: ${preferences.interests.join(', ')}...`
      },
      {
        id: 'step-4',
        agentName: 'Itinerary Agent',
        status: 'pending',
        title: 'Logical Day-by-Day Scheduling',
        description: `Organizing morning, afternoon, and evening slots to minimize transit delays...`
      },
      {
        id: 'step-5',
        agentName: 'Budget Agent',
        status: 'pending',
        title: 'Financial Allocation & Cost Balancing',
        description: `Fitting trip expenses within target budget of ₹${preferences.budgetInr.toLocaleString('en-IN')}...`
      },
      {
        id: 'step-6',
        agentName: 'Weather Agent',
        status: 'pending',
        title: 'Live Weather Analysis & Contingency',
        description: `Verifying temperature, rain likelihood, and identifying weather-safe alternatives...`
      }
    ];

    // Helper to update step status
    const updateStep = (index: number, status: AgentStep['status'], summary?: string) => {
      steps[index].status = status;
      if (summary) steps[index].outputSummary = summary;
      if (onStepUpdate) onStepUpdate(steps[index]);
    };

    // Step 1: Research Agent
    updateStep(0, 'running');
    const research = await researchAgent.execute(preferences);
    updateStep(0, 'completed', `Feasibility verified for ${research.destinationMeta.name}. Best season: ${research.destinationMeta.bestMonths}.`);

    // Step 2: RAG Retrieval
    updateStep(1, 'running');
    const ragQuery = `${preferences.destination} ${preferences.interests.join(' ')} sightseeing food tips`;
    const ragSources: RAGSource[] = vectorStore.search(ragQuery, research.destinationMeta.name, 4);
    updateStep(1, 'completed', `Retrieved ${ragSources.length} grounded travel documents from vector database.`);

    // Step 3: Destination Agent
    updateStep(2, 'running');
    const destPlan = await destinationAgent.execute(research.destinationMeta, preferences);
    updateStep(2, 'completed', `Selected ${destPlan.selectedAttractions.length} top attractions aligned with traveler pace (${preferences.travelPace}).`);

    // Step 4: Itinerary Agent
    updateStep(3, 'running');
    const days = await itineraryAgent.execute(research.destinationMeta, destPlan.selectedAttractions, preferences);
    updateStep(3, 'completed', `Arranged ${days.length} days with optimized transit routes and regional dining.`);

    // Step 5: Budget Agent
    updateStep(4, 'running');
    const budget = await budgetAgent.execute(preferences, days);
    updateStep(4, 'completed', `Total estimated: ₹${budget.totalEstimatedInr.toLocaleString('en-IN')} (Target: ₹${budget.totalBudgetInr.toLocaleString('en-IN')}). Daily avg: ₹${budget.dailyAveragePerPersonInr}/person.`);

    // Step 6: Weather Agent
    updateStep(5, 'running');
    const weather = await weatherAgent.execute(research.destinationMeta.name, true);
    updateStep(5, 'completed', `${weather.temperatureC}°C, ${weather.condition}. Rain probability: ${weather.rainProbabilityPct}%.`);

    // Compile Final Plan
    const tripId = `trip-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const now = new Date().toISOString();

    const destName = research.destinationMeta.name;
    const destAttrs = research.destinationMeta.attractions;
    const destMeals = research.destinationMeta.meals;

    const highlights = destAttrs.length >= 3 ? [
      `Iconic exploration of ${destAttrs[0].name} - ${destAttrs[0].description}`,
      `Scenic heritage & photo trail at ${destAttrs[1].name}`,
      `Evening relaxation and local culture at ${destAttrs[2].name}`,
      `Authentic regional dining featuring ${destMeals[0]?.famousFor || 'local specialties'}`
    ] : [
      `Immersive exploration of prime landmarks and cultural heritage in ${destName}`,
      `Scenic morning and evening promenades with panoramic city viewpoints`,
      `Sampling authentic local culinary delicacies across popular dining hubs`,
      `Tailored itinerary optimized for ${preferences.travelPace.toLowerCase()} pace and ${preferences.interests.join(', ')}`
    ];

    const notes = [
      `Plan visits to major landmarks in morning hours for optimal lighting and comfortable weather in ${destName}.`,
      `Keep digital or cached offline copies of your itinerary for smooth navigation during your trip to ${destName}.`,
      `Try local specialties such as ${destMeals[0]?.famousFor || 'regional dishes'} at recommended eateries.`
    ];

    const startName = research.startingLocationMeta?.name || preferences.startingLocation;

    const finalPlan: TripPlan = {
      id: tripId,
      createdAt: now,
      updatedAt: now,
      preferences,
      destinationName: destName,
      startingLocation: startName,
      startingLocationRecord: research.startingLocationMeta || preferences.startingLocationRecord,
      summary: startName
        ? `A personalized ${preferences.durationDays}-day ${preferences.travelPace.toLowerCase()} journey from ${startName} to ${destName} crafted for ${preferences.travelersCount} traveler(s), focusing on ${preferences.interests.join(', ')}.`
        : `A personalized ${preferences.durationDays}-day ${preferences.travelPace.toLowerCase()} journey through ${destName} crafted for ${preferences.travelersCount} traveler(s), focusing on ${preferences.interests.join(', ')}.`,
      highlights,
      days,
      budget,
      weather,
      ragSources,
      agentWorkflow: steps,
      isDownloadedOffline: false,
      notes
    };

    return finalPlan;
  }
}

export const aiOrchestrator = new AIOrchestrator();
