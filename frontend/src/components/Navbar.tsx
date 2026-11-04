'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  IndianRupee, 
  MessageSquare, 
  Wifi, 
  WifiOff, 
  Layers, 
  DownloadCloud, 
  Info, 
  User as UserIcon,
  Menu,
  X
} from 'lucide-react';
import Logo from '@/components/Logo';

export default function Navbar() {
  const pathname = usePathname();
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check initial browser online state
    if (typeof window !== 'undefined') {
      const storedOffline = localStorage.getItem('demo_simulate_offline') === 'true';
      setIsOnline(!storedOffline && navigator.onLine);

      const handleOnline = () => {
        if (localStorage.getItem('demo_simulate_offline') !== 'true') {
          setIsOnline(true);
        }
      };
      const handleOffline = () => setIsOnline(false);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  const toggleConnectionSimulation = () => {
    const newState = !isOnline;
    setIsOnline(newState);
    if (typeof window !== 'undefined') {
      if (!newState) {
        localStorage.setItem('demo_simulate_offline', 'true');
      } else {
        localStorage.removeItem('demo_simulate_offline');
      }
      // Dispatch custom event for all components to listen
      window.dispatchEvent(new Event('connectionStatusChanged'));
    }
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: Compass },
    { href: '/planner', label: 'Plan Trip', icon: Calendar },
    { href: '/map', label: 'Map', icon: MapPin },
    { href: '/chat', label: 'AI Assistant', icon: MessageSquare },
    { href: '/budget', label: 'Budget', icon: IndianRupee },
    { href: '/trips', label: 'My Trips', icon: Layers },
    { href: '/offline-trips', label: 'Offline Trips', icon: DownloadCloud },
    { href: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Logo */}
          <Logo variant="compact" size="md" href="/" />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 font-bold shadow-[0_0_12px_rgba(250,204,21,0.12)]'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-yellow-400' : 'text-zinc-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center space-x-2.5">
            {/* Online / Offline Status Toggle Pill */}
            <button
              onClick={toggleConnectionSimulation}
              title="Toggle connection simulation for testing offline mode"
              className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                isOnline
                  ? 'bg-zinc-900 text-emerald-400 border-zinc-700 hover:border-emerald-400/50 hover:bg-zinc-800'
                  : 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30 hover:bg-yellow-400/20'
              }`}
            >
              {isOnline ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Online</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <WifiOff className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Offline</span>
                </>
              )}
            </button>

            {/* Profile / Account Button */}
            <Link
              href="/auth"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-yellow-400/40 hover:text-white transition-all shadow-xs"
            >
              <UserIcon className="w-3.5 h-3.5 text-yellow-400" />
              <span>Account</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-yellow-400" /> : <Menu className="w-5 h-5 text-zinc-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-zinc-800 space-y-1 bg-black/98 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-2.5 px-3.5 py-2.5 rounded-lg text-xs font-medium transition ${
                    isActive
                      ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 font-bold'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-yellow-400' : 'text-zinc-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
