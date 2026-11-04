'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import MapViewer from '@/components/MapViewer';
import { TripPlan, ItineraryDay } from '@/types';
import { DESTINATIONS_DATA, findDestination, DestinationMeta } from '@/lib/data/destinations';
import DestinationAutocomplete from '@/components/DestinationAutocomplete';
import { Info } from 'lucide-react';
import Link from 'next/link';

/**
 * Builds 3 sample preview days from destination metadata for the map page
 * when no current trip is loaded. Uses unique attractions per day (no repeats).
 */
function buildPreviewDays(destMeta: DestinationMeta): ItineraryDay[] {
  const attrs = destMeta.attractions;
  const meals = destMeta.meals;
  const count = attrs.length;

  const pick = (idx: number) => attrs[idx % count];

  const day1 = { m: pick(0), a: pick(1), e: pick(2) };
  const day2 = { m: pick(3), a: pick(4), e: pick(5) };
  const day3 = { m: pick(6), a: pick(7), e: pick(8) };

  const mealForDay = (dayIdx: number) => {
    if (!meals || meals.length === 0) return [];
    return [meals[dayIdx % meals.length]];
  };

  return [
    {
      dayNumber: 1,
      title: `Day 1: Arrival & Heritage Landmarks (${day1.m.name})`,
      summary: `Morning at ${day1.m.name}, afternoon at ${day1.a.name}, evening at ${day1.e.name}.`,
      morning: { ...day1.m, timeSlot: 'Morning', id: `${day1.m.id}-preview-d1-m` },
      afternoon: { ...day1.a, timeSlot: 'Afternoon', id: `${day1.a.id}-preview-d1-a` },
      evening: { ...day1.e, timeSlot: 'Evening', id: `${day1.e.id}-preview-d1-e` },
      meals: mealForDay(0),
      estimatedCostInr: (day1.m.estimatedCostInr + day1.a.estimatedCostInr + day1.e.estimatedCostInr),
      travelDistanceKm: 18.5,
      travelTimeMinutes: 45
    },
    {
      dayNumber: 2,
      title: `Day 2: Scenic Viewpoints & Nature (${day2.m.name})`,
      summary: `Morning at ${day2.m.name}, afternoon at ${day2.a.name}, evening at ${day2.e.name}.`,
      morning: { ...day2.m, timeSlot: 'Morning', id: `${day2.m.id}-preview-d2-m` },
      afternoon: { ...day2.a, timeSlot: 'Afternoon', id: `${day2.a.id}-preview-d2-a` },
      evening: { ...day2.e, timeSlot: 'Evening', id: `${day2.e.id}-preview-d2-e` },
      meals: mealForDay(1),
      estimatedCostInr: (day2.m.estimatedCostInr + day2.a.estimatedCostInr + day2.e.estimatedCostInr),
      travelDistanceKm: 22.0,
      travelTimeMinutes: 55
    },
    {
      dayNumber: 3,
      title: `Day 3: Cultural Markets & Local Flavors (${day3.m.name})`,
      summary: `Morning at ${day3.m.name}, afternoon at ${day3.a.name}, evening at ${day3.e.name}.`,
      morning: { ...day3.m, timeSlot: 'Morning', id: `${day3.m.id}-preview-d3-m` },
      afternoon: { ...day3.a, timeSlot: 'Afternoon', id: `${day3.a.id}-preview-d3-a` },
      evening: { ...day3.e, timeSlot: 'Evening', id: `${day3.e.id}-preview-d3-e` },
      meals: mealForDay(2),
      estimatedCostInr: (day3.m.estimatedCostInr + day3.a.estimatedCostInr + day3.e.estimatedCostInr),
      travelDistanceKm: 15.0,
      travelTimeMinutes: 35
    }
  ];
}

function MapContent() {
  const searchParams = useSearchParams();
  const [currentTrip, setCurrentTrip] = useState<TripPlan | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const destParam = searchParams.get('destination');
      const startParam = searchParams.get('start');
      if (startParam) setSelectedOrigin(startParam);

      const stored = localStorage.getItem('ai_travel_current_trip');
      let loadedTrip: TripPlan | null = null;
      if (stored) {
        try {
          loadedTrip = JSON.parse(stored);
          setCurrentTrip(loadedTrip);
          if (!startParam && loadedTrip?.preferences?.startingLocation) {
            setSelectedOrigin(loadedTrip.preferences.startingLocation);
          }
        } catch (e) {
          console.error(e);
        }
      }

      if (destParam) {
        setSelectedDestination(destParam);
      } else if (loadedTrip && loadedTrip.destinationName) {
        setSelectedDestination(loadedTrip.destinationName);
      } else {
        const firstKey = Object.keys(DESTINATIONS_DATA)[0];
        setSelectedDestination(DESTINATIONS_DATA[firstKey]?.name || 'Araku Valley');
      }
    }
  }, [searchParams]);

  // Wait for destination to be resolved before rendering map
  if (!selectedDestination) {
    return (
      <div className="py-20 flex flex-col items-center justify-center space-y-2">
        <div className="w-6 h-6 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin" />
        <p className="text-xs text-zinc-400">Loading map...</p>
      </div>
    );
  }

  const destMeta = findDestination(selectedDestination);

  // Check if current loaded trip or any saved trip matches selected destination
  let matchingTrip: TripPlan | null = null;
  if (currentTrip && currentTrip.destinationName.toLowerCase() === destMeta.name.toLowerCase()) {
    matchingTrip = currentTrip;
  } else if (typeof window !== 'undefined') {
    try {
      const allTrips: TripPlan[] = JSON.parse(localStorage.getItem('ai_travel_trips') || '[]');
      matchingTrip = allTrips.find(t => t.destinationName.toLowerCase() === destMeta.name.toLowerCase()) || null;
    } catch (e) {
      console.error(e);
    }
  }

  // Resolve starting location if any
  const originName = selectedOrigin || matchingTrip?.preferences?.startingLocation;
  const originMeta = originName ? findDestination(originName) : null;

  // Use real trip days if available; otherwise generate clean preview days
  const displayDays: ItineraryDay[] = (matchingTrip && matchingTrip.days && matchingTrip.days.length > 0)
    ? matchingTrip.days
    : buildPreviewDays(destMeta);

  return (
    <div className="space-y-4 py-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
              Geospatial Route Explorer
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            {destMeta.name} Route Map
          </h1>
          <p className="text-xs text-zinc-400">
            Interactive day-wise routes, sequenced attractions, and regional dining waypoints.
          </p>
        </div>

        {/* Destination Switcher with Live Autocomplete */}
        <div className="w-full sm:w-80">
          <DestinationAutocomplete
            value={destMeta.name}
            onChange={(val) => {
              if (val && val.trim().length > 0) {
                setSelectedDestination(val.trim());
              }
            }}
            placeholder="Switch destination across India..."
          />
        </div>
      </div>

      {/* Map Component */}
      <MapViewer
        destinationCenter={destMeta.coordinates}
        days={displayDays}
        destinationName={destMeta.name}
        startingLocation={originMeta ? { name: originMeta.name, coordinates: originMeta.coordinates, state: originMeta.state } : null}
      />

      {/* Instructions & Help */}
      <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800 text-xs text-zinc-300 flex items-start space-x-3 shadow-card">
        <Info className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-white">Geospatial Explorer Navigation:</span>
          <p className="mt-0.5 text-zinc-400 leading-relaxed text-[11px]">
            Click any pin to inspect visit duration, entry cost, and activity details. Filter by day numbers in the sidebar to review day-by-day transit sequences.
            {!matchingTrip && (
              <span className="text-yellow-400 ml-1">
                ✦ Preview mode — customize and save this route in the <Link href={`/planner?destination=${encodeURIComponent(destMeta.name)}`} className="underline hover:text-yellow-300 font-bold">Trip Planner</Link>.
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MapPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-zinc-400">Loading map page...</div>}>
      <MapContent />
    </Suspense>
  );
}
