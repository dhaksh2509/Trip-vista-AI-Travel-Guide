'use client';

import React from 'react';
import { 
  Bot, 
  Database, 
  Layers, 
  Cpu, 
  Wifi, 
  WifiOff, 
  ShieldCheck, 
  Compass, 
  Sparkles,
  ArrowDown,
  ArrowRight,
  Server,
  Cloud
} from 'lucide-react';
import Link from 'next/link';

export default function ArchitecturePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-6">
      {/* Header */}
      <div className="text-center space-y-3 pb-6 border-b border-zinc-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold border border-yellow-400/20 uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5 text-yellow-400" />
          <span>System Architecture &amp; Technical Design</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          TripVista Technical Blueprint
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Comprehensive architecture demonstrating autonomous Multi-Agent AI Orchestration, RAG with pgvector embeddings, and an Offline-First client-side IndexedDB storage engine.
        </p>
      </div>

      {/* Online Multi-Agent Architecture Visual Flow */}
      <div className="bg-[#121214] border border-zinc-800 p-6 sm:p-8 rounded-2xl space-y-8 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
              <Cpu className="w-4 h-4" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              1. Online Multi-Agent Orchestration Flow
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
            6 Specialized Domain Agents
          </span>
        </div>

        {/* Diagram Flow Nodes */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {/* User Node */}
          <div className="p-5 rounded-2xl bg-[#09090b] border border-zinc-800 text-center shadow-lg">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Entry Point</span>
            <span className="text-base font-black text-white">TRAVELER (Browser UI)</span>
            <p className="text-xs text-zinc-400 mt-1">Inputs: Starting Location, Destination, Duration, Budget, Group, Transit, Pace</p>
          </div>

          <div className="flex justify-center text-yellow-400">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* Orchestrator Node */}
          <div className="p-5 rounded-2xl bg-[#18181b] border border-yellow-400/40 text-center shadow-xl">
            <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider block">Central Coordinator</span>
            <span className="text-lg font-black text-white">AI ORCHESTRATOR</span>
            <p className="text-xs text-zinc-300 mt-1">
              Dispatches execution state, manages parameter passing, and executes fallback heuristics
            </p>
          </div>

          <div className="flex justify-center text-yellow-400">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* 6 Specialized Agents Grid */}
          <div className="p-6 rounded-2xl bg-[#09090b] border border-zinc-800 space-y-4">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider block text-center">
              Autonomous Specialized Agent Pipeline
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#121214] border border-zinc-800">
                <span className="text-xs font-bold text-sky-400 block">1. Research Agent</span>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">Assesses geographical feasibility, seasonality, origin-destination distance, and mountain connectivity</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121214] border border-yellow-400/40">
                <span className="text-xs font-bold text-yellow-400 block">2. RAG Retrieval Pipeline</span>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">Semantic search over PostgreSQL + pgvector for grounded travel docs</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121214] border border-zinc-800">
                <span className="text-xs font-bold text-emerald-400 block">3. Destination Agent</span>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">Clusters attractions, calculates visit duration, aligns with traveler pace</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121214] border border-zinc-800">
                <span className="text-xs font-bold text-purple-400 block">4. Itinerary Agent</span>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">Schedules Morning, Afternoon, Evening slots and origin-to-destination transit</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121214] border border-zinc-800">
                <span className="text-xs font-bold text-yellow-400 block">5. Budget Agent</span>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">Allocates costs across Accommodation, Food, Transport (with intercity transit), and Activities</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121214] border border-zinc-800">
                <span className="text-xs font-bold text-teal-400 block">6. Weather Agent</span>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">Monitors rain likelihood and proposes weather-proof indoor backups</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-yellow-400">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* Output Node */}
          <div className="p-5 rounded-2xl bg-yellow-400/10 border border-yellow-400/40 text-center shadow-xl">
            <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider block">Generated Result</span>
            <span className="text-lg font-black text-white">FINAL GROUNDED PERSONALIZED TRAVEL PLAN</span>
            <p className="text-xs text-zinc-300 mt-1">Timeline + Maps + Budget Breakdown + RAG Citations</p>
          </div>
        </div>
      </div>

      {/* Offline-First Architecture Flow */}
      <div className="bg-[#121214] border border-zinc-800 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <WifiOff className="w-4 h-4" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              2. Offline-First PWA Storage &amp; Retrieval Flow
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
            Dexie.js + IndexedDB
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center text-xs">
          <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800">
            <span className="font-bold text-white block">Online Trip Data</span>
            <span className="text-[11px] text-zinc-400">Cloud Generated Plan</span>
          </div>

          <div className="text-zinc-500 font-bold hidden md:block">→</div>

          <div className="p-4 rounded-xl bg-[#18181b] border border-yellow-400/40">
            <span className="font-bold text-white block">Download for Offline</span>
            <span className="text-[11px] text-yellow-400">PWA Service Worker</span>
          </div>

          <div className="text-zinc-500 font-bold hidden md:block">→</div>

          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40">
            <span className="font-bold text-white block">IndexedDB (Dexie)</span>
            <span className="text-[11px] text-amber-300">Itinerary, Places, Chunks</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Strict Offline Boundary Policy</span>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            When disconnected, the app NEVER displays hallucinated live weather or fake traffic updates. If the user asks for live weather, the Offline Assistant accurately explains:
            <em className="text-amber-200 block mt-1 font-mono">&quot;Internet connection required for live weather.&quot;</em>
            Downloaded itinerary, saved places, budget, and travel notes remain 100% accessible.
          </p>
        </div>
      </div>

      {/* Online vs Offline Comparison Table */}
      <div className="bg-[#121214] border border-zinc-800 p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl">
        <h3 className="text-base font-bold text-white">Online vs. Offline Capabilities Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="py-3 font-bold uppercase">Feature Module</th>
                <th className="py-3 font-bold uppercase text-yellow-400">Online Mode</th>
                <th className="py-3 font-bold uppercase text-amber-400">Offline Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-zinc-300">
              <tr>
                <td className="py-3 font-semibold text-white">Trip Generation</td>
                <td className="py-3 text-yellow-400">Live Multi-Agent Orchestration</td>
                <td className="py-3 text-zinc-500">Disabled (requires network)</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">Itinerary Viewing</td>
                <td className="py-3 text-yellow-400">Cloud &amp; Local</td>
                <td className="py-3 text-yellow-400">Full IndexedDB Access</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">RAG Knowledge Base</td>
                <td className="py-3 text-yellow-400">pgvector Cosine Search</td>
                <td className="py-3 text-yellow-400">Downloaded Local Chunks</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">AI Assistant Chat</td>
                <td className="py-3 text-yellow-400">Full Assistant &amp; Replacements</td>
                <td className="py-3 text-yellow-400">Local Retrieval Assistant</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">Live Weather Updates</td>
                <td className="py-3 text-yellow-400">Live Telemetry &amp; Radar</td>
                <td className="py-3 text-rose-400">Disabled with clear alert</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

