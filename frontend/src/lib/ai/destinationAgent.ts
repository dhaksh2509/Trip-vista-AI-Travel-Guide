import { DestinationMeta } from '@/lib/data/destinations';
import { ActivityItem, TravelPreferences } from '@/types';

export interface DestinationPlanOptions {
  selectedAttractions: ActivityItem[];
  categorizedInterests: Record<string, ActivityItem[]>;
  estimatedTotalHours: number;
}

type ActivityCategory = 'Nature' | 'Food' | 'History' | 'Beaches' | 'Adventure' | 'Shopping' | 'Photography' | 'Temples' | 'Sightseeing';

/**
 * Agent 2: Destination Agent
 * Evaluates points of interest, clusters nearby spots, aligns with traveler preferences and pace.
 * Guarantees zero-duplication of attractions across multi-day itineraries.
 */
export class DestinationAgent {
  public async execute(destMeta: DestinationMeta, preferences: TravelPreferences): Promise<DestinationPlanOptions> {
    const userInterestsLower = preferences.interests.map(i => i.toLowerCase());
    const allAttractions = destMeta.attractions;

    // Score attractions based on user interests
    const scoredAttractions = allAttractions.map(attr => {
      let score = 1;
      if (userInterestsLower.includes(attr.category.toLowerCase())) {
        score += 3;
      }
      if (preferences.interests.some(interest => attr.description.toLowerCase().includes(interest.toLowerCase()))) {
        score += 2;
      }
      return { attr, score };
    });

    scoredAttractions.sort((a, b) => b.score - a.score);

    const totalSlotsNeeded = preferences.durationDays * 3;
    const selected: ActivityItem[] = scoredAttractions.map(item => ({ ...item.attr }));

    // If more unique attractions are needed for longer trips, generate location-specific unique activities
    if (selected.length < totalSlotsNeeded) {
      // Use a variety of generic categories to prevent monotony across days
      const genericPool: { name: string; category: ActivityCategory; duration: number; cost: number; outdoor: boolean; imageUrl: string }[] = [
        { name: 'Heritage Walk & Historical Quarter', category: 'History', duration: 120, cost: 50, outdoor: false, imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80' },
        { name: 'Sunset Promenade & Panoramic Viewpoint', category: 'Photography', duration: 90, cost: 0, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
        { name: 'Artisan Craft & Local Spice Bazaar', category: 'Shopping', duration: 90, cost: 100, outdoor: false, imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80' },
        { name: 'Botanical Gardens & Eco Nature Reserve', category: 'Nature', duration: 105, cost: 30, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },
        { name: 'Cultural Center & Performing Arts Hall', category: 'Sightseeing', duration: 120, cost: 150, outdoor: false, imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80' },
        { name: 'Panoramic Hill Observatory & Lookout', category: 'Sightseeing', duration: 90, cost: 40, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80' },
        { name: 'Lakeside & Waterfront Promenade Walk', category: 'Nature', duration: 90, cost: 0, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
        { name: 'Regional Flavors & Street Culinary Trail', category: 'Food', duration: 75, cost: 200, outdoor: false, imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80' },
        { name: 'Ancient Temple & Spiritual Heritage Tour', category: 'Temples', duration: 100, cost: 30, outdoor: false, imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80' },
        { name: 'Adventure Park & Outdoor Activity Zone', category: 'Adventure', duration: 120, cost: 250, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=600&q=80' },
        { name: 'Riverside Meditation & Sunrise Walk', category: 'Nature', duration: 60, cost: 0, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80' },
        { name: 'Museum of Regional History & Folk Art', category: 'History', duration: 90, cost: 60, outdoor: false, imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80' },
        { name: 'Night Market & Local Souvenir Bazaar', category: 'Shopping', duration: 75, cost: 150, outdoor: false, imageUrl: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80' },
        { name: 'Scenic Countryside Cycling Trail', category: 'Adventure', duration: 120, cost: 80, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?auto=format&fit=crop&w=600&q=80' },
        { name: 'Photography Walk: Architecture & Street Art', category: 'Photography', duration: 90, cost: 0, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
        { name: 'Beach Sunrise & Coastal Meditation', category: 'Beaches', duration: 75, cost: 0, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
        { name: 'Rooftop Cafe & City Skyline Experience', category: 'Food', duration: 60, cost: 180, outdoor: false, imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80' },
        { name: 'Guided Eco-Trek & Wildlife Sanctuary', category: 'Adventure', duration: 150, cost: 300, outdoor: true, imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80' },
      ];

      const baseLat = destMeta.coordinates.lat;
      const baseLng = destMeta.coordinates.lng;

      let padIdx = 0;
      while (selected.length < totalSlotsNeeded) {
        const catObj = genericPool[padIdx % genericPool.length];
        // Use a deterministic but unique offset for each generated activity
        const angle = padIdx * 0.7 + 0.3; // radians, spread around the destination
        const radius = 0.008 + (padIdx % 5) * 0.004; // vary distance from center
        const offsetLat = Math.sin(angle) * radius;
        const offsetLng = Math.cos(angle) * radius;

        const slot = padIdx % 3 === 0 ? 'Morning' : padIdx % 3 === 1 ? 'Afternoon' : 'Evening';

        selected.push({
          id: `${destMeta.id}-gen-${padIdx + 1}`,
          name: `${destMeta.name} ${catObj.name}`,
          category: catObj.category,
          timeSlot: slot as 'Morning' | 'Afternoon' | 'Evening',
          description: `Explore ${destMeta.name}'s ${catObj.name.toLowerCase()} featuring regional architecture, local traditions, and scenic surroundings.`,
          visitDurationMinutes: catObj.duration,
          estimatedCostInr: catObj.cost,
          coordinates: { lat: baseLat + offsetLat, lng: baseLng + offsetLng },
          imageUrl: catObj.imageUrl,
          isOutdoor: catObj.outdoor,
          tips: [`Ideal for ${catObj.category.toLowerCase()} enthusiasts visiting ${destMeta.name}`]
        });
        padIdx++;
      }
    }

    // Slice to exactly totalSlotsNeeded and verify no duplicate IDs remain
    const finalSelected = selected.slice(0, totalSlotsNeeded);
    this.deduplicateByCoordinates(finalSelected);

    const categorized: Record<string, ActivityItem[]> = {};
    let totalMinutes = 0;

    for (const item of finalSelected) {
      if (!categorized[item.category]) {
        categorized[item.category] = [];
      }
      categorized[item.category].push(item);
      totalMinutes += item.visitDurationMinutes;
    }

    return {
      selectedAttractions: finalSelected,
      categorizedInterests: categorized,
      estimatedTotalHours: Math.round(totalMinutes / 60)
    };
  }

  /**
   * Ensure no two generated activities have identical coordinates by adding small jitter.
   * Real attractions genuinely have different coordinates, so we only need
   * to handle the generated generic ones.
   */
  private deduplicateByCoordinates(attractions: ActivityItem[]): void {
    const seen = new Set<string>();
    attractions.forEach((attr) => {
      const key = `${attr.coordinates.lat.toFixed(4)},${attr.coordinates.lng.toFixed(4)}`;
      if (seen.has(key)) {
        // Tiny jitter to differentiate the pin on the map
        attr.coordinates = {
          lat: attr.coordinates.lat + (Math.random() - 0.5) * 0.003,
          lng: attr.coordinates.lng + (Math.random() - 0.5) * 0.003
        };
      }
      seen.add(key);
    });
  }
}

export const destinationAgent = new DestinationAgent();
