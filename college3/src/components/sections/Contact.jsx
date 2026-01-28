import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, Calendar, CheckCircle } from 'lucide-react';
import { SectionHeader, Button, Card } from '../ui';
import { useToast } from '../ui/Toast';
import { useRevealOnScroll } from '../../hooks';
import { universityInfo } from '../../data';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: universityInfo.contact.phone,
    href: `tel:${universityInfo.contact.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: universityInfo.contact.admissions,
    href: `mailto:${universityInfo.contact.admissions}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: `${universityInfo.address.street}, ${universityInfo.address.city}, ${universityInfo.address.state}`,
    href: '#',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon-Fri: 9AM - 5PM EST',
    href: null,
  },
];

function ContactForm({ showToast }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      program: '',
      message: '',
    });

    showToast('Your message has been sent successfully! We will get back to you soon.', 'success');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs sm:text-sm font-medium text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`input-field ${errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-xs sm:text-sm font-medium text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`input-field ${errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-medium text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input-field ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs sm:text-sm font-medium text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="program"
          className="block text-xs sm:text-sm font-medium text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2"
        >
          Program of Interest
        </label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Select a program</option>
          <option value="undergraduate">Undergraduate Programs</option>
          <option value="graduate">Graduate Programs</option>
          <option value="doctoral">Doctoral Programs</option>
          <option value="online">Online Programs</option>
          <option value="other">Other / General Inquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs sm:text-sm font-medium text-foreground dark:text-foreground-dark mb-1.5 sm:mb-2"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`input-field resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full justify-center"
        loading={isSubmitting}
        icon={Send}
      >
        Send Message
      </Button>
    </form>
  );
}

function MapPlaceholder() {
  return (
    <div className="aspect-video lg:aspect-auto lg:h-full min-h-[200px] sm:min-h-[300px] rounded-xl sm:rounded-2xl bg-neutral-200 dark:bg-neutral-700 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-neutral-400 dark:text-neutral-500 mx-auto mb-2" />
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
            Interactive Map
          </p>
          <p className="text-neutral-400 dark:text-neutral-500 text-[10px] sm:text-xs mt-1">
            {universityInfo.address.city}, {universityInfo.address.state}
          </p>
        </div>
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300">
        <defs>
          <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mapGrid)" />
      </svg>
    </div>
  );
}

export function Contact() {
  const [ref, isInView] = useRevealOnScroll();
  const { showToast, ToastComponent } = useToast();

  return (
    <section id="contact" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact Us"
          title="Let's Start a Conversation"
          description="Have questions about admissions, programs, or campus life? Our team is here to help you every step of the way."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div
            className={`
              transition-all duration-700
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
            `}
          >
            <Card padding="lg">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-foreground-dark mb-4 sm:mb-6">
                Send Us a Message
              </h3>
              <ContactForm showToast={showToast} />
            </Card>
          </div>

          <div
            className={`
              space-y-6 sm:space-y-8
              transition-all duration-700 delay-200
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
            `}
          >
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                        {item.label}
                      </div>
                      <div className="font-medium text-foreground dark:text-foreground-dark text-xs sm:text-sm truncate">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>
                    {content}
                  </div>
                );
              })}
            </div>

            <MapPlaceholder />

            <Card
              padding="md"
              className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-primary-200 dark:border-primary-800"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary-500 text-white flex-shrink-0">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-foreground dark:text-foreground-dark mb-0.5 sm:mb-1">
                    Book a Campus Tour
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
                    Experience Aurora firsthand. Schedule a personalized campus tour.
                  </p>
                  <Button as="a" href="#" size="sm" variant="primary">
                    Schedule Tour
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {ToastComponent}
    </section>
  );
}

export default Contact;
