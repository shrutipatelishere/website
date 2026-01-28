import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Calendar,
  DollarSign,
  FileText,
  GraduationCap,
  Award,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { PageShell } from '@/components/layout/PageShell';
import { AccordionFAQ, admissionsFAQs } from '@/components/sections/AccordionFAQ';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const applicationSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  program: z.string().min(1, 'Please select a program'),
  degree: z.string().min(1, 'Please select a degree level'),
  startTerm: z.string().min(1, 'Please select a start term'),
  previousSchool: z.string().min(2, 'Previous school is required'),
  gpa: z.string().min(1, 'GPA is required'),
  statement: z.string().min(100, 'Personal statement must be at least 100 characters'),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export function AdmissionsPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (_data: ApplicationFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Application Submitted!",
      description: "Thank you for applying. We'll be in touch within 2-3 weeks.",
      variant: "success",
    });

    reset();
    setIsSubmitting(false);
  };

  const deadlines = [
    { term: "Fall 2024 - Early Decision", deadline: "November 1, 2023", notification: "December 15, 2023" },
    { term: "Fall 2024 - Regular Decision", deadline: "January 15, 2024", notification: "April 1, 2024" },
    { term: "Spring 2025", deadline: "October 1, 2024", notification: "November 15, 2024" },
    { term: "Fall 2025 - Early Decision", deadline: "November 1, 2024", notification: "December 15, 2024" },
  ];

  const tuitionData = [
    { category: "Undergraduate Tuition", amount: "$52,500/year" },
    { category: "Graduate Tuition (varies by program)", amount: "$45,000 - $65,000/year" },
    { category: "Room & Board", amount: "$16,500/year" },
    { category: "Books & Supplies", amount: "$1,200/year" },
    { category: "Student Fees", amount: "$2,800/year" },
  ];

  const scholarships = [
    {
      name: "Presidential Scholarship",
      amount: "Full Tuition",
      criteria: "Top 1% of applicants, exceptional leadership",
    },
    {
      name: "Dean's Merit Award",
      amount: "$25,000/year",
      criteria: "GPA 3.9+, strong extracurriculars",
    },
    {
      name: "Community Service Scholarship",
      amount: "$15,000/year",
      criteria: "Demonstrated commitment to service",
    },
    {
      name: "STEM Excellence Award",
      amount: "$20,000/year",
      criteria: "Outstanding achievement in STEM fields",
    },
    {
      name: "First-Generation Grant",
      amount: "$10,000/year",
      criteria: "First in family to attend college",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Admissions | Westbrook University</title>
        <meta
          name="description"
          content="Apply to Westbrook University. Learn about admission requirements, tuition, scholarships, and how to submit your application."
        />
      </Helmet>

      <PageShell
        title="Admissions"
        subtitle="Join a community of scholars, innovators, and leaders. Your journey begins here."
        variant="hero"
      >
        {/* Quick Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "18%", label: "Acceptance Rate" },
                { value: "3.92", label: "Average GPA" },
                { value: "1480", label: "Average SAT" },
                { value: "65%", label: "Receive Aid" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-gold-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="requirements" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2">
                <TabsTrigger value="requirements" className="py-3">
                  <FileText className="h-4 w-4 mr-2" />
                  Requirements
                </TabsTrigger>
                <TabsTrigger value="tuition" className="py-3" id="tuition">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Tuition
                </TabsTrigger>
                <TabsTrigger value="scholarships" className="py-3" id="scholarships">
                  <Award className="h-4 w-4 mr-2" />
                  Scholarships
                </TabsTrigger>
                <TabsTrigger value="apply" className="py-3" id="apply">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Apply
                </TabsTrigger>
              </TabsList>

              {/* Requirements Tab */}
              <TabsContent value="requirements" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-serif text-xl">Undergraduate Requirements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        "Completed application form",
                        "Official high school transcripts",
                        "SAT or ACT scores",
                        "Two letters of recommendation",
                        "Personal statement (500-650 words)",
                        "Application fee ($75, waived for need)",
                      ].map((req, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="font-serif text-xl">Graduate Requirements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        "Completed application form",
                        "Official undergraduate transcripts",
                        "GRE or GMAT scores (program-specific)",
                        "Three letters of recommendation",
                        "Statement of purpose",
                        "Resume/CV",
                        "Writing sample (some programs)",
                        "Application fee ($90)",
                      ].map((req, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Deadlines */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gold-600" />
                      Application Deadlines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Term</TableHead>
                          <TableHead>Application Deadline</TableHead>
                          <TableHead>Decision Notification</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {deadlines.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.term}</TableCell>
                            <TableCell>{item.deadline}</TableCell>
                            <TableCell>{item.notification}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Tuition Tab */}
              <TabsContent value="tuition">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-serif text-xl">Cost of Attendance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableBody>
                          {tuitionData.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.category}</TableCell>
                              <TableCell className="text-right font-semibold">
                                {item.amount}
                              </TableCell>
                            </TableRow>
                          ))}
                          <TableRow className="bg-muted/50">
                            <TableCell className="font-bold">Estimated Total (Undergraduate)</TableCell>
                            <TableCell className="text-right font-bold text-gold-600">
                              $73,000/year
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="font-serif text-xl">Financial Aid</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        Westbrook is committed to making education accessible. Over 65% of students
                        receive financial aid, with an average aid package of $48,000.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Need-Based Aid</h4>
                          <p className="text-sm text-muted-foreground">
                            Grants and scholarships based on family financial circumstances.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Merit Scholarships</h4>
                          <p className="text-sm text-muted-foreground">
                            Awards recognizing academic achievement and special talents.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Work-Study</h4>
                          <p className="text-sm text-muted-foreground">
                            Part-time employment opportunities on campus.
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://fafsa.gov" target="_blank" rel="noopener noreferrer">
                          Complete FAFSA
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Scholarships Tab */}
              <TabsContent value="scholarships">
                <div className="space-y-6">
                  <p className="text-muted-foreground max-w-2xl">
                    Westbrook offers numerous merit-based scholarships to recognize exceptional students.
                    All applicants are automatically considered for these awards.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {scholarships.map((scholarship, index) => (
                      <Card key={index} className="hover-glow">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Award className="h-8 w-8 text-gold-600" />
                            <div>
                              <h3 className="font-serif font-semibold">{scholarship.name}</h3>
                              <span className="text-gold-600 font-bold">{scholarship.amount}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{scholarship.criteria}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Apply Tab */}
              <TabsContent value="apply">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">Application Form</CardTitle>
                    <p className="text-muted-foreground">
                      Complete this form to begin your application. Fields marked with * are required.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                      {/* Personal Information */}
                      <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 pb-2 border-b">
                          Personal Information
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              {...register('firstName')}
                              aria-invalid={!!errors.firstName}
                            />
                            {errors.firstName && (
                              <p className="text-sm text-destructive">{errors.firstName.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              {...register('lastName')}
                              aria-invalid={!!errors.lastName}
                            />
                            {errors.lastName && (
                              <p className="text-sm text-destructive">{errors.lastName.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              {...register('email')}
                              aria-invalid={!!errors.email}
                            />
                            {errors.email && (
                              <p className="text-sm text-destructive">{errors.email.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              {...register('phone')}
                              aria-invalid={!!errors.phone}
                            />
                            {errors.phone && (
                              <p className="text-sm text-destructive">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Academic Information */}
                      <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 pb-2 border-b">
                          Academic Information
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="degree">Degree Level *</Label>
                            <Select onValueChange={(value) => setValue('degree', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select degree level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bachelor">Bachelor's</SelectItem>
                                <SelectItem value="master">Master's</SelectItem>
                                <SelectItem value="doctorate">Doctorate</SelectItem>
                                <SelectItem value="certificate">Certificate</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.degree && (
                              <p className="text-sm text-destructive">{errors.degree.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="program">Program of Interest *</Label>
                            <Select onValueChange={(value) => setValue('program', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select program" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="computer-science">Computer Science</SelectItem>
                                <SelectItem value="business">Business Administration</SelectItem>
                                <SelectItem value="engineering">Engineering</SelectItem>
                                <SelectItem value="biology">Biology</SelectItem>
                                <SelectItem value="liberal-arts">Liberal Arts</SelectItem>
                                <SelectItem value="medicine">Medicine</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.program && (
                              <p className="text-sm text-destructive">{errors.program.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="startTerm">Intended Start Term *</Label>
                            <Select onValueChange={(value) => setValue('startTerm', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select term" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="fall-2024">Fall 2024</SelectItem>
                                <SelectItem value="spring-2025">Spring 2025</SelectItem>
                                <SelectItem value="fall-2025">Fall 2025</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.startTerm && (
                              <p className="text-sm text-destructive">{errors.startTerm.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gpa">GPA *</Label>
                            <Input
                              id="gpa"
                              placeholder="e.g., 3.85"
                              {...register('gpa')}
                              aria-invalid={!!errors.gpa}
                            />
                            {errors.gpa && (
                              <p className="text-sm text-destructive">{errors.gpa.message}</p>
                            )}
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="previousSchool">Previous School *</Label>
                            <Input
                              id="previousSchool"
                              placeholder="Name of high school or previous institution"
                              {...register('previousSchool')}
                              aria-invalid={!!errors.previousSchool}
                            />
                            {errors.previousSchool && (
                              <p className="text-sm text-destructive">{errors.previousSchool.message}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Personal Statement */}
                      <div>
                        <h3 className="font-serif text-lg font-semibold mb-4 pb-2 border-b">
                          Personal Statement
                        </h3>
                        <div className="space-y-2">
                          <Label htmlFor="statement">
                            Why do you want to attend Westbrook University? (minimum 100 characters) *
                          </Label>
                          <Textarea
                            id="statement"
                            rows={6}
                            placeholder="Share your story, goals, and why Westbrook is the right fit for you..."
                            {...register('statement')}
                            aria-invalid={!!errors.statement}
                          />
                          {errors.statement && (
                            <p className="text-sm text-destructive">{errors.statement.message}</p>
                          )}
                        </div>
                      </div>

                      <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <AccordionFAQ
          faqs={admissionsFAQs}
          title="Frequently Asked Questions"
          className="bg-muted/30"
        />

        {/* Contact CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Our admissions counselors are here to help you through every step of the process.
            </p>
            <Link to="/contact">
              <Button variant="navy" size="lg">
                Contact Admissions
              </Button>
            </Link>
          </div>
        </section>
      </PageShell>
    </>
  );
}
