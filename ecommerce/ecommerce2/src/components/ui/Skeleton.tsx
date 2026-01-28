import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  width,
  height,
}) => {
  const variants = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-xl',
  };

  return (
    <div
      className={cn(
        'bg-clinical-100 animate-pulse-soft',
        variants[variant],
        className
      )}
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl border border-clinical-100 p-4">
    <Skeleton variant="rounded" className="w-full h-40 mb-4" />
    <Skeleton variant="text" className="h-4 w-3/4 mb-2" />
    <Skeleton variant="text" className="h-3 w-1/2 mb-3" />
    <div className="flex items-center gap-2 mb-3">
      <Skeleton variant="rounded" className="h-5 w-12" />
      <Skeleton variant="rounded" className="h-5 w-16" />
    </div>
    <div className="flex items-center justify-between">
      <Skeleton variant="text" className="h-6 w-16" />
      <Skeleton variant="rounded" className="h-9 w-24" />
    </div>
  </div>
);

const CategoryCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl border border-clinical-100 p-4 text-center">
    <Skeleton variant="circular" className="w-16 h-16 mx-auto mb-3" />
    <Skeleton variant="text" className="h-4 w-3/4 mx-auto mb-1" />
    <Skeleton variant="text" className="h-3 w-1/2 mx-auto" />
  </div>
);

const ProductDetailSkeleton: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <Skeleton variant="rounded" className="w-full h-80 md:h-96" />
    <div>
      <Skeleton variant="text" className="h-8 w-3/4 mb-2" />
      <Skeleton variant="text" className="h-4 w-1/2 mb-4" />
      <div className="flex gap-2 mb-4">
        <Skeleton variant="rounded" className="h-6 w-16" />
        <Skeleton variant="rounded" className="h-6 w-20" />
      </div>
      <Skeleton variant="text" className="h-10 w-24 mb-6" />
      <div className="space-y-2 mb-6">
        <Skeleton variant="text" className="h-4 w-full" />
        <Skeleton variant="text" className="h-4 w-5/6" />
        <Skeleton variant="text" className="h-4 w-4/6" />
      </div>
      <Skeleton variant="rounded" className="h-12 w-full" />
    </div>
  </div>
);

const CartItemSkeleton: React.FC = () => (
  <div className="flex gap-4 p-4 bg-white rounded-xl border border-clinical-100">
    <Skeleton variant="rounded" className="w-20 h-20 flex-shrink-0" />
    <div className="flex-1">
      <Skeleton variant="text" className="h-5 w-3/4 mb-2" />
      <Skeleton variant="text" className="h-4 w-1/2 mb-2" />
      <div className="flex items-center justify-between">
        <Skeleton variant="rounded" className="h-8 w-24" />
        <Skeleton variant="text" className="h-6 w-16" />
      </div>
    </div>
  </div>
);

export {
  Skeleton,
  ProductCardSkeleton,
  CategoryCardSkeleton,
  ProductDetailSkeleton,
  CartItemSkeleton,
};
