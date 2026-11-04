'use client';

import React, { useState, useEffect } from 'react';
import BudgetChart from '@/components/BudgetChart';
import { TripPlan, BudgetBreakdown } from '@/types';
import { 
  Sparkles, AlertTriangle, CheckCircle, TrendingDown, 
  Building, Utensils, Car, Ticket, ShoppingBag, 
  Info, RefreshCw, IndianRupee
} from 'lucide-react';
import Link from 'next/link';
import { findDestination } from '@/lib/data/destinations';

// ── Transport cost estimates by mode ────────────────────────────────────────
const TRANSPORT_RATE: Record<string, number> = {
  'Personal Car / Rental': 10,   // ₹/km (fuel + tolls average)
  'Train': 3,                     // ₹/km
  'Public Bus / Transit': 1.5,    // ₹/km (state bus)
  'Flight': 4500,                 // flat one-way estimate per person
};

// ── Accommodation rate per person per night ──────────────────────────────────
const ACCOMMODATION_TIER: Record<string, number> = {
  budget: 600,     // hostel / budget hotel
  mid: 1500,       // 3-star hotel
  premium: 3500,   // 4-5 star / resort
};

// ── Food cost per person per day ─────────────────────────────────────────────
const FOOD_TIER: Record<string, number> = {
  budget: 300,
  mid: 600,
  premium: 1200,
};

function getTier(budgetPerPersonPerDay: number): 'budget' | 'mid' | 'premium' {
  if (budgetPerPersonPerDay < 500) return 'budget';
  if (budgetPerPersonPerDay < 2000) return 'mid';
  return 'premium';
}

interface ComputedCosts {
  accommodation: number;
  food: number;
  localTransport: number;
  intercityTransport: number;
  activities: number;
  shopping: number;
  contingency: number;
  total: number;
  tier: string;
  perPersonPerDay: number;
  isWithinBudget: boolean;
  overrunAmount: number;
}

function computeTripCosts(trip: TripPlan): ComputedCosts {
  const { preferences, days } = trip;
  const { durationDays, travelersCount, budgetInr, transportPreference, startingLocation, startingLocationRecord } = preferences;

  // Actual activities cost from itinerary
  let activitiesCost = 0;
  for (const day of days) {
    activitiesCost += (
      (day.morning?.estimatedCostInr || 0) +
      (day.afternoon?.estimatedCostInr || 0) +
      (day.evening?.estimatedCostInr || 0)
    ) * travelersCount;
  }

  const perPersonPerDay = budgetInr / (durationDays * travelersCount);
  const tier = getTier(perPersonPerDay);

  // Accommodation
  const accommodation = ACCOMMODATION_TIER[tier] * travelersCount * durationDays;

  // Food
  const food = FOOD_TIER[tier] * travelersCount * durationDays;

  // Intercity transport (calculated from origin to destination if starting location is provided)
  const startMeta = startingLocationRecord || (startingLocation ? findDestination(startingLocation) : undefined);
  const destMeta = findDestination(preferences.destination);

  let intercityDistanceKm = 100;
  if (startMeta && startMeta.coordinates && destMeta && destMeta.coordinates) {
    const R = 6371;
    const dLat = (destMeta.coordinates.lat - startMeta.coordinates.lat) * (Math.PI / 180);
    const dLon = (destMeta.coordinates.lng - startMeta.coordinates.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(startMeta.coordinates.lat * (Math.PI / 180)) *
        Math.cos(destMeta.coordinates.lat * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    intercityDistanceKm = Math.round(R * c);
  }

  const roundTripKm = intercityDistanceKm * 2;
  let intercityTransport = 0;
  if (transportPreference === 'Flight') {
    intercityTransport = TRANSPORT_RATE['Flight'] * travelersCount * 2;
  } else {
    intercityTransport = Math.round(TRANSPORT_RATE[transportPreference] * roundTripKm * travelersCount);
  }

  // Local transport between attractions
  const totalLocalKm = days.reduce((s, d) => s + (d.travelDistanceKm || 15), 0);
  const localRate = transportPreference === 'Flight' ? TRANSPORT_RATE['Personal Car / Rental'] : TRANSPORT_RATE[transportPreference];
  const localTransport = Math.round(totalLocalKm * localRate * travelersCount);

  // Shopping allowance (5%)
  const shopping = Math.round(budgetInr * 0.05);

  // Contingency (3%)
  const contingency = Math.round(budgetInr * 0.03);

  const total = accommodation + food + intercityTransport + localTransport + activitiesCost + shopping + contingency;
  const isWithinBudget = total <= budgetInr;
  const overrunAmount = Math.max(0, total - budgetInr);

  return {
    accommodation,
    food,
    localTransport,
    intercityTransport,
    activities: activitiesCost,
    shopping,
    contingency,
    total,
    tier,
    perPersonPerDay,
    isWithinBudget,
    overrunAmount
  };
}

function SavingsTip({ text }: { text: string }) {
  return (
    <li className="flex items-start space-x-2 text-xs text-zinc-300">
      <span className="text-yellow-400 font-bold shrink-0 mt-0.5">•</span>
      <span>{text}</span>
    </li>
  );
}

export default function BudgetPage() {
  const [currentTrip, setCurrentTrip] = useState<TripPlan | null>(null);
  const [optimizerBudget, setOptimizerBudget] = useState<number | ''>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ai_travel_current_trip');
      if (stored) {
        try {
          const trip: TripPlan = JSON.parse(stored);
          setCurrentTrip(trip);
          setOptimizerBudget(trip.preferences.budgetInr);
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const computed: ComputedCosts | null = currentTrip ? computeTripCosts(currentTrip) : null;

  const activeBudget: BudgetBreakdown = currentTrip ? currentTrip.budget : {
    accommodationInr: 6000,
    foodInr: 3600,
    transportationInr: 2500,
    activitiesInr: 1500,
    shoppingInr: 900,
    otherInr: 500,
    totalEstimatedInr: 15000,
    totalBudgetInr: 15000,
    remainingBudgetInr: 0,
    dailyAveragePerPersonInr: 2500,
    isWithinBudget: true,
    savingsTips: [
      'Book homestays or budget hotels early to save up to 40% on lodging.',
      'Dine at authentic local dhabas and regional eateries for high flavor and low cost.',
      'Use state bus transit or train connections for cost-efficient intercity transfers.'
    ]
  };

  const optimizedCosts: ComputedCosts | null = (() => {
    if (!currentTrip || optimizerBudget === '' || Number(optimizerBudget) <= 0) return null;
    const testTrip: TripPlan = {
      ...currentTrip,
      preferences: {
        ...currentTrip.preferences,
        budgetInr: Number(optimizerBudget)
      }
    };
    return computeTripCosts(testTrip);
  })();

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
            <IndianRupee className="w-3.5 h-3.5 text-yellow-400" />
            <span>Financial Estimator &amp; Optimizer</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Trip Budget &amp; Cost Optimizer
          </h1>
          <p className="text-xs text-zinc-400">
            {currentTrip
              ? `Active Itinerary: ${currentTrip.destinationName} · ${currentTrip.preferences.durationDays} Days · ${currentTrip.preferences.travelersCount} Person(s)${currentTrip.preferences.startingLocation ? ` · From ${currentTrip.preferences.startingLocation}` : ''}`
              : 'Detailed expenditure projections and real-time budget optimization.'}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Link
            href="/chat"
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition-colors shadow-accent"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modify via AI Chat</span>
          </Link>
          {currentTrip && (
            <Link
              href={`/itinerary/${currentTrip.id}`}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-[#09090b] hover:bg-zinc-800 text-zinc-200 text-xs font-medium border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <span>View Itinerary</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </div>

      {/* ── BudgetChart (Overview & Progress Meters) ── */}
      <BudgetChart budget={activeBudget} currency="₹" />

      {/* ── Detailed Cost Estimation (computed from actual trip data) ── */}
      {computed && currentTrip && (
        <div className="bg-[#121214] p-5 sm:p-6 rounded-2xl border border-zinc-800 space-y-4 shadow-card">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center space-x-2">
              <IndianRupee className="w-4 h-4 text-yellow-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Detailed Cost Breakdown
              </h2>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 font-bold uppercase">
              {computed.tier} Tier
            </span>
          </div>

          {/* Cost Transparency Note */}
          <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#09090b] border border-zinc-800 text-[11px] text-zinc-400 leading-relaxed">
            <Info className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-zinc-200">Cost Transparency Note:</strong> Attraction entrance fees are extracted directly from your itinerary. Lodging, food, and transit figures are modeled estimates based on regional rates.
            </span>
          </div>

          <div className="divide-y divide-zinc-800/80 text-xs">
            {[
              { label: 'Accommodation', icon: Building, value: computed.accommodation, note: `${currentTrip.preferences.durationDays} nights × ${currentTrip.preferences.travelersCount} person(s)` },
              { label: 'Food & Dining', icon: Utensils, value: computed.food, note: `Based on ${computed.tier}-tier regional daily meal averages` },
              { label: 'Intercity Transport', icon: Car, value: computed.intercityTransport, note: `${currentTrip.preferences.transportPreference} round-trip transit${currentTrip.preferences.startingLocation ? ` (From ${currentTrip.preferences.startingLocation})` : ''}` },
              { label: 'Local Transport', icon: Car, value: computed.localTransport, note: `~${Math.round(currentTrip.days.reduce((s,d)=>s+(d.travelDistanceKm||15),0))} km across ${currentTrip.preferences.durationDays} days` },
              { label: 'Attraction Entry Fees', icon: Ticket, value: computed.activities, note: 'Sourced directly from verified itinerary tickets' },
              { label: 'Shopping Allowance', icon: ShoppingBag, value: computed.shopping, note: '5% of target budget' },
              { label: 'Contingency Reserve', icon: AlertTriangle, value: computed.contingency, note: '3% safety buffer for unexpected expenses' },
            ].map(({ label, icon: Icon, value, note }) => (
              <div key={label} className="py-2.5 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5 min-w-0">
                  <Icon className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-zinc-200 font-medium">{label}</span>
                    <span className="block text-[10px] text-zinc-400 truncate">{note}</span>
                  </div>
                </div>
                <span className="font-semibold text-white font-mono shrink-0">₹{value.toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-sm font-bold">
            <span className="text-white">Estimated Total Expenditure</span>
            <span className={`font-mono ${computed.isWithinBudget ? 'text-yellow-400' : 'text-rose-400'}`}>
              ₹{computed.total.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Budget status alert */}
          {computed.isWithinBudget ? (
            <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300">
              <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>
                Plan is strictly within budget! You have a surplus reserve of <strong>₹{(currentTrip.preferences.budgetInr - computed.total).toLocaleString('en-IN')}</strong>.
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-rose-950/30 border border-rose-500/30 text-xs text-rose-300">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>
                <strong>Plan exceeds budget by ₹{computed.overrunAmount.toLocaleString('en-IN')}.</strong> Use the optimizer below to model cost reductions.
              </span>
            </div>
          )}
        </div>
      )}

      {/* ── Interactive Budget Optimizer ── */}
      {currentTrip && (
        <div className="bg-[#121214] p-5 sm:p-6 rounded-2xl border border-zinc-800 space-y-4 shadow-card">
          <div className="flex items-center space-x-2 border-b border-zinc-800 pb-3">
            <TrendingDown className="w-4 h-4 text-yellow-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Real-Time Budget Optimizer</h2>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Test alternative budget caps below to evaluate expense re-allocation, surplus buffers, and actionable savings levers.
          </p>

          <div className="flex items-center space-x-3">
            <span className="text-yellow-400 font-bold text-sm shrink-0 font-mono">₹</span>
            <input
              type="number"
              min="1"
              step="1"
              value={optimizerBudget}
              onChange={(e) => setOptimizerBudget(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="Enter test budget amount..."
              className="flex-1 px-3 py-2 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 transition-colors"
            />
            <button
              onClick={() => setOptimizerBudget(currentTrip.preferences.budgetInr)}
              className="px-3 py-2 rounded-lg bg-[#09090b] hover:bg-zinc-800 text-zinc-300 text-xs border border-zinc-800 flex items-center space-x-1.5 transition-colors"
              title="Reset to original budget"
            >
              <RefreshCw className="w-3.5 h-3.5 text-yellow-400" />
              <span>Reset</span>
            </button>
          </div>

          {optimizedCosts && (
            <div className="space-y-4 pt-1">
              {/* Comparison Metric Cards */}
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#09090b] p-3 rounded-xl border border-zinc-800 space-y-1">
                  <p className="text-zinc-400 text-[11px]">Test Target</p>
                  <p className="font-bold text-white font-mono">₹{Number(optimizerBudget).toLocaleString('en-IN')}</p>
                </div>
                <div className="bg-[#09090b] p-3 rounded-xl border border-zinc-800 space-y-1">
                  <p className="text-zinc-400 text-[11px]">Estimated Cost</p>
                  <p className={`font-bold font-mono ${optimizedCosts.isWithinBudget ? 'text-emerald-400' : 'text-rose-400'}`}>
                    ₹{optimizedCosts.total.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-[#09090b] p-3 rounded-xl border border-zinc-800 space-y-1">
                  <p className="text-zinc-400 text-[11px]">{optimizedCosts.isWithinBudget ? 'Surplus' : 'Shortfall'}</p>
                  <p className={`font-bold font-mono ${optimizedCosts.isWithinBudget ? 'text-emerald-400' : 'text-rose-400'}`}>
                    ₹{(optimizedCosts.isWithinBudget
                      ? Number(optimizerBudget) - optimizedCosts.total
                      : optimizedCosts.overrunAmount
                    ).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Actionable Savings Levers */}
              <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800 space-y-2.5">
                <p className="text-xs font-semibold text-zinc-200">Recommended Cost Levers:</p>
                <ul className="space-y-2">
                  <SavingsTip text={`Switch local transit from ${currentTrip.preferences.transportPreference} to public buses / auto-rickshaws to reduce local commuting expenses by up to 50% in ${currentTrip.destinationName}.`} />
                  <SavingsTip text="Book boutique homestays or heritage guesthouses rather than commercial luxury hotels to save 30-45% on accommodation." />
                  <SavingsTip text={`Explore iconic regional dhabas and local eateries in ${currentTrip.destinationName} for authentic meals at a fraction of tourist restaurant prices.`} />
                  <SavingsTip text="Several scenic viewpoints, bazaars, and temples require zero entrance fees, allowing flexible free slots in your itinerary." />
                  {!optimizedCosts.isWithinBudget && (
                    <SavingsTip text={`To balance your budget of ₹${Number(optimizerBudget).toLocaleString('en-IN')}, consider shortening your trip by ${Math.ceil(optimizedCosts.overrunAmount / optimizedCosts.perPersonPerDay)} day(s) or adding ₹${optimizedCosts.overrunAmount.toLocaleString('en-IN')} to the budget.`} />
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Empty state when no trip is loaded */}
      {!currentTrip && (
        <div className="bg-[#121214] p-8 rounded-2xl border border-zinc-800 text-center space-y-4 max-w-md mx-auto shadow-card">
          <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mx-auto text-yellow-400">
            <IndianRupee className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">No Active Trip Found</h3>
            <p className="text-zinc-400 text-xs mt-1">Generate a customized itinerary to activate detailed cost estimation and the real-time budget optimizer.</p>
          </div>
          <Link
            href="/planner"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-yellow-400 text-black font-bold text-xs hover:bg-yellow-300 transition-colors shadow-accent"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Configure a Trip</span>
          </Link>
        </div>
      )}
    </div>
  );
}
