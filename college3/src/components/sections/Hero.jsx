import { ArrowRight, ChevronDown, Sparkles, GraduationCap, Globe, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useInView } from '../../hooks/useInView';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import { heroStats, partnerLogos, universityInfo } from '../../data';

function StatCounter({ stat, shouldStart, index }) {
  const count = useAnimatedCounter(stat.value, {
    duration: 2000,
    shouldStart,
    decimals: stat.value < 10 ? 1 : 0,
  });

  return (
    <div className="relative group">
      <div className="text-center p-3 sm:p-4 md:p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground dark:text-white">
          {stat.prefix || ''}{count}{stat.suffix || ''}
        </div>
        <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-tight">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

function FloatingCard({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-navy-900 dark:via-navy-900 dark:to-primary-900/20" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-20 sm:-left-40 w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary-400/30 dark:bg-primary-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/4 -right-20 sm:-right-40 w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-secondary-400/30 dark:bg-secondary-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute -bottom-20 sm:-bottom-40 left-1/4 sm:left-1/3 w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary-300/30 dark:bg-primary-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-navy-900 dark:text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Decorative Dots */}
      <div className="hidden sm:block absolute top-24 right-16 w-2 h-2 bg-primary-500 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="hidden sm:block absolute top-48 left-[15%] w-1.5 h-1.5 bg-secondary-500 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="hidden sm:block absolute bottom-48 right-[20%] w-2 h-2 bg-primary-400 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '2s' }} />
    </div>
  );
}

function HeroVisual({ isInView }) {
  return (
    <div className={`relative w-full transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {/* Main Visual Container */}
      <div className="relative aspect-square max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] mx-auto">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300/40 dark:border-primary-500/30 animate-spin" style={{ animationDuration: '60s' }} />

        {/* Middle Ring */}
        <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full border border-primary-200/40 dark:border-primary-600/30" />

        {/* Inner Gradient Circle */}
        <div className="absolute inset-10 sm:inset-12 md:inset-16 lg:inset-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 shadow-2xl shadow-primary-500/30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20" />

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold">A</div>
            <div className="text-[8px] sm:text-[10px] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] mt-0.5 sm:mt-1 opacity-80">AURORA</div>
          </div>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-500" />
          </div>
        </div>

        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary-500" />
          </div>
        </div>

        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-500" />
          </div>
        </div>

        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500" />
          </div>
        </div>
      </div>

      {/* Floating Cards - Hidden on mobile, shown on larger screens */}
      <FloatingCard className="hidden lg:block top-4 xl:top-8 -left-4 xl:-left-12 2xl:-left-20" delay={0}>
        <div className="px-3 py-2.5 xl:px-4 xl:py-3 rounded-xl bg-white dark:bg-neutral-800 shadow-xl border border-neutral-100 dark:border-neutral-700">
          <div className="flex items-center gap-2.5 xl:gap-3">
            <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 text-sm xl:text-lg">✓</span>
            </div>
            <div>
              <div className="text-xs xl:text-sm font-semibold text-foreground dark:text-white">Top 15 Globally</div>
              <div className="text-[10px] xl:text-xs text-neutral-500">Research Excellence</div>
            </div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="hidden lg:block top-1/3 -right-4 xl:-right-8 2xl:-right-16" delay={1}>
        <div className="px-3 py-2.5 xl:px-4 xl:py-3 rounded-xl bg-white dark:bg-neutral-800 shadow-xl border border-neutral-100 dark:border-neutral-700">
          <div className="flex items-center gap-2.5 xl:gap-3">
            <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 xl:w-5 xl:h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <div className="text-xs xl:text-sm font-semibold text-foreground dark:text-white">200+ Programs</div>
              <div className="text-[10px] xl:text-xs text-neutral-500">All Disciplines</div>
            </div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="hidden lg:block bottom-12 xl:bottom-16 -left-8 xl:-left-16 2xl:-left-24" delay={2}>
        <div className="px-3 py-2.5 xl:px-4 xl:py-3 rounded-xl bg-white dark:bg-neutral-800 shadow-xl border border-neutral-100 dark:border-neutral-700">
          <div className="flex items-center gap-2.5 xl:gap-3">
            <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Users className="w-4 h-4 xl:w-5 xl:h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <div className="text-xs xl:text-sm font-semibold text-foreground dark:text-white">120+ Countries</div>
              <div className="text-[10px] xl:text-xs text-neutral-500">Global Community</div>
            </div>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}

export function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <HeroBackground />

      {/* Main Content */}
      <div className="relative flex-1 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 xl:py-28">
          <div ref={ref} className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">

            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Badge */}
                <Badge variant="primary" className="mb-3 sm:mb-4 md:mb-6 inline-flex" size="sm">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="hidden xs:inline">Est. {universityInfo.founded} •</span> Excellence Since Day One
                </Badge>

                {/* Main Heading */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground dark:text-white leading-[1.15] tracking-tight">
                  Shape Your{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                      Future
                    </span>
                    <svg className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-2 sm:h-3 text-primary-500/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  at Aurora International
                </h1>

                {/* Subtitle */}
                <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Join a world-class institution where innovation meets tradition.
                  Discover programs designed to transform your potential into global impact.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`
                  mt-5 sm:mt-6 md:mt-8 flex flex-col xs:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center lg:justify-start
                  transition-all duration-700 delay-200
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
              >
                <Button
                  as="a"
                  href="#programs"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full xs:w-auto justify-center shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 text-sm sm:text-base"
                >
                  Explore Programs
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  variant="outline"
                  size="md"
                  className="w-full xs:w-auto justify-center text-sm sm:text-base"
                >
                  Request Info
                </Button>
              </div>

              {/* Trust Indicators */}
              <div
                className={`
                  mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-5 sm:pt-6 md:pt-8 border-t border-neutral-200/50 dark:border-neutral-700/50
                  transition-all duration-700 delay-300
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
              >
                <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 mb-3 sm:mb-4 uppercase tracking-wider">
                  Trusted by Leading Organizations
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
                  {partnerLogos.slice(0, 4).map((partner) => (
                    <div
                      key={partner.id}
                      className="h-7 sm:h-8 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-md sm:rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <span className="text-[10px] sm:text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="order-1 lg:order-2 pt-4 sm:pt-0">
              <HeroVisual isInView={isInView} />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="relative pb-6 sm:pb-8 md:pb-12"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  transition-all duration-700
                  ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <StatCounter stat={stat} shouldStart={statsInView} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <button
          onClick={scrollToPrograms}
          className="flex flex-col items-center gap-1.5 sm:gap-2 text-neutral-400 hover:text-primary-500 transition-colors group"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-wider">Explore</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </button>
      </div>

      {/* CSS for float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

export default Hero;
