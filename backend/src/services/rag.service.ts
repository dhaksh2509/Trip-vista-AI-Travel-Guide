import fs from 'fs';
import path from 'path';
import { RAGSource } from '../types';

export interface RAGDocument {
  destination: string;
  title: string;
  content: string;
}

export class RagService {
  private documents: RAGDocument[] = [];

  constructor() {
    this.loadDocuments();
  }

  private loadDocuments(): void {
    const ragDataPath = path.resolve(__dirname, '../../../rag-data');
    if (fs.existsSync(ragDataPath)) {
      try {
        const files = fs.readdirSync(ragDataPath);
        for (const file of files) {
          if (file.endsWith('.txt')) {
            const destName = file.replace('.txt', '').replace('_', ' ');
            const content = fs.readFileSync(path.join(ragDataPath, file), 'utf-8');
            this.documents.push({
              destination: destName,
              title: `${destName.charAt(0).toUpperCase() + destName.slice(1)} Destination Guide`,
              content
            });
          }
        }
      } catch (err) {
        console.warn('[RagService] Could not read rag-data folder, using built-in documents:', err);
      }
    }

    if (this.documents.length === 0) {
      // Fallback base documents
      this.documents = [
        {
          destination: 'araku valley',
          title: 'Araku Valley Official Tourism Dossier',
          content: 'Araku Valley is a scenic hill station located in the Eastern Ghats of Andhra Pradesh, known for Borra Caves, coffee plantations, Katiki Waterfalls, and tribal culture.'
        },
        {
          destination: 'visakhapatnam',
          title: 'Visakhapatnam Coastal Tourism Guide',
          content: 'Visakhapatnam is a major port and coastal paradise in Andhra Pradesh featuring RK Beach, Kailasagiri hilltop, Submarine Museum, and scenic coastal road to Bheemili.'
        },
        {
          destination: 'goa',
          title: 'Goa Heritage & Coastal Guide',
          content: 'Goa features pristine beaches, Portuguese baroque churches in Old Goa, Dudhsagar falls, spice plantations, and vibrant coastal culture.'
        }
      ];
    }
  }

  public search(query: string, destination?: string, topK: number = 3): RAGSource[] {
    const qLower = query.toLowerCase();
    const destLower = (destination || '').toLowerCase();

    const matches: { doc: RAGDocument; score: number }[] = [];

    for (const doc of this.documents) {
      let score = 0;
      if (destLower && doc.destination.toLowerCase().includes(destLower)) {
        score += 0.5;
      }

      const words = qLower.split(/\s+/).filter(w => w.length > 2);
      for (const word of words) {
        if (doc.content.toLowerCase().includes(word)) {
          score += 0.15;
        }
      }

      if (score > 0) {
        matches.push({ doc, score: Math.min(score, 0.98) });
      }
    }

    matches.sort((a, b) => b.score - a.score);

    return matches.slice(0, topK).map((m, idx) => ({
      id: `rag-source-${idx + 1}`,
      documentTitle: m.doc.title,
      section: 'Tourism & Highlights',
      destination: m.doc.destination,
      snippet: m.doc.content.slice(0, 240) + '...',
      score: Number(m.score.toFixed(2))
    }));
  }

  public ingestDocument(title: string, destination: string, content: string): boolean {
    this.documents.push({ title, destination, content });
    return true;
  }
}

export const ragService = new RagService();

