import { Request, Response, NextFunction } from 'express';
import { weatherService } from '../services/weather.service';

export class WeatherController {
  public async getWeather(req: Request, res: Response, next: NextFunction) {
    try {
      const destination = (req.query.destination as string) || 'Araku Valley';
      const isOnline = req.query.offline !== 'true';
      const weather = await weatherService.getWeather(destination, isOnline);
      res.json({ success: true, weather });
    } catch (err) {
      next(err);
    }
  }
}

export const weatherController = new WeatherController();

