'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Compass, 
  Calendar, 
  Users, 
  IndianRupee, 
  MapPin, 
  Car, 
  AlertCircle,
  Check,
  Sparkles,
  ArrowRight,
  Gauge
} from 'lucide-react';
import { 
  TravelPreferences, 
  TravelType, 
  TravelPace, 
  TransportPreference, 
  AgentStep 
} from '@/types';
import AgentProgressModal from '@/components/AgentProgressModal';
import { aiOrchestrator } from '@/lib/ai/orchestrator';
import DestinationAutocomplete from '@/components/DestinationAutocomplete';
import { findAllIndiaDestination, DestinationCatalogueItem } from '@/lib/data/allIndiaCatalogue';
import { findDestination } from '@/lib/data/destinations';

const DESTINATION_CATEGORIES = [
  {
    category: 'Popular',
    items: ['Araku Valley', 'Visakhapatnam', 'Hyderabad', 'Goa', 'Delhi', 'Bengaluru']
  },
  {
    category: 'Hill Stations & Nature',
    items: ['Araku Valley', 'Manali', 'Ooty', 'Shimla', 'Munnar', 'Coorg', 'Darjeeling']
  },
  {
    category: 'Heritage & Palaces',
    items: ['Hyderabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Udaipur', 'Varanasi', 'Agra']
  },
  {
    category: 'Coastal & Beaches',
    items: ['Visakhapatnam', 'Goa', 'Pondicherry', 'Alleppey', 'Gokarna']
  }
];

const AVAILABLE_INTERESTS = [
  'Nature',
  'Food',
  'Culture',
  'History',
  'Beaches',
  'Adventure',
  'Shopping',
  'Photography',
  'Temples',
  'Sightseeing'
];

function PlannerForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Form State - IMPORTANT: Number of Days and Budget MUST NOT be pre-filled unless passed by URL!
  const [destination, setDestination] = useState<string>('');
  const [destinationRecord, setDestinationRecord] = useState<DestinationCatalogueItem | null>(null);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('Popular');
  const [durationDays, setDurationDays] = useState<number | ''>('');
  const [travelersCount, setTravelersCount] = useState<number>(1);
  const [budgetInr, setBudgetInr] = useState<number | ''>('');
  const [travelType, setTravelType] = useState<TravelType>('Solo');
  const [interests, setInterests] = useState<string[]>(['Nature', 'Food']);
  const [travelPace, setTravelPace] = useState<TravelPace>('Moderate');
  const [startingLocation, setStartingLocation] = useState<string>('');
  const [startingLocationRecord, setStartingLocationRecord] = useState<DestinationCatalogueItem | null>(null);
  const [transportPreference, setTransportPreference] = useState<TransportPreference>('Personal Car / Rental');

  // Multi-Agent Modal State
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [agentSteps, setAgentSteps] = useState<AgentStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    // Only pre-fill destination if passed as query parameter
    const destParam = searchParams.get('destination');
    if (destParam) {
      setDestination(destParam);
      const match = findAllIndiaDestination(destParam) || (findDestination(destParam) as DestinationCatalogueItem);
      if (match) setDestinationRecord(match);
    }
    // Days and Budget MUST remain EMPTY by default unless explicitly in query!
    const daysParam = searchParams.get('days');
    if (daysParam) {
      const d = parseInt(daysParam, 10);
      if (!isNaN(d) && d > 0) setDurationDays(d);
    }
    const budgetParam = searchParams.get('budget');
    if (budgetParam) {
      const b = parseInt(budgetParam, 10);
      if (!isNaN(b) && b > 0) setBudgetInr(b);
    }
    const typeParam = searchParams.get('type');
    if (typeParam && ['Solo', 'Couple', 'Family', 'Friends'].includes(typeParam)) {
      setTravelType(typeParam as TravelType);
    }
    const startParam = searchParams.get('start');
    if (startParam) {
      setStartingLocation(startParam);
      const match = findAllIndiaDestination(startParam) || (findDestination(startParam) as DestinationCatalogueItem);
      if (match) setStartingLocationRecord(match);
    }
    const transportParam = searchParams.get('transport');
    if (transportParam) {
      setTransportPreference(transportParam as TransportPreference);
    }
  }, [searchParams]);

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      if (interests.length > 1) {
        setInterests(interests.filter(i => i !== interest));
      }
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Validation 1: Destination
    if (!destination.trim()) {
      setValidationError('Please specify your destination.');
      return;
    }

    // Validation 2: Number of Days required & manual input check
    if (durationDays === '' || durationDays === null || durationDays === undefined) {
      setValidationError('Please enter the number of days for your trip.');
      return;
    }
    const daysNum = Number(durationDays);
    if (isNaN(daysNum) || daysNum < 1 || daysNum > 30) {
      setValidationError('Please enter a valid number of days between 1 and 30.');
      return;
    }

    // Validation 3: Budget required & manual input check
    if (budgetInr === '' || budgetInr === null || budgetInr === undefined) {
      setValidationError('Please enter your total trip budget in Rupees.');
      return;
    }
    const budgetNum = Number(budgetInr);
    if (isNaN(budgetNum) || budgetNum <= 0) {
      setValidationError('Please enter a budget greater than zero.');
      return;
    }

    // Validation 4: Travelers count
    if (travelersCount < 1) {
      setValidationError('At least 1 traveler is required.');
      return;
    }

    // Resolve starting location record if not set
    const resolvedStartRecord = startingLocationRecord || (
      startingLocation.trim()
        ? findAllIndiaDestination(startingLocation.trim()) || (findDestination(startingLocation.trim()) as DestinationCatalogueItem)
        : undefined
    );

    const preferences: TravelPreferences = {
      destination: destination.trim(),
      durationDays: daysNum,
      travelersCount,
      budgetInr: budgetNum,
      travelType,
      interests,
      travelPace,
      startingLocation: startingLocation.trim(),
      startingLocationRecord: resolvedStartRecord,
      transportPreference
    };

    setIsGenerating(true);

    try {
      // Execute the multi-agent orchestration pipeline
      const generatedTrip = await aiOrchestrator.generateTrip(preferences, (updatedStep) => {
        setAgentSteps((prev) => {
          const index = prev.findIndex(s => s.id === updatedStep.id);
          if (index >= 0) {
            const copy = [...prev];
            copy[index] = updatedStep;
            return copy;
          }
          return [...prev, updatedStep];
        });
      });

      // Save to localStorage for immediate session persistence across pages
      if (typeof window !== 'undefined') {
        const existingTrips = JSON.parse(localStorage.getItem('ai_travel_trips') || '[]');
        existingTrips.unshift(generatedTrip);
        localStorage.setItem('ai_travel_trips', JSON.stringify(existingTrips));
        localStorage.setItem('ai_travel_current_trip', JSON.stringify(generatedTrip));
      }

      // Small delay so user sees completion before navigating
      setTimeout(() => {
        setIsGenerating(false);
        router.push(`/itinerary/${generatedTrip.id}`);
      }, 700);
    } catch (err: any) {
      console.error('Error in trip generation:', err);
      setValidationError('Unable to synthesize the itinerary. Please verify your inputs and try again.');
      setIsGenerating(false);
    }
  };

  const currentCategoryObj = DESTINATION_CATEGORIES.find(c => c.category === selectedCategoryTab) || DESTINATION_CATEGORIES[0];

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-4">
      {/* Page Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>Multi-Agent Trip Planner</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Plan Your Custom Trip
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400">
          Define your starting location, destination, and budget parameters. Our orchestrator balances attraction sequencing, weather checks, transit routes, and cost allocation.
        </p>
      </div>

      {validationError && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2.5 shadow-sm">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
          <span>{validationError}</span>
        </div>
      )}

      {/* Main Planner Form */}
      <form onSubmit={handleGenerate} noValidate className="space-y-5">
        
        {/* Card 1: Destination & Origin Selection */}
        <div className="bg-[#121214] p-5 sm:p-6 rounded-2xl border border-zinc-800 space-y-4 shadow-card">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-sm font-bold text-white flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span>1. Destination &amp; Origin</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">Select a destination across India or type any city name</p>
          </div>

          <div className="space-y-3">
            <div className="space-y-1.5">
              <label htmlFor="destination-planner-input" className="block text-xs font-semibold text-zinc-200">
                Destination *
              </label>
              <DestinationAutocomplete
                id="destination-planner-input"
                name="destination"
                value={destination}
                onChange={(val, meta) => {
                  setDestination(val);
                  setDestinationRecord(meta || null);
                }}
                placeholder="Search any destination in India (e.g. Mumbai, Ooty, Araku, Manali, Jaipur)..."
                required
              />
            </div>

            {/* Quick Regional Suggestions */}
            <div className="space-y-2 pt-1">
              <div className="flex flex-wrap gap-1 border-b border-zinc-800 pb-2">
                {DESTINATION_CATEGORIES.map((cat) => (
                  <button
                    type="button"
                    key={cat.category}
                    onClick={() => setSelectedCategoryTab(cat.category)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      selectedCategoryTab === cat.category
                        ? 'bg-yellow-400 text-black border border-yellow-400 font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {currentCategoryObj.items.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => {
                      setDestination(d);
                      const m = findAllIndiaDestination(d) || (findDestination(d) as DestinationCatalogueItem);
                      if (m) setDestinationRecord(m);
                    }}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
                      destination.toLowerCase() === d.toLowerCase()
                        ? 'bg-yellow-400 text-black border-yellow-400 font-bold'
                        : 'bg-[#09090b] text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Starting Location (Exact match to Destination autocomplete) */}
            <div className="space-y-1.5 pt-2 border-t border-zinc-800">
              <label htmlFor="starting-location-input" className="block text-xs font-semibold text-zinc-200">
                Starting Location / Origin City
              </label>
              <DestinationAutocomplete
                id="starting-location-input"
                name="startingLocation"
                value={startingLocation}
                onChange={(val, meta) => {
                  setStartingLocation(val);
                  setStartingLocationRecord(meta || null);
                }}
                placeholder="Where are you travelling from? (e.g. Hyderabad, Bengaluru, Chennai, Mumbai)..."
                listHeader="Starting Locations (A–Z)"
              />
              <p className="text-[11px] text-zinc-500">
                Select your origin to calculate direct transit routes, travel distances, and personalized transport cost estimates.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration & Budget */}
        <div className="bg-[#121214] p-5 sm:p-6 rounded-2xl border border-zinc-800 space-y-4 shadow-card">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-sm font-bold text-white flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-yellow-400" />
              <span>2. Timeline &amp; Budget Target</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">Enter your trip duration and available budget</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Number of Days */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-200">
                Number of Days *
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5" />
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={durationDays}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDurationDays(val === '' ? '' : parseInt(val, 10) || '');
                  }}
                  placeholder="Enter days (e.g. 3)"
                  className="w-full pl-9 pr-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs placeholder-zinc-500 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 transition-colors"
                />
              </div>
              <span className="text-[10px] text-zinc-500">Trip duration between 1 and 30 days</span>
            </div>

            {/* Target Budget */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-200">
                Total Budget (₹) *
              </label>
              <div className="relative">
                <span className="w-4 h-4 text-yellow-400 font-bold text-xs absolute left-3 top-2 flex items-center justify-center">₹</span>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={budgetInr}
                  onChange={(e) => {
                    const val = e.target.value;
                    setBudgetInr(val === '' ? '' : parseInt(val, 10) || '');
                  }}
                  placeholder="Enter total budget (e.g. 15000)"
                  className="w-full pl-9 pr-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs placeholder-zinc-500 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 transition-colors"
                />
              </div>
              <span className="text-[10px] text-zinc-500">Covers lodging, meals, transit & tickets</span>
            </div>
          </div>
        </div>

        {/* Card 3: Party & Travel Pace */}
        <div className="bg-[#121214] p-5 sm:p-6 rounded-2xl border border-zinc-800 space-y-4 shadow-card">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-sm font-bold text-white flex items-center space-x-2">
              <Users className="w-4 h-4 text-yellow-400" />
              <span>3. Travel Party &amp; Pacing</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">Specify group configuration and schedule intensity</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Travelers */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-200">
                Travelers Count
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={travelersCount}
                  onChange={(e) => setTravelersCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                  className="w-full pl-9 pr-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 transition-colors"
                />
              </div>
            </div>

            {/* Travel Type */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-200">
                Travel Type
              </label>
              <select
                value={travelType}
                onChange={(e) => setTravelType(e.target.value as TravelType)}
                className="w-full px-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs focus:border-yellow-400 focus:outline-none transition-colors"
              >
                <option value="Solo">Solo Traveler</option>
                <option value="Couple">Couple / Romantic</option>
                <option value="Family">Family with Kids</option>
                <option value="Friends">Friends Group</option>
              </select>
            </div>

            {/* Travel Pace */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-200">
                Travel Pace
              </label>
              <select
                value={travelPace}
                onChange={(e) => setTravelPace(e.target.value as TravelPace)}
                className="w-full px-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs focus:border-yellow-400 focus:outline-none transition-colors"
              >
                <option value="Relaxed">Relaxed (More time per place)</option>
                <option value="Moderate">Moderate (Standard balance)</option>
                <option value="Fast-Paced">Fast-Paced (Cover all sights)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Card 4: Transport & Interests */}
        <div className="bg-[#121214] p-5 sm:p-6 rounded-2xl border border-zinc-800 space-y-4 shadow-card">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-sm font-bold text-white flex items-center space-x-2">
              <Car className="w-4 h-4 text-yellow-400" />
              <span>4. Transportation &amp; Interests</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">Choose your transit mode and attraction themes</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-200">
                Transportation Preference
              </label>
              <select
                value={transportPreference}
                onChange={(e) => setTransportPreference(e.target.value as TransportPreference)}
                className="w-full px-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs focus:border-yellow-400 focus:outline-none transition-colors"
              >
                <option value="Personal Car / Rental">Personal Car / Rental (Road trip)</option>
                <option value="Train">Indian Railways (Train transit)</option>
                <option value="Public Bus / Transit">State Bus / Regional Transit</option>
                <option value="Flight">Flight</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-200">
                Interests &amp; Preferences
              </label>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_INTERESTS.map((item) => {
                  const isSelected = interests.includes(item);
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => toggleInterest(item)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center space-x-1.5 transition-colors ${
                        isSelected
                          ? 'bg-yellow-400 text-black border-yellow-400 font-bold'
                          : 'bg-[#09090b] text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-black" />}
                      <span>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Action */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isGenerating}
            className="w-full py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 disabled:opacity-50 text-black font-bold text-sm transition-all shadow-accent flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>{isGenerating ? 'Synthesizing Itinerary...' : 'Generate Trip Itinerary'}</span>
            {!isGenerating && <ArrowRight className="w-4 h-4 text-black" />}
          </button>
        </div>
      </form>

      {/* Live Agent Progress Modal */}
      <AgentProgressModal
        isOpen={isGenerating}
        steps={agentSteps}
        currentStepIndex={currentStepIndex}
      />
    </div>
  );
}

export default function PlannerPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-zinc-400">Loading travel planner...</div>}>
      <PlannerForm />
    </Suspense>
  );
}
