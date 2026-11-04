'use client';

import React, { useState } from 'react';
import { RAGSource } from '@/types';
import { Database, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface RagSourcesBadgeProps {
  sources: RAGSource[];
  destinationName?: string;
}

export default function RagSourcesBadge({ sources, destinationName }: RagSourcesBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!sources || sources.length === 0) return null;

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#121214] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#18181b] transition-colors"
      >
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-yellow-400/10 border border-yellow-400/25 text-yellow-400">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-white">
                Grounded via Verified Destination Data
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#09090b] text-[10px] text-yellow-400 font-mono border border-yellow-400/20">
                {sources.length} sources retrieved
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Recommendations grounded in regional travel documentation {destinationName ? `for ${destinationName}` : ''} and verified point coordinates
            </p>
          </div>
        </div>

        <div className="text-zinc-400">
          {isOpen ? <ChevronUp className="w-4 h-4 text-yellow-400" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isOpen && (
        <div className="p-4 border-t border-zinc-800 space-y-3 bg-[#09090b]">
          <div className="flex items-center space-x-1.5 text-xs text-yellow-400 font-medium pb-1">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-zinc-300">Verified regional knowledge citations:</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sources.map((src, i) => (
              <div 
                key={src.id || i}
                className="p-3 rounded-lg bg-[#121214] border border-zinc-800 space-y-1.5 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold text-zinc-200 line-clamp-1">
                    {src.section || src.documentTitle}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#09090b] text-yellow-400 border border-yellow-400/20 shrink-0 ml-2">
                    Score: {(src.score * 100).toFixed(1)}%
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 line-clamp-3 leading-relaxed">
                  {src.snippet}
                </p>
                <div className="flex items-center justify-between text-[10px] text-zinc-500 pt-1.5 border-t border-zinc-800">
                  <span className="truncate mr-2">{src.documentTitle}</span>
                  <span className="text-yellow-400 shrink-0 font-medium">{src.destination}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

