'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  User, 
  Bot,
  WifiOff,
  Sparkles,
  MapPin,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { ChatMessage, TripPlan } from '@/types';
import { assistantAgent } from '@/lib/ai/assistantAgent';
import Link from 'next/link';

const SAMPLE_PROMPTS = [
  'How can I reduce my trip budget?',
  'What is scheduled for Day 2?',
  'Add more nature and viewpoint activities',
  'Suggest regional food specialties to try',
  'What should I pack for this trip?'
];

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [currentTrip, setCurrentTrip] = useState<TripPlan | null>(null);
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check offline simulation
    const sim = localStorage.getItem('demo_simulate_offline') === 'true';
    setIsOffline(sim || !navigator.onLine);

    const handleConn = () => {
      const s = localStorage.getItem('demo_simulate_offline') === 'true';
      setIsOffline(s || !navigator.onLine);
    };
    window.addEventListener('connectionStatusChanged', handleConn);

    // Load active trip
    const storedTrip = localStorage.getItem('ai_travel_current_trip');
    if (storedTrip) {
      try {
        const parsed: TripPlan = JSON.parse(storedTrip);
        setCurrentTrip(parsed);
      } catch (e) {
        console.error(e);
      }
    }

    // Initialize clean welcome message
    setMessages([
      {
        id: 'msg-welcome',
        sender: 'assistant',
        content: `Welcome to TripVista Assistant. I can assist you with your destination plans, recommend regional food, re-balance daily budgets, or adjust scheduled sightseeing slots. What would you like to explore today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    return () => {
      window.removeEventListener('connectionStatusChanged', handleConn);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputText;
    if (!textToSend.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      content: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await assistantAgent.processMessage(
        userMsg.content,
        currentTrip,
        !isOffline
      );

      // If trip was modified, update local storage
      if (response.updatedTrip) {
        setCurrentTrip(response.updatedTrip);
        if (typeof window !== 'undefined') {
          localStorage.setItem('ai_travel_current_trip', JSON.stringify(response.updatedTrip));
          const allTrips: TripPlan[] = JSON.parse(localStorage.getItem('ai_travel_trips') || '[]');
          const idx = allTrips.findIndex(t => t.id === response.updatedTrip!.id);
          if (idx >= 0) {
            allTrips[idx] = response.updatedTrip;
            localStorage.setItem('ai_travel_trips', JSON.stringify(allTrips));
          }
        }
      }

      const assistantMsg: ChatMessage = {
        id: `msg-resp-${Date.now()}`,
        sender: 'assistant',
        content: response.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        {
          id: `msg-err-${Date.now()}`,
          sender: 'assistant',
          content: 'I encountered an issue retrieving real-time suggestions. Please rephrase or try again.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 py-4 flex flex-col h-[calc(100vh-130px)]">
      {/* Header Context Bar */}
      <div className="bg-[#121214] border border-zinc-800 px-5 py-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-zinc-100">
                TripVista Travel Concierge
              </h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                Agentic Assistant
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              {currentTrip ? (
                <span className="flex items-center gap-1 text-yellow-400 font-medium">
                  <MapPin className="w-3 h-3" />
                  Context: {currentTrip.destinationName} ({currentTrip.preferences.durationDays} Days • ₹{(currentTrip.preferences.budgetInr || currentTrip.budget.totalEstimatedInr).toLocaleString('en-IN')})
                </span>
              ) : (
                'All-India Travel Intelligence & Planning'
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {currentTrip && (
            <Link
              href={`/itinerary/${currentTrip.id}`}
              className="px-3 py-1.5 rounded-lg bg-[#18181b] hover:bg-[#27272a] text-zinc-200 hover:text-white text-xs font-semibold border border-zinc-800 transition"
            >
              View Itinerary
            </Link>
          )}

          {isOffline && (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <WifiOff className="w-3.5 h-3.5" />
              <span>Offline Mode</span>
            </span>
          )}
        </div>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto space-y-4 p-5 sm:p-6 bg-[#09090b] rounded-2xl border border-zinc-800 shadow-inner">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                  isUser
                    ? 'bg-yellow-400 text-black shadow-md'
                    : 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/30'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-xl rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-yellow-400 text-black font-medium shadow-md'
                    : 'bg-[#121214] border border-zinc-800 text-zinc-200 shadow-md'
                }`}
              >
                <div className="whitespace-pre-line space-y-1">
                  {msg.content}
                </div>
                <div
                  className={`text-[10px] mt-2 pt-1.5 text-right ${
                    isUser ? 'border-t border-black/20 text-black/70' : 'border-t border-zinc-800 text-zinc-500'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2.5 text-xs text-zinc-400 p-2">
            <div className="w-6 h-6 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#121214] border border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
              <span className="text-[11px] text-yellow-400">Evaluating itinerary data &amp; calculating suggestions...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 shrink-0 pt-1">
        <span className="text-xs font-semibold text-zinc-400 shrink-0">
          Suggested:
        </span>
        {SAMPLE_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1.5 rounded-xl bg-[#121214] hover:bg-[#18181b] text-zinc-300 hover:text-yellow-400 text-xs border border-zinc-800 hover:border-yellow-400/40 shrink-0 transition-all shadow-sm"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Form Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="bg-[#121214] p-2.5 rounded-2xl border border-zinc-800 flex items-center gap-2 shrink-0 shadow-xl focus-within:border-yellow-400 transition-colors"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask a question about your trip or request schedule modifications..."
          className="flex-1 bg-transparent px-4 py-2 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 disabled:opacity-30 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:translate-y-0.5"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

