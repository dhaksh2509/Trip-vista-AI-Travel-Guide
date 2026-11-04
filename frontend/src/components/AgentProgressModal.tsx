'use client';

import React from 'react';
import { 
  CheckCircle2, 
  Loader2, 
  Clock 
} from 'lucide-react';
import { AgentStep } from '@/types';

interface AgentProgressModalProps {
  isOpen: boolean;
  steps: AgentStep[];
  currentStepIndex: number;
}

const STEP_DISPLAY_NAMES: Record<string, string> = {
  'Research Agent': 'Checking destinations',
  'Destination Agent': 'Retrieving destination details',
  'Itinerary Agent': 'Building itinerary',
  'Budget Agent': 'Estimating costs',
  'Weather Agent': 'Checking weather forecasts',
};

export default function AgentProgressModal({
  isOpen,
  steps,
  currentStepIndex
}: AgentProgressModalProps) {
  if (!isOpen) return null;

  const completedCount = steps.filter(s => s.status === 'completed').length;
  const progressPct = steps.length > 0 ? Math.round((completedCount / steps.length) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#121214] border border-zinc-800 rounded-2xl p-6 space-y-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3.5">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">Synthesizing Itinerary...</h3>
            <p className="text-xs text-zinc-400">Multi-agent engine coordinating trip parameters</p>
          </div>
          <span className="text-xs font-mono font-bold text-yellow-400 px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/25">
            {progressPct}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#09090b] rounded-full h-2 overflow-hidden border border-zinc-800">
          <div 
            className="bg-yellow-400 h-2 transition-all duration-300 rounded-full"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Progress Steps List */}
        <div className="space-y-2 py-1">
          {steps.map((step) => {
            const isCompleted = step.status === 'completed';
            const isRunning = step.status === 'running';
            const displayName = STEP_DISPLAY_NAMES[step.agentName] || step.title;

            return (
              <div 
                key={step.id}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-colors ${
                  isRunning
                    ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-300 font-medium'
                    : isCompleted
                    ? 'bg-[#09090b] border-zinc-800 text-zinc-200'
                    : 'bg-[#09090b]/40 border-zinc-800/40 text-zinc-500'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{step.agentName}</span>
                  <span className="text-zinc-400 text-[11px]">— {displayName}</span>
                </div>
                <div>
                  {isCompleted && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  {isRunning && (
                    <Loader2 className="w-4 h-4 text-yellow-400 animate-spin shrink-0" />
                  )}
                  {!isCompleted && !isRunning && (
                    <Clock className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
