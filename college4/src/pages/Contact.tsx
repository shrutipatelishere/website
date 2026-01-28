import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock, Building, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { PageShell } from '@/components/layout/PageShell';
import { AccordionFAQ, generalFAQs } from '@/components/sections/AccordionFAQ';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  department: z.string().min(1, 'Please select a department'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 2-3 business days.",
      variant: "success",
    });

    reset();
    setIsSubmitting(false);
  };

  const departments = [
    { value: "admissions", label: "Admissions" },
    { value: "financial-aid", label: "Financial Aid" },
    { value: "registrar", label: "Registrar" },
    { value: "student-affairs", label: "Student Affairs" },
    { value: "academics", label: "Academic Affairs" },
    { value: "housing", label: "Housing & Residence Life" },
    { value: "athletics", label: "Athletics" },
    { value: "other", label: "Other" },
  ];

  const contactInfo = [
    {
      title: "Main Campus",
      icon: <Building className="h-5 w-5" />,
      details: [
        "1200 University Avenue",
        "Westbrook, CA 94720",
      ],
    },
    {
      title: "Phone",
      icon: <Phone className="h-5 w-5" />,
      details: [
        "Main: (555) 123-4567",
        "Admissions: (555) 123-4568",
      ],
    },
    {
      title: "Email",
      icon: <Mail className="h-5 w-5" />,
      details: [
        "info@westbrook.edu",
        "admissions@westbrook.edu",
      ],
    },
    {
      title: "Office Hours",
      icon: <Clock className="h-5 w-5" />,
      details: [
        "Mon - Fri: 8:00 AM - 5:00 PM",
        "Sat: 9:00 AM - 1:00 PM (Admissions)",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Westbrook University</title>
        <meta
          name="description"
          content="Get in touch with Westbrook University. Find contact information for admissions, departments, and general inquiries."
        />
      </Helmet>

      <PageShell
        title="Contact Us"
        subtitle="We're here to help. Reach out with questions about admissions, programs, campus visits, or anything else."
        variant="hero"
      >
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 2-3 business days.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            {...register('name')}
                            aria-invalid={!!errors.name}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">{errors.name.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            {...register('email')}
                            aria-invalid={!!errors.email}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 000-0000"
                            {...register('phone')}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department *</Label>
                          <Select onValueChange={(value) => setValue('department', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept.value} value={dept.value}>
                                  {dept.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.department && (
                            <p className="text-sm text-destructive">{errors.department.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="What is your inquiry about?"
                          {...register('subject')}
                          aria-invalid={!!errors.subject}
                        />
                        {errors.subject && (
                          <p className="text-sm text-destructive">{errors.subject.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          rows={6}
                          placeholder="How can we help you?"
                          {...register('message')}
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message.message}</p>
                        )}
                      </div>

                      <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Emergency Card */}
                <Card className="bg-destructive/5 border-destructive/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-destructive mb-2">
                      Campus Emergency
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      For emergencies, contact Campus Security:
                    </p>
                    <p className="font-bold text-lg">
                      (555) 123-9999
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8">
              Find Us
            </h2>
            <div className="aspect-[21/9] rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-800 dark:to-navy-700 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-navy-300 dark:text-navy-600 mx-auto mb-4" />
                <p className="text-navy-500 dark:text-navy-400 font-serif text-xl">
                  Interactive Map Placeholder
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  1200 University Avenue, Westbrook, CA 94720
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <AccordionFAQ
          faqs={generalFAQs}
          title="Frequently Asked Questions"
        />

        {/* Visit CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Visit Our Campus
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Experience Westbrook firsthand. Schedule a campus tour to see our facilities,
              meet students, and get a feel for university life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Schedule a Tour
              </Button>
              <Button variant="outline" size="lg">
                Virtual Tour
              </Button>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
