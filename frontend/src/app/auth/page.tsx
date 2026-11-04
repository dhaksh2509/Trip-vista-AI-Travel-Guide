'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';

export default function AuthPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('demo.traveler@tripvista.com');
  const [password, setPassword] = useState<string>('password123');
  const [name, setName] = useState<string>('Demo Traveler');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/trips');
    }, 400);
  };

  const handleQuickDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/trips');
    }, 300);
  };

  return (
    <div className="max-w-md mx-auto py-10 sm:py-16 space-y-6">
      <div className="text-center space-y-3">
        <Logo variant="full" size="lg" className="mx-auto" />
        <h1 className="text-2xl font-black text-white tracking-tight">
          {isRegister ? 'Create Your Traveler Account' : 'Welcome to TripVista'}
        </h1>
        <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
          Sync itineraries across devices, manage offline vaults, and access personalized multi-agent recommendations.
        </p>
      </div>

      <div className="bg-[#121214] p-7 rounded-2xl border border-zinc-800 space-y-5 shadow-2xl">
        <button
          onClick={handleQuickDemoLogin}
          type="button"
          disabled={isLoading}
          className="w-full py-3 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 active:translate-y-0.5 text-black font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
        >
          <span>Continue as Demo Traveler</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-zinc-800 w-full" />
          <span className="bg-[#121214] px-3 text-[10px] text-zinc-400 uppercase font-bold tracking-wider absolute">
            Or Sign In Manually
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-zinc-300">Traveler Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <User className="w-4 h-4 text-yellow-400" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Demo Traveler"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#09090b] border border-zinc-800 rounded-xl text-white text-xs focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-zinc-300">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <Mail className="w-4 h-4 text-yellow-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="traveler@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-[#09090b] border border-zinc-800 rounded-xl text-white text-xs focus:border-yellow-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-zinc-300">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <Lock className="w-4 h-4 text-yellow-400" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-[#09090b] border border-zinc-800 rounded-xl text-white text-xs focus:border-yellow-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 active:translate-y-0.5 text-black font-bold text-xs border border-yellow-400 transition-all shadow-md"
          >
            {isLoading ? 'Verifying Credentials...' : isRegister ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-zinc-800">
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-xs text-zinc-400 hover:text-yellow-400 transition-colors"
          >
            {isRegister
              ? 'Already have an account? Sign in'
              : "Don't have an account? Create one"}
          </button>
        </div>
      </div>
    </div>
  );
}

