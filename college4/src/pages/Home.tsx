import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BookOpen, Users, Award, FlaskConical, Play, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hero } from '@/components/sections/Hero';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { ProgramsGrid } from '@/components/sections/ProgramCard';
import { FacultyCarousel } from '@/components/sections/FacultyCarousel';
import { TestimonialsGrid, sampleTestimonials } from '@/components/sections/TestimonialCard';
import { EventCard } from '@/components/sections/EventCard';
import { NewsCard } from '@/components/sections/NewsCard';
import { getFeaturedPrograms } from '@/data/programs';
import { getFeaturedFaculty } from '@/data/faculty';
import { getFeaturedEvents } from '@/data/events';
import { getFeaturedNews } from '@/data/news';
import { departments } from '@/data/departments';
import { cn } from '@/lib/utils';

export function HomePage() {
  const featuredPrograms = getFeaturedPrograms();
  const featuredFaculty = getFeaturedFaculty();
  const featuredEvents = getFeaturedEvents().slice(0, 3);
  const featuredNews = getFeaturedNews().slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Westbrook University | Excellence in Education Since 1847</title>
        <meta
          name="description"
          content="Westbrook University is a leading institution of higher education offering undergraduate and graduate programs across multiple disciplines. Discover your potential."
        />
      </Helmet>

      {/* Hero Section */}
      <Hero
        title="Where Tradition Meets Tomorrow"
        subtitle="For over 175 years, Westbrook University has been shaping visionary leaders, pioneering researchers, and engaged global citizens. Join a community dedicated to excellence."
        primaryCta={{ label: "Apply Now", href: "/admissions#apply" }}
        secondaryCta={{ label: "Explore Programs", href: "/academics" }}
        image="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
      />

      {/* Stats Strip */}
      <StatsStrip variant="gradient" />

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Image/Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                  alt="Students on campus"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element - Hidden on mobile */}
              <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-full h-full border-2 border-gold-500/30 rounded-xl sm:rounded-2xl -z-10" />

              {/* Floating card - Hidden on small screens */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white dark:bg-navy-800 p-4 xl:p-6 rounded-xl shadow-xl border">
                <div className="flex items-center gap-3 xl:gap-4">
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <Award className="h-5 w-5 xl:h-6 xl:w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-serif text-xl xl:text-2xl font-bold text-navy-900 dark:text-ivory-100">#15</div>
                    <div className="text-xs xl:text-sm text-muted-foreground">National Ranking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <Badge variant="gold" className="mb-3 sm:mb-4">About Westbrook</Badge>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                A Legacy of Academic Excellence
              </h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                Founded in 1847, Westbrook University stands as a beacon of intellectual pursuit
                and innovation. Our commitment to rigorous scholarship, ethical leadership, and
                community engagement has shaped generations of leaders across every field of endeavor.
              </p>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Today, we continue to push the boundaries of knowledge through groundbreaking
                research, foster diverse perspectives in our classrooms, and prepare students
                to address the complex challenges of our time.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/about" className="w-full sm:w-auto">
                  <Button variant="gold" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
                    Learn Our Story
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <Badge variant="gold" className="mb-3 sm:mb-4">Academic Excellence</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Schools & Departments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              Explore our diverse academic offerings across six renowned schools
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, index) => (
              <Link key={dept.id} to={`/departments/${dept.slug}`}>
                <Card
                  className={cn(
                    "h-full hover-lift group overflow-hidden",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-32 sm:h-40 overflow-hidden">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-white line-clamp-2">
                          {dept.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 md:p-5">
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                        {dept.description}
                      </p>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 sm:gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-gold-600" />
                            <span className="hidden min-[400px]:inline">{dept.programCount} Programs</span>
                            <span className="min-[400px]:hidden">{dept.programCount}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-gold-600" />
                            <span className="hidden min-[400px]:inline">{dept.facultyCount} Faculty</span>
                            <span className="min-[400px]:hidden">{dept.facultyCount}</span>
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gold-600 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
            <div>
              <Badge variant="gold" className="mb-3 sm:mb-4">Popular Choices</Badge>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Featured Programs
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl text-sm sm:text-base">
                Discover our most sought-after degree programs designed to launch your career
              </p>
            </div>
            <Link to="/academics" className="hidden md:block flex-shrink-0">
              <Button variant="outline" className="group">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <ProgramsGrid programs={featuredPrograms} />

          <div className="mt-8 text-center md:hidden">
            <Link to="/academics">
              <Button variant="outline" className="group">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Westbrook */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-ivory-100 relative overflow-hidden">
        {/* Background decorations - Hidden on mobile */}
        <div className="hidden sm:block absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="hidden sm:block absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-gold-500/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/30 mb-3 sm:mb-4">Why Westbrook</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-ivory-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              Discover what makes Westbrook University the ideal choice for your education
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "World-Class Faculty",
                description: "Learn from Nobel laureates, industry leaders, and renowned researchers dedicated to your success.",
                stat: "850+",
                statLabel: "Faculty"
              },
              {
                icon: <FlaskConical className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Cutting-Edge Research",
                description: "$125M in annual research funding supports groundbreaking discoveries across all disciplines.",
                stat: "$125M",
                statLabel: "Research Funding"
              },
              {
                icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Global Community",
                description: "Join a diverse community of 15,000 students from over 100 countries around the world.",
                stat: "100+",
                statLabel: "Countries"
              },
              {
                icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Career Success",
                description: "98% of graduates are employed or pursuing advanced degrees within six months.",
                stat: "98%",
                statLabel: "Placement Rate"
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl",
                  "bg-white/5 backdrop-blur-sm border border-white/10",
                  "hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300",
                  "animate-fade-in group"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gold-500/20 text-gold-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-ivory-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {item.description}
                </p>
                <div className="pt-3 sm:pt-4 border-t border-white/10">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-gold-400">{item.stat}</span>
                  <span className="text-xs text-ivory-400 ml-2">{item.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <FacultyCarousel faculty={featuredFaculty} />

      {/* Campus Life Preview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <Badge variant="gold" className="mb-3 sm:mb-4">Campus Life</Badge>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Experience Life at Westbrook
              </h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                Our vibrant campus is home to over 300 student organizations, state-of-the-art
                facilities, and a tight-knit community that supports your growth beyond the classroom.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { value: "300+", label: "Student Organizations" },
                  { value: "15", label: "NCAA Teams" },
                  { value: "4", label: "Libraries" },
                  { value: "12", label: "Dining Halls" },
                ].map((stat, index) => (
                  <div key={index} className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background border">
                    <div className="font-serif text-xl sm:text-2xl font-bold text-gold-600 dark:text-gold-400">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/campus-life" className="w-full sm:w-auto">
                  <Button variant="gold" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
                    Explore Campus
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
                    <MapPin className="mr-2 h-4 w-4" />
                    Plan a Visit
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Grid - Responsive */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80"
                    alt="Students studying"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80"
                    alt="Campus activities"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 pt-6 sm:pt-8">
                <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80"
                    alt="Library"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80"
                    alt="Campus event"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <Badge variant="gold" className="mb-3 sm:mb-4">Alumni Stories</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Voices of Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              Hear from our graduates about how Westbrook shaped their journey
            </p>
          </div>

          <TestimonialsGrid testimonials={sampleTestimonials} />
        </div>
      </section>

      {/* Events & News */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Events */}
            <div>
              <div className="flex items-end justify-between mb-6 sm:mb-8">
                <div>
                  <Badge variant="gold" className="mb-2 sm:mb-3">What's Happening</Badge>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    Upcoming Events
                  </h2>
                </div>
                <Link
                  to="/events"
                  className="text-xs sm:text-sm font-medium text-gold-600 dark:text-gold-400 hover:underline flex items-center gap-1"
                >
                  View All
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {featuredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    variant="compact"
                  />
                ))}
              </div>
            </div>

            {/* News */}
            <div>
              <div className="flex items-end justify-between mb-6 sm:mb-8">
                <div>
                  <Badge variant="gold" className="mb-2 sm:mb-3">Latest Updates</Badge>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    University News
                  </h2>
                </div>
                <Link
                  to="/news"
                  className="text-xs sm:text-sm font-medium text-gold-600 dark:text-gold-400 hover:underline flex items-center gap-1"
                >
                  View All
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {featuredNews.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/80" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-ivory-200 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg px-4">
            Take the first step toward an extraordinary education. Apply now and discover
            what it means to be part of the Westbrook community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/admissions#apply" className="w-full sm:w-auto">
              <Button variant="gold" size="lg" className="shadow-lg shadow-gold-500/25 w-full sm:w-auto text-sm sm:text-base">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto text-sm sm:text-base">
                Request Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
