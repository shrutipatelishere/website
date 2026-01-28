'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, Pill, Shield, Truck, RotateCcw, ExternalLink, Snowflake } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import type { Medicine } from '@/data/medicines';

interface QuickViewModalProps {
  medicine: Medicine | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (medicine: Medicine, quantity: number) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  medicine,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!medicine) return null;

  const currentVariant = medicine.variants[selectedVariant];

  const handleAddToCart = () => {
    onAddToCart?.(medicine, quantity);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="w-full md:w-2/5 flex-shrink-0">
          <div className="aspect-square rounded-2xl bg-clinical-50 flex items-center justify-center">
            <Pill className="w-24 h-24 text-clinical-200" />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-navy-900">{medicine.name}</h2>
              <p className="text-clinical-500 mt-0.5">
                {medicine.genericName} • by {medicine.manufacturer}
              </p>
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              {medicine.prescriptionRequired ? (
                <Badge variant="rx">Rx Required</Badge>
              ) : (
                <Badge variant="otc">OTC</Badge>
              )}
            </div>
          </div>

          {/* Salt composition */}
          <div className="mt-4 p-3 bg-clinical-50 rounded-xl">
            <p className="text-xs font-medium text-clinical-500 uppercase tracking-wider mb-1">
              Salt Composition
            </p>
            <p className="text-sm text-navy-800">
              {medicine.saltComposition.join(' + ')}
            </p>
          </div>

          {/* Price */}
          <div className="mt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-navy-900">
                {formatPrice(currentVariant.price)}
              </span>
              {medicine.discount > 0 && (
                <>
                  <span className="text-lg text-clinical-400 line-through">
                    {formatPrice(currentVariant.mrp)}
                  </span>
                  <Badge variant="discount">{medicine.discount}% off</Badge>
                </>
              )}
            </div>
            <p className="text-sm text-clinical-500 mt-1">
              Inclusive of all taxes
            </p>
          </div>

          {/* Variants */}
          {medicine.variants.length > 1 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-navy-800 mb-2">Select Variant</p>
              <div className="flex flex-wrap gap-2">
                {medicine.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={cn(
                      'px-3 py-2 text-sm rounded-lg border transition-all duration-150',
                      selectedVariant === index
                        ? 'border-teal-500 bg-teal-50 text-teal-700'
                        : 'border-clinical-200 hover:border-clinical-300'
                    )}
                  >
                    {variant.strength} • {variant.packSize}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity selector */}
          <div className="mt-4">
            <p className="text-sm font-medium text-navy-800 mb-2">Quantity</p>
            <div className="inline-flex items-center border border-clinical-200 rounded-xl">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-clinical-600 hover:bg-clinical-50 rounded-l-xl transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-medium text-navy-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-clinical-600 hover:bg-clinical-50 rounded-r-xl transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cold chain warning */}
          {medicine.coldChain && (
            <div className="mt-4 flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <Snowflake className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-800">Cold Chain Product</p>
                <p className="text-blue-600">
                  This product requires temperature-controlled storage and delivery.
                </p>
              </div>
            </div>
          )}

          {/* Trust badges */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="flex items-center gap-2 text-sm text-clinical-600">
              <Shield className="w-4 h-4 text-teal-600" />
              <span>Genuine</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-clinical-600">
              <Truck className="w-4 h-4 text-teal-600" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-clinical-600">
              <RotateCcw className="w-4 h-4 text-teal-600" />
              <span>Easy Returns</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <Button
              size="lg"
              fullWidth
              onClick={handleAddToCart}
              leftIcon={<Plus className="w-5 h-5" />}
            >
              Add to Cart
            </Button>
            <Link href={`/product/${medicine.id}`} className="flex-shrink-0">
              <Button size="lg" variant="outline">
                <ExternalLink className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { QuickViewModal };
