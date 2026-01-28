import { useState } from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { universityInfo } from '../../data';

const footerLinks = {
  academics: {
    title: 'Academics',
    links: [
      { label: 'Undergraduate Programs', href: '#programs' },
      { label: 'Graduate Programs', href: '#programs' },
      { label: 'Online Learning', href: '#programs' },
      { label: 'Academic Calendar', href: '#' },
      { label: 'Library', href: '#' },
    ],
  },
  admissions: {
    title: 'Admissions',
    links: [
      { label: 'How to Apply', href: '#admissions' },
      { label: 'Tuition & Aid', href: '#admissions' },
      { label: 'Visit Campus', href: '#contact' },
      { label: 'International Students', href: '#' },
      { label: 'Transfer Students', href: '#' },
    ],
  },
  campus: {
    title: 'Campus Life',
    links: [
      { label: 'Housing', href: '#campus' },
      { label: 'Student Organizations', href: '#campus' },
      { label: 'Athletics', href: '#' },
      { label: 'Arts & Culture', href: '#' },
      { label: 'Health & Wellness', href: '#' },
    ],
  },
  about: {
    title: 'About',
    links: [
      { label: 'Our Story', href: '#about' },
      { label: 'Leadership', href: '#' },
      { label: 'News & Events', href: '#news' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: universityInfo.social.facebook, label: 'Facebook' },
  { icon: Twitter, href: universityInfo.social.twitter, label: 'Twitter' },
  { icon: Instagram, href: universityInfo.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: universityInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: universityInfo.social.youtube, label: 'YouTube' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-navy-900 dark:bg-neutral-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-12 md:py-16 lg:py-20">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {/* Brand Column */}
            <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 mb-4 lg:mb-0">
              <a href="#" className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                >
                  <circle cx="20" cy="20" r="18" fill="#0D9488" />
                  <path
                    d="M20 8L12 28h4l1.5-4h5l1.5 4h4L20 8zm0 8l2 6h-4l2-6z"
                    fill="white"
                  />
                  <circle cx="20" cy="14" r="2" fill="white" opacity="0.8" />
                </svg>
                <div>
                  <span className="block text-base sm:text-lg font-semibold">Aurora</span>
                  <span className="block text-[10px] sm:text-xs text-neutral-400 -mt-0.5">
                    International University
                  </span>
                </div>
              </a>

              <p className="text-sm text-neutral-400 mb-4 sm:mb-6 max-w-sm">
                Empowering minds, transforming futures. Join a community of scholars,
                innovators, and leaders shaping tomorrow's world.
              </p>

              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-400">
                <a
                  href={`mailto:${universityInfo.contact.email}`}
                  className="flex items-center gap-2 sm:gap-3 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">{universityInfo.contact.email}</span>
                </a>
                <a
                  href={`tel:${universityInfo.contact.phone}`}
                  className="flex items-center gap-2 sm:gap-3 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  {universityInfo.contact.phone}
                </a>
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    {universityInfo.address.street}<br />
                    {universityInfo.address.city}, {universityInfo.address.state} {universityInfo.address.zip}
                  </span>
                </div>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="col-span-1">
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter & Social */}
          <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-neutral-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start md:items-center">
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Stay Connected</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mb-3 sm:mb-4">
                  Subscribe to our newsletter for updates on admissions, events, and research breakthroughs.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col xs:flex-row gap-2">
                  <div className="relative flex-1 max-w-full xs:max-w-xs">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-neutral-800 border border-neutral-700 text-sm text-white placeholder:text-neutral-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      required
                    />
                  </div>
                  <Button type="submit" size="sm" className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm">
                    {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                  </Button>
                </form>
              </div>

              <div className="md:text-right">
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h3>
                <div className="flex gap-2 sm:gap-3 md:justify-end flex-wrap">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-neutral-800 text-neutral-400 hover:bg-primary-500 hover:text-white transition-all"
                      aria-label={`Follow us on ${label}`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-500">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {universityInfo.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-neutral-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-neutral-300 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-neutral-300 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
