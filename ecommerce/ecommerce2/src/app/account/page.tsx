'use client';

import React from 'react';
import Link from 'next/link';
import {
  User,
  Package,
  FileText,
  MapPin,
  Bell,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  Shield,
  RefreshCw,
  Heart,
} from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    id: 'orders',
    label: 'My Orders',
    description: 'Track, return, or buy things again',
    icon: Package,
    href: '/account/orders',
    badge: '2 active',
  },
  {
    id: 'prescriptions',
    label: 'Prescriptions',
    description: 'Manage your uploaded prescriptions',
    icon: FileText,
    href: '/account/prescriptions',
    badge: null,
  },
  {
    id: 'refills',
    label: 'Refill Reminders',
    description: 'Set up automatic refill alerts',
    icon: RefreshCw,
    href: '/account/refills',
    badge: null,
  },
  {
    id: 'addresses',
    label: 'Addresses',
    description: 'Manage delivery addresses',
    icon: MapPin,
    href: '/account/addresses',
    badge: null,
  },
  {
    id: 'payments',
    label: 'Payment Methods',
    description: 'Saved cards and UPI',
    icon: CreditCard,
    href: '/account/payments',
    badge: null,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    description: 'Order and health reminders',
    icon: Bell,
    href: '/account/notifications',
    badge: '3 new',
  },
  {
    id: 'help',
    label: 'Help & Support',
    description: 'FAQs, contact support',
    icon: HelpCircle,
    href: '/help',
    badge: null,
  },
];

const recentOrders = [
  {
    id: 'MED001',
    date: '28 Jan 2024',
    status: 'delivered',
    items: 3,
    total: 450,
  },
  {
    id: 'MED002',
    date: '25 Jan 2024',
    status: 'shipped',
    items: 2,
    total: 280,
  },
];

export default function AccountPage() {
  return (
    <ClientLayout>
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Profile Header */}
        <Card className="mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-navy-900">John Doe</h1>
              <p className="text-clinical-600">john.doe@email.com</p>
              <p className="text-sm text-clinical-500">+91 98765 43210</p>
            </div>
            <Link
              href="/account/profile"
              className="px-4 py-2 text-sm font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-xl transition-colors"
            >
              Edit Profile
            </Link>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card hover className="text-center">
            <div className="text-2xl font-bold text-navy-900">12</div>
            <div className="text-sm text-clinical-600">Total Orders</div>
          </Card>
          <Card hover className="text-center">
            <div className="text-2xl font-bold text-navy-900">3</div>
            <div className="text-sm text-clinical-600">Active Prescriptions</div>
          </Card>
          <Card hover className="text-center">
            <div className="text-2xl font-bold text-navy-900">₹1,240</div>
            <div className="text-sm text-clinical-600">Total Savings</div>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-navy-900">Recent Orders</h2>
            <Link
              href="/account/orders"
              className="text-sm font-medium text-teal-700 hover:text-teal-800"
            >
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <Link
                key={order.id}
                href={`/account/orders/${order.id}`}
                className="flex items-center justify-between p-3 bg-clinical-50 hover:bg-clinical-100 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Package className="w-5 h-5 text-clinical-500" />
                  </div>
                  <div>
                    <p className="font-medium text-navy-900">Order #{order.id}</p>
                    <p className="text-sm text-clinical-500">
                      {order.items} items • {order.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={order.status === 'delivered' ? 'success' : 'delivery'}
                    size="sm"
                  >
                    {order.status}
                  </Badge>
                  <ChevronRight className="w-5 h-5 text-clinical-400" />
                </div>
              </Link>
            ))}
          </div>
        </Card>

        {/* Menu Items */}
        <Card padding="none">
          <div className="divide-y divide-clinical-100">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center gap-4 p-4 hover:bg-clinical-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-clinical-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-clinical-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-navy-900">{item.label}</p>
                    {item.badge && (
                      <Badge variant="rx" size="sm">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-clinical-500">{item.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-clinical-400" />
              </Link>
            ))}
          </div>
        </Card>

        {/* Logout */}
        <button className="w-full mt-6 flex items-center justify-center gap-2 p-4 text-error bg-error/5 hover:bg-error/10 rounded-xl transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>

        {/* Verified badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-clinical-500">
          <Shield className="w-4 h-4 text-teal-600" />
          <span>Your account is verified and secure</span>
        </div>
      </div>
    </ClientLayout>
  );
}
