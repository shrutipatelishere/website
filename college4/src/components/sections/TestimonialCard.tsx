import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  year?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card className={cn("hover-glow", className)}>
      <CardContent className="p-6 md:p-8">
        <Quote className="h-8 w-8 text-gold-500/30 mb-4" />
        <blockquote className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-700 dark:to-navy-600 flex items-center justify-center">
            <span className="font-serif font-bold text-navy-600 dark:text-ivory-300">
              {testimonial.author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <cite className="not-italic font-semibold text-foreground">
              {testimonial.author}
            </cite>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}
              {testimonial.year && `, ${testimonial.year}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface TestimonialsGridProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialsGrid({ testimonials, className }: TestimonialsGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}

// Sample testimonials data
export const sampleTestimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Westbrook gave me the foundation to pursue my dreams. The faculty mentorship and research opportunities were exceptional.",
    author: "Dr. Emily Roberts",
    role: "CEO, TechVenture Labs",
    year: "Class of 2008"
  },
  {
    id: "2",
    quote: "The collaborative environment and diverse perspectives at Westbrook shaped my worldview and prepared me for global leadership.",
    author: "Marcus Thompson",
    role: "Senior VP, Global Finance",
    year: "Class of 2012"
  },
  {
    id: "3",
    quote: "My professors didn't just teach—they inspired. The skills I gained here have been invaluable throughout my career.",
    author: "Jennifer Walsh",
    role: "Pulitzer Prize-Winning Author",
    year: "Class of 2005"
  },
];
