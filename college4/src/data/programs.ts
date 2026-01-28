export interface Program {
  id: string;
  slug: string;
  name: string;
  departmentSlug: string;
  departmentName: string;
  degree: 'Bachelor' | 'Master' | 'Doctorate' | 'Certificate';
  description: string;
  duration: string;
  credits: number;
  tags: string[];
  featured: boolean;
}

export const programs: Program[] = [
  {
    id: "1",
    slug: "computer-science-bs",
    name: "Computer Science",
    departmentSlug: "computer-science",
    departmentName: "Computer Science",
    degree: "Bachelor",
    description: "A comprehensive program covering algorithms, software development, and computing theory.",
    duration: "4 years",
    credits: 120,
    tags: ["STEM", "Technology", "Popular"],
    featured: true
  },
  {
    id: "2",
    slug: "artificial-intelligence-ms",
    name: "Artificial Intelligence",
    departmentSlug: "computer-science",
    departmentName: "Computer Science",
    degree: "Master",
    description: "Advanced study in machine learning, neural networks, and intelligent systems.",
    duration: "2 years",
    credits: 36,
    tags: ["STEM", "Technology", "Research"],
    featured: true
  },
  {
    id: "3",
    slug: "cybersecurity-ms",
    name: "Cybersecurity",
    departmentSlug: "computer-science",
    departmentName: "Computer Science",
    degree: "Master",
    description: "Specialized training in network security, cryptography, and threat analysis.",
    duration: "2 years",
    credits: 36,
    tags: ["STEM", "Technology", "Security"],
    featured: false
  },
  {
    id: "4",
    slug: "mba",
    name: "Master of Business Administration",
    departmentSlug: "business-administration",
    departmentName: "Business",
    degree: "Master",
    description: "Develop leadership skills and business acumen for executive careers.",
    duration: "2 years",
    credits: 60,
    tags: ["Business", "Leadership", "Popular"],
    featured: true
  },
  {
    id: "5",
    slug: "finance-bs",
    name: "Finance",
    departmentSlug: "business-administration",
    departmentName: "Business",
    degree: "Bachelor",
    description: "Comprehensive study of financial markets, investment strategies, and corporate finance.",
    duration: "4 years",
    credits: 120,
    tags: ["Business", "Finance"],
    featured: false
  },
  {
    id: "6",
    slug: "marketing-bs",
    name: "Marketing",
    departmentSlug: "business-administration",
    departmentName: "Business",
    degree: "Bachelor",
    description: "Learn consumer behavior, digital marketing, and brand management strategies.",
    duration: "4 years",
    credits: 120,
    tags: ["Business", "Marketing"],
    featured: false
  },
  {
    id: "7",
    slug: "mechanical-engineering-bs",
    name: "Mechanical Engineering",
    departmentSlug: "engineering",
    departmentName: "Engineering",
    degree: "Bachelor",
    description: "Design and analyze mechanical systems with hands-on project experience.",
    duration: "4 years",
    credits: 128,
    tags: ["STEM", "Engineering", "Popular"],
    featured: true
  },
  {
    id: "8",
    slug: "electrical-engineering-bs",
    name: "Electrical Engineering",
    departmentSlug: "engineering",
    departmentName: "Engineering",
    degree: "Bachelor",
    description: "Study circuits, electronics, and power systems with industry applications.",
    duration: "4 years",
    credits: 128,
    tags: ["STEM", "Engineering"],
    featured: false
  },
  {
    id: "9",
    slug: "civil-engineering-bs",
    name: "Civil Engineering",
    departmentSlug: "engineering",
    departmentName: "Engineering",
    degree: "Bachelor",
    description: "Design and build infrastructure that shapes our communities.",
    duration: "4 years",
    credits: 128,
    tags: ["STEM", "Engineering"],
    featured: false
  },
  {
    id: "10",
    slug: "english-literature-ba",
    name: "English Literature",
    departmentSlug: "liberal-arts",
    departmentName: "Liberal Arts",
    degree: "Bachelor",
    description: "Explore literary traditions and develop critical analysis skills.",
    duration: "4 years",
    credits: 120,
    tags: ["Humanities", "Writing"],
    featured: false
  },
  {
    id: "11",
    slug: "philosophy-ba",
    name: "Philosophy",
    departmentSlug: "liberal-arts",
    departmentName: "Liberal Arts",
    degree: "Bachelor",
    description: "Examine fundamental questions about existence, knowledge, and ethics.",
    duration: "4 years",
    credits: 120,
    tags: ["Humanities", "Critical Thinking"],
    featured: false
  },
  {
    id: "12",
    slug: "history-ba",
    name: "History",
    departmentSlug: "liberal-arts",
    departmentName: "Liberal Arts",
    degree: "Bachelor",
    description: "Study the past to understand the present and shape the future.",
    duration: "4 years",
    credits: 120,
    tags: ["Humanities", "Research"],
    featured: false
  },
  {
    id: "13",
    slug: "biology-bs",
    name: "Biology",
    departmentSlug: "natural-sciences",
    departmentName: "Natural Sciences",
    degree: "Bachelor",
    description: "Study living organisms and prepare for careers in research or medicine.",
    duration: "4 years",
    credits: 120,
    tags: ["STEM", "Science", "Pre-Med"],
    featured: true
  },
  {
    id: "14",
    slug: "chemistry-bs",
    name: "Chemistry",
    departmentSlug: "natural-sciences",
    departmentName: "Natural Sciences",
    degree: "Bachelor",
    description: "Explore matter and chemical reactions through theory and lab work.",
    duration: "4 years",
    credits: 120,
    tags: ["STEM", "Science"],
    featured: false
  },
  {
    id: "15",
    slug: "physics-bs",
    name: "Physics",
    departmentSlug: "natural-sciences",
    departmentName: "Natural Sciences",
    degree: "Bachelor",
    description: "Understand the fundamental laws governing the universe.",
    duration: "4 years",
    credits: 120,
    tags: ["STEM", "Science", "Research"],
    featured: false
  },
  {
    id: "16",
    slug: "medicine-md",
    name: "Doctor of Medicine",
    departmentSlug: "medicine",
    departmentName: "Medicine",
    degree: "Doctorate",
    description: "Comprehensive medical education preparing physicians for clinical practice.",
    duration: "4 years",
    credits: 0,
    tags: ["Medicine", "Healthcare", "Popular"],
    featured: true
  },
  {
    id: "17",
    slug: "data-science-certificate",
    name: "Data Science",
    departmentSlug: "computer-science",
    departmentName: "Computer Science",
    degree: "Certificate",
    description: "Professional certificate in data analysis and machine learning techniques.",
    duration: "6 months",
    credits: 12,
    tags: ["STEM", "Technology", "Professional"],
    featured: false
  },
  {
    id: "18",
    slug: "entrepreneurship-certificate",
    name: "Entrepreneurship",
    departmentSlug: "business-administration",
    departmentName: "Business",
    degree: "Certificate",
    description: "Develop skills to launch and grow your own business venture.",
    duration: "1 year",
    credits: 18,
    tags: ["Business", "Startup", "Professional"],
    featured: false
  }
];

export function getProgramsByDepartment(departmentSlug: string): Program[] {
  return programs.filter(p => p.departmentSlug === departmentSlug);
}

export function getFeaturedPrograms(): Program[] {
  return programs.filter(p => p.featured);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  programs.forEach(p => p.tags.forEach(t => tags.add(t)));
  return Array.from(tags).sort();
}

export function getAllDegrees(): string[] {
  const degrees = new Set<string>();
  programs.forEach(p => degrees.add(p.degree));
  return Array.from(degrees);
}
