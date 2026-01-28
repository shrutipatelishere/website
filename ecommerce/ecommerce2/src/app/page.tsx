'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Upload,
  MessageCircle,
  Shield,
  Truck,
  BadgeCheck,
  CreditCard,
  ArrowRight,
  Pill,
  Star,
  Percent,
  CalendarClock,
  Sparkles,
  Heart,
  Activity,
  Thermometer,
  Wind,
  CircleDot,
} from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ProductCard } from '@/components/products/ProductCard';
import { QuickViewModal } from '@/components/products/QuickViewModal';
import { useCart } from '@/context/CartContext';
import { medicines, categories, chronicCarePrograms } from '@/data/medicines';
import type { Medicine } from '@/data/medicines';
import { cn } from '@/lib/utils';

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

function HomePageContent() {
  const { addToCart } = useCart();
  const [quickViewMedicine, setQuickViewMedicine] = useState<Medicine | null>(null);

  const popularMedicines = medicines.slice(0, 8);
  const dealMedicines = medicines.filter((m) => m.discount >= 15).slice(0, 4);

  const handleAddToCart = (medicine: Medicine) => {
    addToCart(medicine, 1, 0);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
              Your Health, Delivered with{' '}
              <span className="text-teal-400">Care</span>
            </h1>
            <p className="text-lg text-clinical-300 mb-8 max-w-xl mx-auto">
              Search medicines, upload prescription, get delivery. Licensed pharmacy with genuine medicines.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="flex items-center bg-white rounded-2xl shadow-elevated overflow-hidden">
                <div className="flex-1 flex items-center px-5">
                  <Search className="w-5 h-5 text-clinical-400" />
                  <input
                    type="text"
                    placeholder="Search for medicines, health products..."
                    className="w-full py-4 px-4 text-navy-900 placeholder:text-clinical-400 focus:outline-none"
                  />
                </div>
                <Button size="lg" className="m-2 rounded-xl">
                  Search
                </Button>
              </div>
            </div>

            {/* Core CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/categories">
                <Button
                  size="lg"
                  variant="secondary"
                  leftIcon={<Search className="w-5 h-5" />}
                >
                  Browse Medicines
                </Button>
              </Link>
              <Link href="/upload-prescription">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  leftIcon={<Upload className="w-5 h-5" />}
                >
                  Upload Prescription
                </Button>
              </Link>
              <Link href="/consult">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  leftIcon={<MessageCircle className="w-5 h-5" />}
                >
                  Consult Pharmacist
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="border-t border-navy-700">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-400" />
                <span>100% Genuine Medicines</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-teal-400" />
                <span>Licensed Pharmacy</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-teal-400" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-teal-400" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900">
                Popular Categories
              </h2>
              <p className="text-clinical-500 mt-1">Find what you need quickly</p>
            </div>
            <Link href="/categories">
              <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.id] || Pill;
              return (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className={cn(
                    'group p-5 bg-clinical-50 rounded-2xl border border-clinical-100',
                    'hover:bg-white hover:border-teal-200 hover:shadow-card',
                    'transition-all duration-200'
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-navy-900 group-hover:text-teal-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-clinical-500 mt-0.5">
                    {category.productCount} products
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Percent className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">
                  Save More
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900">
                Deals & Discounts
              </h2>
            </div>
            <Link href="/deals">
              <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                All Deals
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dealMedicines.map((medicine) => (
              <ProductCard
                key={medicine.id}
                medicine={medicine}
                onAddToCart={handleAddToCart}
                onQuickView={setQuickViewMedicine}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Chronic Care Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-teal-50 to-teal-100/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-4">
              <CalendarClock className="w-4 h-4" />
              Monthly Refill Programs
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-3">
              Chronic Care Made Easy
            </h2>
            <p className="text-clinical-600 max-w-2xl mx-auto">
              Never miss your regular medications. Subscribe to monthly refills and save extra on every order.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {chronicCarePrograms.map((program) => (
              <Card
                key={program.id}
                hover
                className="relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full -mr-8 -mt-8" />
                <div className="relative">
                  <Badge variant="success" className="mb-3">
                    Save {program.savings}%
                  </Badge>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{program.name}</h3>
                  <p className="text-clinical-600 mb-4">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-clinical-500">{program.frequency}</span>
                    <Button size="sm" variant="outline">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Medicines Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                  Bestsellers
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy-900">
                Popular Medicines
              </h2>
            </div>
            <Link href="/popular">
              <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularMedicines.map((medicine) => (
              <ProductCard
                key={medicine.id}
                medicine={medicine}
                onAddToCart={handleAddToCart}
                onQuickView={setQuickViewMedicine}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How Prescriptions Work */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-navy-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full -ml-32 -mb-32" />

            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                How Prescriptions Work
              </h2>
              <p className="text-clinical-300 mb-8 max-w-xl">
                We ensure safe dispensing of prescription medicines with proper verification.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Upload', desc: 'Upload a clear photo of your valid prescription' },
                  { step: '02', title: 'Verify', desc: 'Our pharmacist reviews and verifies your prescription' },
                  { step: '03', title: 'Confirm', desc: 'Add delivery details and confirm your order' },
                  { step: '04', title: 'Deliver', desc: 'Get medicines delivered safely to your door' },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <span className="text-4xl font-bold text-teal-400/30">{item.step}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-1">{item.title}</h3>
                    <p className="text-sm text-clinical-400">{item.desc}</p>
                    {index < 3 && (
                      <ArrowRight className="hidden md:block absolute top-8 -right-3 w-6 h-6 text-teal-500/50" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/upload-prescription">
                  <Button size="lg" variant="secondary">
                    Upload Prescription Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-clinical-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-clinical-600 text-center">
            <strong>Disclaimer:</strong> Medicines are sold as per applicable laws. This website
            does not provide medical advice. Consult a doctor for medical advice. Prescription
            required where indicated.
          </p>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        medicine={quickViewMedicine}
        isOpen={!!quickViewMedicine}
        onClose={() => setQuickViewMedicine(null)}
        onAddToCart={(medicine, quantity) => addToCart(medicine, quantity)}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <ClientLayout>
      <HomePageContent />
    </ClientLayout>
  );
}
