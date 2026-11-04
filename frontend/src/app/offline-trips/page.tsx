'use client';

import React, { useState, useEffect } from 'react';
import { OfflineTripRecord } from '@/lib/offline/db';
import { OfflineSyncManager } from '@/lib/offline/syncManager';
import { OfflineAIAssistant } from '@/lib/offline/offlineAssistant';
import { 
  WifiOff, 
  Check, 
  Trash2, 
  RefreshCw, 
  Send, 
  ArrowRight,
  Database,
  Compass,
  Bot,
  User,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { findDestination } from '@/lib/data/destinations';

const OFFLINE_QUICK_QUESTIONS = [
  'What is my Day 1 itinerary?',
  'Where are we dining on Day 2?',
  'What is my estimated budget?',
  'What are the key attractions?'
];

export default function OfflineTripsPage() {
  const [offlineTrips, setOfflineTrips] = useState<OfflineTripRecord[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<OfflineTripRecord | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Offline Assistant Chat State
  const [chatInput, setChatInput] = useState<string>('');
  const [chatLog, setChatLog] = useState<{ sender: 'user' | 'assistant'; text: string; time: string }[]>([
    {
      sender: 'assistant',
      text: 'Offline Vault is ready. Ask any question regarding your downloaded itinerary, scheduled places, travel times, or budget without an active internet connection.',
      time: 'Ready'
    }
  ]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    loadOfflineTrips();
  }, []);

  const loadOfflineTrips = async () => {
    setIsLoading(true);
    try {
      const trips = await OfflineSyncManager.getOfflineTrips();
      setOfflineTrips(trips);
      if (trips.length > 0 && !selectedTrip) {
        setSelectedTrip(trips[0]);
      }
    } catch (e) {
      console.error('Error loading offline trips:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteOfflineTrip = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('Remove this itinerary from offline storage? You can re-download it anytime while online.')) {
      return;
    }
    await OfflineSyncManager.deleteOfflineTrip(id);
    const remaining = offlineTrips.filter(t => t.id !== id);
    setOfflineTrips(remaining);
    if (selectedTrip?.id === id) {
      setSelectedTrip(remaining[0] || null);
    }
  };

  const handleOfflineQuery = async (queryText?: string) => {
    const q = queryText || chatInput;
    if (!q.trim() || isProcessing) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChatLog(prev => [...prev, { sender: 'user', text: q.trim(), time: currentTime }]);
    setChatInput('');
    setIsProcessing(true);

    try {
      const response = await OfflineAIAssistant.answerQuestion(q, selectedTrip);
      setChatLog(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: response.answer,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error(err);
      setChatLog(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: 'Unable to query offline database. Ensure an itinerary is selected.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-8 py-6 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <WifiOff className="w-3.5 h-3.5" />
              <span>Offline Travel Vault</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              <Database className="w-3.5 h-3.5" />
              <span>Browser IndexedDB Active</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Downloaded Itineraries
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Your itineraries are locally cached for zero-connectivity zones (high-altitude valleys, remote parks, trains). Review routes, attractions, and ask the offline assistant questions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadOfflineTrips}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#121214] hover:bg-[#18181b] text-zinc-300 hover:text-white text-xs font-semibold border border-zinc-800 transition-all shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5 text-yellow-400" />
            <span>Rescan Cache</span>
          </button>
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181b] hover:bg-[#27272a] text-zinc-200 text-xs font-semibold border border-zinc-800 transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-yellow-400" />
            <span>All Trips</span>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="py-20 text-center space-y-3">
          <div className="w-8 h-8 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin mx-auto" />
          <p className="text-xs text-zinc-400 font-medium">Scanning IndexedDB storage...</p>
        </div>
      ) : offlineTrips.length === 0 ? (
        <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-10 sm:p-14 text-center max-w-xl mx-auto space-y-5 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
            <WifiOff className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">No Offline Itineraries Stored</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
              You haven&apos;t downloaded any itineraries for offline travel yet. Open any saved trip or plan a new one, then click &ldquo;Save Offline&rdquo; to store it in your browser storage.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#18181b] hover:bg-[#27272a] text-zinc-200 text-xs font-semibold border border-zinc-800 transition"
            >
              <span>View Saved Trips</span>
            </Link>
            <Link
              href="/planner"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition-all shadow-md"
            >
              <span>Plan New Trip</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Trip Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Downloaded Records ({offlineTrips.length})
              </span>
              <span className="text-[11px] text-yellow-400 font-medium">Click to activate in Q&amp;A</span>
            </div>

            <div className="space-y-3">
              {offlineTrips.map((record) => {
                const isSelected = selectedTrip?.id === record.id;
                const destMeta = findDestination(record.destinationName);

                return (
                  <div
                    key={record.id}
                    onClick={() => setSelectedTrip(record)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 space-y-3 relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#18181b] border-yellow-400/80 shadow-lg shadow-yellow-400/5 ring-1 ring-yellow-400/30'
                        : 'bg-[#121214] hover:bg-[#18181b] border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                        <div className="absolute transform rotate-45 bg-yellow-400 text-black text-[9px] font-extrabold py-0.5 right-[-35px] top-[14px] w-[120px] text-center shadow-sm">
                          ACTIVE
                        </div>
                      </div>
                    )}

                    <div className="flex items-start justify-between pr-8">
                      <div>
                        <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                          <span>{record.destinationName}</span>
                          {destMeta?.state && (
                            <span className="text-[10px] text-zinc-400 font-normal">
                              ({destMeta.state})
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          {record.durationDays} Days • Synced {record.lastSyncedAt || 'recently'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-xs">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Available Offline</span>
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => handleDeleteOfflineTrip(record.id, e)}
                          className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-rose-950/30 border border-transparent hover:border-rose-900/40 transition-colors"
                          title="Delete from offline storage"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <Link
                          href={`/itinerary/${record.id}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs transition-all shadow-sm"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Offline Travel Concierge Chat */}
          <div className="lg:col-span-7">
            {selectedTrip ? (
              <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
                {/* Concierge Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>Offline Assistant:</span>
                        <span className="text-yellow-400">{selectedTrip.destinationName}</span>
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        Zero network required • Local vector context
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Air-Gapped Mode</span>
                  </span>
                </div>

                {/* Chat Log Stream */}
                <div className="h-72 overflow-y-auto space-y-3 p-4 rounded-xl bg-[#09090b] border border-zinc-800 text-xs">
                  {chatLog.map((entry, idx) => {
                    const isUser = entry.sender === 'user';
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
                      >
                        <div
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs shrink-0 font-bold ${
                            isUser
                              ? 'bg-yellow-400 text-black'
                              : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                          }`}
                        >
                          {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                        </div>

                        <div
                          className={`max-w-md p-3 rounded-xl leading-relaxed whitespace-pre-line ${
                            isUser
                              ? 'bg-yellow-400 text-black font-medium'
                              : 'bg-[#121214] border border-zinc-800 text-zinc-200'
                          }`}
                        >
                          <div>{entry.text}</div>
                          <div
                            className={`text-[9px] mt-1 text-right ${
                              isUser ? 'text-black/60' : 'text-zinc-500'
                            }`}
                          >
                            {entry.time}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {isProcessing && (
                    <div className="flex items-center gap-2 text-xs text-zinc-400 p-2 italic">
                      <div className="w-3 h-3 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin" />
                      <span>Scanning local itinerary records...</span>
                    </div>
                  )}
                </div>

                {/* Quick Prompts */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-zinc-400 block">
                    Suggested Offline Inquiries:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {OFFLINE_QUICK_QUESTIONS.map((question) => (
                      <button
                        key={question}
                        onClick={() => handleOfflineQuery(question)}
                        className="px-2.5 py-1 rounded-lg bg-[#09090b] hover:bg-[#18181b] text-zinc-300 hover:text-yellow-400 text-xs border border-zinc-800 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleOfflineQuery();
                  }}
                  className="flex items-center gap-2 pt-1"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder={`Ask anything about ${selectedTrip.destinationName}...`}
                    className="flex-1 bg-[#09090b] border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!chatInput.trim() || isProcessing}
                    className="p-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 disabled:opacity-40 text-black font-bold transition-all shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 text-center text-zinc-400 text-xs">
                Select an itinerary on the left to consult the offline assistant.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

