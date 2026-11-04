'use client';

import React from 'react';
import { 
  Cpu, 
  Database, 
  WifiOff, 
  CheckCircle2, 
  Map, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div className="flex items-center gap-3.5">
          <Logo variant="compact" size="lg" />
          <div className="space-y-0.5">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              About TripVista
            </h1>
            <p className="text-xs text-yellow-400 font-semibold tracking-wide uppercase">
              Autonomous Travel Intelligence &amp; Offline Planner
            </p>
          </div>
        </div>

        <Link
          href="/planner"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition shadow-sm w-fit active:translate-y-0.5"
        >
          <span>Plan an Itinerary</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Mission & Purpose */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#121214] p-6 rounded-2xl border border-zinc-800 space-y-3 shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-white">Engineering Philosophy</h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            TripVista was engineered to solve real traveler friction: unrealistic travel times, generic tourist traps, and the complete loss of itineraries when internet connectivity drops. We merge agentic AI orchestration with grounded regional data so every itinerary is practical, budgeted, and route-sequenced.
          </p>
        </div>

        <div className="bg-[#121214] p-6 rounded-2xl border border-zinc-800 space-y-3 shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <WifiOff className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-white">Offline-First Architecture</h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Travel frequently leads to low-connectivity remote valleys, national parks, and flight transits. TripVista uses browser-native IndexedDB via Dexie.js to store your full schedules, attraction notes, and offline assistant embeddings directly on your device.
          </p>
        </div>
      </div>

      {/* Core Architectural Pillars */}
      <div className="bg-[#121214] p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6 shadow-xl">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-white">Core Technical Architecture</h2>
          <p className="text-xs text-zinc-400">
            Built using modern web technologies and resilient distributed systems
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-yellow-400" />
              <strong className="text-white text-sm">Multi-Agent AI Pipeline</strong>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Coordinates specialized sub-agents: Destination Analyst, Itinerary Synthesizer, Budget Optimizer, and Climate Advisor to produce balanced multi-day plans.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-yellow-400" />
              <strong className="text-white text-sm">RAG Grounded Retrieval</strong>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Vector retrieval cross-references attraction coordinates, entry tickets, and regional seasonality from verified travel databases to prevent hallucinations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2">
              <Map className="w-4 h-4 text-yellow-400" />
              <strong className="text-white text-sm">Geospatial Routing</strong>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Integrated Leaflet mapping sequences morning, afternoon, and evening pins chronologically, minimizing back-and-forth travel distance between sites.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-yellow-400" />
              <strong className="text-white text-sm">Deterministic Budget Calculation</strong>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Calculates itemized stay, transit, sights, and dining costs with transparent category allocations and real-time shortfall/surplus diagnostics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

