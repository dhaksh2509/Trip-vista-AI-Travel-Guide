export type TravelType = 'Solo' | 'Couple' | 'Family' | 'Friends';

export type TravelPace = 'Relaxed' | 'Moderate' | 'Fast-Paced';

export type TransportPreference = 'Personal Car / Rental' | 'Train' | 'Flight' | 'Public Bus / Transit';

export interface TravelPreferences {
  destination: string;
  destinationRecord?: any;
  durationDays: number;
  travelersCount: number;
  budgetInr: number;
  travelType: TravelType;
  interests: string[];
  travelPace: TravelPace;
  startingLocation: string;
  startingLocationRecord?: any;
  transportPreference: TransportPreference;
}

export interface ActivityItem {
  id: string;
  name: string;
  category: 'Nature' | 'Food' | 'History' | 'Beaches' | 'Adventure' | 'Shopping' | 'Photography' | 'Temples' | 'Sightseeing' | string;
  timeSlot: 'Morning' | 'Afternoon' | 'Evening';
  description: string;
  visitDurationMinutes: number;
  estimatedCostInr: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  address?: string;
  imageUrl?: string;
  isOutdoor: boolean;
  weatherBackup?: string;
  tips?: string[];
}

export interface MealRecommendation {
  id: string;
  name: string;
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snacks';
  cuisine: string;
  famousFor: string;
  estimatedCostPerPersonInr: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  summary: string;
  morning: ActivityItem;
  afternoon: ActivityItem;
  evening: ActivityItem;
  meals: MealRecommendation[];
  estimatedCostInr: number;
  travelDistanceKm: number;
  travelTimeMinutes: number;
  weatherAdvice?: string;
}

export interface BudgetBreakdown {
  accommodationInr: number;
  foodInr: number;
  transportationInr: number;
  activitiesInr: number;
  shoppingInr: number;
  otherInr: number;
  totalEstimatedInr: number;
  totalBudgetInr: number;
  remainingBudgetInr: number;
  dailyAveragePerPersonInr: number;
  isWithinBudget: boolean;
  savingsTips: string[];
}

export interface WeatherInfo {
  destination: string;
  temperatureC: number;
  feelsLikeC: number;
  condition: string;
  rainProbabilityPct: number;
  humidityPct: number;
  windSpeedKmph: number;
  isRainExpected: boolean;
  weatherAlert?: string;
  outdoorAdvice: string;
  isLive: boolean;
}

export interface RAGSource {
  id: string;
  documentTitle: string;
  section: string;
  snippet: string;
  score: number;
  destination: string;
}

export interface AgentStep {
  id: string;
  agentName: 'Research Agent' | 'Destination Agent' | 'Itinerary Agent' | 'Budget Agent' | 'Weather Agent' | 'Travel Assistant Agent';
  status: 'pending' | 'running' | 'completed' | 'failed';
  title: string;
  description: string;
  outputSummary?: string;
  durationMs?: number;
}

export interface TripPlan {
  id: string;
  createdAt: string;
  updatedAt: string;
  preferences: TravelPreferences;
  destinationName: string;
  startingLocation?: string;
  startingLocationRecord?: any;
  summary: string;
  highlights: string[];
  days: ItineraryDay[];
  budget: BudgetBreakdown;
  weather: WeatherInfo;
  ragSources: RAGSource[];
  agentWorkflow: AgentStep[];
  isDownloadedOffline?: boolean;
  lastSyncedAt?: string;
  notes?: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  agentUsed?: string;
  isOfflineResponse?: boolean;
  ragSources?: RAGSource[];
  modifiedDay?: number;
}
