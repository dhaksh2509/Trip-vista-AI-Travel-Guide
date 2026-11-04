'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { TripPlan } from '@/types';
import { 
  Trash2, 
  ArrowRight, 
  Check, 
  Plus, 
  DownloadCloud,
  MapPin,
  Calendar,
  Users,
  Compass,
  Search,
  Map as MapIcon,
  Sparkles
} from 'lucide-react';
import { OfflineSyncManager } from '@/lib/offline/syncManager';
import { findDestination } from '@/lib/data/destinations';

export default function TripsDashboardPage() {
  const [trips, setTrips] = useState<TripPlan[]>([]);
  const [offlineIds, setOfflineIds] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTrips: TripPlan[] = JSON.parse(localStorage.getItem('ai_travel_trips') || '[]');
      setTrips(storedTrips);
      checkOfflineRecords();
    }
  }, []);

  const checkOfflineRecords = async () => {
    try {
      const offlineTrips = await OfflineSyncManager.getOfflineTrips();
      const ids = new Set(offlineTrips.map(t => t.id));
      setOfflineIds(ids);
    } catch (e) {
      console.log('IndexedDB check:', e);
    }
  };

  const handleDeleteTrip = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!confirm('Are you sure you want to remove this trip from your saved itineraries?')) {
      return;
    }

    const updated = trips.filter(t => t.id !== id);
    setTrips(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ai_travel_trips', JSON.stringify(updated));
      const current = localStorage.getItem('ai_travel_current_trip');
      if (current) {
        try {
          const parsed = JSON.parse(current);
          if (parsed.id === id) {
            localStorage.removeItem('ai_travel_current_trip');
          }
        } catch {}
      }
    }
  };

  const handleDownloadOffline = async (trip: TripPlan, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDownloadingId(trip.id);
    try {
      await OfflineSyncManager.saveTripOffline(trip);
      setOfflineIds(prev => new Set([...Array.from(prev), trip.id]));
    } finally {
      setDownloadingId(null);
    }
  };

  const filteredTrips = useMemo(() => {
    if (!searchQuery.trim()) return trips;
    const q = searchQuery.toLowerCase();
    return trips.filter(t => 
      t.destinationName.toLowerCase().includes(q) ||
      t.preferences.travelType.toLowerCase().includes(q) ||
      (t.summary && t.summary.toLowerCase().includes(q))
    );
  }, [trips, searchQuery]);

  return (
    <div className="space-y-8 py-6 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-semibold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5 text-yellow-400" />
            <span>Itinerary Management</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            My Saved Trips
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Manage your curated travel itineraries. Download plans for offline access, review day-by-day routes, and balance budgets.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/offline-trips"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#121214] hover:bg-[#18181b] text-zinc-200 text-xs font-semibold border border-zinc-800 transition-all shadow-sm"
          >
            <DownloadCloud className="w-4 h-4 text-yellow-400" />
            <span>Offline Trips</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              {offlineIds.size}
            </span>
          </Link>
          <Link
            href="/planner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition-all shadow-md active:translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            <span>Plan New Trip</span>
          </Link>
        </div>
      </div>

      {/* Filter / Search Bar (if user has trips) */}
      {trips.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#121214] p-3 rounded-xl border border-zinc-800">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by destination or travel style..."
              className="w-full bg-[#09090b] border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div className="text-xs text-zinc-400">
            Showing <strong className="text-zinc-200">{filteredTrips.length}</strong> of {trips.length} itineraries
          </div>
        </div>
      )}

      {/* Trips Grid or Empty State */}
      {trips.length === 0 ? (
        <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-10 sm:p-14 text-center max-w-xl mx-auto space-y-5 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto text-yellow-400">
            <Compass className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">No Itineraries Saved Yet</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
              You haven&apos;t generated any travel itineraries yet. Use our multi-agent trip planner to assemble a personalized schedule with real attractions, maps, and offline support.
            </p>
          </div>
          <Link
            href="/planner"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition-all shadow-md"
          >
            <span>Plan Your First Trip</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : filteredTrips.length === 0 ? (
        <div className="bg-[#121214] border border-zinc-800 p-8 rounded-xl text-center space-y-2">
          <p className="text-sm text-zinc-200 font-semibold">No itineraries match your search.</p>
          <p className="text-xs text-zinc-500">Try searching for a different destination name or style.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips.map((trip) => {
            const isAvailableOffline = offlineIds.has(trip.id);
            const isSaving = downloadingId === trip.id;
            const destMeta = findDestination(trip.destinationName);
            const banner = destMeta?.bannerUrl || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

            return (
              <div
                key={trip.id}
                className="group bg-[#121214] hover:bg-[#18181b] rounded-2xl border border-zinc-800 hover:border-yellow-400/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Destination Photo Header */}
                <div className="relative h-44 w-full overflow-hidden bg-black">
                  <img
                    src={banner}
                    alt={trip.destinationName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-yellow-400 border border-yellow-400/30">
                      {destMeta?.state || trip.preferences.travelType}
                    </span>

                    {isAvailableOffline ? (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1 shadow-sm">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Offline Ready</span>
                      </span>
                    ) : (
                      <button
                        onClick={(e) => handleDownloadOffline(trip, e)}
                        disabled={isSaving}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/80 backdrop-blur-md text-zinc-300 hover:text-yellow-300 hover:border-yellow-400/40 border border-zinc-700 flex items-center gap-1 transition-all"
                        title="Download for offline access"
                      >
                        <DownloadCloud className={`w-3 h-3 ${isSaving ? 'animate-bounce text-yellow-400' : 'text-zinc-400'}`} />
                        <span>{isSaving ? 'Saving...' : 'Save Offline'}</span>
                      </button>
                    )}
                  </div>

                  {/* Destination Title on Banner */}
                  <div className="absolute bottom-3 inset-x-4">
                    <h3 className="text-xl font-black text-white drop-shadow-md tracking-tight">
                      {trip.destinationName}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {trip.summary || destMeta?.description || 'Custom multi-day itinerary with curated sights and dining.'}
                  </p>

                  {/* Metric Chips */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-800 text-[11px] bg-[#09090b] px-3 rounded-xl">
                    <div>
                      <span className="text-zinc-500 block text-[10px]">Duration</span>
                      <span className="font-bold text-zinc-200 flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3 h-3 text-yellow-400" />
                        {trip.preferences.durationDays} Days
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block text-[10px]">Travelers</span>
                      <span className="font-bold text-zinc-200 flex items-center gap-1 mt-0.5">
                        <Users className="w-3 h-3 text-yellow-400" />
                        {trip.preferences.travelersCount} ({trip.preferences.travelType})
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block text-[10px]">Est. Budget</span>
                      <span className="font-bold text-yellow-400 block mt-0.5">
                        ₹{(trip.preferences.budgetInr || trip.budget.totalEstimatedInr).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => handleDeleteTrip(trip.id, e)}
                        className="p-2 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-rose-950/30 border border-transparent hover:border-rose-900/40 transition-colors"
                        title="Delete itinerary"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <Link
                        href={`/map?destination=${encodeURIComponent(trip.destinationName)}`}
                        className="p-2 rounded-lg text-zinc-400 hover:text-yellow-400 hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/20 transition-colors"
                        title="View Route Map"
                      >
                        <MapIcon className="w-4 h-4" />
                      </Link>
                    </div>

                    <Link
                      href={`/itinerary/${trip.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition-all shadow-sm"
                    >
                      <span>Open Trip</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

