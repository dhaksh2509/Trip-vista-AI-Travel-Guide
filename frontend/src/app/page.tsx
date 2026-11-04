'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Compass, 
  Calendar, 
  Users, 
  IndianRupee, 
  WifiOff, 
  Database, 
  ArrowRight, 
  Check, 
  ChevronRight,
  Map as MapIcon
} from 'lucide-react';
import { TravelType, TransportPreference, TripPlan } from '@/types';
import DestinationAutocomplete from '@/components/DestinationAutocomplete';

// Verified representative destinations for the discovery grid
const CURATED_DESTINATIONS = [
  {
    name: 'Araku Valley',
    state: 'Andhra Pradesh',
    category: 'hill',
    tagline: 'Misty hills, cascading waterfalls, and aromatic coffee estates',
    idealDays: 3,
    bestMonths: 'Sep–Mar',
    bannerUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    category: 'coastal',
    tagline: 'Jewel of the East Coast with beaches, submarine museum & Kailasagiri',
    idealDays: 3,
    bestMonths: 'Oct–Mar',
    bannerUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Hyderabad',
    state: 'Telangana',
    category: 'heritage',
    tagline: 'City of Pearls — Charminar, Golconda Citadel & authentic Biryani',
    idealDays: 3,
    bestMonths: 'Oct–Feb',
    bannerUrl: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Goa',
    state: 'Goa',
    category: 'coastal',
    tagline: 'Portuguese heritage churches, golden sand beaches and coastal shacks',
    idealDays: 4,
    bestMonths: 'Nov–Feb',
    bannerUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Ooty',
    state: 'Tamil Nadu',
    category: 'hill',
    tagline: 'Queen of Hill Stations — Nilgiri Mountain Railway and botanical gardens',
    idealDays: 3,
    bestMonths: 'Oct–Jun',
    bannerUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Manali',
    state: 'Himachal Pradesh',
    category: 'hill',
    tagline: 'Himalayan snow gateway — Solang Valley adventures & alpine pine forests',
    idealDays: 4,
    bestMonths: 'Oct–Jun',
    bannerUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    category: 'heritage',
    tagline: 'The Pink City — Amber Fort, Hawa Mahal and royal Rajput palaces',
    idealDays: 3,
    bestMonths: 'Oct–Mar',
    bannerUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Bengaluru',
    state: 'Karnataka',
    category: 'city',
    tagline: 'Silicon Valley of India — Lalbagh Botanical Garden & vibrant craft beer scene',
    idealDays: 2,
    bestMonths: 'Sep–Mar',
    bannerUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'
  }
];

export default function HomePage() {
  const router = useRouter();

  // Quick Plan Form States
  // IMPORTANT: Days and Budget are NOT pre-filled so user specifies their real travel constraints
  const [qpDestination, setQpDestination] = useState<string>('');
  const [qpDays, setQpDays] = useState<number | ''>('');
  const [qpBudget, setQpBudget] = useState<number | ''>('');
  const [qpTravelers, setQpTravelers] = useState<number>(1);
  const [qpTravelType, setQpTravelType] = useState<TravelType>('Solo');
  const [qpInterests, setQpInterests] = useState<string[]>(['Nature', 'Food']);
  const [qpStartingLocation, setQpStartingLocation] = useState<string>('');
  const [qpTransport, setQpTransport] = useState<TransportPreference>('Personal Car / Rental');

  // Filter tab for destination discovery
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'hill' | 'coastal' | 'heritage' | 'city'>('all');

  // Form Validation State
  const [validationError, setValidationError] = useState<string | null>(null);

  // Recent Trips State
  const [recentTrips, setRecentTrips] = useState<TripPlan[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ai_travel_trips');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setRecentTrips(parsed.slice(0, 3));
          }
        }
      } catch (err) {
        console.error('Failed to parse recent trips from localStorage', err);
      }
    }
  }, []);

  // Submit Quick Trip Planner with Strict Validation
  const handleQuickPlan = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Validation 1: Destination
    if (!qpDestination.trim()) {
      setValidationError('Please select or enter a destination.');
      return;
    }

    // Validation 2: Number of Days (Required & Manual Input)
    if (qpDays === '' || qpDays === null || qpDays === undefined) {
      setValidationError('Please specify the number of days for your trip.');
      return;
    }
    const daysNum = Number(qpDays);
    if (isNaN(daysNum) || daysNum < 1 || daysNum > 30) {
      setValidationError('Please enter a valid number of days between 1 and 30.');
      return;
    }

    // Validation 3: Budget (Required & Manual Input)
    if (qpBudget === '' || qpBudget === null || qpBudget === undefined) {
      setValidationError('Please enter your total travel budget in Rupees.');
      return;
    }
    const budgetNum = Number(qpBudget);
    if (isNaN(budgetNum) || budgetNum <= 0) {
      setValidationError('Please enter a valid budget greater than zero.');
      return;
    }

    // Validation 4: Travelers
    if (qpTravelers < 1) {
      setValidationError('Travelers must be at least 1.');
      return;
    }

    const query = new URLSearchParams({
      destination: qpDestination.trim(),
      days: daysNum.toString(),
      budget: budgetNum.toString(),
      type: qpTravelType,
      travelers: qpTravelers.toString(),
      interests: qpInterests.join(','),
      start: qpStartingLocation.trim(),
      transport: qpTransport
    });
    router.push(`/planner?${query.toString()}`);
  };

  const filteredDestinations = activeCategoryFilter === 'all'
    ? CURATED_DESTINATIONS
    : CURATED_DESTINATIONS.filter(d => d.category === activeCategoryFilter);

  return (
    <div className="space-y-14 md:space-y-20 py-4 text-zinc-100">
      
      {/* 1. EDITORIAL TRAVEL HERO */}
      <section className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-[#121214] py-12 md:py-16 px-6 sm:px-10 lg:px-14">
        {/* Subtle backdrop overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#121214] via-[#09090b] to-[#000000] -z-10" />

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold">
            <Compass className="w-3.5 h-3.5 text-yellow-400" />
            <span>Verified All-India Travel Intelligence</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Plan Smarter Journeys Across <span className="text-yellow-400">India</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
            TripVista generates balanced day-by-day itineraries with verified attraction sequencing, transparent budget breakdowns, route maps, starting location routes, and full offline resilience.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#planner-section"
              className="px-5 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-black font-bold text-xs sm:text-sm transition-all shadow-accent"
            >
              Start Planning Trip
            </a>
            <Link
              href="/map"
              className="px-5 py-2.5 rounded-lg bg-[#09090b] hover:bg-zinc-800 text-zinc-200 font-medium text-xs sm:text-sm border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              Explore Route Map
            </Link>
          </div>
        </div>

        {/* Feature quick badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-10 mt-6 border-t border-zinc-800 text-xs text-zinc-300">
          <div className="flex items-center space-x-2">
            <WifiOff className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>IndexedDB Offline Sync</span>
          </div>
          <div className="flex items-center space-x-2">
            <IndianRupee className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>Category Budget Caps</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapIcon className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>Leaflet Route Waypoints</span>
          </div>
          <div className="flex items-center space-x-2">
            <Database className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>Grounded RAG Sources</span>
          </div>
        </div>
      </section>

      {/* 2. PURPOSE-BUILT QUICK TRIP PLANNER */}
      <section id="planner-section" className="max-w-4xl mx-auto space-y-4">
        <div className="text-left space-y-1">
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
            Configure Your Journey
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Trip Parameters
          </h2>
          <p className="text-xs text-zinc-400">
            Specify starting location, destination, and budget parameters to generate a custom day-wise itinerary.
          </p>
        </div>

        <div className="bg-[#121214] p-6 sm:p-7 rounded-2xl border border-zinc-800 space-y-5 shadow-card">
          {validationError && (
            <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          <form onSubmit={handleQuickPlan} className="space-y-5">
            {/* Group 1: Destination & Departure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="qp-destination-input" className="text-xs font-semibold text-zinc-200 block">
                  Destination *
                </label>
                <DestinationAutocomplete
                  id="qp-destination-input"
                  name="qpDestination"
                  value={qpDestination}
                  onChange={(val) => setQpDestination(val)}
                  placeholder="Search city, hill station or beach across India..."
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="qp-starting-location-input" className="text-xs font-semibold text-zinc-200 block">
                  Origin / Starting Location
                </label>
                <DestinationAutocomplete
                  id="qp-starting-location-input"
                  name="qpStartingLocation"
                  value={qpStartingLocation}
                  onChange={(val) => setQpStartingLocation(val)}
                  placeholder="Where are you travelling from? (e.g. Hyderabad, Bengaluru, Delhi)..."
                  listHeader="Starting Locations (A–Z)"
                />
              </div>
            </div>

            {/* Group 2: Duration, Budget & Travelers (Empty by default) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Number of Days */}
              <div className="space-y-1.5">
                <label htmlFor="qp-days-input" className="text-xs font-semibold text-zinc-200 block">
                  Number of Days *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5" />
                  <input
                    id="qp-days-input"
                    type="number"
                    min="1"
                    max="30"
                    value={qpDays}
                    onChange={(e) => {
                      const v = e.target.value;
                      setQpDays(v === '' ? '' : parseInt(v, 10) || '');
                    }}
                    placeholder="e.g. 3"
                    className="w-full pl-9 pr-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs placeholder-zinc-500 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 transition-colors"
                  />
                </div>
                <span className="text-[10px] text-zinc-500">Duration: 1 to 30 days</span>
              </div>

              {/* Total Budget */}
              <div className="space-y-1.5">
                <label htmlFor="qp-budget-input" className="text-xs font-semibold text-zinc-200 block">
                  Total Budget (₹) *
                </label>
                <div className="relative">
                  <span className="w-4 h-4 text-yellow-400 font-bold text-xs absolute left-3 top-2 flex items-center justify-center">₹</span>
                  <input
                    id="qp-budget-input"
                    type="number"
                    min="1"
                    step="1"
                    value={qpBudget}
                    onChange={(e) => {
                      const v = e.target.value;
                      setQpBudget(v === '' ? '' : parseInt(v, 10) || '');
                    }}
                    placeholder="e.g. 15000"
                    className="w-full pl-9 pr-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs placeholder-zinc-500 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 transition-colors"
                  />
                </div>
                <span className="text-[10px] text-zinc-500">Covers transit, stay & meals</span>
              </div>

              {/* Travelers */}
              <div className="space-y-1.5">
                <label htmlFor="qp-travelers-input" className="text-xs font-semibold text-zinc-200 block">
                  Travelers
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                  <input
                    id="qp-travelers-input"
                    type="number"
                    min="1"
                    max="20"
                    value={qpTravelers}
                    onChange={(e) => setQpTravelers(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-full pl-9 pr-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 transition-colors"
                  />
                </div>
                <span className="text-[10px] text-zinc-500">People travelling</span>
              </div>
            </div>

            {/* Group 3: Travel Type & Transport Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-200 block">Travel Style</label>
                <select
                  value={qpTravelType}
                  onChange={(e) => setQpTravelType(e.target.value as TravelType)}
                  className="w-full px-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option value="Solo">Solo Traveler</option>
                  <option value="Couple">Couple / Romantic</option>
                  <option value="Family">Family with Children</option>
                  <option value="Friends">Friends Group</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-200 block">Preferred Transport</label>
                <select
                  value={qpTransport}
                  onChange={(e) => setQpTransport(e.target.value as TransportPreference)}
                  className="w-full px-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option value="Personal Car / Rental">Personal Car / Rental</option>
                  <option value="Train">Indian Railways (Train)</option>
                  <option value="Public Bus / Transit">State Bus / Transit</option>
                  <option value="Flight">Flight</option>
                </select>
              </div>
            </div>

            {/* Group 4: Interests */}
            <div className="space-y-2 pt-1 border-t border-zinc-800">
              <label className="text-xs font-semibold text-zinc-200 block">
                Primary Interests (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {['Nature', 'Food', 'History', 'Adventure', 'Beaches', 'Photography', 'Shopping', 'Temples'].map((tag) => {
                  const isSel = qpInterests.includes(tag);
                  return (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => {
                        if (isSel) {
                          if (qpInterests.length > 1) setQpInterests(qpInterests.filter(i => i !== tag));
                        } else {
                          setQpInterests([...qpInterests, tag]);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center space-x-1.5 ${
                        isSel 
                          ? 'bg-yellow-400 text-black border-yellow-400 font-bold' 
                          : 'bg-[#09090b] text-zinc-300 border-zinc-800 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      {isSel && <Check className="w-3.5 h-3.5 text-black" />}
                      <span>{tag}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-black font-bold text-xs sm:text-sm transition-all shadow-accent flex items-center justify-center space-x-2"
              >
                <span>Generate Tailored Itinerary</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. CURATED DESTINATION DISCOVERY */}
      <section className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
              Explore India
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight mt-0.5">
              Curated Destination Highlights
            </h2>
            <p className="text-xs text-zinc-400">
              Verified regional information, authentic photography, and ideal visit windows.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#121214] rounded-lg border border-zinc-800">
            {[
              { id: 'all', label: 'All Regions' },
              { id: 'hill', label: 'Hill Stations' },
              { id: 'coastal', label: 'Coastal & Beaches' },
              { id: 'heritage', label: 'Heritage & Palaces' },
              { id: 'city', label: 'Metros' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeCategoryFilter === tab.id
                    ? 'bg-yellow-400 text-black border border-yellow-400 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-[#121214] rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-400/40 flex flex-col justify-between transition-all duration-200 group shadow-card"
            >
              <div className="relative h-40 w-full overflow-hidden bg-black">
                <img
                  src={dest.bannerUrl}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/30 to-transparent" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-black/85 backdrop-blur-xs text-yellow-400 border border-yellow-400/30 uppercase tracking-wider">
                    {dest.state}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3">
                  <h3 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                  {dest.tagline}
                </p>

                <div className="pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                  <div className="space-y-0.5">
                    <span>Ideal: <strong className="text-zinc-200 font-semibold">{dest.idealDays} Days</strong></span>
                    <span className="block text-[10px] text-zinc-500">Season: {dest.bestMonths}</span>
                  </div>

                  {/* Pre-fill destination into planner without pre-filling days or budget */}
                  <Link
                    href={`/planner?destination=${encodeURIComponent(dest.name)}`}
                    className="px-3 py-1.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition-colors shadow-xs"
                  >
                    Plan Trip
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SAVED / RECENT TRIPS SHELF */}
      <section className="max-w-7xl mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Your Saved Trips</h2>
            <p className="text-xs text-zinc-400">Access recent itineraries stored in your browser</p>
          </div>
          {recentTrips.length > 0 && (
            <Link href="/trips" className="text-xs font-semibold text-yellow-400 hover:underline flex items-center space-x-1">
              <span>View All Saved</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {recentTrips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentTrips.map((trip) => (
              <div key={trip.id} className="bg-[#121214] p-4 rounded-xl border border-zinc-800 space-y-3 shadow-card">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-yellow-400">
                      {trip.preferences?.travelType || 'Custom'} Journey
                    </span>
                    <h3 className="text-base font-bold text-white">{trip.destinationName}</h3>
                    <span className="text-xs text-zinc-400">
                      {trip.preferences?.durationDays} Days • {trip.preferences?.travelersCount} Person(s)
                      {trip.preferences?.startingLocation ? ` • From ${trip.preferences.startingLocation}` : ''}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-yellow-400 font-mono">
                    ₹{(trip.preferences?.budgetInr || trip.budget?.totalBudgetInr || 0).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-2">
                  <Link
                    href={`/itinerary/${trip.id}`}
                    className="w-full py-1.5 rounded-lg bg-[#09090b] hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-medium text-xs text-center transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/map?destination=${encodeURIComponent(trip.destinationName)}${trip.preferences?.startingLocation ? `&start=${encodeURIComponent(trip.preferences.startingLocation)}` : ''}`}
                    className="px-2.5 py-1.5 rounded-lg bg-[#09090b] hover:bg-zinc-800 text-yellow-400 border border-zinc-800 transition-colors"
                    title="View route map"
                  >
                    <MapIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#121214] p-6 rounded-xl border border-zinc-800 text-center space-y-3 max-w-md mx-auto">
            <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mx-auto text-yellow-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-200">No itineraries generated yet</p>
              <p className="text-[11px] text-zinc-400 mt-0.5">Use the quick planner above to create your first customized itinerary.</p>
            </div>
            <a
              href="#planner-section"
              className="inline-block px-4 py-2 rounded-lg bg-yellow-400 text-black font-bold text-xs hover:bg-yellow-300 transition-colors"
            >
              Plan Your First Trip
            </a>
          </div>
        )}
      </section>

      {/* 5. PLATFORM CAPABILITIES & SYSTEM ARCHITECTURE */}
      <section className="max-w-7xl mx-auto space-y-6 pt-2">
        <div className="text-left space-y-1">
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
            Engineered For Reliability
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            How TripVista Works
          </h2>
          <p className="text-xs text-zinc-400">
            A production architecture designed for seamless travel planning in online and offline conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800 space-y-3 shadow-card">
            <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
              <WifiOff className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">IndexedDB Offline Sync</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every trip itinerary, attraction waypoint, and cost breakdown can be downloaded directly into browser storage for remote access without internet.
            </p>
          </div>

          <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800 space-y-3 shadow-card">
            <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
              <IndianRupee className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Transparent Budget Caps</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Calculates daily cost allocations across lodging, local transit, food, and attraction entrance tickets, keeping trips within target budget.
            </p>
          </div>

          <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800 space-y-3 shadow-card">
            <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
              <MapIcon className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Sequenced Route Mapping</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Interactive Leaflet maps sequence departure origin, morning, afternoon, and evening attractions to minimize transit fatigue between locations.
            </p>
          </div>

          <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800 space-y-3 shadow-card">
            <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
              <Database className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Grounded RAG Data</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Multi-agent AI validates recommendations against verified regional documents, ensuring authentic recommendations for food, heritage, and scenery.
            </p>
          </div>
        </div>
      </section>

      {/* 6. AI TRAVEL ASSISTANT PREVIEW */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-[#121214] p-6 sm:p-7 rounded-2xl border border-zinc-800 space-y-4 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                Interactive Assistant
              </span>
              <h2 className="text-lg font-bold text-white mt-0.5">Need Adjustments to Your Trip?</h2>
              <p className="text-xs text-zinc-400 mt-1 max-w-lg leading-relaxed">
                Use our conversational AI assistant to adjust budgets, substitute rainy weather activities, or query local dining recommendations in plain language.
              </p>
            </div>
            <Link
              href="/chat"
              className="self-start sm:self-auto px-4 py-2 rounded-lg bg-yellow-400 text-black font-bold text-xs hover:bg-yellow-300 transition-colors shadow-accent shrink-0"
            >
              Open AI Assistant
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
            <div className="p-3 rounded-lg bg-[#09090b] border border-zinc-800 space-y-1">
              <span className="text-yellow-400 font-semibold block text-[11px]">Budget Optimization</span>
              <p className="text-zinc-300 text-[11px]">&quot;Reduce my itinerary to stay under ₹12,000.&quot;</p>
            </div>
            <div className="p-3 rounded-lg bg-[#09090b] border border-zinc-800 space-y-1">
              <span className="text-yellow-400 font-semibold block text-[11px]">Weather Backup</span>
              <p className="text-zinc-300 text-[11px]">&quot;Swap outdoor treks for museums if it rains.&quot;</p>
            </div>
            <div className="p-3 rounded-lg bg-[#09090b] border border-zinc-800 space-y-1">
              <span className="text-yellow-400 font-semibold block text-[11px]">Dining Recommendations</span>
              <p className="text-zinc-300 text-[11px]">&quot;Find authentic regional thali spots near Day 1.&quot;</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
