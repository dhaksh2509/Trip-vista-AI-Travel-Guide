import { getOfflineDb, OfflineTripRecord } from './db';
import { TripPlan } from '@/types';
import { vectorStore } from '@/lib/rag/vectorStore';

export class OfflineSyncManager {
  public static async saveTripOffline(trip: TripPlan): Promise<boolean> {
    const db = getOfflineDb();
    if (!db) return false;

    // Fetch relevant RAG chunks for this destination to store offline
    const ragSources = vectorStore.search(trip.destinationName, trip.destinationName, 6);

    const record: OfflineTripRecord = {
      id: trip.id,
      destinationName: trip.destinationName,
      durationDays: trip.preferences.durationDays,
      travelersCount: trip.preferences.travelersCount,
      totalBudgetInr: trip.budget.totalBudgetInr,
      totalEstimatedInr: trip.budget.totalEstimatedInr,
      savedAt: new Date().toISOString(),
      lastSyncedAt: new Date().toLocaleString(),
      tripData: { ...trip, isDownloadedOffline: true, lastSyncedAt: new Date().toLocaleString() },
      ragKnowledge: ragSources,
      userNotes: trip.notes || [
        'Checked into local homestay / hotel',
        'Booked shared jeep for morning sightseeing',
        'Tried authentic bamboo chicken'
      ]
    };

    await db.trips.put(record);
    return true;
  }

  public static async getOfflineTrips(): Promise<OfflineTripRecord[]> {
    const db = getOfflineDb();
    if (!db) return [];
    return await db.trips.toArray();
  }

  public static async getOfflineTripById(id: string): Promise<OfflineTripRecord | undefined> {
    const db = getOfflineDb();
    if (!db) return undefined;
    return await db.trips.get(id);
  }

  public static async deleteOfflineTrip(id: string): Promise<boolean> {
    const db = getOfflineDb();
    if (!db) return false;
    await db.trips.delete(id);
    return true;
  }

  public static async updateOfflineTripNotes(id: string, notes: string[]): Promise<boolean> {
    const db = getOfflineDb();
    if (!db) return false;
    const existing = await db.trips.get(id);
    if (!existing) return false;

    existing.userNotes = notes;
    existing.tripData.notes = notes;
    existing.lastSyncedAt = new Date().toLocaleString();
    await db.trips.put(existing);
    return true;
  }
}
