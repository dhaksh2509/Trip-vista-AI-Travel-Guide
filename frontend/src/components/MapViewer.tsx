'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ItineraryDay } from '@/types';
import { Clock, IndianRupee, MapPin } from 'lucide-react';
import { MapMarkerItem } from './LeafletMapInner';

const LeafletMapInner = dynamic(() => import('./LeafletMapInner'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] rounded-2xl bg-[#09090b] border border-zinc-800 flex flex-col items-center justify-center space-y-2">
      <div className="w-6 h-6 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin" />
      <p className="text-xs text-zinc-400">Loading interactive map...</p>
    </div>
  )
});

interface MapViewerProps {
  destinationCenter: { lat: number; lng: number };
  days: ItineraryDay[];
  destinationName: string;
  startingLocation?: {
    name: string;
    coordinates?: { lat: number; lng: number };
    state?: string;
  } | null;
  selectedDay?: number | null;
  onSelectDay?: (day: number | null) => void;
  highlightedPlaceId?: string | null;
  onPlaceSelect?: (place: MapMarkerItem) => void;
}

export default function MapViewer({
  destinationCenter,
  days,
  destinationName,
  startingLocation,
  selectedDay: controlledDay,
  onSelectDay,
  highlightedPlaceId,
  onPlaceSelect
}: MapViewerProps) {
  const [internalDay, setInternalDay] = useState<number | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<MapMarkerItem | null>(null);

  const activeDay = controlledDay !== undefined ? controlledDay : internalDay;

  const handleDayChange = (day: number | null) => {
    if (onSelectDay) {
      onSelectDay(day);
    } else {
      setInternalDay(day);
    }
    setSelectedPlace(null);
  };

  const handlePlaceClick = (place: MapMarkerItem) => {
    setSelectedPlace(place);
    if (onPlaceSelect) onPlaceSelect(place);
  };

  // Build markers strictly from the itinerary days (source of truth)
  const seenIds = new Set<string>();
  const markers: MapMarkerItem[] = [];

  // Prepend starting location origin pin if provided
  if (startingLocation && startingLocation.coordinates) {
    markers.push({
      id: 'origin-start-location-pin',
      name: `Departure: ${startingLocation.name}`,
      category: `Starting Location (${startingLocation.state || 'Origin'})`,
      description: `Starting departure point for your journey to ${destinationName}`,
      lat: startingLocation.coordinates.lat,
      lng: startingLocation.coordinates.lng,
      dayNumber: 1, // Visible on Day 1 and All Days
      type: 'origin'
    });
  }

  days.forEach((d) => {
    const slots = [
      { activity: d.morning, suffix: 'm' },
      { activity: d.afternoon, suffix: 'a' },
      { activity: d.evening, suffix: 'e' }
    ];

    slots.forEach(({ activity, suffix }) => {
      if (!activity || !activity.coordinates) return;

      const markerId = `${activity.id}-${suffix}`;
      if (seenIds.has(markerId)) return;
      seenIds.add(markerId);

      markers.push({
        id: markerId,
        name: activity.name,
        category: activity.category,
        description: activity.description,
        lat: activity.coordinates.lat,
        lng: activity.coordinates.lng,
        imageUrl: activity.imageUrl,
        durationMinutes: activity.visitDurationMinutes,
        costInr: activity.estimatedCostInr,
        dayNumber: d.dayNumber,
        type: 'attraction'
      });
    });

    if (d.meals) {
      d.meals.forEach((m, idx) => {
        if (!m || !m.coordinates) return;
        const mealId = `${m.id}-d${d.dayNumber}-${idx}`;
        if (seenIds.has(mealId)) return;
        seenIds.add(mealId);

        markers.push({
          id: mealId,
          name: m.name,
          category: `Dining (${m.cuisine})`,
          description: `Famous for: ${m.famousFor}`,
          lat: m.coordinates.lat,
          lng: m.coordinates.lng,
          costInr: m.estimatedCostPerPersonInr,
          dayNumber: d.dayNumber,
          type: 'restaurant'
        });
      });
    }
  });

  // If highlightedPlaceId changes from prop, keep selectedPlace in sync
  useEffect(() => {
    if (highlightedPlaceId) {
      const match = markers.find(m => m.id === highlightedPlaceId || m.id.includes(highlightedPlaceId) || highlightedPlaceId.includes(m.id));
      if (match) setSelectedPlace(match);
    }
  }, [highlightedPlaceId, markers]);

  const filteredMarkers = activeDay !== null
    ? markers.filter(m => m.dayNumber === activeDay)
    : markers;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Map Control Sidebar */}
      <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800 space-y-4 lg:order-1 order-2 shadow-card">
        <div className="border-b border-zinc-800 pb-3">
          <h3 className="text-sm font-bold text-white mb-0.5">{destinationName} Route Map</h3>
          <p className="text-xs text-zinc-400">Day-wise attractions, transit routes, and local dining</p>
        </div>

        {/* Day Filter Pills */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-200">Filter By Day:</span>
            <span className="text-[11px] font-mono text-yellow-400 px-1.5 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/20">
              {filteredMarkers.length} place(s)
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => handleDayChange(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeDay === null
                  ? 'bg-yellow-400 text-black font-bold shadow-xs'
                  : 'bg-[#09090b] text-zinc-300 hover:text-white border border-zinc-800 hover:bg-zinc-800'
              }`}
            >
              All Days ({days.length})
            </button>
            {days.map((d) => (
              <button
                key={d.dayNumber}
                onClick={() => handleDayChange(d.dayNumber)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeDay === d.dayNumber
                    ? 'bg-yellow-400 text-black font-bold shadow-xs'
                    : 'bg-[#09090b] text-zinc-300 hover:text-white border border-zinc-800 hover:bg-zinc-800'
                }`}
              >
                Day {d.dayNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="pt-3 border-t border-zinc-800 space-y-2 text-xs text-zinc-400">
          <span className="font-semibold text-zinc-200 block text-[11px]">Route Legend:</span>
          {startingLocation && (
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400 shrink-0" />
              <span>Origin Departure ({startingLocation.name})</span>
            </div>
          )}
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500 shrink-0" />
            <span>Attractions &amp; Sightseeing</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
            <span>Regional Dining &amp; Food</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-5 border-t-2 border-dashed border-yellow-400 shrink-0" />
            <span>Sequenced Transit Path</span>
          </div>
        </div>

        {/* Places List for Active Day */}
        <div className="pt-3 border-t border-zinc-800 space-y-2 max-h-64 overflow-y-auto">
          <span className="font-semibold text-zinc-200 text-xs block">
            {activeDay ? `Day ${activeDay} Places (${filteredMarkers.length}):` : `All Sequenced Places (${filteredMarkers.length}):`}
          </span>
          {filteredMarkers.map((m) => (
            <div
              key={m.id}
              onClick={() => handlePlaceClick(m)}
              className={`p-2.5 rounded-lg text-xs cursor-pointer transition-colors border ${
                selectedPlace?.id === m.id
                  ? 'bg-yellow-400/15 border-yellow-400 text-white shadow-xs'
                  : 'bg-[#09090b] border-zinc-800 hover:border-zinc-700 text-zinc-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold truncate text-white">{m.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-yellow-400 font-mono shrink-0 ml-1">
                  {m.type === 'origin' ? 'START' : `D${m.dayNumber}`}
                </span>
              </div>
              <div className="text-[10px] text-zinc-400 mt-0.5 truncate">{m.category}</div>
            </div>
          ))}
          {filteredMarkers.length === 0 && (
            <p className="text-xs text-zinc-500 italic py-2">No places found for this filter.</p>
          )}
        </div>
      </div>

      {/* Map Canvas (2/3 on Desktop) */}
      <div className="relative w-full h-[500px] lg:h-[580px] lg:col-span-2 lg:order-2 order-1">
        <LeafletMapInner
          center={destinationCenter}
          markers={markers}
          selectedDay={activeDay}
          highlightedPlaceId={selectedPlace?.id || highlightedPlaceId}
          onMarkerClick={handlePlaceClick}
        />

        {/* Selected Place Overlay Card */}
        {selectedPlace && (
          <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-sm z-[1000] p-4 bg-[#121214]/95 rounded-xl border border-yellow-400/40 shadow-dropdown backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400">
                  {selectedPlace.dayNumber ? `Day ${selectedPlace.dayNumber} • ` : ''}{selectedPlace.category}
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">{selectedPlace.name}</h4>
              </div>
              <button
                onClick={() => setSelectedPlace(null)}
                className="text-zinc-400 hover:text-white text-xs px-2 py-0.5 rounded bg-zinc-800 transition-colors"
              >
                ✕
              </button>
            </div>
            {selectedPlace.imageUrl && (
              <img
                src={selectedPlace.imageUrl}
                alt={selectedPlace.name}
                className="mt-2.5 w-full h-24 object-cover rounded-lg"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            <p className="text-xs text-zinc-300 mt-2 line-clamp-2 leading-relaxed">
              {selectedPlace.description}
            </p>
            <div className="flex items-center space-x-4 mt-3 pt-2 border-t border-zinc-800 text-xs text-zinc-400">
              {selectedPlace.durationMinutes && (
                <div className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  <span>{selectedPlace.durationMinutes} mins</span>
                </div>
              )}
              {selectedPlace.costInr !== undefined && (
                <div className="flex items-center space-x-1">
                  <IndianRupee className="w-3.5 h-3.5 text-yellow-400" />
                  <span>₹{selectedPlace.costInr}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
