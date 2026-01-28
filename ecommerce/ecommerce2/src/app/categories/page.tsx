'use client';

import React from 'react';
import Link from 'next/link';
import {
  Thermometer,
  Wind,
  Activity,
  Heart,
  Pill,
  Sparkles,
  CircleDot,
  ChevronRight,
} from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Card } from '@/components/ui/Card';
import { categories } from '@/data/medicines';

const categoryIcons: Record<string, React.ElementType> = {
  'fever-pain': Thermometer,
  'cold-cough': Wind,
  'diabetes': Activity,
  'heart-bp': Heart,
  'vitamins': Pill,
  'skincare': Sparkles,
  'digestion': CircleDot,
  'respiratory': Wind,
};

const categoryColors: Record<string, string> = {
  'fever-pain': 'from-red-500 to-orange-500',
  'cold-cough': 'from-blue-500 to-cyan-500',
  'diabetes': 'from-emerald-500 to-teal-500',
  'heart-bp': 'from-rose-500 to-pink-500',
  'vitamins': 'from-amber-500 to-yellow-500',
  'skincare': 'from-purple-500 to-violet-500',
  'digestion': 'from-green-500 to-emerald-500',
  'respiratory': 'from-sky-500 to-blue-500',
};

export default function CategoriesPage() {
  return (
    <ClientLayout>
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-2">
            All Categories
          </h1>
          <p className="text-clinical-600">
            Browse medicines by category to find what you need
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.id] || Pill;
            const gradientClass = categoryColors[category.id] || 'from-teal-500 to-teal-600';

            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group"
              >
                <Card
                  hover
                  className="relative overflow-hidden h-full"
                >
                  {/* Gradient background element */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${gradientClass} opacity-10 -mr-10 -mt-10 group-hover:opacity-20 transition-opacity`}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center flex-shrink-0 shadow-lg shadow-current/20`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-navy-900 text-lg group-hover:text-teal-700 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-clinical-500 mt-1 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-sm text-teal-700 font-medium">
                        <span>{category.productCount} products</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Healthcare categories info */}
        <div className="mt-12 p-6 bg-navy-900 rounded-2xl text-white">
          <h2 className="text-xl font-bold mb-3">Need help finding your medicine?</h2>
          <p className="text-clinical-300 mb-4">
            Use our search to find medicines by name, salt composition, or symptoms. Our
            pharmacists are also available to help.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/upload-prescription"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-xl text-sm font-medium transition-colors"
            >
              Upload Prescription
            </Link>
            <Link
              href="/consult"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors"
            >
              Consult Pharmacist
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
