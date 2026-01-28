'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid3X3, Search, ShoppingCart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BottomNavProps {
  cartCount?: number;
  onSearchClick?: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ cartCount = 0, onSearchClick }) => {
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'categories', label: 'Categories', icon: Grid3X3, href: '/categories' },
    { id: 'search', label: 'Search', icon: Search, href: '#', isSearch: true },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, href: '/cart', badge: cartCount },
    { id: 'account', label: 'Account', icon: User, href: '/account' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 md:hidden',
        'bg-white border-t border-clinical-100',
        'pb-safe'
      )}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = !item.isSearch && isActive(item.href);

          if (item.isSearch) {
            return (
              <button
                key={item.id}
                onClick={onSearchClick}
                className="relative flex flex-col items-center justify-center gap-0.5 px-4 py-2"
              >
                <div
                  className={cn(
                    'w-12 h-12 -mt-6 rounded-full',
                    'bg-gradient-to-br from-teal-500 to-teal-700',
                    'flex items-center justify-center',
                    'shadow-lg shadow-teal-500/30',
                    'active:scale-95 transition-transform duration-150'
                  )}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </button>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                'relative flex flex-col items-center justify-center gap-0.5 px-4 py-2',
                'transition-colors duration-150',
                active ? 'text-teal-700' : 'text-clinical-500'
              )}
            >
              <div className="relative">
                <Icon className="w-6 h-6" />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center bg-teal-600 text-white text-[10px] font-medium rounded-full">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
              {active && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-600 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export { BottomNav };
