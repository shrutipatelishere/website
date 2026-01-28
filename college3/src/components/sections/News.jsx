import { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { SectionHeader, Button, Badge, Card } from '../ui';
import { useRevealOnScroll } from '../../hooks';
import { newsArticles, newsCategories } from '../../data';

function NewsCard({ article, index, isInView }) {
  const date = new Date(article.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const categoryColors = {
    research: 'primary',
    campus: 'success',
    achievements: 'warning',
    events: 'secondary',
  };

  return (
    <Card
      hover
      padding="none"
      className={`
        group overflow-hidden
        transition-all duration-500
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <div className="aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl sm:text-4xl font-serif text-neutral-400/50 dark:text-neutral-500/50">
            {index + 1}
          </span>
        </div>

        {article.featured && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <Badge variant="warning" size="sm">Featured</Badge>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-3 sm:p-5">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <Badge size="sm" variant={categoryColors[article.category] || 'default'}>
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </Badge>
          <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            {formattedDate}
          </span>
        </div>

        <h3 className="font-semibold text-sm sm:text-base text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {article.title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3 sm:mb-4">
          {article.excerpt}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Read More
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </Card>
  );
}

export function News() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, isInView] = useRevealOnScroll();

  const filteredArticles = activeCategory === 'all'
    ? newsArticles
    : newsArticles.filter((article) => article.category === activeCategory);

  return (
    <section id="news" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="News & Events"
          title="Stay Connected"
          description="Keep up with the latest happenings, research breakthroughs, and achievements from our community."
        />

        <div ref={ref}>
          <div
            className={`
              flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10
              transition-all duration-500
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            {newsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full
                  transition-all duration-200
                  ${activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredArticles.slice(0, 6).map((article, index) => (
              <NewsCard
                key={article.id}
                article={article}
                index={index}
                isInView={isInView}
              />
            ))}
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
              View All News
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
