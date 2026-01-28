import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Users, GraduationCap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageShell } from '@/components/layout/PageShell';
import { ProgramsGrid } from '@/components/sections/ProgramCard';
import { FacultyCarousel } from '@/components/sections/FacultyCarousel';
import { getDepartmentBySlug, departments } from '@/data/departments';
import { getProgramsByDepartment } from '@/data/programs';
import { getFacultyByDepartment } from '@/data/faculty';

export function DepartmentPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/academics" replace />;
  }

  const department = getDepartmentBySlug(slug);

  if (!department) {
    return <Navigate to="/academics" replace />;
  }

  const departmentPrograms = getProgramsByDepartment(slug);
  const departmentFaculty = getFacultyByDepartment(slug);

  const breadcrumbs = [
    { label: 'Academics', path: '/academics' },
    { label: department.shortName },
  ];

  return (
    <>
      <Helmet>
        <title>{department.name} | Westbrook University</title>
        <meta name="description" content={department.description} />
      </Helmet>

      <PageShell
        title={department.name}
        subtitle={department.description}
        breadcrumbs={breadcrumbs}
        variant="hero"
      >
        {/* Quick Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-600 mb-2">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {department.programCount}
                </div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-600 mb-2">
                  <Users className="h-6 w-6" />
                </div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {department.facultyCount}
                </div>
                <div className="text-sm text-muted-foreground">Faculty</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-600 mb-2">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {department.studentCount.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                  About the Department
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {department.longDescription}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">Highlights</h3>
                  <ul className="space-y-3">
                    {department.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold-500 mt-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Research Areas */}
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">Research Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {department.researchAreas.map((area, index) => (
                      <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="font-serif">Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        Department Head
                      </h4>
                      <p className="font-medium">{department.dean}</p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-gold-600" />
                        <a
                          href={`mailto:${department.email}`}
                          className="text-muted-foreground hover:text-gold-600 transition-colors"
                        >
                          {department.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-gold-600" />
                        <a
                          href={`tel:${department.phone}`}
                          className="text-muted-foreground hover:text-gold-600 transition-colors"
                        >
                          {department.phone}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-gold-600 mt-0.5" />
                        <span className="text-muted-foreground">{department.location}</span>
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <Link to="/admissions#apply">
                        <Button variant="gold" className="w-full">
                          Apply Now
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline" className="w-full">
                          Request Information
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        {departmentPrograms.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">
                    Programs Offered
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {departmentPrograms.length} programs available in this department
                  </p>
                </div>
                <Link to="/academics" className="hidden md:block">
                  <Button variant="outline" className="group">
                    View All Programs
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <ProgramsGrid programs={departmentPrograms} />
            </div>
          </section>
        )}

        {/* Faculty */}
        {departmentFaculty.length > 0 && (
          <FacultyCarousel
            faculty={departmentFaculty}
            title="Our Faculty"
          />
        )}

        {/* Other Departments */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10">
              Explore Other Departments
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {departments
                .filter((d) => d.slug !== slug)
                .slice(0, 3)
                .map((dept) => (
                  <Link key={dept.id} to={`/departments/${dept.slug}`}>
                    <Card className="h-full hover-lift group">
                      <CardContent className="p-6">
                        <h3 className="font-serif text-lg font-semibold group-hover:text-gold-600 transition-colors mb-2">
                          {dept.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {dept.description}
                        </p>
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
