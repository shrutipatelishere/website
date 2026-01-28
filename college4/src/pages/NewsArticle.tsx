import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageShell } from '@/components/layout/PageShell';
import { NewsCard } from '@/components/sections/NewsCard';
import { getNewsArticleBySlug, getRecentNews } from '@/data/news';
import { formatDate } from '@/lib/utils';

export function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/news" replace />;
  }

  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const recentArticles = getRecentNews(4).filter((a) => a.slug !== slug).slice(0, 3);

  const breadcrumbs = [
    { label: 'News', path: '/news' },
    { label: article.title.length > 40 ? article.title.slice(0, 40) + '...' : article.title },
  ];

  const categoryColors: Record<string, string> = {
    'Announcements': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'Research': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'Campus Life': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'Athletics': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    'Alumni': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
    'Awards': 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-400',
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | Westbrook University News</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <PageShell breadcrumbs={breadcrumbs} title="" variant="minimal">
        <article className="py-12">
          <div className="container mx-auto px-4">
            {/* Back Link */}
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold-600 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Header */}
                <header className="mb-8">
                  <Badge className={categoryColors[article.category]}>
                    {article.category}
                  </Badge>

                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                    {article.title}
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}, {article.authorTitle}</span>
                    </div>
                  </div>
                </header>

                {/* Featured Image Placeholder */}
                <div className="aspect-video rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-800 dark:to-navy-700 mb-8 flex items-center justify-center">
                  <span className="font-serif text-4xl font-bold text-navy-300 dark:text-navy-600">
                    Featured Image
                  </span>
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-gold-600 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share This Article
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" aria-label="Share on Facebook">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Share on Twitter">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-8">
                  {/* Author Card */}
                  <div className="p-6 rounded-lg border bg-card">
                    <h3 className="font-serif text-lg font-semibold mb-4">About the Author</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-navy-100 dark:bg-navy-700 flex items-center justify-center">
                        <User className="h-6 w-6 text-navy-600 dark:text-navy-300" />
                      </div>
                      <div>
                        <p className="font-semibold">{article.author}</p>
                        <p className="text-sm text-muted-foreground">{article.authorTitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Articles */}
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-4">Recent News</h3>
                    <div className="space-y-4">
                      {recentArticles.map((recentArticle) => (
                        <NewsCard
                          key={recentArticle.id}
                          article={recentArticle}
                          variant="compact"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Newsletter CTA */}
                  <div className="p-6 rounded-lg bg-navy-900 text-ivory-100">
                    <h3 className="font-serif text-lg font-semibold mb-2">Stay Updated</h3>
                    <p className="text-sm text-ivory-300 mb-4">
                      Subscribe to our newsletter for the latest university news.
                    </p>
                    <Button variant="gold" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </PageShell>
    </>
  );
}
