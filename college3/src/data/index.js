export { programs, programCategories, featuredProgram } from './programs';
export { testimonials, testimonialStats } from './testimonials';
export { newsArticles, newsCategories, upcomingEvents } from './news';
export { faculty, facultyStats } from './faculty';
export { faqs, faqCategories } from './faq';

export const universityInfo = {
  name: 'Aurora International University',
  shortName: 'Aurora',
  tagline: 'Illuminate Your Future',
  founded: 1892,
  address: {
    street: '1200 Aurora Boulevard',
    city: 'Cambridge',
    state: 'MA',
    zip: '02139',
    country: 'USA',
  },
  contact: {
    phone: '+1 (555) AURORA-U',
    email: 'info@aurora-university.edu',
    admissions: 'admissions@aurora-university.edu',
  },
  social: {
    facebook: 'https://facebook.com/aurorauniversity',
    twitter: 'https://twitter.com/aurora_uni',
    instagram: 'https://instagram.com/aurorauniversity',
    linkedin: 'https://linkedin.com/school/aurora-university',
    youtube: 'https://youtube.com/aurorauniversity',
  },
};

export const heroStats = [
  { value: 25000, suffix: '+', label: 'Students Worldwide' },
  { value: 1850, suffix: '+', label: 'Expert Faculty' },
  { value: 2.1, suffix: 'B', prefix: '$', label: 'Research Funding' },
  { value: 150, suffix: 'K+', label: 'Global Alumni' },
];

export const partnerLogos = [
  { name: 'TechCorp', id: 'partner-1' },
  { name: 'Global Research', id: 'partner-2' },
  { name: 'InnovateLab', id: 'partner-3' },
  { name: 'FutureTech', id: 'partner-4' },
  { name: 'ScienceFirst', id: 'partner-5' },
];

export const navigationLinks = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'programs', label: 'Programs', href: '#programs' },
  { id: 'admissions', label: 'Admissions', href: '#admissions' },
  { id: 'research', label: 'Research', href: '#research' },
  { id: 'campus', label: 'Campus', href: '#campus' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const admissionSteps = [
  {
    step: 1,
    title: 'Explore Programs',
    description: 'Browse our catalog of 200+ programs across 12 schools to find your perfect fit.',
  },
  {
    step: 2,
    title: 'Prepare Application',
    description: 'Gather transcripts, test scores, recommendations, and craft your personal statement.',
  },
  {
    step: 3,
    title: 'Submit Online',
    description: 'Complete our streamlined online application and pay the application fee.',
  },
  {
    step: 4,
    title: 'Interview',
    description: 'Selected candidates are invited for interviews (in-person or virtual).',
  },
  {
    step: 5,
    title: 'Receive Decision',
    description: 'Admission decisions are released according to your application deadline.',
  },
  {
    step: 6,
    title: 'Enroll & Thrive',
    description: 'Accept your offer, complete enrollment, and begin your Aurora journey!',
  },
];

export const researchAreas = [
  {
    id: 1,
    title: 'Artificial Intelligence Lab',
    description: 'Pioneering next-generation AI systems for healthcare, climate, and autonomous systems.',
    publications: 340,
    funding: '$45M',
  },
  {
    id: 2,
    title: 'Sustainable Energy Institute',
    description: 'Developing breakthrough technologies for renewable energy and carbon capture.',
    publications: 280,
    funding: '$62M',
  },
  {
    id: 3,
    title: 'Biomedical Innovation Center',
    description: 'Translating research into treatments for cancer, neurological disorders, and rare diseases.',
    publications: 520,
    funding: '$78M',
  },
  {
    id: 4,
    title: 'Global Policy Research Hub',
    description: 'Informing evidence-based policy on economics, security, and social issues.',
    publications: 195,
    funding: '$28M',
  },
];

export const campusHighlights = [
  {
    id: 1,
    title: 'State-of-the-Art Library',
    description: '24/7 access, 5 million volumes, and collaborative study spaces.',
    image: '/images/campus/library.jpg',
  },
  {
    id: 2,
    title: 'Innovation Hub',
    description: 'Maker spaces, startup incubator, and industry partnerships.',
    image: '/images/campus/innovation.jpg',
  },
  {
    id: 3,
    title: 'Athletic Complex',
    description: 'Olympic-size pool, fitness centers, and 25 varsity sports.',
    image: '/images/campus/athletics.jpg',
  },
  {
    id: 4,
    title: 'Student Housing',
    description: 'Modern residences with living-learning communities.',
    image: '/images/campus/housing.jpg',
  },
  {
    id: 5,
    title: 'Arts Center',
    description: 'Performance halls, galleries, and creative studios.',
    image: '/images/campus/arts.jpg',
  },
  {
    id: 6,
    title: 'Green Spaces',
    description: '200 acres of parks, gardens, and outdoor recreation.',
    image: '/images/campus/green.jpg',
  },
];
