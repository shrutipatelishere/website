import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDiscount(discount: number): string {
  return `${discount}% OFF`;
}

export function calculateSavings(mrp: number, price: number): number {
  return mrp - price;
}

export function getDeliveryBadgeColor(estimate: string): string {
  if (estimate.toLowerCase().includes('today')) {
    return 'bg-success text-white';
  } else if (estimate.toLowerCase().includes('tomorrow')) {
    return 'bg-teal-600 text-white';
  }
  return 'bg-clinical-200 text-clinical-700';
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateOrderNumber(): string {
  const prefix = 'MED';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}${timestamp}${random}`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    pending: 'bg-warning/10 text-warning',
    confirmed: 'bg-info/10 text-info',
    processing: 'bg-info/10 text-info',
    shipped: 'bg-teal-100 text-teal-700',
    delivered: 'bg-success/10 text-success',
    cancelled: 'bg-error/10 text-error',
    verified: 'bg-success/10 text-success',
    rejected: 'bg-error/10 text-error',
  };
  return statusColors[status] || 'bg-clinical-200 text-clinical-600';
}
