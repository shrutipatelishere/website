import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our newsletter at " + email,
        variant: "success",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Academics', path: '/academics' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Campus Life', path: '/campus-life' },
    { label: 'Events', path: '/events' },
    { label: 'News', path: '/news' },
  ];

  const resourceLinks = [
    { label: 'Student Portal', path: '#' },
    { label: 'Faculty & Staff', path: '#' },
    { label: 'Library', path: '#' },
    { label: 'Career Services', path: '#' },
    { label: 'IT Help Desk', path: '#' },
    { label: 'Academic Calendar', path: '#' },
  ];

  const admissionsLinks = [
    { label: 'How to Apply', path: '/admissions#apply' },
    { label: 'Tuition & Aid', path: '/admissions#tuition' },
    { label: 'Scholarships', path: '/admissions#scholarships' },
    { label: 'Visit Campus', path: '#' },
    { label: 'Virtual Tour', path: '#' },
    { label: 'Contact Admissions', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-navy-900 text-ivory-100 dark:bg-navy-950">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
          {/* Logo & Info - Full width on mobile */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 md:mb-6">
              <img src="/crest.svg" alt="" className="h-10 sm:h-12 md:h-14 w-auto" />
              <div>
                <span className="font-serif text-xl sm:text-2xl font-semibold block">
                  Westbrook
                </span>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase text-ivory-300">
                  University
                </span>
              </div>
            </Link>
            <p className="text-ivory-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base max-w-sm">
              Founded in 1847, Westbrook University has been a beacon of academic excellence,
              fostering innovation and nurturing the leaders of tomorrow.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-ivory-300">
                  1200 University Avenue<br />
                  Westbrook, CA 94720
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-ivory-300 hover:text-gold-400 transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@westbrook.edu" className="text-ivory-300 hover:text-gold-400 transition-colors break-all">
                  info@westbrook.edu
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-ivory-100">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ivory-300 hover:text-gold-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-ivory-100">
              Resources
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-ivory-300 hover:text-gold-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions - Hidden on smallest screens, visible on sm+ */}
          <div className="hidden sm:block">
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-ivory-100">
              Admissions
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {admissionsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-ivory-300 hover:text-gold-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-ivory-100/10 mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12">
          <div className="max-w-xl">
            <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-ivory-300 text-xs sm:text-sm mb-3 sm:mb-4">
              Stay updated with the latest news, events, and announcements from Westbrook University.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-ivory-100/10 border-ivory-100/20 text-ivory-100 placeholder:text-ivory-400 focus:border-gold-500 text-sm h-10 sm:h-11"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                variant="gold"
                disabled={isSubmitting}
                className="w-full sm:w-auto whitespace-nowrap h-10 sm:h-11"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory-100/10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col gap-4 sm:gap-4 md:flex-row md:justify-between md:items-center">
            {/* Social Links - First on mobile for visibility */}
            <div className="flex items-center justify-center md:justify-start gap-4 order-1 md:order-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-ivory-400 hover:text-gold-400 transition-colors p-1"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-ivory-400 text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
              © {new Date().getFullYear()} Westbrook University. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 text-xs sm:text-sm order-3">
              <a href="#" className="text-ivory-400 hover:text-gold-400 transition-colors">
                Privacy
              </a>
              <span className="text-ivory-600">|</span>
              <a href="#" className="text-ivory-400 hover:text-gold-400 transition-colors">
                Terms
              </a>
              <span className="text-ivory-600">|</span>
              <a href="#" className="text-ivory-400 hover:text-gold-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
