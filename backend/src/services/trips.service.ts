import { TravelPreferences, TripPlan, ItineraryDay, ActivityItem, MealRecommendation, BudgetBreakdown } from '../types';
import { geminiService } from './gemini.service';
import { weatherService } from './weather.service';
import { ragService } from './rag.service';
import { dbService } from './db.service';

export class TripsService {
  public async generateTrip(preferences: TravelPreferences): Promise<TripPlan> {
    const destination = preferences.destination;
    const durationDays = preferences.durationDays || 3;
    const travelersCount = preferences.travelersCount || 1;
    const budgetInr = preferences.budgetInr || 15000;
    const startingLocation = preferences.startingLocation || 'Current Location';

    // 1. Fetch Weather
    const weather = await weatherService.getWeather(destination, true);

    // 2. Fetch RAG Citations
    const ragSources = ragService.search(`${destination} attractions culture`, destination, 3);

    // 3. Generate Itinerary Days
    const days: ItineraryDay[] = [];
    const baseDailyCost = Math.round(budgetInr / durationDays);

    for (let dayNum = 1; dayNum <= durationDays; dayNum++) {
      const morning: ActivityItem = {
        id: `act-${dayNum}-m`,
        name: dayNum === 1 && startingLocation !== destination
          ? `Departure from ${startingLocation} & Arrival in ${destination}`
          : `${destination} Landmark Sightseeing & Viewpoint`,
        category: 'Sightseeing',
        timeSlot: 'Morning',
        description: `Explore prime landmarks, scenic vistas, and historical highlights of ${destination}.`,
        visitDurationMinutes: 120,
        estimatedCostInr: Math.round(baseDailyCost * 0.15),
        coordinates: { lat: 18.3273 + (dayNum * 0.01), lng: 82.8775 + (dayNum * 0.01) },
        isOutdoor: true
      };

      const afternoon: ActivityItem = {
        id: `act-${dayNum}-a`,
        name: `${destination} Cultural Promenade & Heritage Site`,
        category: 'Culture',
        timeSlot: 'Afternoon',
        description: `Immerse in local crafts, historic corridors, and cultural exhibits.`,
        visitDurationMinutes: 90,
        estimatedCostInr: Math.round(baseDailyCost * 0.10),
        coordinates: { lat: 18.3300 + (dayNum * 0.01), lng: 82.8800 + (dayNum * 0.01) },
        isOutdoor: false
      };

      const evening: ActivityItem = {
        id: `act-${dayNum}-e`,
        name: `${destination} Evening Market & Sunset Walk`,
        category: 'Nature',
        timeSlot: 'Evening',
        description: `Stroll through vibrant evening stalls, taste local street snacks, and watch the sunset.`,
        visitDurationMinutes: 90,
        estimatedCostInr: Math.round(baseDailyCost * 0.08),
        coordinates: { lat: 18.3320 + (dayNum * 0.01), lng: 82.8820 + (dayNum * 0.01) },
        isOutdoor: true
      };

      const meals: MealRecommendation[] = [
        {
          id: `meal-${dayNum}-1`,
          name: `${destination} Regional Bistro`,
          mealType: 'Lunch',
          cuisine: 'Authentic Regional Indian',
          famousFor: 'Traditional Thali & Spiced Curries',
          estimatedCostPerPersonInr: 300,
          coordinates: { lat: 18.3280, lng: 82.8790 }
        }
      ];

      const dayCost = (morning.estimatedCostInr + afternoon.estimatedCostInr + evening.estimatedCostInr) * travelersCount;

      days.push({
        dayNumber: dayNum,
        title: `Day ${dayNum}: Exploring ${destination}`,
        summary: `Discover key highlights, cultural landmarks, and local flavors across ${destination}.`,
        morning,
        afternoon,
        evening,
        meals,
        estimatedCostInr: dayCost,
        travelDistanceKm: 25,
        travelTimeMinutes: 45,
        weatherAdvice: weather.outdoorAdvice
      });
    }

    // 4. Budget Allocation
    const accommodationInr = Math.round(budgetInr * 0.40);
    const foodInr = Math.round(budgetInr * 0.25);
    const transportationInr = Math.round(budgetInr * 0.18);
    const activitiesInr = Math.round(budgetInr * 0.10);
    const shoppingInr = Math.round(budgetInr * 0.04);
    const otherInr = Math.round(budgetInr * 0.03);
    const totalEstimated = accommodationInr + foodInr + transportationInr + activitiesInr + shoppingInr + otherInr;

    const budget: BudgetBreakdown = {
      totalBudgetInr: budgetInr,
      totalEstimatedInr: totalEstimated,
      remainingBudgetInr: Math.max(0, budgetInr - totalEstimated),
      accommodationInr,
      foodInr,
      transportationInr,
      activitiesInr,
      shoppingInr,
      otherInr,
      dailyAveragePerPersonInr: Math.round(totalEstimated / (durationDays * travelersCount)),
      costSavingTips: [
        'Book trains or shared transport between transit hubs to save up to 40% on intercity travel.',
        'Choose authentic local family-run restaurants over tourist eateries for better taste and lower prices.',
        'Visit outdoor public viewpoints and gardens early in the morning to beat the queues.'
      ]
    };

    // 5. Optional Gemini AI enhancement
    let tagline = `A curated ${durationDays}-day experience in ${destination}`;
    if (geminiService.isAvailable()) {
      tagline = await geminiService.generateContent(
        `Write a brief 10-word poetic tagline for a travel trip to ${destination}.`,
        tagline
      );
    }

    const tripPlan: TripPlan = {
      id: `trip-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      destinationName: destination,
      tagline: tagline.trim(),
      preferences,
      days,
      budget,
      weather,
      ragSources,
      isOfflineAvailable: false
    };

    // Save to database
    await dbService.saveTrip(tripPlan);

    return tripPlan;
  }

  public async getTrip(id: string): Promise<TripPlan | null> {
    return dbService.getTrip(id);
  }

  public async getAllTrips(): Promise<TripPlan[]> {
    return dbService.getAllTrips();
  }

  public async deleteTrip(id: string): Promise<boolean> {
    return dbService.deleteTrip(id);
  }
}

export const tripsService = new TripsService();

