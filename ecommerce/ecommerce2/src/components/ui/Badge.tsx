import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'default' | 'rx' | 'otc' | 'discount' | 'delivery' | 'coldchain' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'sm',
  children,
  className,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  const variants = {
    default: 'bg-clinical-100 text-clinical-700',
    rx: 'bg-amber-100 text-amber-800 border border-amber-200',
    otc: 'bg-teal-100 text-teal-800 border border-teal-200',
    discount: 'bg-success/10 text-success',
    delivery: 'bg-navy-100 text-navy-700',
    coldchain: 'bg-blue-100 text-blue-700 border border-blue-200',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    error: 'bg-error/10 text-error',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};

export { Badge };
export type { BadgeProps };
