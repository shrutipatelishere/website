import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageShellProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
  headerClassName?: string;
  variant?: 'default' | 'hero' | 'minimal';
  backgroundImage?: string;
}

export function PageShell({
  title,
  subtitle,
  breadcrumbs = [],
  children,
  headerClassName,
  variant = 'default',
  backgroundImage,
}: PageShellProps) {
  const location = useLocation();

  // Auto-generate breadcrumbs from path if not provided
  const autoBreadcrumbs: BreadcrumbItem[] = breadcrumbs.length > 0
    ? breadcrumbs
    : location.pathname
        .split('/')
        .filter(Boolean)
        .map((segment, index, arr) => ({
          label: segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          path: index === arr.length - 1 ? undefined : '/' + arr.slice(0, index + 1).join('/'),
        }));

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      {variant !== 'minimal' && (
        <header
          className={cn(
            "relative pt-20 md:pt-24",
            variant === 'hero' ? 'pb-16 md:pb-24' : 'pb-8 md:pb-12',
            "bg-gradient-to-b from-navy-50 to-background dark:from-navy-950 dark:to-background",
            headerClassName
          )}
        >
          {/* Background Image Overlay */}
          {backgroundImage && (
            <div
              className="absolute inset-0 opacity-10 dark:opacity-5"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}

          {/* Paper texture */}
          <div className="absolute inset-0 paper-texture opacity-50" />

          <div className="container mx-auto px-4 relative">
            {/* Breadcrumbs */}
            {autoBreadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                  <li>
                    <Link
                      to="/"
                      className="flex items-center hover:text-gold-600 transition-colors"
                      aria-label="Home"
                    >
                      <Home className="h-4 w-4" />
                    </Link>
                  </li>
                  {autoBreadcrumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                      {crumb.path ? (
                        <Link
                          to={crumb.path}
                          className="hover:text-gold-600 transition-colors"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-foreground font-medium">
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Title */}
            <div className={cn(
              "max-w-3xl",
              variant === 'hero' && 'text-center mx-auto'
            )}>
              <h1 className={cn(
                "font-serif font-bold text-foreground",
                variant === 'hero'
                  ? 'text-4xl md:text-5xl lg:text-6xl'
                  : 'text-3xl md:text-4xl'
              )}>
                {title}
              </h1>
              {subtitle && (
                <p className={cn(
                  "mt-4 text-muted-foreground leading-relaxed",
                  variant === 'hero' ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                )}>
                  {subtitle}
                </p>
              )}
            </div>

            {/* Decorative divider */}
            {variant === 'hero' && (
              <div className="flex justify-center mt-8">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent rounded-full" />
              </div>
            )}
          </div>
        </header>
      )}

      {/* Main Content */}
      <main
        id="main-content"
        className={cn(
          variant === 'minimal' && 'pt-20 md:pt-24'
        )}
      >
        {children}
      </main>
    </div>
  );
}
