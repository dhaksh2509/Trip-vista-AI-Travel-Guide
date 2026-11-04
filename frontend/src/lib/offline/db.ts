import Dexie, { Table } from 'dexie';
import { TripPlan, RAGSource } from '@/types';

export interface OfflineTripRecord {
  id: string; // tripId
  destinationName: string;
  durationDays: number;
  travelersCount: number;
  totalBudgetInr: number;
  totalEstimatedInr: number;
  savedAt: string;
  lastSyncedAt: string;
  tripData: TripPlan;
  ragKnowledge: RAGSource[];
  userNotes: string[];
}

export interface OfflineKnowledgeRecord {
  id: string;
  destination: string;
  title: string;
  section: string;
  content: string;
}

export class OfflineTravelDatabase extends Dexie {
  trips!: Table<OfflineTripRecord, string>;
  knowledge!: Table<OfflineKnowledgeRecord, string>;

  constructor() {
    super('AITravelGuideOfflineDB');
    this.version(1).stores({
      trips: 'id, destinationName, savedAt, lastSyncedAt',
      knowledge: 'id, destination, title'
    });
  }
}

// Client-safe singleton database instantiation
let offlineDbInstance: OfflineTravelDatabase | null = null;

export function getOfflineDb(): OfflineTravelDatabase | null {
  if (typeof window === 'undefined') {
    return null;
  }
  if (!offlineDbInstance) {
    offlineDbInstance = new OfflineTravelDatabase();
  }
  return offlineDbInstance;
}
