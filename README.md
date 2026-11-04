# TripVista — AI Travel Guide & Offline Itinerary Planner 🌍✈️

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?style=flat&logo=leaflet)](https://leafletjs.com/)
[![Dexie.js](https://img.shields.io/badge/IndexedDB-Dexie.js-orange?style=flat)](https://dexie.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

> **Plan Smarter. Travel Better. Even Offline.**

**TripVista** is a production-grade, full-stack AI travel companion engineered to eliminate the real-world friction of modern travel: unrealistic schedules, generic tourist traps, and the total loss of trip data in remote, zero-connectivity zones.

TripVista combines **autonomous multi-agent AI orchestration**, **verified RAG destination intelligence**, **geospatial Leaflet route mapping**, and an **offline-first client-side IndexedDB engine** wrapped in a modern **black background and high-contrast yellow button** interface.

---

## 📌 Repository Information

- **GitHub Repository**: [https://github.com/dhaksh2509/Trip-vista-AI-Travel-Guide](https://github.com/dhaksh2509/Trip-vista-AI-Travel-Guide)
- **Author**: Dhaksh Dronadula ([@dhaksh2509](https://github.com/dhaksh2509))

---

## ✨ Key Features

### 1. 🔍 Starting Location & Destination Autocomplete
- **Alphabetical A–Z Browse**: Displays destinations alphabetically upon focus/click.
- **Shared All-India Catalogue**: 100+ verified Indian destinations across all states and Union Territories.
- **Dynamic Instant Filtering**: Case-insensitive partial matching, alternative aliases (e.g., *Bombay* &rarr; *Mumbai*, *Calcutta* &rarr; *Kolkata*, *Benaras* &rarr; *Varanasi*), and state/region search.
- **Geographic Data Binding**: Stores locations as full records containing unique IDs, state names, and exact latitude/longitude coordinates.
- **Accessible Navigation**: Complete keyboard (Up/Down arrows, Enter, Escape), touch, and mouse support.

### 2. 🤖 Autonomous Multi-Agent AI Pipeline
TripVista coordinates 6 specialized domain agents to synthesize practical, hallucination-free itineraries:
- **Research Agent**: Validates geographical feasibility, seasonal factors, mountain road connectivity, and intercity transit distance.
- **RAG Retrieval Agent**: Queries grounded regional knowledge bases with verified point coordinates, entry fees, and timing citations.
- **Destination Agent**: Clusters attractions logically by geographical proximity and visit duration aligned to the traveler's preferred pace.
- **Itinerary Agent**: Chronologically organizes Morning, Afternoon, and Evening slots, incorporating origin-to-destination Day 1 travel.
- **Budget Agent**: Deterministically calculates itemized stay, local transit, intercity travel, sights, and dining costs with surplus/deficit diagnostics.
- **Weather Agent**: Monitors real-time precipitation radar, humidity, and wind, proactively advising weather-proof indoor alternatives.

### 3. 🎨 Modern Dark Theme with Yellow Accent CTA
- **Background & Surfaces**: Pure black (`#000000`) and near-black (`#09090b`) foundations paired with distinguishable dark panels (`#121214`) and borders (`#27272a`).
- **High-Contrast Interactive Buttons**: Vibrant golden yellow (`#facc15` / `#fde047`) primary action buttons with deep black text for optimal WCAG contrast and readability.
- **Consistent Visual Language**: Uniform styling across all pages: Home, Planner, Itinerary, Interactive Map, Chat Concierge, Budget Optimizer, Saved Trips, Offline Trips, About, Account, Profile, and Architecture.

### 4. 🗺️ Geospatial Route Mapping (Leaflet + OpenStreetMap)
- Chronological route waypoints plotted with custom color-coded time slot pins.
- Dedicated origin departure marker (`🛫`) indicating travel from the starting location.
- Animated route polylines connecting morning, afternoon, and evening sights.
- Interactive two-way sync: Clicking an activity card centers and highlights the map pin; clicking a pin smoothly scrolls to the schedule item.

### 5. 📶 Offline-First PWA & Storage Vault (IndexedDB + Dexie.js)
- One-click itinerary caching storing full day schedules, attraction descriptions, addresses, and dining recommendations.
- **Offline Travel Concierge**: Local rule-based and vector Q&A assistant answering questions about your schedule and budget without an internet connection.
- **Strict Offline Boundary Policy**: Transparently indicates when live radar is unavailable rather than presenting fabricated live weather.

### 6. 💰 Dynamic Budget Optimizer
- Real-time adjustment for traveler count, trip duration, accommodation tiers, and transportation modes (Flight, Train, Bus, Personal Car/Rental).
- Automatically calculates intercity round-trip transit distance (Haversine formula) between departure city and destination.
- Actionable cost-reduction recommendations and daily averages per person.

---

## 🛠️ Technologies & Frameworks Used

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | [Next.js 14](https://nextjs.org/) (App Router) | Server-side rendering, static generation, API routes |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | End-to-end type safety, interfaces, strict checking |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Responsive design tokens, dark surfaces, yellow accents |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, lightweight vector iconography |
| **Mapping Engine** | [Leaflet](https://leafletjs.com/) & `react-leaflet` | Interactive geospatial route visualization and markers |
| **Offline Storage** | [Dexie.js](https://dexie.org/) (IndexedDB) | Client-side persistent relational database for offline vault |
| **AI Orchestration** | Multi-Agent Architecture | Modular agent pipeline with deterministic fallbacks |
| **Vector RAG** | PostgreSQL + pgvector / Local Chunks | Grounded semantic search over regional travel knowledge |
| **Backend (Optional)** | Node.js + Express | Microservice endpoints for Gemini API & external weather |

---

## 📂 Project Folder Structure

```
Trip-vista-AI-Travel-Guide/
├── .env.example                  # Root environment variables template
├── .gitignore                    # Git exclusions (dependencies, .env, build outputs)
├── README.md                     # Project documentation & setup guide
├── package.json                  # Root npm workspace configuration
│
├── frontend/                     # Next.js 14 Frontend Application (Port 3000)
│   ├── public/                   # Public static assets, icons, manifest
│   ├── src/
│   │   ├── app/                  # Next.js App Router pages
│   │   │   ├── layout.tsx        # Root layout with dark background & navigation
│   │   │   ├── page.tsx          # Home page with Hero & Quick Trip Planner
│   │   │   ├── planner/          # Full Trip Planner form with Autocomplete
│   │   │   ├── itinerary/[id]/   # Dynamic Itinerary (Split, Timeline & Map views)
│   │   │   ├── map/              # Fullscreen Geospatial Route Explorer
│   │   │   ├── chat/             # AI Travel Concierge Assistant
│   │   │   ├── budget/           # Budget Breakdown & Cost Optimizer
│   │   │   ├── trips/            # Saved Trips Dashboard
│   │   │   ├── offline-trips/    # IndexedDB Offline Storage Vault & Offline Q&A
│   │   │   ├── about/            # Mission, architecture, & philosophy
│   │   │   ├── auth/             # Account authentication & Demo login
│   │   │   ├── profile/          # Traveler preferences & cache management
│   │   │   ├── architecture/     # Interactive system blueprint & matrix
│   │   │   └── globals.css       # Tailwind directives & design tokens
│   │   ├── components/           # Reusable UI components
│   │   │   ├── Navbar.tsx        # Navigation header with active indicators
│   │   │   ├── Footer.tsx        # Footer with links and system versioning
│   │   │   ├── Logo.tsx          # TripVista vector brand identity
│   │   │   ├── DestinationAutocomplete.tsx # Reusable A-Z autocomplete
│   │   │   ├── MapViewer.tsx     # Leaflet container with sidebar synchronization
│   │   │   ├── LeafletMapInner.tsx # Leaflet map instance, polylines & markers
│   │   │   ├── BudgetChart.tsx   # Category breakdown progress meters
│   │   │   ├── WeatherWidget.tsx # Live telemetry & climate recommendations
│   │   │   ├── RagSourcesBadge.tsx # Grounded knowledge citation viewer
│   │   │   └── AgentProgressModal.tsx # Multi-agent execution telemetry modal
│   │   ├── lib/
│   │   │   ├── ai/               # Multi-agent implementations (research, destination,
│   │   │   │                     # itinerary, budget, weather, orchestrator)
│   │   │   ├── data/             # All-India destination catalogue (100+ cities)
│   │   │   └── offline/          # Dexie.js database schema & sync manager
│   │   └── types/                # TypeScript interfaces (TripPlan, Preferences, etc.)
│   ├── .env.example              # Frontend environment template
│   ├── package.json              # Frontend dependencies and scripts
│   ├── tailwind.config.ts        # Custom Tailwind color scale & surface tokens
│   └── tsconfig.json             # TypeScript compiler settings & path aliases (@/*)
│
├── database/                     # Database schemas and migration scripts
│   ├── schema.prisma             # Prisma ORM schema
│   └── schema.sql                # PostgreSQL + pgvector relational schema
│
├── docs/                         # Architecture documentation & API references
│   ├── architecture.md           # System blueprint documentation
│   └── backend/                  # Express API microservice (Optional Port 5000)
│       ├── src/server.ts         # Express server & Gemini endpoints
│       └── package.json
│
└── rag-data/                     # Grounded destination knowledge documents
    ├── araku_valley.txt
    ├── visakhapatnam.txt
    ├── hyderabad.txt
    ├── goa.txt
    ├── delhi.txt
    └── bengaluru.txt
```

---

## ⚙️ Prerequisites

Before getting started, ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher (Node `v20+` recommended)
- **npm**: `v9.0.0` or higher (bundled with Node.js)
- **Git**: Installed and configured on your machine

*(Optional)*:
- **PostgreSQL**: `v15+` with `pgvector` extension if self-hosting vector embeddings.
- **Google Gemini API Key**: For remote generative expansion.

---

## 🚀 Installation & Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/dhaksh2509/Trip-vista-AI-Travel-Guide.git
cd Trip-vista-AI-Travel-Guide
```

### 2. Configure Environment Variables
Copy the `.env.example` templates to `.env.local`:

```bash
# In project root
cp .env.example .env.local

# In frontend folder
cp frontend/.env.example frontend/.env.local
```

Edit `frontend/.env.local` to match your local setup:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_optional_key_here
```

> **Note**: TripVista includes a built-in offline-capable destination catalogue and autonomous agent simulation engine, allowing full trip generation, budget optimization, and interactive maps to run **out of the box** without external API keys!

### 3. Install Dependencies
Install dependencies for the frontend application:

```bash
cd frontend
npm install
```

*(Optional: Install Express backend dependencies)*:
```bash
cd docs/backend
npm install
```

---

## 💻 Running the Project Locally

### 1. Start the Frontend Application
From the `frontend` directory:

```bash
npm run dev
```

The application will be live at:
👉 **[http://localhost:3000](http://localhost:3000)**

### 2. Run the Production Build (Optional)
To verify production optimization and static generation:

```bash
npm run build
npm run start
```

### 3. Run Automated Verification Tests
TripVista includes an automated 12-scenario test suite covering destination isolation, starting location autocomplete sorting, origin-to-destination transit calculation, and budget factoring:

```bash
npx --prefix frontend tsx --tsconfig frontend/tsconfig.json frontend/scratch/test_runner.ts
```

---

## 🌐 External APIs & Services Used

- **OpenStreetMap / CartoDB**: Tile provider powering interactive Leaflet vector mapping.
- **Dexie.js / Browser IndexedDB**: High-performance local storage for offline itineraries and vector embeddings.
- **Google Gemini API (Optional)**: Cloud-based conversational reasoning and LLM expansion.
- **OpenWeather API (Optional)**: Live meteorological radar and precipitation forecasts.

---

## 🔮 Future Improvements & Roadmap

- [ ] **Voice-Guided Audio Tours**: Offline speech synthesis reciting history and tips at detected GPS points.
- [ ] **Multi-Currency Real-Time FX**: Live currency converter for international travelers (USD, EUR, GBP, JPY &rarr; INR).
- [ ] **Collaborative Group Trips**: Real-time multi-user itinerary editing via WebSockets.
- [ ] **Public Transit Timetables**: Direct integration with Indian Railways (IRCTC) and state bus booking APIs.
- [ ] **AR Landmark Recognition**: Camera-based landmark scanner identifying monuments and showing historical facts.

---

## 👤 Author & Contribution

Developed with ❤️ by **Dhaksh Dronadula**:
- **GitHub**: [@dhaksh2509](https://github.com/dhaksh2509)
- **Repository**: [https://github.com/dhaksh2509/Trip-vista-AI-Travel-Guide](https://github.com/dhaksh2509/Trip-vista-AI-Travel-Guide)

Pull requests, issues, and feature suggestions are welcome! Feel free to star ⭐ the repository if you found this project helpful.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use, modify, and distribute it for personal and commercial projects.
