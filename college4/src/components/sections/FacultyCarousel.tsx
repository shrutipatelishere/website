import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, Linkedin, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { FacultyMember } from '@/data/faculty';

interface FacultyCarouselProps {
  faculty: FacultyMember[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FacultyCarousel({
  faculty,
  title = "Distinguished Faculty",
  subtitle = "Learn from world-renowned scholars and researchers",
  className,
}: FacultyCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={cn("py-16 md:py-24 overflow-hidden", className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <Badge variant="gold" className="mb-4">Our Faculty</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="rounded-full h-12 w-12 border-2 hover:border-gold-500 hover:text-gold-600 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="rounded-full h-12 w-12 border-2 hover:border-gold-500 hover:text-gold-600 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {faculty.map((member, index) => (
            <FacultyCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Mobile scroll indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {faculty.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-navy-200 dark:bg-navy-700"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FacultyCardProps {
  member: FacultyMember;
  index: number;
}

function FacultyCard({ member, index }: FacultyCardProps) {
  return (
    <Card
      className={cn(
        "flex-shrink-0 w-80 snap-start hover-lift group overflow-hidden",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />

          {/* Department badge */}
          <Badge className="absolute top-4 left-4 bg-white/90 text-navy-900 backdrop-blur-sm">
            {member.department}
          </Badge>

          {/* Social overlay on hover */}
          <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
            <a
              href={`mailto:${member.email}`}
              className="p-3 rounded-full bg-white text-navy-900 hover:bg-gold-500 hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white text-navy-900 hover:bg-gold-500 hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white text-navy-900 hover:bg-gold-500 hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label={`${member.name}'s publications`}
            >
              <BookOpen className="h-5 w-5" />
            </a>
          </div>

          {/* Bottom info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h3 className="font-serif text-xl font-semibold">
              {member.name}
            </h3>
            <p className="text-gold-400 font-medium text-sm">
              {member.title}
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="p-5 bg-gradient-to-b from-background to-muted/20">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {member.specialization}
          </p>

          {/* Education highlights */}
          <div className="flex flex-wrap gap-1">
            {member.education.slice(0, 2).map((edu, i) => (
              <span
                key={i}
                className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
              >
                {edu.split(',')[1]?.trim() || edu}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Grid variant for faculty page
interface FacultyGridProps {
  faculty: FacultyMember[];
  className?: string;
}

export function FacultyGrid({ faculty, className }: FacultyGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", className)}>
      {faculty.map((member, index) => (
        <FacultyCard key={member.id} member={member} index={index} />
      ))}
    </div>
  );
}
