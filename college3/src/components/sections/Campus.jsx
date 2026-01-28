import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { SectionHeader, Button, Badge } from '../ui';
import { useRevealOnScroll } from '../../hooks';
import { campusHighlights, upcomingEvents } from '../../data';

function CampusGrid({ isInView }) {
  const gridPatterns = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 auto-rows-[120px] xs:auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px]">
      {campusHighlights.map((item, index) => (
        <div
          key={item.id}
          className={`
            group relative overflow-hidden rounded-xl sm:rounded-2xl
            bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800
            cursor-pointer
            ${gridPatterns[index] || 'col-span-1 row-span-1'}
            transition-all duration-500
            ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
          style={{ transitionDelay: `${index * 75}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          <div className="absolute inset-0 flex items-center justify-center text-3xl sm:text-6xl font-serif text-white/10">
            {index + 1}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">{item.title}</h3>
            <p className="text-xs sm:text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EventStrip({ isInView }) {
  const eventTypeColors = {
    'Admissions': 'primary',
    'Academic': 'secondary',
    'Career': 'success',
    'Networking': 'warning',
  };

  return (
    <div
      className={`
        mt-8 sm:mt-12 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl
        bg-white dark:bg-neutral-800
        border border-neutral-200 dark:border-neutral-700
        transition-all duration-700 delay-300
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-foreground-dark">
          Upcoming Events
        </h3>
        <Button as="a" href="#" variant="ghost" size="sm" className="hidden xs:inline-flex">
          View Calendar
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {upcomingEvents.map((event, index) => {
          const eventDate = new Date(event.date);
          const month = eventDate.toLocaleString('en-US', { month: 'short' });
          const day = eventDate.getDate();

          return (
            <div
              key={event.id}
              className={`
                group p-3 sm:p-4 rounded-lg sm:rounded-xl
                bg-neutral-50 dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-700
                hover:border-primary-300 dark:hover:border-primary-700
                cursor-pointer
                transition-all duration-300
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex flex-col items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-medium text-primary-600 dark:text-primary-400 uppercase">
                    {month}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-primary-700 dark:text-primary-300">
                    {day}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <Badge
                    size="sm"
                    variant={eventTypeColors[event.type] || 'default'}
                    className="mb-1"
                  >
                    {event.type}
                  </Badge>
                  <h4 className="font-medium text-foreground dark:text-foreground-dark text-xs sm:text-sm truncate">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {event.time}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-center xs:hidden">
        <Button as="a" href="#" variant="ghost" size="sm">
          View All Events
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}

export function Campus() {
  const [ref, isInView] = useRevealOnScroll();

  return (
    <section id="campus" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Campus Life"
          title="More Than Just a Campus"
          description="Experience a vibrant community with world-class facilities, diverse activities, and endless opportunities for growth and connection."
        />

        <div ref={ref}>
          <CampusGrid isInView={isInView} />
          <EventStrip isInView={isInView} />

          <div
            className={`
              mt-8 sm:mt-12 text-center
              transition-all duration-700 delay-500
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <Button
              as="a"
              href="#contact"
              icon={MapPin}
              size="sm"
              className="sm:text-base sm:px-6 sm:py-3"
            >
              Schedule Campus Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campus;
