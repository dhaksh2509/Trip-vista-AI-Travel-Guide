# AI Travel Guide 🌍
> **"Plan Smarter. Travel Better. Even Offline."**

A college capstone & demonstration-grade full-stack web application showcasing **Agentic AI Orchestration**, **Retrieval-Augmented Generation (RAG)** with vector embeddings, **Personalized Itinerary Planning**, **Interactive Route Maps**, **Smart Budget Balancing**, **Real-Time Weather**, and an **Offline-First Progressive Web App (PWA)** with local IndexedDB retrieval.

---

## 🌟 Key Highlights & Capabilities

- **Agentic AI Orchestration**: Does **not** use a single prompt. Coordinates 6 domain-specialized agents (Research, Destination, Itinerary, Budget, Weather, and Assistant) in a sequential, auditable execution pipeline.
- **RAG System (Retrieval-Augmented Generation)**: Ingests structured travel documents, generates vector embeddings, performs cosine similarity searches, and produces grounded travel advice with clickable **Sources & Citations badges**.
- **Offline-First Progressive Web App**:
  - Service Worker caching for instant load times.
  - **Dexie.js IndexedDB** storage: download full trips (itineraries, attractions, dining spots, budget, notes, and local knowledge base).
  - **Offline AI Assistant**: queries local IndexedDB storage to answer questions offline (*"What is my Day 2 plan?"*, *"How much is my estimated budget?"*).
  - **Strict Offline Limitation Boundary**: Never fabricates live data offline; clearly states *"Internet connection required for live weather"*.
  - **Interactive Connection Toggle**: A live status indicator pill in the navigation bar (`● Online` / `● Offline`) allows instant testing of offline capabilities with one click.
- **Interactive Geospatial Maps**: Visualizes day-wise routes, sequenced stops, travel distances, and categorized attraction pins for Araku Valley, Visakhapatnam, Hyderabad, Goa, Delhi, and Bengaluru.
- **Live Weather Analysis**: Real-time temperature, rain probability, wind, humidity, and weather warnings with automated indoor alternatives (e.g. Borra Caves or Coffee Museum during rain).

---

## 🏗️ System Architecture

### 1. Online Multi-Agent & RAG Workflow
```
                    [ TRAVELER INPUT ]
             (Destination, Budget, Interests, Pace)
                            │
                            ▼
                   [ AI ORCHESTRATOR ]
                            │
        ┌───────────────────┴───────────────────┐
        ▼                                       ▼
  1. Research Agent                       2. RAG Pipeline
  (Feasibility, Seasonality,               (Document Chunking &
   Mountain Connectivity)                  Cosine Vector Search)
        │                                       │
        └───────────────────┬───────────────────┘
                            │ (Grounded Context)
                            ▼
                  3. Destination Agent
              (Attraction Clustering, Duration,
               Activity Filtering)
                            │
                            ▼
                  4. Itinerary Agent
              (Morning / Afternoon / Evening Slots,
               Transit Distance & Time Minimization)
                            │
                            ▼
                   5. Budget Agent
              (Balances Accommodation 35%, Food 30%,
               Transport 18%, Activities, Shopping)
                            │
                            ▼
                   6. Weather Agent
              (Precipitation Risk, Outdoor Checks,
               Indoor Contingency Recommendations)
                            │
                            ▼
            [ FINAL GROUNDED TRAVEL PLAN ]
             (Timeline + Map + Budget + Sources)
```

### 2. Offline Storage & Local Retrieval Flow
```
               [ ONLINE GENERATED TRIP ]
                            │
                            ▼ ("Download for Offline" Button)
               [ DEXIE.JS / INDEXEDDB ]
         (Stores Itinerary, Places, Food, Budget,
          Travel Notes, RAG Document Chunks)
                            │
                 ┌──────────┴──────────┐
                 ▼                     ▼
          [ OFFLINE TRIPS ]    [ OFFLINE ASSISTANT ]
         (Permanent offline    (Local search over
          visual timeline)      IndexedDB records)
                                       │
                 ┌─────────────────────┴─────────────────────┐
                 ▼                                           ▼
       [ SAVED DATA QUERIES ]                     [ LIVE DATA QUERIES ]
    "What is my Day 2 plan?"                   "What is the live weather?"
    "How much is my budget?"                                │
                 │                                          ▼
                 ▼                                [ BOUNDARY REFUSAL ]
       [ INSTANT ANSWER FROM                     "Internet connection required
        LOCAL INDEXEDDB ]                         for live weather."
```

---

## 📂 Project Directory Structure

```
AI TRAVEL GUIDE PROJECT/
├── public/
│   ├── manifest.json              # PWA Web App Manifest
│   └── sw.js                      # Custom Service Worker for offline caching
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with Navbar, Footer & Service Worker
│   │   ├── page.tsx               # 1. Landing / Home Page
│   │   ├── auth/page.tsx          # 2. Login & Register
│   │   ├── planner/page.tsx       # 3. Travel Planner Form
│   │   ├── itinerary/[id]/page.tsx# 4. AI Generated Itinerary
│   │   ├── map/page.tsx           # 5. Interactive Geospatial Map
│   │   ├── chat/page.tsx          # 6. AI Travel Assistant Chat
│   │   ├── budget/page.tsx        # 7. Smart Budget Planner
│   │   ├── trips/page.tsx         # 8. My Trips Dashboard
│   │   ├── offline-trips/page.tsx # 9. Offline Trips & Local Assistant
│   │   ├── profile/page.tsx       # 10. Profile & Settings
│   │   ├── about/page.tsx         # 11. About Project & Problem Statement
│   │   ├── architecture/page.tsx  # 12. System Architecture & Live Flow
│   │   └── api/
│   │       ├── trips/             # Trip Generation & CRUD APIs
│   │       ├── chat/              # Conversational Agent endpoint
│   │       ├── rag/search/        # Semantic Vector Search endpoint
│   │       ├── rag/ingest/        # Document Chunking endpoint
│   │       ├── weather/           # Weather API proxy
│   │       └── places/            # Destination Places API
│   ├── components/
│   │   ├── Navbar.tsx             # Navigation with Online/Offline toggle pill
│   │   ├── Footer.tsx             # Project footer & credits
│   │   ├── AgentProgressModal.tsx # Live visual multi-agent execution modal
│   │   ├── MapViewer.tsx          # Dynamic Map container with day filters
│   │   ├── LeafletMapInner.tsx    # Leaflet map pins, polylines, and popups
│   │   ├── BudgetChart.tsx        # Category breakdown progress bars & stats
│   │   ├── WeatherWidget.tsx      # Real-time weather card with rain warnings
│   │   └── RagSourcesBadge.tsx    # Grounded RAG citations accordion
│   ├── lib/
│   │   ├── ai/
│   │   │   ├── orchestrator.ts    # Multi-Agent Orchestrator
│   │   │   ├── researchAgent.ts   # Agent 1: Research
│   │   │   ├── destinationAgent.ts# Agent 2: Destination
│   │   │   ├── itineraryAgent.ts  # Agent 3: Itinerary Scheduler
│   │   │   ├── budgetAgent.ts     # Agent 4: Budget Optimizer
│   │   │   ├── weatherAgent.ts    # Agent 5: Weather Radar
│   │   │   └── assistantAgent.ts  # Agent 6: Conversational Assistant
│   │   ├── rag/
│   │   │   ├── vectorStore.ts     # Vector Store with Cosine Similarity
│   │   │   └── documents/         # Raw Knowledge Base (6 destinations)
│   │   ├── offline/
│   │   │   ├── db.ts              # Dexie.js IndexedDB schema
│   │   │   ├── syncManager.ts     # Offline Download & Sync Manager
│   │   │   └── offlineAssistant.ts# Offline Local Retrieval Q&A engine
│   │   ├── data/
│   │   │   └── destinations.ts    # Attractions & Food metadata
│   │   └── db/
│   │       └── schema.sql         # PostgreSQL + pgvector DDL schema
│   └── types/
│       └── index.ts               # Complete TypeScript data definitions
├── prisma/
│   └── schema.prisma              # Prisma schema definition
├── .env.example                   # Environment configuration template
└── package.json
```

---

## 🚀 Setup & Running Locally

### 1. Prerequisites
- **Node.js**: v18.0 or newer (tested on Node v24)
- **npm**: v9.0 or newer

### 2. Installation
```bash
# Clone or navigate into project directory
cd "AI TRAVEL GUIDE PROJECT"

# Install dependencies
npm install
```

### 3. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

> **Note:** The application is built with a **Zero-Config Resilient Architecture**. Even if no external API keys (`GEMINI_API_KEY`, `DATABASE_URL`) are provided, the application runs 100% smoothly using high-fidelity multi-agent orchestration, built-in vector search, and local persistence.

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Step-by-Step Viva & Presentation Demo Flow

Follow these steps to demonstrate all capabilities during a project review:

1. **Open the Website**:
   - Navigate to `http://localhost:3000`. Observe the modern travel hero, feature highlights, and popular destinations.
2. **Launch the Travel Planner**:
   - Click **"Start Planning"** or navigate to `/planner`.
   - Set parameters:
     - **Destination**: `Araku Valley`
     - **Duration**: `3 days`
     - **Travelers**: `4`
     - **Budget**: `₹10,000`
     - **Interests**: `Nature`, `Food`, `Photography`
     - **Travel Pace**: `Moderate`
     - **Starting Location**: `Visakhapatnam`
     - **Transport**: `Train (Vistadome)`
3. **Execute Multi-Agent Generation**:
   - Click **"Generate My Trip with Agentic AI"**.
   - Observe the live **Agent Orchestration Stepper Modal** running through:
     `Research Agent` → `RAG Retrieval` → `Destination Agent` → `Itinerary Agent` → `Budget Agent` → `Weather Agent`.
4. **Inspect Generated Itinerary**:
   - Review the day-by-day timeline (Morning: Borra Caves, Afternoon: Katiki Waterfalls, Evening: Coffee Museum).
   - Inspect travel distances (~28.5 km), travel transit times, and estimated costs.
   - Click **"Grounded via RAG & pgvector Semantic Search"** to view retrieved documents and cosine similarity scores.
5. **Inspect Interactive Map**:
   - Click **"View on Map"** or go to `/map`.
   - Filter by **"Day 1"**, **"Day 2"**, **"Day 3"**. Notice route polylines and attraction markers. Click on Borra Caves or Katiki Waterfalls to view duration and entrance fees.
6. **Smart Budget Verification**:
   - Navigate to `/budget`.
   - Verify the category breakdown (Accommodation, Food, Transport, Activities) sums up to ₹10,000.
   - Inspect the budget savings tips generated by the Budget Agent.
7. **AI Conversational Modification**:
   - Navigate to `/chat`.
   - Type: *"Reduce the budget"*. Notice the Budget Agent optimizes hotel tiers and saves ~₹1,800.
   - Type: *"Remove the waterfall"*. Notice the Destination Agent replaces Katiki Waterfalls and reorganizes the schedule.
   - Type: *"What is my Day 2 plan?"*. Notice the Itinerary Agent explains the day.
8. **Download for Offline**:
   - Return to the itinerary page and click **"Download for Offline"**.
   - Confirmation badge appears: `✓ Available Offline`.
9. **Test Offline-First Mode**:
   - In the top navigation bar, click the **`● Online`** pill. It immediately toggles to **`● Offline`** (simulating zero connectivity).
   - Navigate to **"Offline Trips"** (`/offline-trips`).
   - Open the downloaded **Araku Valley** trip.
   - Notice the complete itinerary, budget, places, and notes are 100% accessible.
   - In the Offline Assistant chat, ask:
     *"What is my Day 2 plan?"* → Answer retrieved instantly from IndexedDB!
   - Now ask:
     *"What is the live weather?"* → Observe the strict boundary response:
     *"Internet connection required for live weather. Live weather, live traffic, and web search are unavailable in offline mode."*
10. **Review Architecture Page**:
    - Navigate to `/architecture` to showcase the interactive diagram explaining message passing, vector cosine similarity, and Dexie IndexedDB caching.

---

## 🛡️ Security & Best Practices

- **Never exposes API keys**: External API keys are stored strictly in server-side environment variables and are never sent to client bundles.
- **Input Sanitization**: All planner parameters (duration, budget, travelers count) are validated against schema boundaries.
- **Progressive Web App (PWA)**: Manifest and service worker provide offline caching and app installation capability.

---

## 📜 License & Credits

Developed for college academic evaluation and demonstration of advanced Agentic AI workflows, Retrieval-Augmented Generation, and Offline-First architectures.
