import { TravelPreferences, TripPlan, WeatherInfo, RAGSource } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  public async checkHealth(): Promise<{ status: string; service?: string } | null> {
    try {
      const res = await fetch(`${this.baseUrl}/api/health`, { method: 'GET' });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Backend not running locally
    }
    return null;
  }

  public async generateTrip(preferences: TravelPreferences): Promise<TripPlan | null> {
    try {
      const res = await fetch(`${this.baseUrl}/api/trips/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences)
      });
      if (res.ok) {
        const data = await res.json();
        return data.trip;
      }
    } catch (err) {
      console.warn('[ApiClient] Backend unavailable for trip generation, using client fallback:', err);
    }
    return null;
  }

  public async sendChatMessage(message: string, currentTrip: TripPlan | null, isOnline: boolean = true) {
    try {
      const res = await fetch(`${this.baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, tripContext: currentTrip, isOnline })
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('[ApiClient] Backend chat endpoint unavailable:', err);
    }
    return null;
  }

  public async getWeather(destination: string, isOnline: boolean = true): Promise<WeatherInfo | null> {
    try {
      const res = await fetch(
        `${this.baseUrl}/api/weather?destination=${encodeURIComponent(destination)}&offline=${!isOnline}`,
        { method: 'GET' }
      );
      if (res.ok) {
        const data = await res.json();
        return data.weather;
      }
    } catch (err) {
      console.warn('[ApiClient] Backend weather endpoint unavailable:', err);
    }
    return null;
  }

  public async searchRag(query: string, destination?: string): Promise<RAGSource[] | null> {
    try {
      const res = await fetch(`${this.baseUrl}/api/rag/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, destination })
      });
      if (res.ok) {
        const data = await res.json();
        return data.results;
      }
    } catch (err) {
      console.warn('[ApiClient] Backend RAG endpoint unavailable:', err);
    }
    return null;
  }
}

export const apiClient = new ApiClient();

