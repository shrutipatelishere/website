import { Award, Users, Globe, BookOpen } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useRevealOnScroll } from '../../hooks';

const highlights = [
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Ranked among the top 15 universities globally for research impact and teaching quality.',
  },
  {
    icon: Users,
    title: 'Diverse Community',
    description: 'Students from 120+ countries create a vibrant, multicultural learning environment.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: '150,000+ alumni leading in every industry across all continents.',
  },
  {
    icon: BookOpen,
    title: 'Innovative Programs',
    description: '200+ degree programs designed for the challenges of tomorrow.',
  },
];

export function About() {
  const [ref, isInView] = useRevealOnScroll();

  return (
    <section id="about" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Aurora"
          title="Where Tradition Meets Innovation"
          description="Since 1892, Aurora International University has been at the forefront of education, research, and societal impact. We cultivate curious minds and bold thinkers."
        />

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`
                  group p-4 sm:p-6 rounded-xl sm:rounded-2xl
                  bg-neutral-50 dark:bg-neutral-800
                  border border-transparent hover:border-primary-200 dark:hover:border-primary-800
                  transition-all duration-500
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground-dark mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div
            className={`
              transition-all duration-700 delay-400
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
            `}
          >
            <h3 className="text-xl xs:text-2xl md:text-3xl font-semibold text-foreground dark:text-foreground-dark mb-3 sm:mb-4">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3 sm:mb-4">
              To advance knowledge through world-class research, educate leaders who make a positive
              difference, and create solutions that benefit humanity. We believe in the power of
              education to transform lives and communities.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Our commitment to academic freedom, ethical inquiry, and inclusive excellence
              ensures that every student has the opportunity to reach their full potential.
            </p>
          </div>

          <div
            className={`
              relative transition-all duration-700 delay-500
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
            `}
          >
            <div className="aspect-video rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary-600/30 dark:text-primary-400/30">
                    130+
                  </div>
                  <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1 sm:mt-2">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-primary-500 rounded-xl sm:rounded-2xl -z-10 opacity-20" />
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-secondary-500 rounded-xl sm:rounded-2xl -z-10 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
