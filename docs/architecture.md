# TripVista — System Architecture

## Architecture Overview

**TripVista — Your AI Travel Guide** is built with a decoupled, high-performance architecture featuring a **React / Next.js 14 Frontend** and an **Express / Node.js + TypeScript Backend**.

```
[ Frontend: React / Next.js 14 + Tailwind CSS ]
         |
         | REST APIs (Port 5000) / Local Handlers
         v
[ Backend: Node.js + Express + TypeScript ]
  ├── AI Agentic Orchestrator (6 Domain Agents)
  ├── RAG Semantic Search Pipeline (pgvector)
  ├── Weather & Maps Integrations
  └── PostgreSQL + pgvector Database
```

## Core Modules

### 1. Agentic AI Orchestrator
Coordinates domain-specific AI agents in sequence:
- **Research Agent**: Fetches historical & domain travel facts.
- **Destination Agent**: Tailors destination highlights & best season data.
- **Itinerary Agent**: Generates sequenced day-by-day morning/afternoon/evening schedules.
- **Budget Agent**: Computes dynamic expense breakdowns for travel, stay, food, activities.
- **Weather Agent**: Forecasts conditions & suggests indoor alternatives.
- **Assistant Agent**: Handles interactive Q&A grounded in trip data.

### 2. RAG (Retrieval-Augmented Generation) Pipeline
- Grounding: Embeddings generated for travel documentation stored in `rag-data/`.
- Vector Operations: Cosine similarity vector search executed against `documents` & `embeddings` tables in PostgreSQL using `pgvector`.

### 3. Offline-First PWA Architecture
- Client storage: Uses IndexedDB (via Dexie.js) to store downloaded itineraries, route points, and place data.
- Service Worker: Intercepts network requests and serves cached assets during zero connectivity.
