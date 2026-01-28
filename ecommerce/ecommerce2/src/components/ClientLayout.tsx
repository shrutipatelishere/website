'use client';

import React, { useState } from 'react';
import { CartProvider, useCart } from '@/context/CartContext';
import { Header, Footer, BottomNav, SearchModal } from '@/components/layout';
import { ToastContainer } from '@/components/ui/Toast';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const { getCartCount } = useCart();

  const addToast = (type: Toast['type'], message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartCount={getCartCount()}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      <main className="flex-1 pb-20 md:pb-0">
        {children}
      </main>

      <Footer />

      <BottomNav
        cartCount={getCartCount()}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <LayoutContent>{children}</LayoutContent>
    </CartProvider>
  );
}
