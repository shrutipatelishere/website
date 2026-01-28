'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  ShoppingCart,
  User,
  Menu,
  X,
  Phone,
  ChevronDown,
  FileText,
  Heart,
  Package,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { categories } from '@/data/medicines';

interface HeaderProps {
  cartCount?: number;
  onSearchClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount = 0, onSearchClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-clinical-100">
      {/* Top bar - desktop only */}
      <div className="hidden md:block bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              Support: 1800-123-4567
            </span>
            <span>Free delivery on orders above ₹499</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/upload-prescription" className="hover:text-teal-300 transition-colors">
              Upload Prescription
            </Link>
            <span className="text-clinical-400">|</span>
            <Link href="/account" className="hover:text-teal-300 transition-colors">
              My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18 gap-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2 text-navy-800 hover:bg-clinical-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="hidden sm:block text-xl font-display font-bold text-navy-900">
              MedWell
            </span>
          </Link>

          {/* Location selector - desktop */}
          <button className="hidden lg:flex items-center gap-2 px-3 py-2 text-sm text-navy-700 hover:bg-clinical-50 rounded-xl transition-colors">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span className="max-w-32 truncate">Mumbai, 400001</span>
            <ChevronDown className="w-4 h-4 text-clinical-400" />
          </button>

          {/* Search bar - desktop */}
          <button
            onClick={onSearchClick}
            className={cn(
              'hidden md:flex flex-1 max-w-2xl items-center gap-3',
              'h-11 px-4 bg-clinical-50 border border-clinical-200 rounded-xl',
              'text-clinical-500 text-sm',
              'hover:border-clinical-300 hover:bg-clinical-100/50',
              'transition-all duration-200'
            )}
          >
            <Search className="w-5 h-5" />
            <span>Search medicines, health products, and more...</span>
            <kbd className="ml-auto px-2 py-0.5 text-xs bg-white border border-clinical-200 rounded text-clinical-500">
              ⌘K
            </kbd>
          </button>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Search icon - mobile only, now hidden since search is in bottom nav */}
            <button
              onClick={onSearchClick}
              className="hidden p-2 text-navy-800 hover:bg-clinical-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-navy-800 hover:bg-clinical-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center bg-teal-600 text-white text-xs font-medium rounded-full">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>

            {/* Account - desktop */}
            <Link
              href="/account"
              className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-navy-800 hover:bg-clinical-100 rounded-xl transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Account</span>
            </Link>
          </div>
        </div>

        {/* Category nav - desktop */}
        <nav className="hidden md:flex items-center gap-1 h-12 -mb-px overflow-x-auto scrollbar-hide">
          {categories.slice(0, 6).map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className={cn(
                'px-4 py-3 text-sm font-medium text-clinical-600',
                'hover:text-navy-900 hover:bg-clinical-50',
                'border-b-2 border-transparent hover:border-teal-500',
                'transition-all duration-200 whitespace-nowrap'
              )}
              onMouseEnter={() => setActiveDropdown(category.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {category.name}
            </Link>
          ))}
          <Link
            href="/categories"
            className="px-4 py-3 text-sm font-medium text-teal-700 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap"
          >
            View All
          </Link>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-modal overflow-y-auto">
            <div className="p-4 border-b border-clinical-100">
              <div className="flex items-center justify-between mb-4">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <span className="text-xl font-display font-bold text-navy-900">MedWell</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-clinical-500 hover:bg-clinical-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-navy-700 bg-clinical-50 rounded-xl">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Mumbai, 400001</span>
                <ChevronDown className="w-4 h-4 text-clinical-400 ml-auto" />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-xs font-semibold text-clinical-500 uppercase tracking-wider mb-3">
                Quick Links
              </h3>
              <div className="space-y-1">
                <Link
                  href="/upload-prescription"
                  className="flex items-center gap-3 px-3 py-2.5 text-navy-700 hover:bg-clinical-50 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="w-5 h-5 text-teal-600" />
                  <span>Upload Prescription</span>
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-3 px-3 py-2.5 text-navy-700 hover:bg-clinical-50 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Package className="w-5 h-5 text-teal-600" />
                  <span>My Orders</span>
                </Link>
                <Link
                  href="/account/prescriptions"
                  className="flex items-center gap-3 px-3 py-2.5 text-navy-700 hover:bg-clinical-50 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart className="w-5 h-5 text-teal-600" />
                  <span>Saved Prescriptions</span>
                </Link>
              </div>
            </div>

            <div className="p-4 border-t border-clinical-100">
              <h3 className="text-xs font-semibold text-clinical-500 uppercase tracking-wider mb-3">
                Categories
              </h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className="flex items-center justify-between px-3 py-2.5 text-navy-700 hover:bg-clinical-50 rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs text-clinical-500">{category.productCount}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-clinical-100">
              <p className="text-sm text-clinical-600 mb-2">Need help?</p>
              <a
                href="tel:18001234567"
                className="flex items-center gap-2 text-teal-700 font-medium"
              >
                <Phone className="w-4 h-4" />
                1800-123-4567
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export { Header };
