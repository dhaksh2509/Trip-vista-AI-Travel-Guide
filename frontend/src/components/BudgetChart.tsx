'use client';

import React from 'react';
import { BudgetBreakdown } from '@/types';
import { Lightbulb } from 'lucide-react';

interface BudgetChartProps {
  budget: BudgetBreakdown;
  currency?: string;
}

export default function BudgetChart({ budget, currency = '₹' }: BudgetChartProps) {
  const categories = [
    { label: 'Accommodation', amount: budget.accommodationInr, color: 'bg-amber-400' },
    { label: 'Food & Dining', amount: budget.foodInr, color: 'bg-emerald-400' },
    { label: 'Local & Transit', amount: budget.transportationInr, color: 'bg-yellow-400' },
    { label: 'Attractions & Activities', amount: budget.activitiesInr, color: 'bg-sky-400' },
    { label: 'Shopping & Souvenirs', amount: budget.shoppingInr, color: 'bg-purple-400' },
    { label: 'Contingency / Other', amount: budget.otherInr, color: 'bg-zinc-500' },
  ];

  const total = budget.totalEstimatedInr || 1;
  const isSurplus = budget.remainingBudgetInr >= 0;

  return (
    <div className="space-y-4">
      {/* Overview Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800 space-y-1">
          <p className="text-xs text-zinc-400 font-medium">Target Budget</p>
          <p className="text-xl font-bold text-white tracking-tight">
            {currency}{budget.totalBudgetInr.toLocaleString('en-IN')}
          </p>
        </div>

        <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800 space-y-1">
          <p className="text-xs text-zinc-400 font-medium">Estimated Total</p>
          <p className="text-xl font-bold text-yellow-400 tracking-tight">
            {currency}{budget.totalEstimatedInr.toLocaleString('en-IN')}
          </p>
        </div>

        <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800 space-y-1">
          <p className="text-xs text-zinc-400 font-medium">{isSurplus ? 'Estimated Surplus' : 'Estimated Deficit'}</p>
          <p className={`text-xl font-bold tracking-tight ${isSurplus ? 'text-emerald-400' : 'text-rose-400'}`}>
            {currency}{Math.abs(budget.remainingBudgetInr).toLocaleString('en-IN')}
          </p>
        </div>

        <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800 space-y-1">
          <p className="text-xs text-zinc-400 font-medium">Daily Avg / Person</p>
          <p className="text-xl font-bold text-zinc-200 tracking-tight">
            {currency}{budget.dailyAveragePerPersonInr.toLocaleString('en-IN')}
          </p>
        </div>
      </div>

      {/* Practical Category Breakdown with Progress Meters */}
      <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800 space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div>
            <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
              Category Breakdown
            </h4>
            <p className="text-[11px] text-zinc-400">Detailed expenditure allocation across trip items</p>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            {categories.length} Categories
          </span>
        </div>

        <div className="space-y-3.5">
          {categories.map((cat) => {
            const pct = Math.round((cat.amount / total) * 100) || 0;

            return (
              <div key={cat.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300 font-medium">{cat.label}</span>
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-white font-mono">
                      {currency}{cat.amount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-zinc-400 w-9 text-right font-mono">
                      {pct}%
                    </span>
                  </div>
                </div>
                {/* Visual bar */}
                <div className="w-full bg-[#09090b] rounded-full h-1.5 overflow-hidden border border-zinc-800">
                  <div 
                    className={`${cat.color} h-1.5 rounded-full transition-all duration-300`}
                    style={{ width: `${Math.min(100, Math.max(2, pct))}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-bold">
          <span className="text-zinc-200">Total Calculated Cost</span>
          <span className="text-yellow-400 font-mono text-sm">{currency}{budget.totalEstimatedInr.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Practical Savings Advice */}
      {budget.savingsTips && budget.savingsTips.length > 0 && (
        <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800 space-y-2.5">
          <div className="flex items-center space-x-2 text-yellow-400 font-semibold text-xs">
            <Lightbulb className="w-4 h-4 text-yellow-400" />
            <span className="text-zinc-200">Budget Recommendations &amp; Savings Advice</span>
          </div>
          <ul className="space-y-1.5 text-xs text-zinc-300 pl-5 list-disc leading-relaxed">
            {budget.savingsTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
