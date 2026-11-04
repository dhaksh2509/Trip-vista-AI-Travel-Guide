'use client';

import React, { useState, useEffect } from 'react';
import { User, Settings, Database, Trash2, ShieldCheck, Check, Sparkles, Wifi } from 'lucide-react';
import { OfflineSyncManager } from '@/lib/offline/syncManager';
import { getOfflineDb } from '@/lib/offline/db';

export default function ProfilePage() {
  const [offlineCount, setOfflineCount] = useState<number>(0);
  const [isCleared, setIsCleared] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string>('INR (₹)');
  const [preferredPace, setPreferredPace] = useState<string>('Moderate');
  const [savedSettings, setSavedSettings] = useState<boolean>(false);

  useEffect(() => {
    checkStorage();
  }, []);

  const checkStorage = async () => {
    try {
      const trips = await OfflineSyncManager.getOfflineTrips();
      setOfflineCount(trips.length);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClearOfflineStorage = async () => {
    if (!confirm('Clear all offline downloaded trips from your browser IndexedDB database?')) {
      return;
    }
    try {
      const db = getOfflineDb();
      if (db) {
        await db.trips.clear();
        setOfflineCount(0);
        setIsCleared(true);
        setTimeout(() => setIsCleared(false), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSettings(true);
    setTimeout(() => setSavedSettings(false), 2500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-6">
      {/* Header Profile Identity */}
      <div className="flex items-center gap-4 pb-6 border-b border-zinc-800">
        <div className="w-16 h-16 rounded-2xl bg-[#121214] border-2 border-yellow-400 flex items-center justify-center text-yellow-400 font-black text-2xl shadow-xl">
          DT
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-white tracking-tight">Demo Traveler</h1>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              Verified
            </span>
          </div>
          <p className="text-xs text-zinc-400">demo.traveler@tripvista.com • Personal TripVista Account</p>
        </div>
      </div>

      {/* Preferences Form */}
      <form onSubmit={handleSavePreferences} className="bg-[#121214] p-6 sm:p-7 rounded-2xl border border-zinc-800 space-y-6 shadow-xl">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
          <Settings className="w-4 h-4 text-yellow-400" />
          <h2 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
            Traveler Preferences
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
          <div className="space-y-2">
            <label className="text-zinc-300 font-bold">Preferred Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#09090b] border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-colors"
            >
              <option value="INR (₹)">Indian Rupee (₹)</option>
              <option value="USD ($)">US Dollar ($)</option>
              <option value="EUR (€)">Euro (€)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-zinc-300 font-bold">Default Travel Pace</label>
            <select
              value={preferredPace}
              onChange={(e) => setPreferredPace(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#09090b] border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-yellow-400 transition-colors"
            >
              <option value="Relaxed">Relaxed (More leisure time per site)</option>
              <option value="Moderate">Moderate (Standard balanced schedule)</option>
              <option value="Fast-Paced">Fast-Paced (Cover maximum highlights)</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition shadow-sm active:translate-y-0.5"
          >
            Save Preferences
          </button>
          {savedSettings && (
            <span className="text-xs text-yellow-400 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4 text-yellow-400" />
              <span>Preferences saved successfully!</span>
            </span>
          )}
        </div>
      </form>

      {/* Offline Storage Manager */}
      <div className="bg-[#121214] p-6 sm:p-7 rounded-2xl border border-zinc-800 space-y-5 shadow-xl">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
          <Database className="w-4 h-4 text-yellow-400" />
          <h2 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
            Browser IndexedDB Storage Vault
          </h2>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div>
            <p className="text-zinc-200 font-bold">Locally Cached Itineraries</p>
            <p className="text-zinc-400 text-[11px] mt-0.5">Dexie.js database instance in client-side IndexedDB storage</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold">
            {offlineCount} trips stored
          </span>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={handleClearOfflineStorage}
            className="px-4 py-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-800/60 text-xs font-bold flex items-center gap-1.5 transition"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Offline Cache</span>
          </button>

          {isCleared && (
            <span className="text-xs text-yellow-400 font-medium">Offline database cache cleared!</span>
          )}
        </div>
      </div>
    </div>
  );
}

