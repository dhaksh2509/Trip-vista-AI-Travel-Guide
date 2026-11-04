'use client';

import React, { useId } from 'react';
import Link from 'next/link';

export interface LogoProps {
  /**
   * Layout style:
   * - 'full': Icon + "TripVista" typography + tagline ("Your AI Travel Guide")
   * - 'compact': Icon + "TripVista" typography
   * - 'icon': Only the graphic icon
   */
  variant?: 'full' | 'compact' | 'icon';
  /**
   * Pre-defined size or custom number
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Explicitly toggle tagline visibility (useful when variant is 'compact' but you want tagline)
   */
  showTagline?: boolean;
  /**
   * Additional wrapper class
   */
  className?: string;
  /**
   * If true, wraps the logo in a Next.js Link to '/'
   */
  href?: string;
  /**
   * Optional custom tagline text override
   */
  tagline?: string;
}

const sizeMap = {
  sm: { icon: 28, text: 'text-base', subtext: 'text-[9px]' },
  md: { icon: 36, text: 'text-lg', subtext: 'text-[10px]' },
  lg: { icon: 48, text: 'text-2xl', subtext: 'text-xs' },
  xl: { icon: 64, text: 'text-3xl', subtext: 'text-sm' },
};

export default function Logo({
  variant = 'compact',
  size = 'md',
  showTagline,
  className = '',
  href,
  tagline = 'Your AI Travel Guide',
}: LogoProps) {
  const uid = useId().replace(/:/g, '');
  const config = sizeMap[size] || sizeMap.md;
  const isTaglineVisible = showTagline ?? (variant === 'full');

  const logoGraphic = (
    <div className="relative flex items-center justify-center shrink-0">
      <svg
        width={config.icon}
        height={config.icon}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(6,214,160,0.2)]"
        role="img"
        aria-label="TripVista Brand Logo"
      >
        <defs>
          {/* Deep Navy Background Gradient */}
          <linearGradient id={`tv-navy-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a142f" />
            <stop offset="50%" stopColor="#0f1f44" />
            <stop offset="100%" stopColor="#060b17" />
          </linearGradient>

          {/* Sunshine Yellow Sun Gradient */}
          <linearGradient id={`tv-sun-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Scenic Landscape Turquoise Gradients */}
          <linearGradient id={`tv-mtn-back-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>

          <linearGradient id={`tv-mtn-front-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="50%" stopColor="#06d6a0" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>

          <linearGradient id={`tv-water-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>

          {/* Pin Border Gradient */}
          <linearGradient id={`tv-stroke-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="50%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Pin Mask / ClipPath */}
          <clipPath id={`tv-clip-${uid}`}>
            <path d="M 60 8 C 36 8 16 28 16 52 C 16 75 42 98 60 114 C 78 98 104 75 104 52 C 104 28 84 8 60 8 Z" />
          </clipPath>
        </defs>

        {/* Location Pin Silhouette Base & Gradient Outline */}
        <path
          d="M 60 8 C 36 8 16 28 16 52 C 16 75 42 98 60 114 C 78 98 104 75 104 52 C 104 28 84 8 60 8 Z"
          fill={`url(#tv-navy-${uid})`}
          stroke={`url(#tv-stroke-${uid})`}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Internal Landscape + Flight Elements clipped to Pin Shape */}
        <g clipPath={`url(#tv-clip-${uid})`}>
          {/* Deep Navy Atmosphere */}
          <circle cx="60" cy="50" r="48" fill={`url(#tv-navy-${uid})`} />

          {/* Sunshine Yellow Sun & Halo */}
          <circle cx="76" cy="38" r="11" fill={`url(#tv-sun-${uid})`} />
          <circle cx="76" cy="38" r="16" fill="#facc15" opacity="0.22" />

          {/* Back Scenic Mountain Peak (Teal / Turquoise) */}
          <polygon points="26,82 48,46 72,82" fill={`url(#tv-mtn-back-${uid})`} />
          <polygon points="48,46 54,55 48,53 43,55" fill="#a7f3d0" opacity="0.75" />

          {/* Front Scenic Mountain Peak (Vibrant Turquoise) */}
          <polygon points="44,88 72,52 98,88" fill={`url(#tv-mtn-front-${uid})`} />
          <polygon points="72,52 82,66 72,62 65,66" fill="#e0f2fe" opacity="0.85" />

          {/* Scenic Coastline / Water Horizon */}
          <path
            d="M 12 78 Q 40 70 65 77 T 108 76 L 108 120 L 12 120 Z"
            fill={`url(#tv-water-${uid})`}
            opacity="0.85"
          />
          <path
            d="M 12 85 Q 45 80 75 84 T 108 83 L 108 120 L 12 120 Z"
            fill="#060b17"
            opacity="0.95"
          />

          {/* Travel Route Arc (Sunshine Yellow dotted flight path) */}
          <path
            d="M 28 86 Q 52 70 74 46 Q 84 34 94 24"
            stroke="#facc15"
            strokeWidth="2.5"
            strokeDasharray="4 3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Airplane Silhouette soaring along travel route */}
          <g transform="translate(93, 23) rotate(42) scale(0.95)">
            <path
              d="M 0 -8 L 3 -1 L 10 3 L 10 5 L 3 3 L 3 8 L 6 10 L 6 12 L 0 10 L -6 12 L -6 10 L -3 8 L -3 3 L -10 5 L -10 3 L -3 -1 Z"
              fill="#facc15"
              stroke="#ffffff"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const content = (
    <div className={`inline-flex items-center space-x-2.5 group select-none ${className}`}>
      {logoGraphic}
      {variant !== 'icon' && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight leading-none">
            <span className={`font-black text-white ${config.text}`}>Trip</span>
            <span className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-emerald-400 ${config.text}`}>
              Vista
            </span>
          </div>
          {isTaglineVisible && (
            <span className={`font-medium tracking-wide text-zinc-400 group-hover:text-teal-300 transition-colors mt-0.5 ${config.subtext}`}>
              {tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex focus:outline-none focus:ring-2 focus:ring-yellow-400/50 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
