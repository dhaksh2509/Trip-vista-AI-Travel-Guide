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
  category: string;
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
  totalBudgetInr: number;
  totalEstimatedInr: number;
  remainingBudgetInr: number;
  accommodationInr: number;
  foodInr: number;
  transportationInr: number;
  activitiesInr: number;
  shoppingInr: number;
  otherInr: number;
  dailyAveragePerPersonInr: number;
  costSavingTips: string[];
}

export interface WeatherInfo {
  destination: string;
  temperatureC: number;
  feelsLikeC: number;
  condition: string;
  isRainExpected: boolean;
  rainProbabilityPct: number;
  humidityPct: number;
  windSpeedKmph: number;
  outdoorAdvice: string;
  indoorBackupReason?: string;
  isLive: boolean;
}

export interface RAGSource {
  id: string;
  documentTitle: string;
  section: string;
  destination: string;
  snippet: string;
  score: number;
}

export interface TripPlan {
  id: string;
  createdAt: string;
  destinationName: string;
  tagline: string;
  preferences: TravelPreferences;
  days: ItineraryDay[];
  budget: BudgetBreakdown;
  weather: WeatherInfo;
  ragSources: RAGSource[];
  isOfflineAvailable?: boolean;
}

