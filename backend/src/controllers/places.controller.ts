import { Request, Response, NextFunction } from 'express';

export interface PlaceItem {
  id: string;
  name: string;
  state: string;
  category: string;
  tagline: string;
  coordinates: { lat: number; lng: number };
}

// Built-in curated places list covering major destinations across India
const POPULAR_DESTINATIONS: PlaceItem[] = [
  { id: 'araku-valley', name: 'Araku Valley', state: 'Andhra Pradesh', category: 'Hill Station', tagline: 'Misty hills and coffee estates', coordinates: { lat: 18.3273, lng: 82.8775 } },
  { id: 'visakhapatnam', name: 'Visakhapatnam', state: 'Andhra Pradesh', category: 'Coastal & Beaches', tagline: 'The City of Destiny with pristine shores', coordinates: { lat: 17.6868, lng: 83.2185 } },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', category: 'Heritage & Palaces', tagline: 'City of Pearls and historic minarets', coordinates: { lat: 17.3850, lng: 78.4867 } },
  { id: 'goa', name: 'Goa', state: 'Goa', category: 'Coastal & Beaches', tagline: 'Sun, sand, and Portuguese heritage', coordinates: { lat: 15.2993, lng: 74.1240 } },
  { id: 'delhi', name: 'Delhi', state: 'Delhi', category: 'Heritage & Palaces', tagline: 'Heart of India with historic monuments', coordinates: { lat: 28.6139, lng: 77.2090 } },
  { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', category: 'Popular', tagline: 'Garden City and tech capital', coordinates: { lat: 12.9716, lng: 77.5946 } },
  { id: 'manali', name: 'Manali', state: 'Himachal Pradesh', category: 'Hill Stations & Nature', tagline: 'Snow-capped peaks and valleys', coordinates: { lat: 32.2432, lng: 77.1892 } },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', category: 'Heritage & Palaces', tagline: 'The Pink City of royalty', coordinates: { lat: 26.9124, lng: 75.7873 } },
  { id: 'ooty', name: 'Ooty', state: 'Tamil Nadu', category: 'Hill Stations & Nature', tagline: 'Queen of the Nilgiris', coordinates: { lat: 11.4102, lng: 76.6950 } },
  { id: 'varanasi', name: 'Varanasi', state: 'Uttar Pradesh', category: 'Spiritual & Heritage', tagline: 'Ancient spiritual capital on the Ganges', coordinates: { lat: 25.3176, lng: 82.9739 } }
];

export class PlacesController {
  public search(req: Request, res: Response, next: NextFunction) {
    try {
      const q = ((req.query.q || req.query.search || '') as string).toLowerCase().trim();
      const limit = parseInt((req.query.limit as string) || '20', 10);

      if (!q) {
        return res.json({ success: true, count: POPULAR_DESTINATIONS.length, destinations: POPULAR_DESTINATIONS });
      }

      const results = POPULAR_DESTINATIONS.filter(
        d => d.name.toLowerCase().includes(q) || d.state.toLowerCase().includes(q)
      ).slice(0, limit);

      res.json({ success: true, count: results.length, query: q, destinations: results });
    } catch (err) {
      next(err);
    }
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({ success: true, count: POPULAR_DESTINATIONS.length, destinations: POPULAR_DESTINATIONS });
    } catch (err) {
      next(err);
    }
  }

  public getByName(req: Request, res: Response, next: NextFunction) {
    try {
      const name = (req.params.name || '').toLowerCase().trim();
      const place = POPULAR_DESTINATIONS.find(d => d.name.toLowerCase() === name || d.id === name);

      if (!place) {
        return res.json({
          success: true,
          destination: req.params.name,
          state: 'India',
          tagline: `Discover the beauty of ${req.params.name}`,
          coordinates: { lat: 20.5937, lng: 78.9629 },
          description: `A scenic and memorable destination with rich history and local culture.`
        });
      }

      res.json({ success: true, ...place });
    } catch (err) {
      next(err);
    }
  }
}

export const placesController = new PlacesController();

