import { Link } from 'react-router-dom';
import { ArrowRight, Clock, GraduationCap, BookOpen, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Program } from '@/data/programs';

// Program/Department images from Unsplash
const departmentImages: Record<string, string> = {
  'computer-science': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
  'business': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  'engineering': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  'humanities': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
  'sciences': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
  'arts': 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
  'health': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80',
  'law': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  'default': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
};

interface ProgramCardProps {
  program: Program;
  className?: string;
  variant?: 'default' | 'compact' | 'featured';
}

export function ProgramCard({ program, className, variant = 'default' }: ProgramCardProps) {
  const degreeColors: Record<string, string> = {
    'Bachelor': 'bg-blue-500/90 text-white',
    'Master': 'bg-gold-500/90 text-navy-900',
    'Doctorate': 'bg-purple-500/90 text-white',
    'Certificate': 'bg-emerald-500/90 text-white',
  };

  const departmentSlug = program.departmentSlug?.toLowerCase().replace(/\s+/g, '-') || 'default';
  const programImage = departmentImages[departmentSlug] || departmentImages['default'];

  if (variant === 'featured') {
    return (
      <Card
        className={cn(
          "group relative overflow-hidden hover-lift",
          "border-0 shadow-xl",
          className
        )}
      >
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
              <img
                src={programImage}
                alt={program.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />

              <Badge className={cn("absolute top-4 left-4", degreeColors[program.degree])}>
                {program.degree}'s Degree
              </Badge>

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">{program.credits} credits</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-medium uppercase tracking-wider text-gold-600 mb-2">
                {program.departmentName}
              </span>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-gold-600 transition-colors mb-4">
                {program.name}
              </h3>

              <p className="text-muted-foreground mb-6">
                {program.description}
              </p>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-sm">95% placement</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">15:1 ratio</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {program.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Link to={`/academics#${program.slug}`}>
                <Button variant="gold" className="group/btn w-full">
                  Explore Program
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <Card
        className={cn(
          "group hover-lift cursor-pointer",
          "border-border/50 hover:border-gold-500/30",
          className
        )}
      >
        <Link to={`/academics#${program.slug}`}>
          <CardContent className="p-4 flex items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-gold-400" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <Badge variant="outline" className="mb-1 text-xs">
                {program.degree}'s
              </Badge>
              <h3 className="font-semibold text-foreground group-hover:text-gold-600 transition-colors truncate">
                {program.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {program.duration} • {program.credits} credits
              </p>
            </div>

            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-gold-600 transition-colors flex-shrink-0" />
          </CardContent>
        </Link>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "group relative overflow-hidden hover-lift",
        "border-border/50 hover:border-gold-500/30",
        className
      )}
    >
      {/* Image Header */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={programImage}
          alt={program.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent" />

        {/* Decorative top border on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        <Badge className={cn("absolute top-4 left-4", degreeColors[program.degree])}>
          {program.degree}'s
        </Badge>

        {/* Department */}
        <span className="absolute bottom-4 left-4 text-xs text-ivory-200 font-medium">
          {program.departmentName}
        </span>
      </div>

      <CardHeader className="pb-3 pt-4">
        <CardTitle className="text-xl group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
          {program.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {program.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-gold-600" />
            {program.duration}
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap className="h-4 w-4 text-gold-600" />
            {program.credits} credits
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {program.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={`/academics#${program.slug}`}
          className="inline-flex items-center text-sm font-medium text-gold-600 dark:text-gold-400 hover:underline group/link"
        >
          View Program
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}

interface ProgramsGridProps {
  programs: Program[];
  className?: string;
}

export function ProgramsGrid({ programs, className }: ProgramsGridProps) {
  return (
    <div className={cn(
      "grid gap-6",
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      className
    )}>
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
}
