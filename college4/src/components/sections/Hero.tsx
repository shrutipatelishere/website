import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image?: string;
  variant?: 'default' | 'centered' | 'split';
  className?: string;
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image = 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
  variant = 'default',
  className,
}: HeroProps) {
  if (variant === 'centered') {
    return (
      <section
        className={cn(
          "relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden",
          className
        )}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/60 to-navy-900/80" />
        </div>

        <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-0.5 bg-gold-400" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gold-400">
                Est. 1847
              </span>
              <div className="w-8 sm:w-12 h-0.5 bg-gold-400" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-fade-in">
              {title}
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-ivory-200 leading-relaxed max-w-2xl mx-auto animate-fade-in delay-100 px-2">
              {subtitle}
            </p>

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in delay-200 px-4">
                {primaryCta && (
                  <Link to={primaryCta.href} className="w-full sm:w-auto">
                    <Button variant="gold" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
                      {primaryCta.label}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                )}
                {secondaryCta && (
                  <Link to={secondaryCta.href} className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-sm sm:text-base">
                      {secondaryCta.label}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden",
        className
      )}
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Westbrook University Campus"
          className="w-full h-full object-cover"
        />
        {/* Mobile: darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/80 to-navy-900/90 sm:bg-gradient-to-r sm:from-navy-900/95 sm:via-navy-900/80 sm:to-navy-900/40 dark:from-navy-950/98 dark:via-navy-950/90 dark:to-navy-950/60" />
      </div>

      {/* Decorative elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-20 right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 left-20 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            {/* Decorative line */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-0.5 bg-gold-500" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gold-400">
                Est. 1847
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] sm:leading-tight animate-fade-in">
              {title}
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-ivory-200 leading-relaxed animate-fade-in delay-100">
              {subtitle}
            </p>

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in delay-200">
                {primaryCta && (
                  <Link to={primaryCta.href} className="w-full sm:w-auto">
                    <Button variant="gold" size="lg" className="group w-full sm:w-auto shadow-lg shadow-gold-500/25 text-sm sm:text-base h-11 sm:h-12">
                      {primaryCta.label}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                )}
                {secondaryCta && (
                  <Link to={secondaryCta.href} className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-sm sm:text-base h-11 sm:h-12">
                      {secondaryCta.label}
                    </Button>
                  </Link>
                )}
              </div>
            )}

            {/* Trust indicators - Responsive */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 animate-fade-in delay-300">
              <p className="text-xs sm:text-sm text-ivory-300/70 mb-3 sm:mb-4 uppercase tracking-wider">
                Recognized by
              </p>
              <div className="flex items-center gap-4 sm:gap-8">
                <span className="font-serif text-base sm:text-lg font-semibold text-white/80">
                  AACSB
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-white/80">
                  ABET
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-white/80">
                  LCME
                </span>
              </div>
            </div>

            {/* Mobile Stats - Visible only on small screens */}
            <div className="grid grid-cols-3 gap-3 mt-8 lg:hidden">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-gold-400">15K+</span>
                <span className="text-xs text-ivory-300">Students</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-gold-400">98%</span>
                <span className="text-xs text-ivory-300">Placement</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-gold-400">175+</span>
                <span className="text-xs text-ivory-300">Years</span>
              </div>
            </div>
          </div>

          {/* Stats Cards - Desktop Only */}
          <div className="relative hidden lg:flex flex-col gap-4 xl:gap-6 items-end">
            {/* Video Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <button className="group w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-gold-500 hover:bg-gold-400 flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110">
                <Play className="w-6 h-6 xl:w-8 xl:h-8 text-navy-900 ml-1" fill="currentColor" />
              </button>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-xs xl:text-sm whitespace-nowrap">
                Watch Campus Tour
              </span>
            </div>

            {/* Floating stat cards */}
            <div className="glass-dark p-4 xl:p-6 rounded-xl shadow-2xl animate-fade-in delay-100 w-52 xl:w-64">
              <span className="block font-serif text-3xl xl:text-4xl font-bold text-gold-400">
                15,000+
              </span>
              <span className="text-xs xl:text-sm text-ivory-300">
                Students Worldwide
              </span>
            </div>

            <div className="glass-dark p-4 xl:p-6 rounded-xl shadow-2xl animate-fade-in delay-200 w-52 xl:w-64 mr-8 xl:mr-12">
              <span className="block font-serif text-3xl xl:text-4xl font-bold text-gold-400">
                98%
              </span>
              <span className="text-xs xl:text-sm text-ivory-300">
                Graduate Employment Rate
              </span>
            </div>

            <div className="glass-dark p-4 xl:p-6 rounded-xl shadow-2xl animate-fade-in delay-300 w-52 xl:w-64">
              <span className="block font-serif text-3xl xl:text-4xl font-bold text-gold-400">
                175+
              </span>
              <span className="text-xs xl:text-sm text-ivory-300">
                Years of Excellence
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          className="w-full h-auto text-background"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L60 45.8C120 41.7 240 33.3 360 33.3C480 33.3 600 41.7 720 50C840 58.3 960 66.7 1080 62.5C1200 58.3 1320 41.7 1380 33.3L1440 25V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
