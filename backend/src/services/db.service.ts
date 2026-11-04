import { Pool } from 'pg';
import { config } from '../config/env';
import { TripPlan } from '../types';

export class DbService {
  private pool: Pool | null = null;
  private inMemoryTrips: Map<string, TripPlan> = new Map();

  constructor() {
    if (config.databaseUrl) {
      try {
        this.pool = new Pool({
          connectionString: config.databaseUrl,
          ssl: config.databaseUrl.includes('neon.tech') ? { rejectUnauthorized: false } : undefined,
          max: 10,
          idleTimeoutMillis: 30000,
        });
        console.log('[DbService] PostgreSQL connection pool initialized.');
      } catch (err) {
        console.warn('[DbService] Failed to initialize connection pool, falling back to memory store:', err);
        this.pool = null;
      }
    } else {
      console.log('[DbService] DATABASE_URL not provided. Using in-memory store for local development.');
    }
  }

  public async saveTrip(trip: TripPlan): Promise<TripPlan> {
    this.inMemoryTrips.set(trip.id, trip);

    if (this.pool) {
      try {
        const query = `
          INSERT INTO "Trip" (
            "id", "destinationName", "durationDays", "travelersCount", "budgetInr",
            "travelType", "interests", "travelPace", "startingLocation", "transportPreference",
            "totalEstimatedCost", "createdAt", "updatedAt"
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW())
          ON CONFLICT ("id") DO UPDATE SET
            "budgetInr" = EXCLUDED."budgetInr",
            "updatedAt" = NOW();
        `;
        const values = [
          trip.id,
          trip.destinationName,
          trip.preferences.durationDays,
          trip.preferences.travelersCount,
          trip.budget.totalBudgetInr,
          trip.preferences.travelType,
          trip.preferences.interests,
          trip.preferences.travelPace,
          trip.preferences.startingLocation,
          trip.preferences.transportPreference,
          trip.budget.totalEstimatedInr
        ];
        await this.pool.query(query, values);
      } catch (err) {
        console.warn('[DbService] Database insert failed, kept in local memory:', err);
      }
    }

    return trip;
  }

  public async getTrip(id: string): Promise<TripPlan | null> {
    if (this.inMemoryTrips.has(id)) {
      return this.inMemoryTrips.get(id) || null;
    }

    if (this.pool) {
      try {
        const res = await this.pool.query('SELECT * FROM "Trip" WHERE "id" = $1', [id]);
        if (res.rows.length > 0) {
          const row = res.rows[0];
          return {
            id: row.id,
            createdAt: row.createdAt,
            destinationName: row.destinationName,
            tagline: `Trip to ${row.destinationName}`,
            preferences: {
              destination: row.destinationName,
              durationDays: row.durationDays,
              travelersCount: row.travelersCount,
              budgetInr: row.budgetInr,
              travelType: row.travelType,
              interests: row.interests || [],
              travelPace: row.travelPace,
              startingLocation: row.startingLocation || '',
              transportPreference: row.transportPreference || 'Train'
            },
            days: [],
            budget: {
              totalBudgetInr: row.budgetInr,
              totalEstimatedInr: row.totalEstimatedCost || row.budgetInr,
              remainingBudgetInr: 0,
              accommodationInr: 0,
              foodInr: 0,
              transportationInr: 0,
              activitiesInr: 0,
              shoppingInr: 0,
              otherInr: 0,
              dailyAveragePerPersonInr: 0,
              costSavingTips: []
            },
            weather: {
              destination: row.destinationName,
              temperatureC: 24,
              feelsLikeC: 24,
              condition: 'Pleasant',
              isRainExpected: false,
              rainProbabilityPct: 10,
              humidityPct: 60,
              windSpeedKmph: 12,
              outdoorAdvice: 'Favorable travel weather.',
              isLive: false
            },
            ragSources: []
          };
        }
      } catch (err) {
        console.warn('[DbService] Failed to query trip by id:', err);
      }
    }

    return null;
  }

  public async getAllTrips(): Promise<TripPlan[]> {
    return Array.from(this.inMemoryTrips.values());
  }

  public async deleteTrip(id: string): Promise<boolean> {
    const deletedInMemory = this.inMemoryTrips.delete(id);
    if (this.pool) {
      try {
        await this.pool.query('DELETE FROM "Trip" WHERE "id" = $1', [id]);
        return true;
      } catch (err) {
        console.warn('[DbService] Failed to delete trip from database:', err);
      }
    }
    return deletedInMemory;
  }
}

export const dbService = new DbService();

