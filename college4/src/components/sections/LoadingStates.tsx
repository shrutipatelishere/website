import { Loader2, FileQuestion, Calendar, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingSpinner({ className, size = 'md' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={cn("flex items-center justify-center p-8", className)}>
      <Loader2 className={cn("animate-spin text-gold-600", sizeClasses[size])} />
    </div>
  );
}

interface LoadingSkeletonProps {
  className?: string;
}

export function CardSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <div className={cn("rounded-lg border bg-card overflow-hidden", className)}>
      <div className="h-48 bg-muted animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-4 w-1/4 bg-muted rounded animate-pulse" />
        <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
        </div>
        <div className="h-10 w-1/3 bg-muted rounded animate-pulse" />
      </div>
    </div>
  );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className
      )}
    >
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        {icon || <FileQuestion className="h-8 w-8 text-muted-foreground" />}
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-muted-foreground max-w-sm mb-6">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}

export function NoEventsState() {
  return (
    <EmptyState
      icon={<Calendar className="h-8 w-8 text-muted-foreground" />}
      title="No events found"
      description="There are no events matching your current filter. Try selecting a different category."
    />
  );
}

export function NoNewsState() {
  return (
    <EmptyState
      icon={<Newspaper className="h-8 w-8 text-muted-foreground" />}
      title="No articles found"
      description="There are no news articles matching your current filter. Try selecting a different category."
    />
  );
}

export function PageLoadingState() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <img
          src="/crest.svg"
          alt=""
          className="h-20 w-auto mx-auto mb-6 opacity-50 animate-pulse"
        />
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
