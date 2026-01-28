import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/layout/PageShell';
import { NewsCard, NewsGrid } from '@/components/sections/NewsCard';
import { NoNewsState } from '@/components/sections/LoadingStates';
import { Pagination } from '@/components/sections/Pagination';
import { getNewsCategories, getNewsByCategory, getFeaturedNews } from '@/data/news';
import { cn } from '@/lib/utils';

const ITEMS_PER_PAGE = 6;

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = getNewsCategories();
  const featuredArticle = getFeaturedNews()[0];
  const filteredNews = getNewsByCategory(selectedCategory).filter(
    (article) => selectedCategory === 'All' || article.id !== featuredArticle?.id
  );

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <Helmet>
        <title>News | Westbrook University</title>
        <meta
          name="description"
          content="Stay updated with the latest news from Westbrook University. Read about research breakthroughs, campus events, student achievements, and more."
        />
      </Helmet>

      <PageShell
        title="University News"
        subtitle="The latest stories, announcements, and achievements from across the Westbrook community."
        variant="hero"
      >
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Featured Article */}
            {selectedCategory === 'All' && featuredArticle && currentPage === 1 && (
              <div className="mb-12">
                <h2 className="font-serif text-xl font-semibold mb-4 text-muted-foreground">
                  Featured Story
                </h2>
                <NewsCard article={featuredArticle} variant="featured" />
              </div>
            )}

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
                Showing {paginatedNews.length} of {filteredNews.length} articles
              </p>
            </div>

            {/* News Grid */}
            {paginatedNews.length > 0 ? (
              <>
                <NewsGrid articles={paginatedNews} />

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
              <NoNewsState />
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Stay Informed
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Subscribe to our newsletter for weekly updates on university news, research,
              and events delivered to your inbox.
            </p>
            <Button variant="navy" size="lg">
              Subscribe to Newsletter
            </Button>
          </div>
        </section>
      </PageShell>
    </>
  );
}
