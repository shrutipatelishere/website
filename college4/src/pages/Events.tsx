import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PageShell } from '@/components/layout/PageShell';
import { EventsGrid } from '@/components/sections/EventCard';
import { NoEventsState } from '@/components/sections/LoadingStates';
import { Pagination } from '@/components/sections/Pagination';
import { getEventCategories, getEventsByCategory, type Event } from '@/data/events';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

const ITEMS_PER_PAGE = 6;

export function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const categories = getEventCategories();
  const filteredEvents = getEventsByCategory(selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const categoryColors: Record<string, string> = {
    'Academic': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'Athletics': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'Arts & Culture': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'Career': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    'Community': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
    'Student Life': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  };

  return (
    <>
      <Helmet>
        <title>Events | Westbrook University</title>
        <meta
          name="description"
          content="Discover upcoming events at Westbrook University. From academic lectures to cultural celebrations, find events that interest you."
        />
      </Helmet>

      <PageShell
        title="Events"
        subtitle="Stay connected with campus life through lectures, performances, athletic competitions, and community gatherings."
        variant="hero"
      >
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className={cn(
                      selectedCategory === category && 'bg-navy-800 hover:bg-navy-700'
                    )}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {paginatedEvents.length} of {filteredEvents.length} events
              </p>
            </div>

            {/* Events Grid */}
            {paginatedEvents.length > 0 ? (
              <>
                <EventsGrid
                  events={paginatedEvents}
                  onViewDetails={setSelectedEvent}
                />

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    className="mt-12"
                  />
                )}
              </>
            ) : (
              <NoEventsState />
            )}
          </div>
        </section>

        {/* Event Detail Dialog */}
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          {selectedEvent && (
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-start gap-4 mb-4">
                  {/* Date Badge */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-navy-900 dark:bg-navy-700 text-ivory-100 flex flex-col items-center justify-center">
                    <span className="text-xs uppercase font-medium text-gold-400">
                      {new Date(selectedEvent.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-2xl font-bold font-serif">
                      {new Date(selectedEvent.date).getDate()}
                    </span>
                  </div>
                  <div>
                    <Badge className={categoryColors[selectedEvent.category]}>
                      {selectedEvent.category}
                    </Badge>
                    <DialogTitle className="font-serif text-2xl mt-2">
                      {selectedEvent.title}
                    </DialogTitle>
                  </div>
                </div>
                <DialogDescription className="sr-only">
                  Event details for {selectedEvent.title}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Event Info */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold-600" />
                    <span>
                      {formatDate(selectedEvent.date)}
                      {selectedEvent.endDate && ` - ${formatDate(selectedEvent.endDate)}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold-600" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold-600" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold mb-2">About This Event</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedEvent.longDescription}
                  </p>
                </div>

                {/* Registration Info */}
                {selectedEvent.registrationRequired && (
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm mb-3">
                      <strong>Registration Required:</strong> Please register in advance to attend this event.
                    </p>
                    {selectedEvent.registrationLink && (
                      <Button variant="gold" asChild>
                        <a href={selectedEvent.registrationLink} target="_blank" rel="noopener noreferrer">
                          Register Now
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>

        {/* Calendar CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Never Miss an Event
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Subscribe to our academic calendar to stay informed about important dates
              and upcoming events.
            </p>
            <Button variant="navy" size="lg">
              Subscribe to Calendar
            </Button>
          </div>
        </section>
      </PageShell>
    </>
  );
}
