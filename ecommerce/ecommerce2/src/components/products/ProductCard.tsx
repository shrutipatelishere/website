'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Eye, Pill, Clock, Snowflake } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import type { Medicine } from '@/data/medicines';

interface ProductCardProps {
  medicine: Medicine;
  onAddToCart?: (medicine: Medicine) => void;
  onQuickView?: (medicine: Medicine) => void;
  layout?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({
  medicine,
  onAddToCart,
  onQuickView,
  layout = 'grid',
}) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    await onAddToCart?.(medicine);
    setTimeout(() => setIsAdding(false), 500);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.(medicine);
  };

  if (layout === 'list') {
    return (
      <Link
        href={`/product/${medicine.id}`}
        className="flex gap-4 p-4 bg-white rounded-2xl border border-clinical-100 shadow-soft hover:shadow-card hover:border-clinical-200 transition-all duration-200"
      >
        <div className="w-24 h-24 flex-shrink-0 rounded-xl bg-clinical-50 flex items-center justify-center">
          <Pill className="w-10 h-10 text-clinical-300" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-navy-900 truncate">{medicine.name}</h3>
              <p className="text-sm text-clinical-500">
                {medicine.genericName} • {medicine.strength} • {medicine.packSize}
              </p>
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              {medicine.prescriptionRequired ? (
                <Badge variant="rx">Rx Required</Badge>
              ) : (
                <Badge variant="otc">OTC</Badge>
              )}
              {medicine.coldChain && (
                <Badge variant="coldchain">
                  <Snowflake className="w-3 h-3 mr-1" />
                  Cold Chain
                </Badge>
              )}
            </div>
          </div>
          <p className="text-sm text-clinical-600 mt-1 line-clamp-2">
            {medicine.uses.slice(0, 2).join(' • ')}
          </p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-navy-900">
                {formatPrice(medicine.price)}
              </span>
              {medicine.discount > 0 && (
                <>
                  <span className="text-sm text-clinical-400 line-through">
                    {formatPrice(medicine.mrp)}
                  </span>
                  <Badge variant="discount">{medicine.discount}% off</Badge>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-clinical-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {medicine.deliveryEstimate}
              </span>
              <Button
                size="sm"
                onClick={handleAddToCart}
                isLoading={isAdding}
                leftIcon={<Plus className="w-4 h-4" />}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/product/${medicine.id}`}
      className={cn(
        'group relative flex flex-col bg-white rounded-2xl border border-clinical-100',
        'shadow-soft hover:shadow-card hover:border-clinical-200',
        'transition-all duration-200'
      )}
    >
      {/* Discount badge */}
      {medicine.discount > 0 && (
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="discount">{medicine.discount}% off</Badge>
        </div>
      )}

      {/* Quick view button */}
      <button
        onClick={handleQuickView}
        className={cn(
          'absolute top-3 right-3 z-10',
          'w-8 h-8 rounded-lg bg-white/80 backdrop-blur-sm',
          'flex items-center justify-center',
          'text-clinical-500 hover:text-navy-800 hover:bg-white',
          'opacity-0 group-hover:opacity-100',
          'transition-all duration-200',
          'border border-clinical-100'
        )}
        aria-label="Quick view"
      >
        <Eye className="w-4 h-4" />
      </button>

      {/* Image area */}
      <div className="relative pt-4 px-4">
        <div className="aspect-square rounded-xl bg-clinical-50 flex items-center justify-center overflow-hidden">
          <Pill className="w-16 h-16 text-clinical-200 group-hover:text-clinical-300 transition-colors" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 pt-3">
        {/* Badges */}
        <div className="flex items-center gap-1.5 mb-2">
          {medicine.prescriptionRequired ? (
            <Badge variant="rx" size="sm">Rx</Badge>
          ) : (
            <Badge variant="otc" size="sm">OTC</Badge>
          )}
          {medicine.coldChain && (
            <Badge variant="coldchain" size="sm">
              <Snowflake className="w-3 h-3" />
            </Badge>
          )}
        </div>

        {/* Name and info */}
        <h3 className="font-semibold text-navy-900 line-clamp-1 group-hover:text-teal-700 transition-colors">
          {medicine.name}
        </h3>
        <p className="text-sm text-clinical-500 mt-0.5 line-clamp-1">
          {medicine.strength} • {medicine.packSize}
        </p>

        {/* Delivery estimate */}
        <div className="flex items-center gap-1 mt-2 text-xs text-clinical-500">
          <Clock className="w-3.5 h-3.5" />
          <span>{medicine.deliveryEstimate}</span>
        </div>

        {/* Price and add button */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-clinical-100">
          <div>
            <span className="text-lg font-bold text-navy-900">
              {formatPrice(medicine.price)}
            </span>
            {medicine.discount > 0 && (
              <span className="ml-1.5 text-sm text-clinical-400 line-through">
                {formatPrice(medicine.mrp)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            isLoading={isAdding}
            className={cn(
              isAdding && 'bg-success hover:bg-success'
            )}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export { ProductCard };
