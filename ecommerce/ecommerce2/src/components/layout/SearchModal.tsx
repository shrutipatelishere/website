'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, Clock, TrendingUp, Pill, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { medicines, categories } from '@/data/medicines';
import type { Medicine } from '@/data/medicines';
import { Badge } from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Medicine[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.length >= 2) {
      const searchQuery = query.toLowerCase();
      const filtered = medicines.filter(
        (med) =>
          med.name.toLowerCase().includes(searchQuery) ||
          med.genericName.toLowerCase().includes(searchQuery) ||
          med.saltComposition.some((salt) => salt.toLowerCase().includes(searchQuery)) ||
          med.uses.some((use) => use.toLowerCase().includes(searchQuery))
      );
      setResults(filtered.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [query]);

  const recentSearches = ['Paracetamol', 'Vitamin D3', 'Blood Pressure', 'Diabetes'];
  const trendingSearches = ['Dolo 650', 'Immunity Boosters', 'Cold & Cough', 'Multivitamins'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative max-w-2xl mx-auto mt-4 md:mt-20 mx-4 md:mx-auto">
        <div className="bg-white rounded-2xl shadow-modal overflow-hidden animate-scale-in">
          {/* Search input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-clinical-100">
            <Search className="w-5 h-5 text-clinical-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search medicines, health products, symptoms..."
              className={cn(
                'flex-1 text-base text-navy-900 placeholder:text-clinical-400',
                'bg-transparent border-none outline-none'
              )}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-clinical-400 hover:text-clinical-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="ml-2 px-3 py-1.5 text-sm text-clinical-600 hover:bg-clinical-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>

          {/* Content */}
          <div className="max-h-[60vh] md:max-h-[50vh] overflow-y-auto">
            {query.length >= 2 ? (
              results.length > 0 ? (
                <div className="p-2">
                  {results.map((medicine) => (
                    <Link
                      key={medicine.id}
                      href={`/product/${medicine.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-3 hover:bg-clinical-50 rounded-xl transition-colors"
                    >
                      <div className="w-14 h-14 rounded-xl bg-clinical-100 flex items-center justify-center flex-shrink-0">
                        <Pill className="w-6 h-6 text-clinical-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-navy-900 truncate">{medicine.name}</h4>
                          {medicine.prescriptionRequired && (
                            <Badge variant="rx" size="sm">Rx</Badge>
                          )}
                        </div>
                        <p className="text-sm text-clinical-500 truncate">
                          {medicine.genericName} • {medicine.strength}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-semibold text-navy-900">
                            {formatPrice(medicine.price)}
                          </span>
                          {medicine.discount > 0 && (
                            <>
                              <span className="text-sm text-clinical-400 line-through">
                                {formatPrice(medicine.mrp)}
                              </span>
                              <Badge variant="discount" size="sm">
                                {medicine.discount}% off
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-clinical-300" />
                    </Link>
                  ))}
                  {results.length >= 8 && (
                    <Link
                      href={`/search?q=${encodeURIComponent(query)}`}
                      onClick={onClose}
                      className="flex items-center justify-center gap-2 px-4 py-3 text-teal-700 font-medium hover:bg-teal-50 rounded-xl transition-colors"
                    >
                      View all results
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-clinical-100 flex items-center justify-center">
                    <Search className="w-7 h-7 text-clinical-400" />
                  </div>
                  <p className="text-clinical-600 mb-2">No results found for &quot;{query}&quot;</p>
                  <p className="text-sm text-clinical-500">
                    Try searching with different keywords or check for spelling errors.
                  </p>
                </div>
              )
            ) : (
              <div className="p-5 space-y-6">
                {/* Recent searches */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-clinical-400" />
                    <h3 className="text-sm font-medium text-clinical-600">Recent Searches</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1.5 text-sm text-navy-700 bg-clinical-100 hover:bg-clinical-200 rounded-lg transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trending searches */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-teal-600" />
                    <h3 className="text-sm font-medium text-clinical-600">Trending</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1.5 text-sm text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick categories */}
                <div>
                  <h3 className="text-sm font-medium text-clinical-600 mb-3">Browse Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(0, 6).map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.id}`}
                        onClick={onClose}
                        className="flex items-center gap-3 p-3 bg-clinical-50 hover:bg-clinical-100 rounded-xl transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                          <Pill className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy-800">{category.name}</p>
                          <p className="text-xs text-clinical-500">{category.productCount} products</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SearchModal };
