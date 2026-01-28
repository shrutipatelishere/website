import { ArrowRight, FileText, DollarSign, Beaker } from 'lucide-react';
import { SectionHeader, Button, Badge, Card } from '../ui';
import { useRevealOnScroll, useAnimatedCounter, useInView } from '../../hooks';
import { researchAreas } from '../../data';

const researchStats = [
  { value: 2.1, suffix: 'B', prefix: '$', label: 'Annual Research Funding' },
  { value: 340, suffix: '+', label: 'Research Centers' },
  { value: 15000, suffix: '+', label: 'Publications/Year' },
  { value: 850, suffix: '+', label: 'Industry Partners' },
];

function ResearchStatCounter({ stat, shouldStart }) {
  const count = useAnimatedCounter(stat.value, {
    duration: 2500,
    shouldStart,
    decimals: stat.value < 10 ? 1 : 0,
  });

  return (
    <div className="text-center p-3 sm:p-6">
      <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        {stat.prefix || ''}{count}{stat.suffix || ''}
      </div>
      <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-primary-200">
        {stat.label}
      </div>
    </div>
  );
}

function FeaturedStory({ isInView }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-xl sm:rounded-2xl
        bg-gradient-to-br from-navy-800 to-navy-900
        transition-all duration-700
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative p-5 sm:p-8 lg:p-12 text-white">
        <Badge variant="warning" className="mb-3 sm:mb-4">
          Featured Research
        </Badge>

        <h3 className="text-xl xs:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
          Breakthrough in Sustainable Energy Storage
        </h3>

        <p className="text-neutral-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl">
          Our researchers have developed a new battery technology using abundant materials
          that could revolutionize renewable energy storage. The innovation promises 40%
          higher efficiency at half the cost of current solutions.
        </p>

        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6 mb-6 sm:mb-8">
          <div>
            <div className="text-base sm:text-2xl font-bold text-primary-400">Dr. Sarah Kim</div>
            <div className="text-xs sm:text-sm text-neutral-400">Lead Researcher</div>
          </div>
          <div>
            <div className="text-base sm:text-2xl font-bold text-primary-400">$12M</div>
            <div className="text-xs sm:text-sm text-neutral-400">Grant Funding</div>
          </div>
          <div>
            <div className="text-base sm:text-2xl font-bold text-primary-400">Nature</div>
            <div className="text-xs sm:text-sm text-neutral-400">Published In</div>
          </div>
        </div>

        <Button
          as="a"
          href="#"
          variant="outline"
          size="sm"
          icon={ArrowRight}
          iconPosition="right"
          className="border-white/30 text-white hover:bg-white/10 sm:text-base sm:px-6 sm:py-3"
        >
          Read Full Story
        </Button>
      </div>
    </div>
  );
}

function ResearchLabCard({ lab, index, isInView }) {
  return (
    <Card
      hover
      padding="none"
      className={`
        transition-all duration-500
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-4 sm:p-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center mb-3 sm:mb-4">
          <Beaker className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2">
          {lab.title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
          {lab.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <span className="flex items-center gap-1 sm:gap-1.5 text-neutral-500 dark:text-neutral-400">
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {lab.publications} pubs
          </span>
          <span className="flex items-center gap-1 sm:gap-1.5 text-primary-600 dark:text-primary-400 font-medium">
            <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {lab.funding}
          </span>
        </div>
      </div>
    </Card>
  );
}

export function Research() {
  const [ref, isInView] = useRevealOnScroll();
  const [statsRef, statsInView] = useInView({ threshold: 0.5 });

  return (
    <section id="research" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Research & Innovation"
          title="Pushing the Boundaries of Knowledge"
          description="Our research tackles humanity's greatest challenges—from climate change to disease prevention, from AI ethics to space exploration."
        />

        <div
          ref={statsRef}
          className="mb-10 sm:mb-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {researchStats.map((stat) => (
              <ResearchStatCounter
                key={stat.label}
                stat={stat}
                shouldStart={statsInView}
              />
            ))}
          </div>
        </div>

        <div ref={ref}>
          <FeaturedStory isInView={isInView} />

          <div className="mt-8 sm:mt-12">
            <h3
              className={`
                text-xl sm:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-6 sm:mb-8
                transition-all duration-500 delay-200
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              Research Centers & Labs
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {researchAreas.map((lab, index) => (
                <ResearchLabCard
                  key={lab.id}
                  lab={lab}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          <div
            className={`
              mt-8 sm:mt-12 text-center
              transition-all duration-700 delay-500
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <Button
              as="a"
              href="#"
              variant="outline"
              icon={ArrowRight}
              iconPosition="right"
            >
              Explore All Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
