import { useState } from 'react';
import { ArrowRight, Clock, GraduationCap, Sparkles } from 'lucide-react';
import { SectionHeader, Button, Badge, Card, Tabs, TabsList, TabsTrigger, TabsContent } from '../ui';
import { useRevealOnScroll } from '../../hooks';
import { programs, programCategories, featuredProgram } from '../../data';

function ProgramCard({ program, index, isInView }) {
  return (
    <Card
      hover
      padding="none"
      className={`
        overflow-hidden transition-all duration-500
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          {program.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} size="sm" variant={tag === 'Popular' ? 'primary' : 'default'}>
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2">
          {program.title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 line-clamp-2">
          {program.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-1 sm:gap-1.5">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {program.duration}
          </span>
          <span className="flex items-center gap-1 sm:gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {program.credits} credits
          </span>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-200 dark:border-neutral-700">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
      </div>
    </Card>
  );
}

function FeaturedProgramCard({ isInView }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-xl sm:rounded-2xl
        bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900
        text-white p-5 sm:p-8 lg:p-10
        transition-all duration-700 delay-200
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative">
        <Badge variant="warning" className="mb-3 sm:mb-4">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          Featured Program
        </Badge>

        <h3 className="text-xl xs:text-2xl md:text-3xl font-semibold mb-1.5 sm:mb-2">
          {featuredProgram.title}
        </h3>
        <p className="text-primary-100 text-xs sm:text-sm mb-3 sm:mb-4">
          {featuredProgram.subtitle}
        </p>
        <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6 max-w-lg">
          {featuredProgram.description}
        </p>

        <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {featuredProgram.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-300 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        <Button
          as="a"
          href="#"
          variant="secondary"
          size="sm"
          icon={ArrowRight}
          iconPosition="right"
          className="bg-white text-primary-700 hover:bg-primary-50 sm:text-base sm:px-6 sm:py-3"
        >
          Explore Program
        </Button>
      </div>
    </div>
  );
}

export function Programs() {
  const [activeCategory, setActiveCategory] = useState('undergraduate');
  const [ref, isInView] = useRevealOnScroll();

  const filteredPrograms = programs.filter(
    (program) => program.category === activeCategory
  );

  return (
    <section id="programs" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Academic Programs"
          title="Find Your Path to Excellence"
          description="Explore over 200 programs across 12 schools, designed to prepare you for success in a rapidly changing world."
        />

        <div ref={ref} className="mb-8 sm:mb-10">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="flex flex-wrap justify-center gap-1">
              {programCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {programCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredPrograms.map((program, index) => (
                    <ProgramCard
                      key={program.id}
                      program={program}
                      index={index}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <FeaturedProgramCard isInView={isInView} />

        <div className="mt-8 sm:mt-12 text-center">
          <Button
            as="a"
            href="#"
            variant="outline"
            icon={ArrowRight}
            iconPosition="right"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Programs;
