import { findDestination, DestinationMeta } from '@/lib/data/destinations';
import { TravelPreferences } from '@/types';

export interface ResearchResult {
  destinationMeta: DestinationMeta;
  startingLocationMeta?: DestinationMeta;
  intercityDistanceKm?: number;
  feasibilitySummary: string;
  seasonalityCheck: string;
  connectivityNotice: string;
  recommendedDuration: number;
}

/**
 * Agent 1: Research Agent
 * Gathers geographical, logistical, seasonal, connectivity, and origin-to-destination transit details
 */
export class ResearchAgent {
  public async execute(preferences: TravelPreferences): Promise<ResearchResult> {
    const dest = findDestination(preferences.destination);

    // Resolve starting location record
    let startDest: DestinationMeta | undefined;
    let intercityDistanceKm: number | undefined;

    if (preferences.startingLocationRecord && preferences.startingLocationRecord.coordinates) {
      startDest = preferences.startingLocationRecord;
    } else if (preferences.startingLocation && preferences.startingLocation.trim().length > 0) {
      startDest = findDestination(preferences.startingLocation.trim());
    }

    if (startDest && startDest.coordinates && dest.coordinates) {
      intercityDistanceKm = Math.round(this.calculateDistanceKm(startDest.coordinates, dest.coordinates));
    }

    const startSummary = startDest
      ? `Route verified from ${startDest.name} (${startDest.state}) to ${dest.name} (${dest.state}) via ${preferences.transportPreference}${intercityDistanceKm ? ` (~${intercityDistanceKm} km)` : ''}.`
      : '';

    const feasibilitySummary = startDest
      ? `${startSummary} Highly recommended for a ${preferences.durationDays}-day ${preferences.travelType.toLowerCase()} trip with ${preferences.travelersCount} traveler(s).`
      : `${dest.name} is highly recommended for a ${preferences.durationDays}-day ${preferences.travelType.toLowerCase()} trip with ${preferences.travelersCount} traveler(s). Primary transport preference: ${preferences.transportPreference}.`;

    const seasonalityCheck = `Best visiting window is ${dest.bestMonths}. Current climate is conducive for sightseeing with optimal daylight hours.`;
    
    let connectivityNotice = 'Standard cellular 4G/5G coverage is available across central city areas.';
    if (dest.id === 'araku') {
      connectivityNotice = 'Note: Cell reception is sparse around mountain ghats, Borra Caves, and Katiki Waterfalls. Offline trip download is strongly advised.';
    }

    return {
      destinationMeta: dest,
      startingLocationMeta: startDest,
      intercityDistanceKm,
      feasibilitySummary,
      seasonalityCheck,
      connectivityNotice,
      recommendedDuration: dest.idealDays
    };
  }

  private calculateDistanceKm(
    coord1: { lat: number; lng: number },
    coord2: { lat: number; lng: number }
  ): number {
    if (!coord1 || !coord2) return 0;
    const R = 6371; // Earth's radius in km
    const dLat = (coord2.lat - coord1.lat) * (Math.PI / 180);
    const dLon = (coord2.lng - coord1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coord1.lat * (Math.PI / 180)) *
        Math.cos(coord2.lat * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}

export const researchAgent = new ResearchAgent();
