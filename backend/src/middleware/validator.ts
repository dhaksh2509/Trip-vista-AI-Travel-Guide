import { Request, Response, NextFunction } from 'express';

export function validateTripPreferences(req: Request, res: Response, next: NextFunction) {
  const { destination, durationDays, travelersCount } = req.body;

  if (!destination || typeof destination !== 'string' || !destination.trim()) {
    return res.status(400).json({ success: false, error: 'Destination is required and must be a non-empty string' });
  }

  if (durationDays !== undefined && (typeof durationDays !== 'number' || durationDays < 1 || durationDays > 30)) {
    return res.status(400).json({ success: false, error: 'Duration days must be between 1 and 30' });
  }

  if (travelersCount !== undefined && (typeof travelersCount !== 'number' || travelersCount < 1 || travelersCount > 100)) {
    return res.status(400).json({ success: false, error: 'Travelers count must be at least 1' });
  }

  next();
}

export function validateChatMessage(req: Request, res: Response, next: NextFunction) {
  const { message } = req.body;

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ success: false, error: 'Message is required and must be a non-empty string' });
  }

  next();
}

