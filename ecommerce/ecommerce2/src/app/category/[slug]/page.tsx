'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Grid3X3, List, ArrowUpDown } from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductFilter } from '@/components/products/ProductFilter';
import { QuickViewModal } from '@/components/products/QuickViewModal';
import { useCart } from '@/context/CartContext';
import { medicines, categories } from '@/data/medicines';
import type { Medicine } from '@/data/medicines';
import { cn } from '@/lib/utils';

const filterConfig = [
  {
    id: 'form',
    name: 'Product Form',
    type: 'checkbox' as const,
    options: [
      { value: 'tablet', label: 'Tablets', count: 45 },
      { value: 'capsule', label: 'Capsules', count: 23 },
      { value: 'syrup', label: 'Syrups', count: 18 },
      { value: 'cream', label: 'Creams', count: 12 },
      { value: 'gel', label: 'Gels', count: 8 },
      { value: 'drops', label: 'Drops', count: 6 },
    ],
  },
  {
    id: 'prescription',
    name: 'Prescription Type',
    type: 'checkbox' as const,
    options: [
      { value: 'otc', label: 'OTC (Over the Counter)', count: 78 },
      { value: 'rx', label: 'Prescription Required', count: 45 },
    ],
  },
  {
    id: 'price',
    name: 'Price Range',
    type: 'checkbox' as const,
    options: [
      { value: '0-50', label: 'Under ₹50', count: 34 },
      { value: '50-100', label: '₹50 - ₹100', count: 45 },
      { value: '100-200', label: '₹100 - ₹200', count: 28 },
      { value: '200-500', label: '₹200 - ₹500', count: 15 },
      { value: '500+', label: 'Above ₹500', count: 8 },
    ],
  },
  {
    id: 'discount',
    name: 'Discount',
    type: 'checkbox' as const,
    options: [
      { value: '10+', label: '10% or more', count: 56 },
      { value: '15+', label: '15% or more', count: 34 },
      { value: '20+', label: '20% or more', count: 18 },
    ],
  },
  {
    id: 'manufacturer',
    name: 'Manufacturer',
    type: 'checkbox' as const,
    options: [
      { value: 'cipla', label: 'Cipla', count: 12 },
      { value: 'sun-pharma', label: 'Sun Pharma', count: 10 },
      { value: 'dr-reddys', label: "Dr. Reddy's", count: 8 },
      { value: 'torrent', label: 'Torrent', count: 7 },
      { value: 'alkem', label: 'Alkem', count: 6 },
    ],
  },
];

const sortOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'discount', label: 'Discount' },
  { value: 'rating', label: 'Top Rated' },
];

function CategoryPageContent({ slug }: { slug: string }) {
  const { addToCart } = useCart();

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [activeSort, setActiveSort] = useState('relevance');
  const [quickViewMedicine, setQuickViewMedicine] = useState<Medicine | null>(null);

  const category = categories.find((c) => c.id === slug);

  const categoryMedicines = useMemo(() => {
    return medicines.filter((m) => m.category === slug);
  }, [slug]);

  const filteredMedicines = useMemo(() => {
    let result = [...categoryMedicines];

    if (activeFilters.form?.length) {
      result = result.filter((m) => activeFilters.form.includes(m.form));
    }

    if (activeFilters.prescription?.length) {
      result = result.filter((m) => {
        if (activeFilters.prescription.includes('rx') && m.prescriptionRequired) return true;
        if (activeFilters.prescription.includes('otc') && !m.prescriptionRequired) return true;
        return false;
      });
    }

    if (activeFilters.price?.length) {
      result = result.filter((m) => {
        return activeFilters.price.some((range) => {
          const [min, max] = range.split('-').map((v) => (v === '+' ? Infinity : parseInt(v)));
          return m.price >= (min || 0) && m.price <= (max || Infinity);
        });
      });
    }

    if (activeFilters.discount?.length) {
      result = result.filter((m) => {
        return activeFilters.discount.some((discountRange) => {
          const minDiscount = parseInt(discountRange);
          return m.discount >= minDiscount;
        });
      });
    }

    switch (activeSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        result.sort((a, b) => b.discount - a.discount);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [categoryMedicines, activeFilters, activeSort]);

  const handleFilterChange = (filterId: string, values: string[]) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterId]: values,
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({});
  };

  const handleAddToCart = (medicine: Medicine) => {
    addToCart(medicine, 1, 0);
  };

  const displayMedicines = filteredMedicines.length > 0 ? filteredMedicines : medicines;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-clinical-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-clinical-500 hover:text-navy-800">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-clinical-400" />
            <Link href="/categories" className="text-clinical-500 hover:text-navy-800">
              Categories
            </Link>
            <ChevronRight className="w-4 h-4 text-clinical-400" />
            <span className="text-navy-900 font-medium">
              {category?.name || 'All Medicines'}
            </span>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900">
            {category?.name || 'All Medicines'}
          </h1>
          {category && (
            <p className="text-clinical-600 mt-1">{category.description}</p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <ProductFilter
            filters={filterConfig}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearAll={handleClearFilters}
            sortOptions={sortOptions}
            activeSort={activeSort}
            onSortChange={setActiveSort}
            resultCount={displayMedicines.length}
          />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop toolbar */}
            <div className="hidden lg:flex items-center justify-between mb-6 bg-white rounded-xl border border-clinical-100 p-4">
              <p className="text-clinical-600">
                Showing <span className="font-medium text-navy-900">{displayMedicines.length}</span> products
              </p>
              <div className="flex items-center gap-4">
                {/* Sort dropdown */}
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-clinical-500" />
                  <select
                    value={activeSort}
                    onChange={(e) => setActiveSort(e.target.value)}
                    className="h-9 px-3 text-sm bg-transparent border border-clinical-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View toggle */}
                <div className="flex items-center border border-clinical-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      'p-1.5 rounded',
                      viewMode === 'grid'
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-clinical-500 hover:text-navy-800'
                    )}
                    aria-label="Grid view"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={cn(
                      'p-1.5 rounded',
                      viewMode === 'list'
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-clinical-500 hover:text-navy-800'
                    )}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {displayMedicines.length > 0 ? (
              <div
                className={cn(
                  viewMode === 'grid'
                    ? 'grid grid-cols-2 md:grid-cols-3 gap-4'
                    : 'flex flex-col gap-4'
                )}
              >
                {displayMedicines.map((medicine) => (
                  <ProductCard
                    key={medicine.id}
                    medicine={medicine}
                    layout={viewMode}
                    onAddToCart={handleAddToCart}
                    onQuickView={setQuickViewMedicine}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-clinical-100">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-clinical-100 flex items-center justify-center">
                  <Grid3X3 className="w-7 h-7 text-clinical-400" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">No products found</h3>
                <p className="text-clinical-600 mb-4">
                  Try adjusting your filters or search criteria.
                </p>
                <Button onClick={handleClearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>

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

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <ClientLayout>
      <CategoryPageContent slug={slug} />
    </ClientLayout>
  );
}
