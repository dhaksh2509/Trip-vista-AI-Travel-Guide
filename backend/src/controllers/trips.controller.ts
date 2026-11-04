import { Request, Response, NextFunction } from 'express';
import { tripsService } from '../services/trips.service';

export class TripsController {
  public async generate(req: Request, res: Response, next: NextFunction) {
    try {
      const preferences = req.body;
      const trip = await tripsService.generateTrip(preferences);
      res.status(201).json({ success: true, trip });
    } catch (err) {
      next(err);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const trips = await tripsService.getAllTrips();
      res.json({ success: true, count: trips.length, trips });
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const trip = await tripsService.getTrip(id);
      if (!trip) {
        return res.status(404).json({ success: false, error: 'Trip not found' });
      }
      res.json({ success: true, trip });
    } catch (err) {
      next(err);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const success = await tripsService.deleteTrip(id);
      res.json({ success });
    } catch (err) {
      next(err);
    }
  }
}

export const tripsController = new TripsController();

