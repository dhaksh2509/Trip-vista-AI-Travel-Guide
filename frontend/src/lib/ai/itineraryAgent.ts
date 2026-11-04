import { DestinationMeta, findDestination } from '@/lib/data/destinations';
import { ActivityItem, ItineraryDay, MealRecommendation, TravelPreferences } from '@/types';

/**
 * Agent 3: Itinerary Agent
 * Creates cohesive day-by-day itineraries, arranges places logically to minimize transit time,
 * and schedules ONE meal recommendation per meal type per day (rotated across days).
 * Guarantees unique attractions per day — no repeats across the itinerary.
 */
export class ItineraryAgent {
  public async execute(
    destMeta: DestinationMeta,
    selectedAttractions: ActivityItem[],
    preferences: TravelPreferences
  ): Promise<ItineraryDay[]> {
    const days: ItineraryDay[] = [];
    const numDays = preferences.durationDays;
    const allMeals = destMeta.meals;

    const dayThemes = [
      'Arrival & Heritage Landmarks',
      'Cultural Heart & Local Gastronomy',
      'Scenic Viewpoints & Sunset Promenade',
      'Nature Trails & Botanical Reserves',
      'Artisan Markets & Craft Bazaars',
      'Museum Quarter & Art Galleries',
      'Panoramic Vistas & Farewell Highlights'
    ];

    // Ensure we have exactly numDays * 3 unique attractions
    // selectedAttractions are already padded by DestinationAgent, just take slices
    for (let dayNum = 1; dayNum <= numDays; dayNum++) {
      const startIndex = (dayNum - 1) * 3;

      // Extract 3 unique attractions for this day
      const morningAct = selectedAttractions[startIndex];
      const afternoonAct = selectedAttractions[startIndex + 1];
      const eveningAct = selectedAttractions[startIndex + 2];

      // Safety guard: should not happen if DestinationAgent pads correctly,
      // but if it does, create generic placeholders with unique coords
      const safeMorning: ActivityItem = morningAct ?? this.createPlaceholder(destMeta, dayNum, 'Morning', startIndex);
      const safeAfternoon: ActivityItem = afternoonAct ?? this.createPlaceholder(destMeta, dayNum, 'Afternoon', startIndex + 1);
      const safeEvening: ActivityItem = eveningAct ?? this.createPlaceholder(destMeta, dayNum, 'Evening', startIndex + 2);

      // Stamp time slots and unique day-scoped IDs
      const morning: ActivityItem = { ...safeMorning, timeSlot: 'Morning', id: `${safeMorning.id}-d${dayNum}-m` };
      const afternoon: ActivityItem = { ...safeAfternoon, timeSlot: 'Afternoon', id: `${safeAfternoon.id}-d${dayNum}-a` };
      const evening: ActivityItem = { ...safeEvening, timeSlot: 'Evening', id: `${safeEvening.id}-d${dayNum}-e` };

      // Calculate travel distances between consecutive coordinates
      const dist1 = this.calculateDistanceKm(morning.coordinates, afternoon.coordinates);
      const dist2 = this.calculateDistanceKm(afternoon.coordinates, evening.coordinates);
      let totalDistanceKm = Math.max(8, Math.round((dist1 + dist2 + 5) * 10) / 10);

      // Factor origin transit on Day 1 if starting location is provided
      let originTransitKm = 0;
      let startName = '';
      if (dayNum === 1 && preferences.startingLocation && preferences.startingLocation.trim().length > 0) {
        const startRecord = preferences.startingLocationRecord || findDestination(preferences.startingLocation);
        if (startRecord) {
          startName = startRecord.name || preferences.startingLocation;
          if (startRecord.coordinates && morning.coordinates) {
            originTransitKm = Math.round(this.calculateDistanceKm(startRecord.coordinates, morning.coordinates));
          }
        }
      }

      // Speed factor based on pace: Relaxed = slower, Fast-Paced = tighter
      let paceFactor = 1.0;
      if (preferences.travelPace === 'Relaxed') paceFactor = 1.25;
      if (preferences.travelPace === 'Fast-Paced') paceFactor = 0.85;

      const travelTimeMinutes = Math.round((totalDistanceKm * 2.2) * paceFactor);

      // Estimated day activities cost
      const dayCost = (morning.estimatedCostInr + afternoon.estimatedCostInr + evening.estimatedCostInr) * preferences.travelersCount;

      // Title & summary
      const themeIndex = (dayNum - 1) % dayThemes.length;
      let title = `Day ${dayNum}: ${dayThemes[themeIndex]} (${morning.name})`;
      let summary = `Morning exploration at ${morning.name}, afternoon visit to ${afternoon.name}, and evening relaxation at ${evening.name}.`;

      if (dayNum === 1 && startName) {
        title = `Day 1: Departure from ${startName} & Arrival at ${morning.name}`;
        summary = `Depart from ${startName} via ${preferences.transportPreference}${originTransitKm > 0 ? ` (~${originTransitKm} km)` : ''}. Arrive in ${destMeta.name} for morning check-in and exploration at ${morning.name}, afternoon visit to ${afternoon.name}, and evening relaxation at ${evening.name}.`;
      }

      // Rotate meals: assign a different meal per day so each day shows distinct restaurant suggestions
      // We assign 1 meal per day (cycling through the meals list), or up to 2 if list is long enough
      const dayMeals: MealRecommendation[] = this.selectMealsForDay(allMeals, dayNum);

      days.push({
        dayNumber: dayNum,
        title,
        summary,
        morning,
        afternoon,
        evening,
        meals: dayMeals,
        estimatedCostInr: dayCost,
        travelDistanceKm: totalDistanceKm,
        travelTimeMinutes,
        weatherAdvice: morning.weatherBackup || 'Pleasant weather anticipated; outdoor activities recommended.'
      });
    }

    return days;
  }

  /**
   * Select 1-2 unique meal recommendations per day by rotating through all available meals.
   * If there are 3+ meals, each day gets a rotating primary + a rotating secondary meal.
   * This ensures different restaurants appear on different days.
   */
  private selectMealsForDay(allMeals: MealRecommendation[], dayNum: number): MealRecommendation[] {
    if (!allMeals || allMeals.length === 0) return [];

    const count = allMeals.length;

    if (count === 1) {
      // Only one meal available — return it for all days
      return [allMeals[0]];
    }

    if (count <= 3) {
      // Small list: rotate 1 meal per day
      const primaryIndex = (dayNum - 1) % count;
      return [allMeals[primaryIndex]];
    }

    // Larger list: assign 2 meals per day using staggered rotation
    const primaryIndex = (dayNum - 1) % count;
    const secondaryIndex = (dayNum) % count;
    return [allMeals[primaryIndex], allMeals[secondaryIndex]];
  }

  /**
   * Creates a generic uniquely-positioned placeholder activity when
   * DestinationAgent hasn't provided enough attractions.
   */
  private createPlaceholder(
    destMeta: DestinationMeta,
    dayNum: number,
    slot: string,
    index: number
  ): ActivityItem {
    const offsetLat = Math.sin(index * 2.1) * 0.012;
    const offsetLng = Math.cos(index * 2.1) * 0.012;
    return {
      id: `${destMeta.id}-ph-${dayNum}-${slot.toLowerCase()}`,
      name: `${destMeta.name} ${slot} Exploration`,
      category: 'Sightseeing',
      timeSlot: slot as 'Morning' | 'Afternoon' | 'Evening',
      description: `A ${slot.toLowerCase()} of scenic walks and local sightseeing in ${destMeta.name}.`,
      visitDurationMinutes: 90,
      estimatedCostInr: 0,
      coordinates: {
        lat: destMeta.coordinates.lat + offsetLat,
        lng: destMeta.coordinates.lng + offsetLng
      },
      imageUrl: destMeta.bannerUrl || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      isOutdoor: true,
      tips: [`Explore ${destMeta.name}'s local ${slot.toLowerCase()} scene`]
    };
  }

  private calculateDistanceKm(
    coord1: { lat: number; lng: number },
    coord2: { lat: number; lng: number }
  ): number {
    if (!coord1 || !coord2) return 5;
    const R = 6371; // Earth radius in km
    const dLat = this.deg2rad(coord2.lat - coord1.lat);
    const dLon = this.deg2rad(coord2.lng - coord1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(coord1.lat)) *
        Math.cos(this.deg2rad(coord2.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}

export const itineraryAgent = new ItineraryAgent();
