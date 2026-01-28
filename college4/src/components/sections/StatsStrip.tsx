import { cn } from '@/lib/utils';
import { GraduationCap, Users, Award, BookOpen, Globe, Trophy } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
  suffix?: string;
}

interface StatsStripProps {
  stats?: Stat[];
  className?: string;
  variant?: 'default' | 'dark' | 'light' | 'gradient';
}

const defaultStats: Stat[] = [
  {
    value: "15,000",
    suffix: "+",
    label: "Students Worldwide",
    icon: <GraduationCap className="h-7 w-7" />,
  },
  {
    value: "850",
    suffix: "+",
    label: "Distinguished Faculty",
    icon: <Users className="h-7 w-7" />,
  },
  {
    value: "98",
    suffix: "%",
    label: "Graduate Placement",
    icon: <Award className="h-7 w-7" />,
  },
  {
    value: "$125M",
    label: "Research Funding",
    icon: <BookOpen className="h-7 w-7" />,
  },
];

export function StatsStrip({
  stats = defaultStats,
  className,
  variant = 'default',
}: StatsStripProps) {
  const isDark = variant === 'dark' || variant === 'gradient';

  return (
    <section
      className={cn(
        "py-16 md:py-20 relative overflow-hidden",
        variant === 'dark' && "bg-navy-900 text-ivory-100",
        variant === 'gradient' && "bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-ivory-100",
        variant === 'light' && "bg-ivory-50 dark:bg-navy-900",
        variant === 'default' && "bg-muted/30",
        className
      )}
    >
      {/* Background decorations for dark/gradient variants */}
      {isDark && (
        <>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl" />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "text-center group relative",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connecting line between stats (desktop only) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
              )}

              {stat.icon && (
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5",
                    "transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                    isDark
                      ? "bg-gold-500/20 text-gold-400 group-hover:bg-gold-500/30"
                      : "bg-gradient-to-br from-navy-100 to-navy-50 dark:from-navy-700 dark:to-navy-800 text-gold-600 dark:text-gold-400 group-hover:shadow-gold-500/10"
                  )}
                >
                  {stat.icon}
                </div>
              )}

              <div className="flex items-baseline justify-center gap-1">
                <span
                  className={cn(
                    "font-serif text-4xl md:text-5xl font-bold tracking-tight",
                    isDark ? "text-white" : "text-navy-900 dark:text-ivory-100"
                  )}
                >
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span
                    className={cn(
                      "font-serif text-2xl md:text-3xl font-bold",
                      isDark ? "text-gold-400" : "text-gold-600 dark:text-gold-400"
                    )}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>

              <div
                className={cn(
                  "mt-2 text-sm md:text-base font-medium",
                  isDark ? "text-ivory-300" : "text-muted-foreground"
                )}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Alternative compact stats for page sections
interface CompactStatsProps {
  stats: { value: string; label: string }[];
  className?: string;
}

export function CompactStats({ stats, className }: CompactStatsProps) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-8 md:gap-12", className)}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="font-serif text-3xl font-bold text-gold-600 dark:text-gold-400">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// Large hero-style stats
export function HeroStats() {
  const stats = [
    { value: "175+", label: "Years of Excellence", icon: <Trophy className="h-6 w-6" /> },
    { value: "50+", label: "Countries Represented", icon: <Globe className="h-6 w-6" /> },
    { value: "#15", label: "National Ranking", icon: <Award className="h-6 w-6" /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
        >
          <div className="text-gold-400">{stat.icon}</div>
          <div>
            <div className="font-serif text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-ivory-300">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
