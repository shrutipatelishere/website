import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageShell } from '@/components/layout/PageShell';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { Timeline, universityMilestones } from '@/components/sections/Timeline';
import { FacultyCarousel } from '@/components/sections/FacultyCarousel';
import { getFeaturedFaculty } from '@/data/faculty';

export function AboutPage() {
  const leadership = [
    {
      name: "Dr. Helen Morrison",
      title: "President",
      bio: "Leading Westbrook since 2018, Dr. Morrison has championed sustainability initiatives and expanded research partnerships.",
    },
    {
      name: "Dr. Linda Hayes",
      title: "Provost",
      bio: "Overseeing academic affairs, Dr. Hayes has implemented innovative curriculum reforms and faculty development programs.",
    },
    {
      name: "Michael Roberts",
      title: "Vice President, Finance",
      bio: "Managing university finances with a focus on strategic investments in facilities and student support.",
    },
    {
      name: "Maria Santos",
      title: "Vice President, Student Affairs",
      bio: "Dedicated to student success, Maria has transformed campus life through new programs and services.",
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Excellence",
      description: "Pursuing the highest standards in teaching, research, and service to society.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Diversity",
      description: "Embracing diverse perspectives and fostering an inclusive community.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "Upholding ethical principles in all aspects of university life.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Innovation",
      description: "Encouraging creative thinking and pioneering research across disciplines.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Westbrook University</title>
        <meta
          name="description"
          content="Learn about Westbrook University's rich history, mission, values, and leadership. Discover why we've been a leader in higher education since 1847."
        />
      </Helmet>

      <PageShell
        title="About Westbrook University"
        subtitle="Since 1847, we have been dedicated to the pursuit of knowledge, the advancement of scholarship, and the service of humanity."
        variant="hero"
      >
        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-700 dark:text-gold-400 rounded-full text-sm font-medium mb-4">
                  Our Mission
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Shaping Minds, Transforming Lives
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Westbrook University is committed to creating knowledge through innovative research,
                  transmitting knowledge through excellent teaching, and applying knowledge to address
                  the challenges facing our local and global communities.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We prepare our students not just for careers, but for lives of meaning and purpose.
                  Through rigorous academics, diverse experiences, and a supportive community, we
                  cultivate the intellectual, ethical, and practical capabilities needed for leadership
                  in a complex world.
                </p>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border-l-4 border-gold-500">
                  <blockquote className="font-serif text-lg italic text-foreground">
                    "Knowledge, Service, Excellence"
                  </blockquote>
                  <span className="text-sm text-muted-foreground">— University Motto</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <Card key={index} className="hover-glow">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 text-gold-600 mb-4">
                        {value.icon}
                      </div>
                      <h3 className="font-serif text-lg font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <StatsStrip variant="dark" />

        {/* History Timeline */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-700 dark:text-gold-400 rounded-full text-sm font-medium mb-4">
                Our History
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                A Legacy of Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From our humble beginnings in 1847 to our position as a world-class research
                university today, explore the milestones that have shaped Westbrook.
              </p>
            </div>

            <Timeline milestones={universityMilestones} />
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-700 dark:text-gold-400 rounded-full text-sm font-medium mb-4">
                Leadership
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                University Leadership
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated leaders guiding Westbrook University into the future
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {leadership.map((leader, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-700 dark:to-navy-600 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold text-navy-600 dark:text-ivory-300">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="text-gold-600 dark:text-gold-400 font-medium text-sm mb-3">
                      {leader.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {leader.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Preview */}
        <FacultyCarousel
          faculty={getFeaturedFaculty()}
          title="Distinguished Faculty"
        />

        {/* Campus Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-700 dark:text-gold-400 rounded-full text-sm font-medium mb-4">
                  Our Campus
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Place to Thrive
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Set on 1,200 acres of beautiful grounds, Westbrook's campus combines historic
                  architecture with state-of-the-art facilities. From our iconic quad to cutting-edge
                  research labs, every space is designed to inspire learning and discovery.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "200+ buildings including libraries, labs, and studios",
                    "Award-winning sustainable campus design",
                    "Modern residence halls and dining facilities",
                    "Extensive athletics and recreation facilities",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold-500 mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/campus-life">
                  <Button variant="navy" className="group">
                    Explore Campus Life
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-800 dark:to-navy-700" />
                <div className="aspect-square rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-800 dark:to-navy-700 mt-8" />
                <div className="aspect-square rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-800 dark:to-navy-700 -mt-8" />
                <div className="aspect-square rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-800 dark:to-navy-700" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-navy-800 to-navy-900 text-ivory-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Become Part of Our Story
            </h2>
            <p className="text-ivory-300 max-w-2xl mx-auto mb-8">
              Join a community that has been shaping leaders and creating knowledge for over 175 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button variant="gold" size="lg">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-ivory-300 text-ivory-100 hover:bg-ivory-100/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
