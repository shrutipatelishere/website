import { Clock, MapPin, ArrowRight, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Event } from '@/data/events';

// Event category images from Unsplash
const categoryImages: Record<string, string> = {
  'Academic': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
  'Athletics': 'https://images.unsplash.com/photo-1461896836934- voices-of-young-runners?w=600&q=80',
  'Arts & Culture': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  'Career': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
  'Community': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  'Student Life': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
};

interface EventCardProps {
  event: Event;
  onViewDetails?: (event: Event) => void;
  className?: string;
  variant?: 'default' | 'compact' | 'featured';
}

export function EventCard({
  event,
  onViewDetails,
  className,
  variant = 'default',
}: EventCardProps) {
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' });
  const day = eventDate.getDate();

  const categoryColors: Record<string, string> = {
    'Academic': 'bg-blue-500/90 text-white',
    'Athletics': 'bg-emerald-500/90 text-white',
    'Arts & Culture': 'bg-purple-500/90 text-white',
    'Career': 'bg-orange-500/90 text-white',
    'Community': 'bg-teal-500/90 text-white',
    'Student Life': 'bg-pink-500/90 text-white',
  };

  const eventImage = categoryImages[event.category] || categoryImages['Academic'];

  if (variant === 'featured') {
    return (
      <Card
        className={cn(
          "group overflow-hidden hover-lift cursor-pointer",
          className
        )}
        onClick={() => onViewDetails?.(event)}
      >
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={eventImage}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />

              {/* Date Badge */}
              <div className="absolute top-4 left-4 w-16 h-16 rounded-xl bg-white dark:bg-navy-800 text-center flex flex-col items-center justify-center shadow-lg">
                <span className="text-xs uppercase font-bold text-gold-600">
                  {month}
                </span>
                <span className="text-2xl font-bold font-serif text-navy-900 dark:text-ivory-100">
                  {day}
                </span>
              </div>

              {/* Category Badge */}
              <Badge
                className={cn(
                  "absolute top-4 right-4",
                  categoryColors[event.category]
                )}
              >
                {event.category}
              </Badge>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-gold-600 transition-colors mb-4">
                {event.title}
              </h3>

              <p className="text-muted-foreground mb-6 line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-gold-600" />
                  </div>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-gold-600" />
                  </div>
                  <span>{event.location}</span>
                </div>
              </div>

              <Button variant="gold" className="group/btn w-full">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <Card
        className={cn(
          "hover-lift cursor-pointer group",
          className
        )}
        onClick={() => onViewDetails?.(event)}
      >
        <CardContent className="p-4 flex items-center gap-4">
          {/* Date Badge */}
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-navy-800 to-navy-900 text-ivory-100 flex flex-col items-center justify-center shadow-md">
            <span className="text-xs uppercase font-medium text-gold-400">
              {month}
            </span>
            <span className="text-xl font-bold font-serif">
              {day}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground group-hover:text-gold-600 transition-colors truncate">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {event.time} • {event.location}
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-gold-600 transition-colors" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "group overflow-hidden hover-lift",
        className
      )}
    >
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={eventImage}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />

          {/* Date Badge */}
          <div className="absolute top-4 left-4 w-16 h-16 rounded-xl bg-white dark:bg-navy-800 text-center flex flex-col items-center justify-center shadow-lg">
            <span className="text-xs uppercase font-bold text-gold-600">
              {month}
            </span>
            <span className="text-2xl font-bold font-serif text-navy-900 dark:text-ivory-100">
              {day}
            </span>
          </div>

          {/* Category Badge */}
          <Badge
            className={cn(
              "absolute top-4 right-4",
              categoryColors[event.category]
            )}
          >
            {event.category}
          </Badge>

          {/* Attendees indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 dark:bg-navy-800/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Users className="h-4 w-4 text-gold-600" />
            <span className="text-xs font-medium text-navy-900 dark:text-ivory-100">
              120+ attending
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-gold-600 transition-colors mb-2">
            {event.title}
          </h3>

          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {event.description}
          </p>

          <div className="space-y-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-600" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-600" />
              <span>{event.location}</span>
            </div>
          </div>

          <Button
            variant="ghost"
            className="group/btn w-full justify-between hover:bg-gold-50 dark:hover:bg-gold-900/20"
            onClick={() => onViewDetails?.(event)}
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface EventsGridProps {
  events: Event[];
  onViewDetails?: (event: Event) => void;
  className?: string;
}

export function EventsGrid({ events, onViewDetails, className }: EventsGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
