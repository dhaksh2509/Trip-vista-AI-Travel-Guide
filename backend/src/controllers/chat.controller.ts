import { Request, Response, NextFunction } from 'express';
import { geminiService } from '../services/gemini.service';
import { ragService } from '../services/rag.service';

export class ChatController {
  public async sendMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { message, tripContext, isOnline } = req.body;
      const query = (message || '').toLowerCase();
      const destination = tripContext?.destinationName || tripContext?.destination || 'India';

      // Strict offline check
      if (isOnline === false) {
        if (query.includes('weather') || query.includes('live') || query.includes('flight') || query.includes('traffic')) {
          return res.json({
            success: true,
            response: 'Internet connection required for live weather, live traffic, and web search. Your downloaded trip itinerary remains fully accessible.',
            agentUsed: 'Offline Boundary Guard',
            isOfflineResponse: true
          });
        }
      }

      // RAG Retrieval for context
      const ragSources = ragService.search(query, destination, 2);

      let answer = '';
      if (geminiService.isAvailable()) {
        const prompt = `You are TripVista AI, an intelligent, concise, and helpful travel guide.
User Query: "${message}"
Trip Destination: "${destination}"
Context / Grounding:
${ragSources.map(s => `- ${s.snippet}`).join('\n')}

Provide a direct, practical, and friendly answer. Keep it under 150 words.`;
        answer = await geminiService.generateContent(prompt, '');
      }

      if (!answer) {
        if (query.includes('budget') || query.includes('cost') || query.includes('reduce')) {
          answer = `To optimize your trip budget for ${destination}, consider prioritizing public transport, booking accommodations outside city center hot spots, and dining at verified local restaurants.`;
        } else if (query.includes('food') || query.includes('eat') || query.includes('restaurant')) {
          answer = `When in ${destination}, try authentic local specialties and freshly prepared dishes at recommended regional bistros and markets.`;
        } else {
          answer = `For your trip to ${destination}, we recommend balancing sightseeing with leisure time. Start early to enjoy morning viewpoints and cooler weather.`;
        }
      }

      res.json({
        success: true,
        response: answer,
        agentUsed: geminiService.isAvailable() ? 'Gemini AI Assistant' : 'TripVista Heuristic Assistant',
        ragSources
      });
    } catch (err) {
      next(err);
    }
  }
}

export const chatController = new ChatController();

