'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  MapPin,
  CreditCard,
  Wallet,
  Building2,
  Check,
  Shield,
  Lock,
  Pill,
  ChevronRight,
  Plus,
  FileText,
  AlertTriangle,
} from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';

const savedAddresses = [
  {
    id: '1',
    label: 'Home',
    fullName: 'John Doe',
    phone: '+91 98765 43210',
    address: '123, Green Valley Apartments, Andheri West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400058',
    isDefault: true,
  },
  {
    id: '2',
    label: 'Office',
    fullName: 'John Doe',
    phone: '+91 98765 43210',
    address: '456, Tech Park, BKC',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400051',
    isDefault: false,
  },
];

const paymentMethods = [
  { id: 'upi', name: 'UPI', icon: Wallet, description: 'Pay with any UPI app' },
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, RuPay' },
  { id: 'netbanking', name: 'Net Banking', icon: Building2, description: 'All major banks supported' },
  { id: 'cod', name: 'Cash on Delivery', icon: Wallet, description: '+₹29 convenience fee' },
];

function CheckoutPageContent() {
  const router = useRouter();
  const { state, getCartTotal, getRxItems, clearCart } = useCart();

  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0].id);
  const [selectedPayment, setSelectedPayment] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  const cartTotal = getCartTotal();
  const deliveryFee = cartTotal >= 499 ? 0 : 49;
  const codFee = selectedPayment === 'cod' ? 29 : 0;
  const finalTotal = cartTotal + deliveryFee + codFee;

  const rxItems = getRxItems();
  const hasRxItems = rxItems.length > 0;

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearCart();
    router.push('/checkout/success');
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-navy-900 mb-4">No items to checkout</h1>
        <p className="text-clinical-600 mb-6">Your cart is empty. Add some items first.</p>
        <Link href="/categories">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-6">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Prescription Notice */}
            {hasRxItems && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-800">Prescription Verification Required</p>
                    <p className="text-sm text-amber-700 mt-1">
                      Your order contains prescription medicines. Please ensure you have uploaded
                      a valid prescription, or our pharmacist will contact you before dispatch.
                    </p>
                    <Link
                      href="/upload-prescription"
                      className="inline-flex items-center gap-1 text-sm font-medium text-amber-800 hover:text-amber-900 mt-2"
                    >
                      <FileText className="w-4 h-4" />
                      Upload Prescription
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Delivery Address */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-navy-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  Delivery Address
                </h2>
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Add New
                </Button>
              </div>

              <div className="space-y-3">
                {savedAddresses.map((address) => (
                  <label
                    key={address.id}
                    className={cn(
                      'flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all',
                      selectedAddress === address.id
                        ? 'border-teal-500 bg-teal-50/50'
                        : 'border-clinical-200 hover:border-clinical-300'
                    )}
                  >
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      checked={selectedAddress === address.id}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-navy-900">{address.label}</span>
                        {address.isDefault && (
                          <Badge variant="success" size="sm">Default</Badge>
                        )}
                      </div>
                      <p className="text-sm text-navy-800">{address.fullName}</p>
                      <p className="text-sm text-clinical-600">
                        {address.address}, {address.city}, {address.state} - {address.pincode}
                      </p>
                      <p className="text-sm text-clinical-500 mt-1">{address.phone}</p>
                    </div>
                    {selectedAddress === address.id && (
                      <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </Card>

            {/* Payment Method */}
            <Card>
              <h2 className="text-lg font-semibold text-navy-900 flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-teal-600" />
                Payment Method
              </h2>

              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all',
                      selectedPayment === method.id
                        ? 'border-teal-500 bg-teal-50/50'
                        : 'border-clinical-200 hover:border-clinical-300'
                    )}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={selectedPayment === method.id}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <div className="w-10 h-10 rounded-lg bg-clinical-100 flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-clinical-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-navy-900">{method.name}</p>
                      <p className="text-sm text-clinical-500">{method.description}</p>
                    </div>
                    {selectedPayment === method.id && (
                      <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </label>
                ))}
              </div>

              {selectedPayment === 'card' && (
                <div className="mt-4 p-4 bg-clinical-50 rounded-xl space-y-4">
                  <Input label="Card Number" placeholder="1234 5678 9012 3456" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Expiry Date" placeholder="MM/YY" />
                    <Input label="CVV" placeholder="123" type="password" />
                  </div>
                  <Input label="Name on Card" placeholder="John Doe" />
                </div>
              )}

              {selectedPayment === 'upi' && (
                <div className="mt-4 p-4 bg-clinical-50 rounded-xl">
                  <Input label="UPI ID" placeholder="yourname@upi" />
                </div>
              )}
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Order Summary</h3>

              {/* Items preview */}
              <div className="space-y-3 pb-4 border-b border-clinical-100">
                {state.items.slice(0, 3).map((item) => (
                  <div key={item.medicine.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-clinical-50 flex items-center justify-center flex-shrink-0">
                      <Pill className="w-5 h-5 text-clinical-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-navy-900 truncate">
                        {item.medicine.name}
                      </p>
                      <p className="text-xs text-clinical-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-navy-900">
                      {formatPrice(
                        item.medicine.variants[item.selectedVariantIndex].price * item.quantity
                      )}
                    </p>
                  </div>
                ))}
                {state.items.length > 3 && (
                  <p className="text-sm text-clinical-500 text-center">
                    +{state.items.length - 3} more items
                  </p>
                )}
              </div>

              {/* Price breakdown */}
              <div className="space-y-3 py-4 border-b border-clinical-100">
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
                {codFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-clinical-600">COD Fee</span>
                    <span className="text-navy-900">{formatPrice(codFee)}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between py-4">
                <span className="text-lg font-semibold text-navy-900">Total</span>
                <span className="text-lg font-bold text-navy-900">{formatPrice(finalTotal)}</span>
              </div>

              <Button
                fullWidth
                size="lg"
                onClick={handlePlaceOrder}
                isLoading={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay ${formatPrice(finalTotal)}`}
              </Button>

              {/* Security badges */}
              <div className="mt-4 pt-4 border-t border-clinical-100">
                <div className="flex items-center justify-center gap-4 text-sm text-clinical-500">
                  <div className="flex items-center gap-1">
                    <Lock className="w-4 h-4" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>256-bit SSL</span>
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

export default function CheckoutPage() {
  return (
    <ClientLayout>
      <CheckoutPageContent />
    </ClientLayout>
  );
}
