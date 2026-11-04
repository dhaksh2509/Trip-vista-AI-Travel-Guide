import { TravelPreferences, TripPlan, ItineraryDay, ActivityItem, MealRecommendation, BudgetBreakdown } from '../types';
import { geminiService } from './gemini.service';
import { weatherService } from './weather.service';
import { ragService } from './rag.service';
import { dbService } from './db.service';
import { findAllIndiaDestination } from '../data/allIndiaCatalogue';

export class TripsService {
  public async generateTrip(preferences: TravelPreferences): Promise<TripPlan> {
    const destination = preferences.destination;
    const durationDays = preferences.durationDays || 3;
    const travelersCount = preferences.travelersCount || 1;
    const budgetInr = preferences.budgetInr || 15000;
    const startingLocation = preferences.startingLocation || 'Current Location';

    // 0. Resolve destination metadata from All-India catalogue
    const destMeta = findAllIndiaDestination(destination);
    const baseCoords = destMeta?.coordinates || { lat: 20.5937, lng: 78.9629 };
    const curatedAttractions = destMeta?.attractions || [];
    const curatedMeals = destMeta?.meals || [];

    // 1. Fetch Weather
    const weather = await weatherService.getWeather(destination, true);

    // 2. Fetch RAG Citations
    const ragSources = ragService.search(`${destination} attractions culture`, destination, 3);

    // 3. Generate Itinerary Days
    const days: ItineraryDay[] = [];
    const baseDailyCost = Math.round(budgetInr / durationDays);

    for (let dayNum = 1; dayNum <= durationDays; dayNum++) {
      // Pick or synthesize activities using verified destination data and coordinates
      const morningAttraction = curatedAttractions[(dayNum - 1) * 2];
      const afternoonAttraction = curatedAttractions[(dayNum - 1) * 2 + 1];

      const morning: ActivityItem = {
        id: `act-${dayNum}-m`,
        name: dayNum === 1 && startingLocation !== destination
          ? `Departure from ${startingLocation} & Arrival in ${destination}`
          : (morningAttraction?.name || `${destination} Landmark Sightseeing & Viewpoint`),
        category: morningAttraction?.category || 'Sightseeing',
        timeSlot: 'Morning',
        description: morningAttraction?.description || `Explore prime landmarks, scenic vistas, and historical highlights of ${destination}.`,
        visitDurationMinutes: morningAttraction?.visitDurationMinutes || 120,
        estimatedCostInr: morningAttraction?.estimatedCostInr || Math.round(baseDailyCost * 0.15),
        coordinates: morningAttraction?.coordinates || {
          lat: baseCoords.lat + (dayNum * 0.004),
          lng: baseCoords.lng + (dayNum * 0.004)
        },
        address: morningAttraction?.address,
        imageUrl: morningAttraction?.imageUrl,
        isOutdoor: morningAttraction?.isOutdoor ?? true,
        tips: morningAttraction?.tips
      };

      const afternoon: ActivityItem = {
        id: `act-${dayNum}-a`,
        name: afternoonAttraction?.name || `${destination} Cultural Promenade & Heritage Site`,
        category: afternoonAttraction?.category || 'Culture',
        timeSlot: 'Afternoon',
        description: afternoonAttraction?.description || `Immerse in local crafts, historic corridors, and cultural exhibits across ${destination}.`,
        visitDurationMinutes: afternoonAttraction?.visitDurationMinutes || 90,
        estimatedCostInr: afternoonAttraction?.estimatedCostInr || Math.round(baseDailyCost * 0.10),
        coordinates: afternoonAttraction?.coordinates || {
          lat: baseCoords.lat + (dayNum * 0.006),
          lng: baseCoords.lng + (dayNum * 0.006)
        },
        address: afternoonAttraction?.address,
        imageUrl: afternoonAttraction?.imageUrl,
        isOutdoor: afternoonAttraction?.isOutdoor ?? false,
        tips: afternoonAttraction?.tips
      };

      const evening: ActivityItem = {
        id: `act-${dayNum}-e`,
        name: `${destination} Evening Market & Sunset Walk`,
        category: 'Nature',
        timeSlot: 'Evening',
        description: `Stroll through vibrant evening stalls, taste local street snacks, and watch the sunset in ${destination}.`,
        visitDurationMinutes: 90,
        estimatedCostInr: Math.round(baseDailyCost * 0.08),
        coordinates: {
          lat: baseCoords.lat + 0.002,
          lng: baseCoords.lng + 0.002
        },
        isOutdoor: true
      };

      const recommendedMeal = curatedMeals[(dayNum - 1) % Math.max(1, curatedMeals.length)];
      const meals: MealRecommendation[] = [
        {
          id: `meal-${dayNum}-1`,
          name: recommendedMeal?.name || `${destination} Traditional Regional Diner`,
          mealType: 'Lunch',
          cuisine: recommendedMeal?.cuisine || 'Authentic Regional Indian',
          famousFor: recommendedMeal?.famousFor || 'Traditional Thali & Spiced Curries',
          estimatedCostPerPersonInr: recommendedMeal?.estimatedCostPerPersonInr || 300,
          coordinates: recommendedMeal?.coordinates || {
            lat: baseCoords.lat + 0.001,
            lng: baseCoords.lng + 0.001
          }
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
    let tagline = destMeta?.tagline || `A curated ${durationDays}-day experience in ${destination}`;
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

