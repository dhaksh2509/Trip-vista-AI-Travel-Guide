'use client';

import React from 'react';
import { WeatherInfo } from '@/types';
import {
  CloudRain,
  Sun,
  WifiOff,
  Sparkles,
  Thermometer
} from 'lucide-react';

interface WeatherWidgetProps {
  weather: WeatherInfo;
  isOffline?: boolean;
}

export default function WeatherWidget({ weather, isOffline = false }: WeatherWidgetProps) {
  if (isOffline || !weather.isLive) {
    return (
      <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800 space-y-2">
        <div className="flex items-center space-x-2 text-yellow-400 font-semibold text-xs">
          <WifiOff className="w-4 h-4 text-yellow-400" />
          <span>Live Weather Offline</span>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Active network connection required for live meteorological radar. Cached itinerary items remain fully functional.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#121214] p-4 sm:p-5 rounded-xl border border-zinc-800 space-y-4">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
        <div className="flex items-center space-x-2">
          <Thermometer className="w-4 h-4 text-yellow-400" />
          <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
            Destination Weather: {weather.destination}
          </h4>
        </div>
        <span className="flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Live Telemetry</span>
        </span>
      </div>

      {/* Main Temperature & Condition Display */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white tracking-tight">
              {weather.temperatureC}°C
            </span>
            <span className="text-xs text-zinc-400">
              Feels like {weather.feelsLikeC}°C
            </span>
          </div>
          <p className="text-xs font-medium text-yellow-400 mt-0.5">
            {weather.condition}
          </p>
        </div>

        <div className="w-10 h-10 rounded-lg bg-[#09090b] border border-zinc-800 flex items-center justify-center">
          {weather.isRainExpected ? (
            <CloudRain className="w-5 h-5 text-yellow-400" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="p-2.5 rounded-lg bg-[#09090b] border border-zinc-800 space-y-0.5">
          <p className="text-[10px] text-zinc-400">Precipitation</p>
          <p className="font-bold text-white font-mono">{weather.rainProbabilityPct}%</p>
        </div>

        <div className="p-2.5 rounded-lg bg-[#09090b] border border-zinc-800 space-y-0.5">
          <p className="text-[10px] text-zinc-400">Humidity</p>
          <p className="font-bold text-white font-mono">{weather.humidityPct}%</p>
        </div>

        <div className="p-2.5 rounded-lg bg-[#09090b] border border-zinc-800 space-y-0.5">
          <p className="text-[10px] text-zinc-400">Wind</p>
          <p className="font-bold text-white font-mono">{weather.windSpeedKmph} km/h</p>
        </div>
      </div>

      {/* Weather Advice */}
      <div className="p-3 rounded-lg bg-[#09090b] border border-zinc-800 text-xs flex items-start space-x-2.5">
        <Sparkles className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-zinc-200 block mb-0.5">
            Trip Guidance &amp; Climate Note
          </span>
          <p className="text-zinc-300 leading-relaxed text-[11px]">
            {weather.outdoorAdvice}
          </p>
        </div>
      </div>
    </div>
  );
}

