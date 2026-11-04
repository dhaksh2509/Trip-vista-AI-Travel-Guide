import { Request, Response, NextFunction } from 'express';
import { ragService } from '../services/rag.service';

export class RagController {
  public search(req: Request, res: Response, next: NextFunction) {
    try {
      const { query, destination, topK } = req.body;
      if (!query) {
        return res.status(400).json({ success: false, error: 'Query is required for search' });
      }

      const results = ragService.search(query, destination, topK || 3);
      res.json({ success: true, count: results.length, results });
    } catch (err) {
      next(err);
    }
  }

  public ingest(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, destination, content } = req.body;
      if (!title || !destination || !content) {
        return res.status(400).json({ success: false, error: 'title, destination, and content are required' });
      }

      ragService.ingestDocument(title, destination, content);
      res.json({ success: true, message: `Document '${title}' ingested for destination ${destination}` });
    } catch (err) {
      next(err);
    }
  }
}

export const ragController = new RagController();

