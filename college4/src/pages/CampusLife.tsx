import { Helmet } from 'react-helmet-async';
import {
  Users,
  Home,
  Trophy,
  Building,
  Palette,
  Globe,
  Heart,
  Music,
  Camera,
  Code,
  Dumbbell,
  Coffee,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageShell } from '@/components/layout/PageShell';
import { cn } from '@/lib/utils';

export function CampusLifePage() {
  const clubs = [
    { name: "Student Government", category: "Leadership", icon: <Users className="h-5 w-5" />, members: 45 },
    { name: "Debate Society", category: "Academic", icon: <Globe className="h-5 w-5" />, members: 60 },
    { name: "Photography Club", category: "Arts", icon: <Camera className="h-5 w-5" />, members: 85 },
    { name: "Music Ensemble", category: "Arts", icon: <Music className="h-5 w-5" />, members: 120 },
    { name: "Coding Club", category: "Academic", icon: <Code className="h-5 w-5" />, members: 95 },
    { name: "Volunteer Corps", category: "Service", icon: <Heart className="h-5 w-5" />, members: 150 },
    { name: "Art Collective", category: "Arts", icon: <Palette className="h-5 w-5" />, members: 55 },
    { name: "Fitness Club", category: "Recreation", icon: <Dumbbell className="h-5 w-5" />, members: 200 },
  ];

  const housing = [
    {
      name: "First-Year Residence",
      type: "Traditional",
      capacity: "Double rooms",
      features: ["Communal lounges", "Study rooms", "Dining hall", "24/7 security"],
    },
    {
      name: "Sophomore Suites",
      type: "Suite-style",
      capacity: "4-person suites",
      features: ["Private bathrooms", "Kitchenette", "Living area", "High-speed WiFi"],
    },
    {
      name: "Upper-Class Apartments",
      type: "Apartment",
      capacity: "2-4 bedrooms",
      features: ["Full kitchen", "Private bedrooms", "In-unit laundry", "Balcony"],
    },
    {
      name: "Graduate Housing",
      type: "Studio/1BR",
      capacity: "Individual units",
      features: ["Quiet study areas", "Furnished options", "Close to labs", "Flexible leases"],
    },
  ];

  const athletics = [
    { sport: "Football", level: "Division I", season: "Fall" },
    { sport: "Basketball", level: "Division I", season: "Winter" },
    { sport: "Soccer", level: "Division I", season: "Fall" },
    { sport: "Swimming", level: "Division I", season: "Winter" },
    { sport: "Tennis", level: "Division I", season: "Spring" },
    { sport: "Track & Field", level: "Division I", season: "Spring" },
    { sport: "Volleyball", level: "Division I", season: "Fall" },
    { sport: "Lacrosse", level: "Division I", season: "Spring" },
  ];

  const facilities = [
    {
      name: "University Library",
      description: "5 million volumes, 24/7 study spaces, rare book collection",
      icon: <Building className="h-8 w-8" />,
    },
    {
      name: "Recreation Center",
      description: "Olympic pool, fitness center, climbing wall, sports courts",
      icon: <Dumbbell className="h-8 w-8" />,
    },
    {
      name: "Student Union",
      description: "Food hall, meeting rooms, student org offices, event spaces",
      icon: <Coffee className="h-8 w-8" />,
    },
    {
      name: "Performing Arts Center",
      description: "500-seat theater, practice rooms, recording studio",
      icon: <Music className="h-8 w-8" />,
    },
    {
      name: "Health & Wellness Center",
      description: "Medical clinic, counseling services, pharmacy",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      name: "Career Center",
      description: "Career counseling, interview prep, job fairs, networking events",
      icon: <Users className="h-8 w-8" />,
    },
  ];

  const galleryImages = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    alt: `Campus facility ${i + 1}`,
  }));

  return (
    <>
      <Helmet>
        <title>Campus Life | Westbrook University</title>
        <meta
          name="description"
          content="Explore student life at Westbrook University. Discover clubs, housing, athletics, and campus facilities that make Westbrook home."
        />
      </Helmet>

      <PageShell
        title="Campus Life"
        subtitle="More than an education—a complete experience. Discover the vibrant community that makes Westbrook home."
        variant="hero"
      >
        {/* Quick Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Users className="h-6 w-6" />, label: "200+ Clubs", link: "#clubs" },
                { icon: <Home className="h-6 w-6" />, label: "4 Housing Options", link: "#housing" },
                { icon: <Trophy className="h-6 w-6" />, label: "22 Sports Teams", link: "#athletics" },
                { icon: <Building className="h-6 w-6" />, label: "World-Class Facilities", link: "#facilities" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex flex-col items-center p-6 rounded-lg bg-background border hover:border-gold-500/50 transition-colors text-center group"
                >
                  <div className="text-gold-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="mt-2 font-semibold">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="clubs" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2">
                <TabsTrigger value="clubs" id="clubs" className="py-3">
                  <Users className="h-4 w-4 mr-2" />
                  Clubs
                </TabsTrigger>
                <TabsTrigger value="housing" id="housing" className="py-3">
                  <Home className="h-4 w-4 mr-2" />
                  Housing
                </TabsTrigger>
                <TabsTrigger value="athletics" id="athletics" className="py-3">
                  <Trophy className="h-4 w-4 mr-2" />
                  Athletics
                </TabsTrigger>
                <TabsTrigger value="facilities" id="facilities" className="py-3">
                  <Building className="h-4 w-4 mr-2" />
                  Facilities
                </TabsTrigger>
              </TabsList>

              {/* Clubs Tab */}
              <TabsContent value="clubs" className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                    Student Organizations
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mb-8">
                    With over 200 student organizations, there's something for everyone. From academic
                    societies to cultural groups, find your community at Westbrook.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {clubs.map((club, index) => (
                    <Card key={index} className="hover-glow group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {club.icon}
                          </div>
                          <Badge variant="outline">{club.category}</Badge>
                        </div>
                        <h3 className="font-semibold mb-1">{club.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {club.members} members
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="outline">
                    Explore All Organizations
                  </Button>
                </div>
              </TabsContent>

              {/* Housing Tab */}
              <TabsContent value="housing" className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                    On-Campus Housing
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mb-8">
                    Westbrook guarantees housing for all first-year students and offers a variety of
                    options for upperclassmen. Each residence features modern amenities and a supportive
                    community.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {housing.map((option, index) => (
                    <Card key={index} className="hover-lift">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="font-serif text-xl">{option.name}</CardTitle>
                          <Badge variant="gold">{option.type}</Badge>
                        </div>
                        <p className="text-muted-foreground">{option.capacity}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid grid-cols-2 gap-2">
                          {option.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Athletics Tab */}
              <TabsContent value="athletics" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                      Westbrook Eagles Athletics
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Our Division I athletic program offers 22 varsity sports, competitive club teams,
                      and extensive intramural options. Whether you're a student-athlete or a fan, there's
                      always a game to catch.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { value: "22", label: "Varsity Sports" },
                        { value: "15", label: "Conference Titles" },
                        { value: "500+", label: "Student Athletes" },
                        { value: "95%", label: "Graduation Rate" },
                      ].map((stat, i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-lg text-center">
                          <div className="font-serif text-2xl font-bold text-gold-600">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Varsity Sports</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {athletics.map((sport, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                        >
                          <span className="font-medium">{sport.sport}</span>
                          <Badge variant="outline" className="text-xs">
                            {sport.season}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Facilities Tab */}
              <TabsContent value="facilities" className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                    Campus Facilities
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mb-8">
                    Our 1,200-acre campus features state-of-the-art facilities designed to support
                    academic excellence, personal growth, and community connection.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {facilities.map((facility, index) => (
                    <Card key={index} className="hover-glow">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center mb-4">
                          {facility.icon}
                        </div>
                        <h3 className="font-serif text-lg font-semibold mb-2">
                          {facility.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {facility.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10">
              Campus Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className={cn(
                    "rounded-lg overflow-hidden bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-800 dark:to-navy-700",
                    image.id === 1 && "md:col-span-2 md:row-span-2",
                    "aspect-square"
                  )}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-navy-300 dark:text-navy-600">
                      {image.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Experience Westbrook Firsthand
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              The best way to understand campus life is to visit. Schedule a tour and see what
              makes Westbrook special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Schedule a Visit
              </Button>
              <Button variant="outline" size="lg">
                Take Virtual Tour
              </Button>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
