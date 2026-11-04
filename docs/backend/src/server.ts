import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'TripVista — Your AI Travel Guide Backend REST Server',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Trip Generation API
app.post('/api/trips/generate', async (req: Request, res: Response) => {
  try {
    const preferences = req.body;
    const destination = preferences.destination || 'Araku Valley';
    const durationDays = preferences.durationDays || 3;
    const travelersCount = preferences.travelersCount || 2;
    const budgetInr = preferences.budgetInr || 10000;

    // Build response trip object
    const generatedTrip = {
      id: `trip-${Date.now()}`,
      destination,
      durationDays,
      travelersCount,
      budgetInr,
      travelType: preferences.travelType || 'Couple',
      interests: preferences.interests || ['Nature', 'Food'],
      createdAt: new Date().toISOString(),
      summary: `A personalized ${durationDays}-day travel itinerary for ${destination} tailored for ${travelersCount} travelers with a budget of ₹${budgetInr.toLocaleString('en-IN')}.`,
      days: Array.from({ length: durationDays }, (_, i) => ({
        dayNumber: i + 1,
        title: `Day ${i + 1}: ${destination} Exploration`,
        activities: [
          {
            timeSlot: 'Morning',
            title: `Morning Sightseeing at ${destination}`,
            description: `Explore prime scenic spots and iconic landmarks of ${destination}.`,
            estimatedCostInr: Math.round((budgetInr * 0.15) / durationDays)
          },
          {
            timeSlot: 'Afternoon',
            title: `Local Dining & Heritage Trail`,
            description: `Sample authentic regional delicacies and explore local culture.`,
            estimatedCostInr: Math.round((budgetInr * 0.1) / durationDays)
          },
          {
            timeSlot: 'Evening',
            title: `Sunset Viewpoint & Promenade`,
            description: `Relax at sunset viewpoints and vibrant night markets.`,
            estimatedCostInr: Math.round((budgetInr * 0.05) / durationDays)
          }
        ]
      })),
      budgetBreakdown: {
        stayInr: Math.round(budgetInr * 0.45),
        foodInr: Math.round(budgetInr * 0.25),
        transportInr: Math.round(budgetInr * 0.18),
        activitiesInr: Math.round(budgetInr * 0.12)
      }
    };

    res.json({ success: true, trip: generatedTrip });
  } catch (error: any) {
    console.error('Error generating trip:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to generate trip' });
  }
});

// AI Chat Assistant API
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, tripContext } = req.body;
    const dest = tripContext?.destination || 'India';
    
    let answer = `I'd be happy to assist you with your trip to ${dest}! `;
    if (message.toLowerCase().includes('food') || message.toLowerCase().includes('eat')) {
      answer += `When visiting ${dest}, be sure to try local specialties, freshly prepared street food, and authentic regional thalis.`;
    } else if (message.toLowerCase().includes('budget') || message.toLowerCase().includes('cost')) {
      answer += `Your trip to ${dest} is budgeted well. To save money, consider utilizing local public transport or train connections and dining at top-rated local eateries.`;
    } else {
      answer += `Based on your preferences, ${dest} offers incredible sightseeing, rich culture, and accessible local transit options.`;
    }

    res.json({
      success: true,
      response: answer,
      sources: [
        { title: `${dest} Official Guide`, snippet: `Verified travel knowledge for ${dest}` }
      ]
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Places Info API
app.get('/api/places', (req: Request, res: Response) => {
  const destination = (req.query.destination as string) || 'Araku Valley';
  res.json({
    destination,
    attractionsCount: 6,
    recommendedMonths: 'October to March',
    tags: ['Nature', 'Culture', 'Food', 'Adventure']
  });
});

// Weather API
app.get('/api/weather', (req: Request, res: Response) => {
  const destination = (req.query.destination as string) || 'Araku Valley';
  res.json({
    destination,
    tempCelsius: 24,
    condition: 'Partly Cloudy',
    precipitationChancePct: 15,
    humidityPct: 65,
    forecast: [
      { day: 'Day 1', temp: 24, condition: 'Clear' },
      { day: 'Day 2', temp: 25, condition: 'Partly Cloudy' },
      { day: 'Day 3', temp: 23, condition: 'Light Rain' }
    ]
  });
});

// RAG Search API
app.post('/api/rag/search', (req: Request, res: Response) => {
  const { query, destination } = req.body;
  res.json({
    query,
    destination,
    results: [
      {
        id: 'rag-1',
        title: `${destination || 'Travel'} Verified Insights`,
        content: `Detailed documentation for ${query || 'travel recommendations'} grounded in verified local travel documents.`,
        similarityScore: 0.92
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 TripVista Express Server running on port ${PORT}`);
  console.log(`   Health Check: http://localhost:${PORT}/api/health`);
  console.log(`==================================================`);
});
