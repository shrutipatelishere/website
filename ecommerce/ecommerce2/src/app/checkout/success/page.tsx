'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Package, Truck, Phone, ArrowRight } from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function CheckoutSuccessPage() {
  const orderNumber = 'MED' + Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <ClientLayout>
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-16">
        <Card padding="lg" className="text-center">
          {/* Success icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center animate-scale-in">
            <Check className="w-10 h-10 text-success" />
          </div>

          <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-3">
            Order Placed Successfully!
          </h1>
          <p className="text-clinical-600 mb-6">
            Thank you for your order. We&apos;ll send you a confirmation email shortly.
          </p>

          {/* Order details */}
          <div className="p-4 bg-clinical-50 rounded-xl mb-8 inline-block">
            <p className="text-sm text-clinical-600">Order Number</p>
            <p className="text-xl font-bold text-navy-900">{orderNumber}</p>
          </div>

          {/* Order timeline */}
          <div className="max-w-sm mx-auto mb-8">
            <h3 className="text-sm font-semibold text-clinical-600 uppercase tracking-wider mb-4">
              What happens next?
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: Check,
                  title: 'Order Confirmed',
                  description: 'Your order has been confirmed',
                  completed: true,
                },
                {
                  icon: Package,
                  title: 'Processing',
                  description: 'We are preparing your order',
                  completed: false,
                },
                {
                  icon: Truck,
                  title: 'Delivery',
                  description: 'Estimated delivery: Tomorrow by 10 PM',
                  completed: false,
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.completed
                        ? 'bg-success text-white'
                        : 'bg-clinical-200 text-clinical-500'
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p
                      className={`font-medium ${
                        step.completed ? 'text-navy-900' : 'text-clinical-600'
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-sm text-clinical-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
            <div className="flex items-center justify-center gap-2 text-teal-700">
              <Phone className="w-5 h-5" />
              <span className="font-medium">Need help? Call us at 1800-123-4567</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/account/orders">
              <Button variant="outline">
                <Package className="w-4 h-4 mr-2" />
                View Order Details
              </Button>
            </Link>
            <Link href="/">
              <Button>
                Continue Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </ClientLayout>
  );
}
