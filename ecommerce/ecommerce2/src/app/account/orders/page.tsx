'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  Package,
  Truck,
  Check,
  Clock,
  ChevronRight,
  Pill,
  FileText,
} from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { formatPrice, formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

const orders = [
  {
    id: 'MED001XYZ',
    orderNumber: 'MED001XYZ',
    date: '2024-01-28',
    status: 'delivered',
    items: [
      { name: 'Dolo 650', strength: '650mg', quantity: 2, price: 28 },
      { name: 'Crocin Advance', strength: '500mg', quantity: 1, price: 25 },
      { name: 'Cetirizine 10mg', strength: '10mg', quantity: 1, price: 18 },
    ],
    total: 99,
    deliveryAddress: '123, Green Valley, Mumbai - 400058',
    estimatedDelivery: '28 Jan 2024',
    actualDelivery: '28 Jan 2024',
    prescriptionRequired: false,
  },
  {
    id: 'MED002ABC',
    orderNumber: 'MED002ABC',
    date: '2024-01-25',
    status: 'shipped',
    items: [
      { name: 'Azithral 500', strength: '500mg', quantity: 1, price: 98 },
      { name: 'Pan D', strength: '40mg', quantity: 1, price: 145 },
    ],
    total: 243,
    deliveryAddress: '456, Tech Park, Mumbai - 400051',
    estimatedDelivery: '29 Jan 2024',
    actualDelivery: null,
    prescriptionRequired: true,
    trackingId: 'TRACK123456',
  },
  {
    id: 'MED003DEF',
    orderNumber: 'MED003DEF',
    date: '2024-01-20',
    status: 'cancelled',
    items: [{ name: 'Vitamin D3 60000 IU', strength: '60000 IU', quantity: 2, price: 165 }],
    total: 330,
    deliveryAddress: '123, Green Valley, Mumbai - 400058',
    estimatedDelivery: '23 Jan 2024',
    actualDelivery: null,
    prescriptionRequired: false,
    cancellationReason: 'User requested cancellation',
  },
];

const getStatusConfig = (status: string) => {
  const configs = {
    pending: { label: 'Pending', variant: 'warning' as const, icon: Clock },
    confirmed: { label: 'Confirmed', variant: 'info' as const, icon: Check },
    processing: { label: 'Processing', variant: 'info' as const, icon: Package },
    shipped: { label: 'Shipped', variant: 'delivery' as const, icon: Truck },
    delivered: { label: 'Delivered', variant: 'success' as const, icon: Check },
    cancelled: { label: 'Cancelled', variant: 'error' as const, icon: Clock },
  };
  return configs[status as keyof typeof configs] || configs.pending;
};

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredOrders = orders.filter((order) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return ['pending', 'confirmed', 'processing', 'shipped'].includes(order.status);
    if (activeTab === 'completed') return order.status === 'delivered';
    return true;
  });

  return (
    <ClientLayout>
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/account"
            className="p-2 text-clinical-600 hover:text-navy-800 hover:bg-clinical-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-display font-bold text-navy-900">My Orders</h1>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" onChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            {filteredOrders.length > 0 ? (
              <div className="space-y-4">
                {filteredOrders.map((order) => {
                  const statusConfig = getStatusConfig(order.status);
                  const StatusIcon = statusConfig.icon;

                  return (
                    <Card key={order.id} padding="none">
                      {/* Order header */}
                      <div className="flex items-center justify-between p-4 border-b border-clinical-100">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-navy-900">#{order.orderNumber}</p>
                            {order.prescriptionRequired && (
                              <Badge variant="rx" size="sm">
                                <FileText className="w-3 h-3 mr-1" />
                                Rx
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-clinical-500">
                            Ordered on {formatDate(order.date)}
                          </p>
                        </div>
                        <Badge variant={statusConfig.variant}>
                          <StatusIcon className="w-3.5 h-3.5 mr-1" />
                          {statusConfig.label}
                        </Badge>
                      </div>

                      {/* Order items */}
                      <div className="p-4">
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-lg bg-clinical-50 flex items-center justify-center flex-shrink-0">
                                <Pill className="w-5 h-5 text-clinical-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-navy-900">{item.name}</p>
                                <p className="text-sm text-clinical-500">
                                  {item.strength} × {item.quantity}
                                </p>
                              </div>
                              <p className="font-medium text-navy-900">
                                {formatPrice(item.price * item.quantity)}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Shipping info */}
                        {order.status === 'shipped' && order.trackingId && (
                          <div className="mt-4 p-3 bg-teal-50 border border-teal-200 rounded-xl">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Truck className="w-5 h-5 text-teal-600" />
                                <span className="text-sm font-medium text-teal-800">
                                  Expected delivery: {order.estimatedDelivery}
                                </span>
                              </div>
                              <span className="text-xs text-teal-600">
                                Track: {order.trackingId}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Cancellation reason */}
                        {order.status === 'cancelled' && order.cancellationReason && (
                          <div className="mt-4 p-3 bg-error/5 border border-error/20 rounded-xl">
                            <p className="text-sm text-error">
                              <strong>Cancelled:</strong> {order.cancellationReason}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Order footer */}
                      <div className="flex items-center justify-between p-4 border-t border-clinical-100 bg-clinical-50/50">
                        <div>
                          <span className="text-sm text-clinical-600">Order Total: </span>
                          <span className="font-semibold text-navy-900">
                            {formatPrice(order.total)}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {order.status === 'delivered' && (
                            <Button size="sm" variant="outline">
                              Reorder
                            </Button>
                          )}
                          <Link href={`/account/orders/${order.id}`}>
                            <Button size="sm" variant="ghost">
                              View Details
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-clinical-100 flex items-center justify-center">
                  <Package className="w-8 h-8 text-clinical-400" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">No orders found</h3>
                <p className="text-clinical-600 mb-4">
                  {activeTab === 'active'
                    ? "You don't have any active orders"
                    : "You haven't placed any orders yet"}
                </p>
                <Link href="/categories">
                  <Button>Start Shopping</Button>
                </Link>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </ClientLayout>
  );
}
