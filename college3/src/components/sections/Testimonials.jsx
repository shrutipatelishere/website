import { Quote, Star } from 'lucide-react';
import { SectionHeader, Carousel } from '../ui';
import { useRevealOnScroll } from '../../hooks';
import { testimonials, testimonialStats } from '../../data';

function TestimonialCard({ testimonial }) {
  return (
    <div className="px-2 xs:px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-5 xs:p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white dark:bg-neutral-800 shadow-soft">
          <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 text-primary-100 dark:text-primary-900/30" />

          <div className="relative">
            <div className="flex gap-1 mb-4 sm:mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="text-base xs:text-lg sm:text-xl md:text-2xl font-serif text-foreground dark:text-foreground-dark leading-relaxed mb-6 sm:mb-8">
              "{testimonial.quote}"
            </blockquote>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center flex-shrink-0">
                <span className="text-base sm:text-xl font-semibold text-primary-600 dark:text-primary-400">
                  {testimonial.name.charAt(0)}
                </span>
              </div>

              <div className="min-w-0">
                <div className="font-semibold text-sm sm:text-base text-foreground dark:text-foreground-dark truncate">
                  {testimonial.name}
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 truncate">
                  {testimonial.role} at {testimonial.company}
                </div>
                <div className="text-xs text-primary-600 dark:text-primary-400 mt-0.5 truncate">
                  {testimonial.program} • Class of {testimonial.graduationYear}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsBar({ isInView }) {
  const stats = [
    { value: `${testimonialStats.satisfactionRate}%`, label: 'Student Satisfaction' },
    { value: `${testimonialStats.employmentRate}%`, label: 'Employment Rate' },
    { value: `${testimonialStats.averageSalaryIncrease}%`, label: 'Avg. Salary Increase' },
    { value: `${testimonialStats.alumniNetworkSize.toLocaleString()}+`, label: 'Global Alumni' },
  ];

  return (
    <div
      className={`
        mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8
        transition-all duration-700 delay-300
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center"
          style={{ transitionDelay: `${400 + index * 100}ms` }}
        >
          <div className="text-2xl xs:text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
            {stat.value}
          </div>
          <div className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [ref, isInView] = useRevealOnScroll();

  return (
    <section id="testimonials" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Success Stories"
          title="Hear From Our Alumni"
          description="Our graduates are making an impact around the world. See how an Aurora education transformed their careers and lives."
        />

        <div
          ref={ref}
          className={`
            transition-all duration-700
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <Carousel
            autoplay
            autoplayInterval={7000}
            showArrows
            showDots
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Carousel>
        </div>

        <StatsBar isInView={isInView} />
      </div>
    </section>
  );
}

export default Testimonials;
