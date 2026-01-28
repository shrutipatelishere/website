import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User, Share2, Bookmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn, formatDate } from '@/lib/utils';
import type { NewsArticle } from '@/data/news';

// News category images from Unsplash
const categoryImages: Record<string, string> = {
  'Announcements': 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
  'Research': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
  'Campus Life': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
  'Athletics': 'https://images.unsplash.com/photo-1461896836934- voices-of-young-runners?w=600&q=80',
  'Alumni': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  'Awards': 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80',
};

interface NewsCardProps {
  article: NewsArticle;
  className?: string;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
}

export function NewsCard({ article, className, variant = 'default' }: NewsCardProps) {
  const categoryColors: Record<string, string> = {
    'Announcements': 'bg-blue-500/90 text-white',
    'Research': 'bg-purple-500/90 text-white',
    'Campus Life': 'bg-emerald-500/90 text-white',
    'Athletics': 'bg-orange-500/90 text-white',
    'Alumni': 'bg-teal-500/90 text-white',
    'Awards': 'bg-gold-500/90 text-white',
  };

  const articleImage = categoryImages[article.category] || categoryImages['Announcements'];

  if (variant === 'featured') {
    return (
      <Card className={cn("overflow-hidden group hover-lift", className)}>
        <Link to={`/news/${article.slug}`}>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                <img
                  src={articleImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <Badge
                  className={cn(
                    "absolute top-4 left-4",
                    categoryColors[article.category]
                  )}
                >
                  {article.category}
                </Badge>

                {/* Featured label */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-wider rounded">
                  Featured Story
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(article.date)}
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-gold-600 transition-colors mb-4">
                  {article.title}
                </h2>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center">
                      <User className="h-5 w-5 text-ivory-100" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium">{article.author}</span>
                      <span className="text-xs text-muted-foreground">{article.authorTitle}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Card className={cn("overflow-hidden group hover-lift", className)}>
        <Link to={`/news/${article.slug}`}>
          <CardContent className="p-0">
            <div className="flex">
              {/* Image */}
              <div className="relative w-1/3 min-w-[150px] overflow-hidden">
                <img
                  src={articleImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/20" />
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                <Badge
                  variant="outline"
                  className="mb-2 text-xs"
                >
                  {article.category}
                </Badge>

                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold-600 transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {formatDate(article.date)}
                </div>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        to={`/news/${article.slug}`}
        className={cn(
          "group flex items-start gap-4 p-4 rounded-lg transition-colors hover:bg-muted/50",
          className
        )}
      >
        {/* Date */}
        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-800 dark:to-navy-700 flex flex-col items-center justify-center overflow-hidden">
          <span className="text-xs text-gold-600 dark:text-gold-400 font-medium">
            {new Date(article.date).toLocaleDateString('en-US', { month: 'short' })}
          </span>
          <span className="text-lg font-bold font-serif text-navy-900 dark:text-ivory-100">
            {new Date(article.date).getDate()}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <Badge
            variant="outline"
            className="mb-2 text-xs"
          >
            {article.category}
          </Badge>
          <h3 className="font-semibold text-foreground group-hover:text-gold-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </div>

        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-gold-600 transition-colors flex-shrink-0 mt-1" />
      </Link>
    );
  }

  return (
    <Card className={cn("overflow-hidden group hover-lift", className)}>
      <Link to={`/news/${article.slug}`}>
        <CardContent className="p-0">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={articleImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
            <Badge
              className={cn(
                "absolute top-4 left-4",
                categoryColors[article.category]
              )}
            >
              {article.category}
            </Badge>

            {/* Reading time */}
            <div className="absolute bottom-4 right-4 px-2 py-1 bg-white/90 dark:bg-navy-800/90 rounded text-xs font-medium backdrop-blur-sm">
              5 min read
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Calendar className="h-4 w-4" />
              {formatDate(article.date)}
            </div>

            <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-gold-600 transition-colors mb-2 line-clamp-2">
              {article.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center">
                  <User className="h-4 w-4 text-ivory-100" />
                </div>
                <span className="text-sm font-medium">{article.author}</span>
              </div>

              <span className="inline-flex items-center text-sm font-medium text-gold-600 dark:text-gold-400 group-hover:underline">
                Read More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

interface NewsGridProps {
  articles: NewsArticle[];
  className?: string;
}

export function NewsGrid({ articles, className }: NewsGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
