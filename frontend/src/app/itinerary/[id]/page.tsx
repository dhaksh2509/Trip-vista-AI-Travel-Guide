'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  TripPlan,
  ActivityItem
} from '@/types';
import {
  Clock,
  IndianRupee,
  Navigation,
  Download,
  Check,
  Trash2,
  RefreshCw,
  MapPin,
  Utensils,
  MessageSquare,
  Layers,
  Map as MapIcon,
  List,
  X,
  Compass,
  Calendar,
  Users
} from 'lucide-react';
import WeatherWidget from '@/components/WeatherWidget';
import RagSourcesBadge from '@/components/RagSourcesBadge';
import MapViewer from '@/components/MapViewer';
import { OfflineSyncManager } from '@/lib/offline/syncManager';
import { findDestination } from '@/lib/data/destinations';

export default function ItineraryPage() {
  const params = useParams();
  const tripId = params.id as string;

  const [trip, setTrip] = useState<TripPlan | null>(null);
  const [activeDayNumber, setActiveDayNumber] = useState<number | null>(1); // null = All Days
  const [activeView, setActiveView] = useState<'split' | 'timeline' | 'map'>('split');
  const [highlightedPlaceId, setHighlightedPlaceId] = useState<string | null>(null);
  const [selectedPlaceDetail, setSelectedPlaceDetail] = useState<ActivityItem | null>(null);

  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [isOfflineMode, setIsOfflineMode] = useState<boolean>(false);

  useEffect(() => {
    // Check offline simulation status
    if (typeof window !== 'undefined') {
      const isSimulated = localStorage.getItem('demo_simulate_offline') === 'true';
      setIsOfflineMode(isSimulated || !navigator.onLine);

      const handleConnectionChange = () => {
        const sim = localStorage.getItem('demo_simulate_offline') === 'true';
        setIsOfflineMode(sim || !navigator.onLine);
      };
      window.addEventListener('connectionStatusChanged', handleConnectionChange);
      window.addEventListener('online', handleConnectionChange);
      window.addEventListener('offline', handleConnectionChange);

      return () => {
        window.removeEventListener('connectionStatusChanged', handleConnectionChange);
        window.removeEventListener('online', handleConnectionChange);
        window.removeEventListener('offline', handleConnectionChange);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // First try to load from current session
      const storedCurrent = localStorage.getItem('ai_travel_current_trip');
      if (storedCurrent) {
        try {
          const parsed: TripPlan = JSON.parse(storedCurrent);
          if (parsed.id === tripId || tripId === 'current') {
            setTrip(parsed);
            checkOfflineStatus(parsed.id);
            return;
          }
        } catch (e) {
          console.error(e);
        }
      }

      // Try all trips
      try {
        const allTrips: TripPlan[] = JSON.parse(localStorage.getItem('ai_travel_trips') || '[]');
        const found = allTrips.find(t => t.id === tripId);
        if (found) {
          setTrip(found);
          checkOfflineStatus(found.id);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [tripId]);

  const checkOfflineStatus = async (id: string) => {
    try {
      const offlineRecord = await OfflineSyncManager.getOfflineTripById(id);
      if (offlineRecord) {
        setIsDownloaded(true);
      }
    } catch (e) {
      console.log('IndexedDB check:', e);
    }
  };

  const handleDownloadOffline = async () => {
    if (!trip) return;
    try {
      const success = await OfflineSyncManager.saveTripOffline(trip);
      if (success) {
        setIsDownloaded(true);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 4000);
      }
    } catch (err) {
      console.error('Failed to save trip offline:', err);
    }
  };

  // Activity Actions: Delete Activity
  const handleDeleteActivity = (dayIndex: number, slot: 'morning' | 'afternoon' | 'evening') => {
    if (!trip) return;
    const copy: TripPlan = JSON.parse(JSON.stringify(trip));
    const emptyActivity: ActivityItem = {
      id: `empty-${Date.now()}`,
      name: 'Free Time / Self Exploration',
      category: 'Sightseeing',
      timeSlot: slot === 'morning' ? 'Morning' : slot === 'afternoon' ? 'Afternoon' : 'Evening',
      description: 'Relaxed slot for personal leisure, shopping or spontaneous local exploration.',
      visitDurationMinutes: 60,
      estimatedCostInr: 0,
      coordinates: copy.days[dayIndex].morning?.coordinates || { lat: 0, lng: 0 },
      isOutdoor: false
    };

    copy.days[dayIndex][slot] = emptyActivity;
    setTrip(copy);
    localStorage.setItem('ai_travel_current_trip', JSON.stringify(copy));
  };

  // Activity Actions: Replace Activity
  const handleReplaceActivity = (dayIndex: number, slot: 'morning' | 'afternoon' | 'evening') => {
    if (!trip) return;
    const copy: TripPlan = JSON.parse(JSON.stringify(trip));
    const destMeta = findDestination(copy.destinationName);

    // Pick an alternative attraction that is not already selected
    const currentName = copy.days[dayIndex][slot]?.name;
    const alternative = destMeta.attractions.find(a => a.name !== currentName) || destMeta.attractions[0];

    copy.days[dayIndex][slot] = {
      ...alternative,
      id: `${alternative.id}-rep-${Date.now()}`,
      timeSlot: slot === 'morning' ? 'Morning' : slot === 'afternoon' ? 'Afternoon' : 'Evening'
    };

    setTrip(copy);
    localStorage.setItem('ai_travel_current_trip', JSON.stringify(copy));
  };

  // Regenerate a Day Plan if empty
  const handleRegenerateDay = (dayIndex: number) => {
    if (!trip) return;
    const copy: TripPlan = JSON.parse(JSON.stringify(trip));
    const destMeta = findDestination(copy.destinationName);
    const attrs = destMeta.attractions;
    const count = attrs.length;

    const m = attrs[(dayIndex * 3) % count] || attrs[0];
    const a = attrs[(dayIndex * 3 + 1) % count] || attrs[1 % count];
    const e = attrs[(dayIndex * 3 + 2) % count] || attrs[2 % count];

    copy.days[dayIndex].morning = { ...m, timeSlot: 'Morning', id: `${m.id}-d${dayIndex + 1}-m` };
    copy.days[dayIndex].afternoon = { ...a, timeSlot: 'Afternoon', id: `${a.id}-d${dayIndex + 1}-a` };
    copy.days[dayIndex].evening = { ...e, timeSlot: 'Evening', id: `${e.id}-d${dayIndex + 1}-e` };

    setTrip(copy);
    localStorage.setItem('ai_travel_current_trip', JSON.stringify(copy));
  };

  // Handle clicking an activity in the timeline list -> highlights and centers on map
  const handleSelectActivity = (act: ActivityItem) => {
    setHighlightedPlaceId(act.id);
    setSelectedPlaceDetail(act);
  };

  // Handle clicking a marker on the map -> smoothly scroll to that activity card in the timeline
  const handleMapMarkerClick = (marker: any) => {
    setHighlightedPlaceId(marker.id);
    const element = document.getElementById(`card-${marker.id}`) || document.getElementById(`card-${marker.name}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!trip) {
    return (
      <div className="py-24 text-center space-y-4 max-w-md mx-auto">
        <div className="w-9 h-9 rounded-full border-2 border-teal-400 border-t-transparent animate-spin mx-auto" />
        <h3 className="text-base font-bold text-slate-100">Loading travel itinerary...</h3>
        <p className="text-xs text-slate-400">If this is your first visit, launch the planner to generate a new itinerary.</p>
        <Link
          href="/planner"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sunshine-400 hover:bg-sunshine-300 text-slate-950 text-xs font-bold transition shadow-md"
        >
          <span>Go to Planner</span>
        </Link>
      </div>
    );
  }

  const destMeta = findDestination(trip.destinationName);
  const displayedDays = activeDayNumber === null
    ? trip.days
    : trip.days.filter(d => d.dayNumber === activeDayNumber);

  return (
    <div className="space-y-6 py-4">
      {/* Top Editorial Banner */}
      <div className="bg-[#121214] border border-zinc-800 p-6 sm:p-7 rounded-2xl space-y-5 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                <Compass className="w-3.5 h-3.5 text-yellow-400" />
                <span>Verified Itinerary Plan</span>
              </span>
              {destMeta?.state && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#09090b] text-zinc-300 border border-zinc-800">
                  {destMeta.state}
                </span>
              )}
              {isDownloaded && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Available Offline</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {trip.destinationName} Complete Itinerary
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {trip.summary || destMeta.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleDownloadOffline}
              disabled={isDownloaded}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs transition shadow-sm ${isDownloaded
                ? 'bg-zinc-900 text-yellow-400 border border-yellow-400/30 cursor-default'
                : 'bg-yellow-400 hover:bg-yellow-300 text-black active:translate-y-0.5'
                }`}
            >
              {isDownloaded ? (
                <>
                  <Check className="w-4 h-4 text-yellow-400" />
                  <span>Saved to Vault</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-black" />
                  <span>Save Offline</span>
                </>
              )}
            </button>

            <Link
              href={`/map?destination=${encodeURIComponent(trip.destinationName)}${trip.preferences.startingLocation ? `&start=${encodeURIComponent(trip.preferences.startingLocation)}` : ''}`}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#09090b] hover:bg-zinc-800 text-zinc-200 text-xs font-semibold border border-zinc-800 hover:border-zinc-700 transition shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              <span>Dedicated Map</span>
            </Link>

            <Link
              href="/budget"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#09090b] hover:bg-zinc-800 text-zinc-200 text-xs font-semibold border border-zinc-800 hover:border-zinc-700 transition shadow-sm"
            >
              <IndianRupee className="w-3.5 h-3.5 text-yellow-400" />
              <span>Budget Optimizer</span>
            </Link>

            <Link
              href="/chat"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#09090b] hover:bg-zinc-800 text-zinc-200 text-xs font-semibold border border-zinc-800 hover:border-zinc-700 transition shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-yellow-400" />
              <span>AI Assistant</span>
            </Link>
          </div>
        </div>

        {/* Quick Highlights / Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-zinc-800 text-xs bg-[#09090b] p-3.5 rounded-xl">
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase font-bold tracking-wider">Duration</span>
            <span className="font-bold text-zinc-200 flex items-center gap-1 mt-0.5">
              <Calendar className="w-3.5 h-3.5 text-yellow-400" />
              {trip.preferences.durationDays} Days Scheduled
            </span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase font-bold tracking-wider">Travelers</span>
            <span className="font-bold text-zinc-200 flex items-center gap-1 mt-0.5">
              <Users className="w-3.5 h-3.5 text-yellow-400" />
              {trip.preferences.travelersCount} ({trip.preferences.travelType})
            </span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase font-bold tracking-wider">Origin</span>
            <span className="font-bold text-zinc-200 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              {trip.preferences.startingLocation || 'Direct Arrival'}
            </span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase font-bold tracking-wider">Estimated Total</span>
            <span className="font-extrabold text-yellow-400 text-sm block mt-0.5">
              ₹{trip.budget.totalEstimatedInr.toLocaleString('en-IN')}
            </span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase font-bold tracking-wider">Pace &amp; Transit</span>
            <span className="font-semibold text-zinc-300 block mt-0.5">
              {trip.preferences.travelPace} • {trip.preferences.transportPreference}
            </span>
          </div>
        </div>

        {downloadSuccess && (
          <div className="p-3.5 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0 text-yellow-400" />
            <span>Itinerary cached successfully into IndexedDB storage for offline viewing.</span>
          </div>
        )}
      </div>

      {/* Grounded Citations & Sources */}
      <RagSourcesBadge sources={trip.ragSources} destinationName={trip.destinationName} />

      {/* Controls Bar: Day Tabs + View Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#121214] p-3 rounded-2xl border border-zinc-800 shadow-md">
        {/* Day Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          <button
            onClick={() => setActiveDayNumber(null)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${activeDayNumber === null
              ? 'bg-yellow-400 text-black shadow-md'
              : 'bg-[#09090b] text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
          >
            All Days ({trip.days.length})
          </button>
          {trip.days.map((d) => (
            <button
              key={d.dayNumber}
              onClick={() => setActiveDayNumber(d.dayNumber)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${activeDayNumber === d.dayNumber
                ? 'bg-yellow-400 text-black shadow-md'
                : 'bg-[#09090b] text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
            >
              Day {d.dayNumber}
            </button>
          ))}
        </div>

        {/* View Switcher: Split / Timeline / Map */}
        <div className="flex items-center bg-[#09090b] p-1 rounded-xl border border-zinc-800 gap-1">
          <button
            onClick={() => setActiveView('split')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeView === 'split' ? 'bg-yellow-400 text-black' : 'text-zinc-400 hover:text-white'
              }`}
            title="Split Itinerary & Map View"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Split View</span>
          </button>
          <button
            onClick={() => setActiveView('timeline')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeView === 'timeline' ? 'bg-yellow-400 text-black' : 'text-zinc-400 hover:text-white'
              }`}
            title="Timeline Only View"
          >
            <List className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Timeline</span>
          </button>
          <button
            onClick={() => setActiveView('map')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeView === 'map' ? 'bg-yellow-400 text-black' : 'text-zinc-400 hover:text-white'
              }`}
            title="Full Map View"
          >
            <MapIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Full Map</span>
          </button>
        </div>
      </div>

      {/* Main Content Layout based on activeView */}
      {activeView === 'map' ? (
        /* Full Map View */
        <div className="space-y-4">
          <MapViewer
            destinationCenter={destMeta.coordinates}
            days={trip.days}
            destinationName={trip.destinationName}
            startingLocation={trip.preferences.startingLocationRecord || (trip.preferences.startingLocation ? findDestination(trip.preferences.startingLocation) : null)}
            selectedDay={activeDayNumber}
            onSelectDay={(day) => setActiveDayNumber(day)}
            highlightedPlaceId={highlightedPlaceId}
            onPlaceSelect={handleMapMarkerClick}
          />
        </div>
      ) : (
        /* Split or Timeline View */
        <div className={`grid grid-cols-1 ${activeView === 'split' ? 'lg:grid-cols-12' : 'lg:grid-cols-3'} gap-6`}>
          {/* Left: Itinerary Timeline List */}
          <div className={`${activeView === 'split' ? 'lg:col-span-7' : 'lg:col-span-2'} space-y-5`}>
            {displayedDays.map((day) => {
              const hasActivities = Boolean(day.morning?.name || day.afternoon?.name || day.evening?.name);

              if (!hasActivities) {
                return (
                  <div key={day.dayNumber} className="bg-[#121214] p-8 rounded-2xl border border-zinc-800 text-center space-y-3">
                    <h3 className="text-base font-bold text-white">Day {day.dayNumber}: No Places Assigned</h3>
                    <p className="text-xs text-zinc-400">This day does not currently have any scheduled attractions or dining.</p>
                    <button
                      onClick={() => handleRegenerateDay(day.dayNumber - 1)}
                      className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold rounded-xl transition shadow-sm"
                    >
                      Regenerate Day Plan
                    </button>
                  </div>
                );
              }

              return (
                <div key={day.dayNumber} className="space-y-4">
                  {/* Day Header Banner */}
                  <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800 space-y-2 shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-base sm:text-lg font-black text-white">{day.title}</h2>
                      <div className="flex items-center gap-3 text-xs text-zinc-400">
                        <span className="flex items-center gap-1 font-medium">
                          <Navigation className="w-3.5 h-3.5 text-yellow-400" />
                          ~{day.travelDistanceKm} km
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-zinc-400" />
                          {day.travelTimeMinutes} mins
                        </span>
                        <span className="flex items-center gap-0.5 text-yellow-400 font-bold">
                          <IndianRupee className="w-3.5 h-3.5" />
                          ₹{day.estimatedCostInr} est.
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {day.summary}
                    </p>
                  </div>

                  {/* Morning, Afternoon, Evening Cards */}
                  <div className="space-y-3.5">
                    {(['morning', 'afternoon', 'evening'] as const).map((slot) => {
                      const act = day[slot];
                      if (!act) return null;
                      const slotLabel = slot.charAt(0).toUpperCase() + slot.slice(1);
                      const isHighlighted = highlightedPlaceId === act.id || (highlightedPlaceId && act.id.includes(highlightedPlaceId));

                      const slotBadgeColor = slot === 'morning'
                        ? 'bg-yellow-400/20 text-yellow-300 border-yellow-400/40'
                        : slot === 'afternoon'
                          ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                          : 'bg-zinc-800 text-zinc-200 border-zinc-700';

                      return (
                        <div
                          key={slot}
                          id={`card-${act.id}`}
                          onClick={() => handleSelectActivity(act)}
                          className={`bg-[#121214] rounded-2xl border overflow-hidden cursor-pointer transition-all duration-200 group ${isHighlighted
                            ? 'border-yellow-400 ring-2 ring-yellow-400/40 bg-[#18181b] shadow-xl'
                            : 'border-zinc-800 hover:border-zinc-700 hover:bg-[#18181b]'
                            }`}
                        >
                          {/* Place Image Banner with graceful fallback */}
                          <div className="relative h-40 w-full overflow-hidden bg-black">
                            {act.imageUrl ? (
                              <img
                                src={act.imageUrl}
                                alt={act.name}
                                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                loading="lazy"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = destMeta.bannerUrl || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';
                                }}
                              />
                            ) : (
                              <div className="w-full h-full bg-[#09090b] flex items-center justify-center">
                                <MapPin className="w-8 h-8 text-yellow-400/40" />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
                            <span className={`absolute bottom-3 left-4 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border ${slotBadgeColor}`}>
                              {slotLabel}
                            </span>
                          </div>

                          <div className="p-5 space-y-3">
                            <div className="flex items-start justify-between">
                              <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider">
                                {act.category}
                              </span>

                              <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                                <button
                                  onClick={() => handleReplaceActivity(day.dayNumber - 1, slot)}
                                  title="Replace activity with alternative"
                                  className="p-1.5 rounded-lg text-zinc-400 hover:text-yellow-300 hover:bg-zinc-800 transition text-xs flex items-center gap-1"
                                >
                                  <RefreshCw className="w-3.5 h-3.5" />
                                  <span className="text-[10px] hidden sm:inline font-semibold">Alternative</span>
                                </button>
                                <button
                                  onClick={() => handleDeleteActivity(day.dayNumber - 1, slot)}
                                  title="Remove activity slot"
                                  className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-rose-950/30 transition text-xs"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <h3 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
                                {act.name}
                              </h3>
                              <div className="flex items-center gap-3 text-xs text-zinc-400">
                                <span className="flex items-center gap-1 font-medium">
                                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                                  {act.visitDurationMinutes} mins
                                </span>
                                <span className="flex items-center font-bold text-zinc-200">
                                  ₹{act.estimatedCostInr} / person
                                </span>
                              </div>
                            </div>

                            <p className="text-xs text-zinc-400 leading-relaxed">
                              {act.description}
                            </p>

                            {act.tips && act.tips.length > 0 && (
                              <div className="text-[11px] text-zinc-300 p-2.5 rounded-xl bg-[#09090b] border border-zinc-800 flex items-start gap-2">
                                <span className="text-yellow-400 font-bold shrink-0">Tip:</span>
                                <span className="leading-relaxed">{act.tips[0]}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Meals */}
                  {day.meals && day.meals.length > 0 && (
                    <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800 space-y-3.5 shadow-md">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-yellow-400" />
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          Day {day.dayNumber} Dining &amp; Culinary Recommendations
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {day.meals.map((meal, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-[#09090b] border border-zinc-800 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white">{meal.name}</span>
                              <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider">{meal.mealType}</span>
                            </div>
                            <p className="text-[11px] text-zinc-400 leading-relaxed">{meal.famousFor}</p>
                            <span className="text-[10px] text-zinc-500 block font-medium">~₹{meal.estimatedCostPerPersonInr} / person</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Map (in Split View) or Weather/Budget Sidebar */}
          {activeView === 'split' ? (
            <div className="lg:col-span-5 space-y-4">
              <div className="sticky top-20 space-y-4">
                <div className="bg-[#121214] p-4 rounded-2xl border border-zinc-800 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                      {activeDayNumber ? `Day ${activeDayNumber} Route Map` : 'All Days Overview'}
                    </span>
                    <span className="text-[10px] text-yellow-400 font-medium">Click markers to scroll</span>
                  </div>
                  <MapViewer
                    destinationCenter={destMeta.coordinates}
                    days={trip.days}
                    destinationName={trip.destinationName}
                    startingLocation={trip.preferences.startingLocationRecord || (trip.preferences.startingLocation ? findDestination(trip.preferences.startingLocation) : null)}
                    selectedDay={activeDayNumber}
                    onSelectDay={(day) => setActiveDayNumber(day)}
                    highlightedPlaceId={highlightedPlaceId}
                    onPlaceSelect={handleMapMarkerClick}
                  />
                </div>

                <WeatherWidget weather={trip.weather} isOffline={isOfflineMode} />
              </div>
            </div>
          ) : (
            /* Timeline View Right Column (Weather & Budget) */
            <div className="space-y-4">
              <WeatherWidget weather={trip.weather} isOffline={isOfflineMode} />

              {/* Budget Snapshot */}
              <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800 space-y-3.5 shadow-md">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-yellow-400" />
                    <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                      Budget Snapshot
                    </h4>
                  </div>
                  <Link href="/budget" className="text-xs text-yellow-400 hover:text-yellow-300 font-semibold">
                    Full Details →
                  </Link>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Total Budget:</span>
                    <span className="font-semibold text-zinc-100">₹{trip.budget.totalBudgetInr.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Estimated Total:</span>
                    <span className="font-bold text-yellow-400">₹{trip.budget.totalEstimatedInr.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Daily Avg / Person:</span>
                    <span className="font-medium text-zinc-200">₹{trip.budget.dailyAveragePerPersonInr.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Place Detail Modal */}
      {selectedPlaceDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#121214] border border-yellow-400/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl space-y-4">
            {selectedPlaceDetail.imageUrl && (
              <div className="relative h-52 w-full">
                <img
                  src={selectedPlaceDetail.imageUrl}
                  alt={selectedPlaceDetail.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedPlaceDetail(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/80 hover:bg-black text-zinc-200 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-400/10 text-yellow-400 border border-yellow-400/25">
                  {selectedPlaceDetail.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
                  <span>⏱️ {selectedPlaceDetail.visitDurationMinutes} mins</span>
                  <span>💰 ₹{selectedPlaceDetail.estimatedCostInr} / person</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{selectedPlaceDetail.name}</h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{selectedPlaceDetail.description}</p>
              {selectedPlaceDetail.address && (
                <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span>{selectedPlaceDetail.address}</span>
                </p>
              )}
              {selectedPlaceDetail.tips && selectedPlaceDetail.tips.length > 0 && (
                <div className="p-3.5 rounded-xl bg-[#09090b] border border-zinc-800 text-xs text-zinc-300">
                  <span className="font-bold text-yellow-400 block mb-1">Local Travel Advice:</span>
                  <p className="leading-relaxed">{selectedPlaceDetail.tips.join(' • ')}</p>
                </div>
              )}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedPlaceDetail(null)}
                  className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold rounded-xl transition shadow-md"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

