import React from 'react';
import Link from 'next/link';
import { Shield, Cpu, Database, WifiOff, Heart } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-black py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Col 1: Brand & Tagline */}
        <div className="space-y-3">
          <Logo variant="compact" size="md" href="/" />
          <p className="text-xs text-yellow-400 font-medium">
            Plan Smarter. Travel Better. Even Offline.
          </p>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            TripVista is a production-grade travel platform combining multi-agent AI, verified RAG destination intelligence, and offline-first IndexedDB storage.
          </p>
        </div>

        {/* Col 2: Core Capabilities */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-3">Core Platform</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center space-x-2 text-zinc-300">
              <Cpu className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>Multi-Agent Orchestration</span>
            </li>
            <li className="flex items-center space-x-2 text-zinc-300">
              <Database className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>RAG Vector Knowledge Base</span>
            </li>
            <li className="flex items-center space-x-2 text-zinc-300">
              <WifiOff className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>IndexedDB Offline Resilience</span>
            </li>
            <li className="flex items-center space-x-2 text-zinc-300">
              <Shield className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>Geospatial Route Mapping</span>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation */}
        <div>
          <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-3">Explore</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/planner" className="text-zinc-400 hover:text-yellow-300 transition-colors">Trip Planner</Link></li>
            <li><Link href="/map" className="text-zinc-400 hover:text-yellow-300 transition-colors">Interactive Route Map</Link></li>
            <li><Link href="/budget" className="text-zinc-400 hover:text-yellow-300 transition-colors">Budget Optimizer</Link></li>
            <li><Link href="/chat" className="text-zinc-400 hover:text-yellow-300 transition-colors">AI Assistant</Link></li>
            <li><Link href="/trips" className="text-zinc-400 hover:text-yellow-300 transition-colors">Saved Trips</Link></li>
            <li><Link href="/offline-trips" className="text-zinc-400 hover:text-yellow-300 transition-colors">Offline Database</Link></li>
          </ul>
        </div>

        {/* Col 4: Platform Architecture */}
        <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/25">
              Production Architecture
            </span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Curated catalogues covering destinations across India with day-by-day sequenced itineraries, entry costs, and regional dining recommendations.
          </p>
          <div className="text-[11px] text-zinc-400 pt-2 border-t border-zinc-800 flex items-center justify-between">
            <span>Client PWA + Node Engine</span>
            <span className="text-yellow-400 font-mono">v1.0.0</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
        <div>© 2026 TripVista — Intelligent Travel Guide. Engineered for real-world travel.</div>
        <div className="flex items-center space-x-1 mt-2 sm:mt-0 text-zinc-400">
          <span>Crafted with Next.js, TypeScript &amp; Leaflet</span>
        </div>
      </div>
    </footer>
  );
}


