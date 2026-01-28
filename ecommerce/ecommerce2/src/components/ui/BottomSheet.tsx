'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0',
          'bg-white rounded-t-3xl shadow-modal',
          'max-h-[85vh] overflow-hidden',
          'animate-slide-up',
          'pb-safe',
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-clinical-200 rounded-full" />
        </div>

        {title && (
          <div className="flex items-center justify-between px-5 pb-4 border-b border-clinical-100">
            <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
            <button
              onClick={onClose}
              className={cn(
                'p-2 -mr-2 rounded-lg text-clinical-500',
                'hover:bg-clinical-100 hover:text-navy-800',
                'transition-colors duration-150'
              )}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export { BottomSheet };
export type { BottomSheetProps };
