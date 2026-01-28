'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  Minus,
  Trash2,
  Pill,
  Snowflake,
  AlertTriangle,
  Shield,
  Truck,
  Tag,
  ChevronRight,
  FileText,
  ShoppingBag,
} from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';

function CartPageContent() {
  const {
    state,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
    getRxItems,
    getOtcItems,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const rxItems = getRxItems();
  const otcItems = getOtcItems();
  const cartTotal = getCartTotal();
  const deliveryFee = cartTotal >= 499 ? 0 : 49;
  const discount = appliedCoupon ? Math.round(cartTotal * 0.1) : 0;
  const finalTotal = cartTotal + deliveryFee - discount;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon('SAVE10');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
  };

  const hasColdChainItems = state.items.some((item) => item.medicine.coldChain);

  if (state.items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-clinical-100 flex items-center justify-center">
          <ShoppingBag className="w-12 h-12 text-clinical-400" />
        </div>
        <h1 className="text-2xl font-bold text-navy-900 mb-3">Your cart is empty</h1>
        <p className="text-clinical-600 mb-6 max-w-md mx-auto">
          Looks like you haven&apos;t added any medicines to your cart yet. Browse our
          categories and find what you need.
        </p>
        <Link href="/categories">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900">
              Your Cart
            </h1>
            <p className="text-clinical-600">{getCartCount()} items</p>
          </div>
          <Button variant="ghost" className="text-error" onClick={clearCart}>
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Prescription Required Items */}
            {rxItems.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="rx" size="md">
                    <FileText className="w-3.5 h-3.5 mr-1" />
                    Prescription Required
                  </Badge>
                  <span className="text-sm text-clinical-500">
                    ({rxItems.length} item{rxItems.length > 1 ? 's' : ''})
                  </span>
                </div>

                {/* Prescription warning */}
                <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-800">Prescription Required</p>
                      <p className="text-sm text-amber-700 mt-1">
                        These items require a valid prescription. Upload your prescription before
                        checkout or our pharmacist will contact you.
                      </p>
                      <Link
                        href="/upload-prescription"
                        className="inline-flex items-center gap-1 text-sm font-medium text-amber-800 hover:text-amber-900 mt-2"
                      >
                        Upload Prescription
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <Card padding="none" className="divide-y divide-clinical-100">
                  {rxItems.map((item) => (
                    <CartItem
                      key={item.medicine.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </Card>
              </div>
            )}

            {/* OTC Items */}
            {otcItems.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="otc" size="md">OTC Products</Badge>
                  <span className="text-sm text-clinical-500">
                    ({otcItems.length} item{otcItems.length > 1 ? 's' : ''})
                  </span>
                </div>

                <Card padding="none" className="divide-y divide-clinical-100">
                  {otcItems.map((item) => (
                    <CartItem
                      key={item.medicine.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </Card>
              </div>
            )}

            {/* Cold Chain Notice */}
            {hasColdChainItems && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <Snowflake className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800">Cold Chain Items</p>
                    <p className="text-sm text-blue-600 mt-1">
                      Your order contains temperature-sensitive products. They will be delivered
                      in specialized cold packaging to maintain efficacy.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Order Summary</h3>

              {/* Coupon */}
              {!appliedCoupon ? (
                <div className="flex gap-2 mb-4">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    leftIcon={<Tag className="w-4 h-4" />}
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={handleApplyCoupon}>
                    Apply
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-xl mb-4">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-success" />
                    <span className="font-medium text-success">{appliedCoupon}</span>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-sm text-success hover:underline"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Price breakdown */}
              <div className="space-y-3 py-4 border-t border-clinical-100">
                <div className="flex justify-between">
                  <span className="text-clinical-600">Subtotal</span>
                  <span className="text-navy-900">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-clinical-600">Delivery Fee</span>
                  {deliveryFee === 0 ? (
                    <span className="text-success">FREE</span>
                  ) : (
                    <span className="text-navy-900">{formatPrice(deliveryFee)}</span>
                  )}
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-success">
                    <span>Coupon Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between py-4 border-t border-clinical-100">
                <span className="text-lg font-semibold text-navy-900">Total</span>
                <span className="text-lg font-bold text-navy-900">{formatPrice(finalTotal)}</span>
              </div>

              {/* Free delivery progress */}
              {deliveryFee > 0 && (
                <div className="mb-4 p-3 bg-clinical-50 rounded-xl">
                  <p className="text-sm text-clinical-600 mb-2">
                    Add {formatPrice(499 - cartTotal)} more for free delivery
                  </p>
                  <div className="h-2 bg-clinical-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-600 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((cartTotal / 499) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              <Link href="/checkout">
                <Button fullWidth size="lg">
                  Proceed to Checkout
                </Button>
              </Link>

              {/* Trust badges */}
              <div className="mt-4 pt-4 border-t border-clinical-100">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-clinical-600">
                    <Shield className="w-4 h-4 text-teal-600" />
                    <span>100% Genuine</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-clinical-600">
                    <Truck className="w-4 h-4 text-teal-600" />
                    <span>Fast Delivery</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CartPage() {
  return (
    <ClientLayout>
      <CartPageContent />
    </ClientLayout>
  );
}

interface CartItemProps {
  item: {
    medicine: {
      id: string;
      name: string;
      genericName: string;
      manufacturer: string;
      prescriptionRequired: boolean;
      coldChain: boolean;
      discount: number;
      deliveryEstimate: string;
      variants: { strength: string; packSize: string; price: number; mrp: number }[];
    };
    quantity: number;
    selectedVariantIndex: number;
  };
  onUpdateQuantity: (medicineId: string, quantity: number) => void;
  onRemove: (medicineId: string) => void;
}

function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const variant = item.medicine.variants[item.selectedVariantIndex];

  return (
    <div className="flex gap-4 p-4">
      {/* Image */}
      <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-clinical-50 flex items-center justify-center">
        <Pill className="w-8 h-8 text-clinical-300" />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link
              href={`/product/${item.medicine.id}`}
              className="font-semibold text-navy-900 hover:text-teal-700 line-clamp-1"
            >
              {item.medicine.name}
            </Link>
            <p className="text-sm text-clinical-500">
              {variant.strength} • {variant.packSize}
            </p>
            <p className="text-xs text-clinical-400 mt-0.5">{item.medicine.manufacturer}</p>
          </div>
          <button
            onClick={() => onRemove(item.medicine.id)}
            className="p-2 text-clinical-400 hover:text-error hover:bg-error/10 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2 mt-2">
          {item.medicine.coldChain && (
            <Badge variant="coldchain" size="sm">
              <Snowflake className="w-3 h-3 mr-1" />
              Cold Chain
            </Badge>
          )}
          {item.medicine.discount > 0 && (
            <Badge variant="discount" size="sm">{item.medicine.discount}% off</Badge>
          )}
        </div>

        {/* Price and quantity */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-clinical-200 rounded-lg">
            <button
              onClick={() => onUpdateQuantity(item.medicine.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-clinical-600 hover:bg-clinical-50 rounded-l-lg transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-medium text-navy-900">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.medicine.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-clinical-600 hover:bg-clinical-50 rounded-r-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="text-right">
            <p className="font-semibold text-navy-900">
              {formatPrice(variant.price * item.quantity)}
            </p>
            {item.medicine.discount > 0 && (
              <p className="text-sm text-clinical-400 line-through">
                {formatPrice(variant.mrp * item.quantity)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
