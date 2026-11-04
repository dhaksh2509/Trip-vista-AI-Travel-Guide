'use client';

import React, { useState, useEffect, useRef, useId } from 'react';
import { MapPin, Search, X, Loader2, ChevronDown } from 'lucide-react';
import { 
  searchAllIndiaDestinations, 
  findAllIndiaDestination,
  DestinationCatalogueItem 
} from '@/lib/data/allIndiaCatalogue';

export interface DestinationAutocompleteProps {
  value: string;
  onChange: (val: string, meta?: DestinationCatalogueItem) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  id?: string;
  name?: string;
  autoFocus?: boolean;
  listHeader?: string;
  icon?: React.ReactNode;
}

export default function DestinationAutocomplete({
  value,
  onChange,
  placeholder = 'Search destinations across India (e.g. Mumbai, Ooty, Araku)...',
  className = '',
  required = false,
  id,
  name,
  autoFocus = false,
  listHeader,
  icon
}: DestinationAutocompleteProps) {
  const generatedId = useId();
  const inputId = id || `destination-input-${generatedId}`;
  const listboxId = `destination-listbox-${generatedId}`;

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value || '');
  const [suggestions, setSuggestions] = useState<DestinationCatalogueItem[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Sync external value changes to local input state
  useEffect(() => {
    setSearchTerm(value || '');
  }, [value]);

  // Update suggestions whenever searchTerm or isOpen changes
  useEffect(() => {
    if (!isOpen) return;

    setIsLoading(true);
    // Instant local catalogue search (sorted A-Z when empty or prioritized by match tiers)
    const results = searchAllIndiaDestinations(searchTerm, 40);
    setSuggestions(results);
    setHighlightedIndex(-1);
    setIsLoading(false);
  }, [searchTerm, isOpen]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll active item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const activeItem = listRef.current.children[highlightedIndex] as HTMLElement;
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex]);

  const handleSelect = (dest: DestinationCatalogueItem) => {
    setSearchTerm(dest.name);
    onChange(dest.name, dest);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    setSearchTerm(newVal);
    // Check if the typed value matches a catalogue destination record
    const matched = findAllIndiaDestination(newVal);
    onChange(newVal, matched);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      setHighlightedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      setHighlightedIndex(prev => 
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        e.preventDefault();
        handleSelect(suggestions[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    } else if (e.key === 'Tab') {
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onChange('', undefined);
    setIsOpen(true);
    inputRef.current?.focus();
  };

  const headerTitle = searchTerm
    ? (listHeader ? `${listHeader} Matches (A–Z)` : 'Location Matches (A–Z)')
    : (listHeader || 'All India Destinations (A–Z)');

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Input Field Container */}
      <div className="relative flex items-center">
        <div className="absolute left-3 pointer-events-none text-yellow-400">
          {icon || <MapPin className="w-4 h-4" />}
        </div>

        <input
          ref={inputRef}
          id={inputId}
          name={name}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onClick={() => {
            if (!isOpen) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          required={required}
          autoFocus={autoFocus}
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-activedescendant={
            highlightedIndex >= 0 ? `${inputId}-opt-${highlightedIndex}` : undefined
          }
          className={`w-full pl-9 pr-14 py-2.5 bg-[#09090b] border border-zinc-800 rounded-lg text-white text-xs sm:text-sm placeholder-zinc-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all ${className}`}
        />

        {/* Action icons */}
        <div className="absolute right-2.5 flex items-center space-x-1">
          {isLoading && (
            <Loader2 className="w-3.5 h-3.5 text-yellow-400 animate-spin" />
          )}

          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Clear field"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            className="p-1 rounded text-zinc-400 hover:text-yellow-400 transition-colors"
            title="Toggle suggestions list"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isOpen ? 'rotate-180 text-yellow-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Floating Suggestions Listbox */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-[#121214] border border-zinc-800 rounded-xl shadow-dropdown overflow-hidden backdrop-blur-md">
          {/* Header indicator */}
          <div className="px-3.5 py-2 bg-[#18181b] border-b border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
            <span className="font-semibold text-zinc-200">
              {headerTitle}
            </span>
            <span className="text-yellow-400 font-mono text-[10px] px-1.5 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/30">
              {suggestions.length} available
            </span>
          </div>

          <ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            className="max-h-64 overflow-y-auto divide-y divide-zinc-800/80 focus:outline-none"
          >
            {suggestions.length === 0 ? (
              <li className="px-4 py-5 text-center text-xs text-zinc-400 space-y-1">
                <p className="font-medium text-zinc-300">No destinations found for &quot;{searchTerm}&quot;</p>
                <p className="text-[11px] text-zinc-500">
                  You can proceed to plan with custom regional coordinates across India.
                </p>
              </li>
            ) : (
              suggestions.map((dest, idx) => {
                const isSelected = highlightedIndex === idx;
                return (
                  <li
                    key={dest.id}
                    id={`${inputId}-opt-${idx}`}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(dest)}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                    className={`px-3.5 py-2.5 cursor-pointer flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-yellow-400/15 text-yellow-300 border-l-2 border-yellow-400 pl-3'
                        : 'text-zinc-200 hover:bg-zinc-800/80'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 min-w-0">
                      <MapPin className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-yellow-400' : 'text-zinc-500'}`} />
                      <div className="truncate">
                        <span className="font-medium text-xs sm:text-sm text-white">
                          {dest.name}
                        </span>
                        <span className="text-zinc-400 text-xs ml-1.5 font-normal">
                          — {dest.state}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0 ml-2">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#09090b] text-zinc-300 border border-zinc-800">
                        {dest.category.split('&')[0].trim()}
                      </span>
                    </div>
                  </li>
                );
              })
            )}
          </ul>

          {/* Footer keyboard hint */}
          <div className="px-3.5 py-1.5 bg-[#09090b] border-t border-zinc-800 text-[10px] text-zinc-400 flex items-center justify-between">
            <span className="flex items-center space-x-1">
              <kbd className="px-1 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">↑</kbd>
              <kbd className="px-1 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Enter</kbd>
              <span>select</span>
            </span>
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Esc</kbd>
              <span>close</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
