import { Request, Response, NextFunction } from 'express';
import {
  ALL_INDIA_DESTINATIONS,
  searchAllIndiaDestinations,
  findAllIndiaDestination,
  DestinationCatalogueItem
} from '../data/allIndiaCatalogue';

export interface PlaceItem {
  id: string;
  name: string;
  state: string;
  category: string;
  tagline: string;
  coordinates: { lat: number; lng: number };
}

export class PlacesController {
  public search(req: Request, res: Response, next: NextFunction) {
    try {
      const q = ((req.query.q || req.query.search || '') as string).trim();
      const limitParam = req.query.limit as string;
      const limit = limitParam ? parseInt(limitParam, 10) : undefined;

      const results = searchAllIndiaDestinations(q, limit);

      res.json({
        success: true,
        count: results.length,
        totalInCatalogue: ALL_INDIA_DESTINATIONS.length,
        query: q,
        destinations: results
      });
    } catch (err) {
      next(err);
    }
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const limitParam = req.query.limit as string;
      const limit = limitParam ? parseInt(limitParam, 10) : undefined;
      const destinations = searchAllIndiaDestinations('', limit);

      res.json({
        success: true,
        count: destinations.length,
        totalInCatalogue: ALL_INDIA_DESTINATIONS.length,
        destinations
      });
    } catch (err) {
      next(err);
    }
  }

  public getByName(req: Request, res: Response, next: NextFunction) {
    try {
      const name = (req.params.name || '').trim();
      const place = findAllIndiaDestination(name);

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


