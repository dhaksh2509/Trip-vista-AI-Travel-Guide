import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from '../config/env';

export class GeminiService {
  private client: GoogleGenerativeAI | null = null;

  constructor() {
    if (config.geminiApiKey) {
      this.client = new GoogleGenerativeAI(config.geminiApiKey);
    }
  }

  public isAvailable(): boolean {
    return !!this.client;
  }

  public async generateContent(prompt: string, fallbackText: string): Promise<string> {
    if (!this.client) {
      return fallbackText;
    }

    try {
      const model = this.client.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text() || fallbackText;
    } catch (err) {
      console.warn('[GeminiService] API call failed, using heuristic fallback:', err);
      return fallbackText;
    }
  }
}

export const geminiService = new GeminiService();

