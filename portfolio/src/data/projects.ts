export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'education' | 'healthcare' | 'ecommerce';
  techStack: string[];
  features: string[];
  color: string;
  gradient: string;
  image: string;
  folder: string;
  year: string;
  status: 'completed' | 'in-progress';
}

export const projects: Project[] = [
  {
    id: 'westbrook-university',
    title: 'Westbrook University',
    subtitle: 'Premium College Website',
    description: 'A sophisticated university website with modern design, featuring program showcases, faculty profiles, and campus life.',
    longDescription: 'Westbrook University is a comprehensive higher education website designed with elegance and functionality in mind. The site features a stunning hero section, interactive program catalog, faculty carousel, event management, and news sections. Built with React and shadcn/ui components, it showcases a perfect blend of academic tradition and modern web design.',
    category: 'education',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'React Router', 'Framer Motion'],
    features: [
      'Dynamic hero with video background option',
      'Interactive program catalog with filters',
      'Faculty profile carousel',
      'Event calendar and news feed',
      'Department showcase grid',
      'Admissions portal with application forms',
      'Campus tour virtual experience',
      'Dark mode support',
      'Fully responsive design',
      'SEO optimized with React Helmet'
    ],
    color: '#1e3a5f',
    gradient: 'from-blue-900 via-blue-800 to-indigo-900',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    folder: 'college4',
    year: '2024',
    status: 'completed'
  },
  {
    id: 'medwell-pharmacy',
    title: 'MedWell Pharmacy',
    subtitle: 'Online Pharmacy E-commerce',
    description: 'A premium, trust-focused online pharmacy with full e-commerce capabilities, prescription management, and clinical design.',
    longDescription: 'MedWell is a best-in-class online pharmacy platform built with Next.js 14 and TypeScript. It features a clean clinical luxury design with high trust signals, search-first experience, prescription upload workflow, Rx/OTC product grouping, cold chain indicators, and a complete checkout flow. The mobile-first approach ensures an app-like experience with bottom navigation and safe area support.',
    category: 'ecommerce',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React Context', 'Lucide Icons', 'App Router'],
    features: [
      'Command-palette style search',
      'Product categories with filters',
      'Prescription upload with drag-drop',
      'Rx/OTC product grouping in cart',
      'Cold chain product indicators',
      'Coupon system integration',
      'Multiple payment methods',
      'Order tracking dashboard',
      'Mobile bottom navigation',
      'Compliance disclaimers'
    ],
    color: '#0d9488',
    gradient: 'from-teal-800 via-teal-700 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80',
    folder: 'ecommerce/ecommerce2',
    year: '2024',
    status: 'completed'
  },
  {
    id: 'medlab-diagnostics',
    title: 'MedLab Diagnostics',
    subtitle: 'Healthcare Laboratory Website',
    description: 'A modern diagnostic laboratory website featuring test booking, service showcases, and patient-friendly interfaces.',
    longDescription: 'MedLab Diagnostics is a comprehensive healthcare website designed for diagnostic laboratories and medical testing facilities. It features an intuitive test booking system, detailed service descriptions, streamlined patient experience, and trust-building elements. The clean, professional design instills confidence while maintaining ease of use.',
    category: 'healthcare',
    techStack: ['React', 'JavaScript', 'CSS3', 'Vite'],
    features: [
      'Online test booking system',
      'Service catalog with categories',
      'Process flow visualization',
      'Home sample collection booking',
      'Test result portal',
      'Health packages showcase',
      'Lab accreditation badges',
      'Contact and location info',
      'Mobile responsive layout',
      'Accessibility compliant'
    ],
    color: '#059669',
    gradient: 'from-emerald-800 via-green-700 to-teal-800',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    folder: 'medical/medical7',
    year: '2024',
    status: 'completed'
  }
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'education', label: 'Education', count: projects.filter(p => p.category === 'education').length },
  { id: 'healthcare', label: 'Healthcare', count: projects.filter(p => p.category === 'healthcare').length },
  { id: 'ecommerce', label: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
];

export const stats = [
  { label: 'Projects Completed', value: '3+' },
  { label: 'Technologies Used', value: '15+' },
  { label: 'Lines of Code', value: '50K+' },
  { label: 'Happy Clients', value: '100%' },
];
