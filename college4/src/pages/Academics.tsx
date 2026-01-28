import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { PageShell } from '@/components/layout/PageShell';
import { ProgramsGrid } from '@/components/sections/ProgramCard';
import { EmptyState } from '@/components/sections/LoadingStates';
import { programs, getAllTags, getAllDegrees } from '@/data/programs';
import { departments } from '@/data/departments';
import { cn } from '@/lib/utils';

export function AcademicsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const initialDegree = 'all';
  const initialDepartment = 'all';
  const initialTab = 'programs';

  const [selectedDegree, setSelectedDegree] = useState(initialDegree);
  const [selectedDepartment, setSelectedDepartment] = useState(initialDepartment);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = getAllTags();
  const allDegrees = getAllDegrees();

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          program.name.toLowerCase().includes(query) ||
          program.description.toLowerCase().includes(query) ||
          program.departmentName.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Degree filter
      if (selectedDegree !== 'all' && program.degree !== selectedDegree) {
        return false;
      }

      // Department filter
      if (selectedDepartment !== 'all' && program.departmentSlug !== selectedDepartment) {
        return false;
      }

      // Tags filter
      if (selectedTags.length > 0) {
        const hasMatchingTag = selectedTags.some((tag) => program.tags.includes(tag));
        if (!hasMatchingTag) return false;
      }

      return true;
    });
  }, [searchQuery, selectedDegree, selectedDepartment, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDegree('all');
    setSelectedDepartment('all');
    setSelectedTags([]);
  };

  const hasActiveFilters =
    searchQuery || selectedDegree !== 'all' || selectedDepartment !== 'all' || selectedTags.length > 0;

  return (
    <>
      <Helmet>
        <title>Academics | Westbrook University</title>
        <meta
          name="description"
          content="Explore academic programs at Westbrook University. Browse undergraduate, graduate, and certificate programs across all departments."
        />
      </Helmet>

      <PageShell
        title="Academic Programs"
        subtitle="Discover our comprehensive range of undergraduate, graduate, and professional programs designed to prepare you for success."
        variant="hero"
      >
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={initialTab} className="space-y-8">
              <TabsList>
                <TabsTrigger value="programs">All Programs</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
              </TabsList>

              <TabsContent value="programs" className="space-y-8">
                {/* Search and Filters */}
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search programs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                        aria-label="Search programs"
                      />
                    </div>

                    {/* Degree Filter */}
                    <Select value={selectedDegree} onValueChange={setSelectedDegree}>
                      <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="Degree Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Degrees</SelectItem>
                        {allDegrees.map((degree) => (
                          <SelectItem key={degree} value={degree}>
                            {degree}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Department Filter */}
                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                      <SelectTrigger className="w-full md:w-64">
                        <SelectValue placeholder="Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        {departments.map((dept) => (
                          <SelectItem key={dept.slug} value={dept.slug}>
                            {dept.shortName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tag Filters */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      Tags:
                    </span>
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                        className={cn(
                          'cursor-pointer transition-colors',
                          selectedTags.includes(tag) && 'bg-gold-500 hover:bg-gold-600'
                        )}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}

                    {hasActiveFilters && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-muted-foreground"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Clear All
                      </Button>
                    )}
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-sm text-muted-foreground">
                  Showing {filteredPrograms.length} of {programs.length} programs
                </div>

                {/* Programs Grid */}
                {filteredPrograms.length > 0 ? (
                  <ProgramsGrid programs={filteredPrograms} />
                ) : (
                  <EmptyState
                    title="No programs found"
                    description="Try adjusting your search or filter criteria to find programs."
                    action={
                      <Button variant="outline" onClick={clearFilters}>
                        Clear Filters
                      </Button>
                    }
                  />
                )}
              </TabsContent>

              <TabsContent value="research" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                      Research at Westbrook
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Research is at the heart of Westbrook University's mission. Our faculty and
                      students engage in groundbreaking work that addresses the most pressing
                      challenges facing our world.
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      With over $85 million in annual research funding, state-of-the-art facilities,
                      and collaborative partnerships across disciplines, Westbrook is where
                      discovery happens.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: '$85M', label: 'Annual Funding' },
                        { value: '50+', label: 'Research Centers' },
                        { value: '1,200+', label: 'Publications/Year' },
                        { value: '200+', label: 'Patents Filed' },
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

                  <div className="space-y-4">
                    <h3 className="font-serif text-xl font-semibold">Research Areas</h3>
                    {[
                      {
                        title: 'Climate & Sustainability',
                        description: 'Addressing environmental challenges through interdisciplinary research.',
                      },
                      {
                        title: 'Artificial Intelligence',
                        description: 'Advancing AI technologies and understanding their societal impact.',
                      },
                      {
                        title: 'Health Sciences',
                        description: 'Pioneering medical discoveries and improving human health.',
                      },
                      {
                        title: 'Social Innovation',
                        description: 'Developing solutions to complex social and economic problems.',
                      },
                    ].map((area, i) => (
                      <Card key={i} className="hover-glow">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-1">{area.title}</h4>
                          <p className="text-sm text-muted-foreground">{area.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Departments CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8">
              Explore by Department
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <Link key={dept.id} to={`/departments/${dept.slug}`}>
                  <Card className="h-full hover-lift group">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-semibold group-hover:text-gold-600 transition-colors mb-2">
                        {dept.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {dept.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{dept.programCount} Programs</span>
                        <span>{dept.facultyCount} Faculty</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
