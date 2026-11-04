import { NextRequest, NextResponse } from 'next/server';
import { aiOrchestrator } from '@/lib/ai/orchestrator';
import { TravelPreferences } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      destination, 
      durationDays, 
      travelersCount, 
      budgetInr, 
      travelType, 
      interests, 
      travelPace, 
      startingLocation, 
      transportPreference 
    } = body;

    // Input validation
    if (!destination || typeof destination !== 'string') {
      return NextResponse.json({ error: 'Destination is required' }, { status: 400 });
    }
    if (!durationDays || durationDays < 1 || durationDays > 14) {
      return NextResponse.json({ error: 'Duration must be between 1 and 14 days' }, { status: 400 });
    }
    if (!travelersCount || travelersCount < 1) {
      return NextResponse.json({ error: 'Travelers count must be at least 1' }, { status: 400 });
    }

    const preferences: TravelPreferences = {
      destination: destination.trim(),
      durationDays: Number(durationDays),
      travelersCount: Number(travelersCount),
      budgetInr: Number(budgetInr) || 10000,
      travelType: travelType || 'Friends',
      interests: Array.isArray(interests) && interests.length > 0 ? interests : ['Nature', 'Food'],
      travelPace: travelPace || 'Moderate',
      startingLocation: startingLocation || 'Visakhapatnam',
      transportPreference: transportPreference || 'Train'
    };

    // Execute Multi-Agent Orchestrator
    const tripPlan = await aiOrchestrator.generateTrip(preferences);

    return NextResponse.json({ success: true, trip: tripPlan });
  } catch (error: any) {
    console.error('Error generating trip:', error);
    return NextResponse.json(
      { error: 'Failed to generate trip through multi-agent orchestrator', details: error.message },
      { status: 500 }
    );
  }
}
