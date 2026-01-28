export interface Department {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  dean: string;
  email: string;
  phone: string;
  location: string;
  facultyCount: number;
  studentCount: number;
  programCount: number;
  researchAreas: string[];
  highlights: string[];
}

export const departments: Department[] = [
  {
    id: "1",
    slug: "computer-science",
    name: "Department of Computer Science",
    shortName: "Computer Science",
    description: "Leading innovation in computing, artificial intelligence, and software engineering.",
    longDescription: "The Department of Computer Science at Westbrook University has been at the forefront of technological innovation since its founding in 1965. Our faculty includes world-renowned researchers in artificial intelligence, machine learning, cybersecurity, and software engineering. We offer comprehensive undergraduate and graduate programs designed to prepare students for leadership roles in the rapidly evolving technology sector.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    dean: "Dr. Margaret Chen",
    email: "cs@westbrook.edu",
    phone: "(555) 123-4567",
    location: "Turing Hall, Room 100",
    facultyCount: 45,
    studentCount: 1200,
    programCount: 8,
    researchAreas: ["Artificial Intelligence", "Machine Learning", "Cybersecurity", "Data Science", "Human-Computer Interaction"],
    highlights: ["#3 Ranked CS Program in the Region", "$12M in Annual Research Funding", "Industry Partnerships with Leading Tech Companies"]
  },
  {
    id: "2",
    slug: "business-administration",
    name: "School of Business Administration",
    shortName: "Business",
    description: "Cultivating tomorrow's business leaders through rigorous academic programs and real-world experience.",
    longDescription: "The School of Business Administration combines academic excellence with practical experience to develop ethical, innovative business leaders. Our AACSB-accredited programs offer specializations in finance, marketing, management, and entrepreneurship, supported by strong industry connections and a global alumni network.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    dean: "Dr. Robert Williams",
    email: "business@westbrook.edu",
    phone: "(555) 123-4568",
    location: "Sterling Business Center, Room 200",
    facultyCount: 52,
    studentCount: 1800,
    programCount: 12,
    researchAreas: ["Finance", "Marketing Analytics", "Organizational Behavior", "Entrepreneurship", "International Business"],
    highlights: ["AACSB Accredited", "Top 50 MBA Program Nationally", "98% Employment Rate Within 6 Months"]
  },
  {
    id: "3",
    slug: "engineering",
    name: "College of Engineering",
    shortName: "Engineering",
    description: "Engineering solutions for a sustainable future through cutting-edge research and education.",
    longDescription: "The College of Engineering is committed to advancing engineering knowledge and producing graduates who can address the complex challenges facing society. With state-of-the-art laboratories, collaborative research opportunities, and hands-on project-based learning, we prepare engineers to innovate and lead in their fields.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    dean: "Dr. James Patterson",
    email: "engineering@westbrook.edu",
    phone: "(555) 123-4569",
    location: "Edison Engineering Building, Room 150",
    facultyCount: 68,
    studentCount: 2100,
    programCount: 15,
    researchAreas: ["Sustainable Energy", "Biomedical Engineering", "Robotics", "Civil Infrastructure", "Materials Science"],
    highlights: ["$25M Research Funding", "NASA Partnership", "Award-Winning Design Teams"]
  },
  {
    id: "4",
    slug: "liberal-arts",
    name: "School of Liberal Arts",
    shortName: "Liberal Arts",
    description: "Fostering critical thinking, creativity, and cultural understanding through humanities education.",
    longDescription: "The School of Liberal Arts provides a transformative educational experience that develops the whole person. Our programs in literature, philosophy, history, and the arts cultivate critical thinking, effective communication, and cultural literacy—skills essential for meaningful personal and professional lives.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    dean: "Dr. Elizabeth Monroe",
    email: "liberalarts@westbrook.edu",
    phone: "(555) 123-4570",
    location: "Humanities Hall, Room 300",
    facultyCount: 75,
    studentCount: 1600,
    programCount: 18,
    researchAreas: ["Modern Literature", "Philosophy of Mind", "Digital Humanities", "Art History", "Cultural Studies"],
    highlights: ["Pulitzer Prize-Winning Faculty", "Study Abroad in 30+ Countries", "Award-Winning Literary Magazine"]
  },
  {
    id: "5",
    slug: "natural-sciences",
    name: "College of Natural Sciences",
    shortName: "Natural Sciences",
    description: "Advancing scientific discovery and preparing the next generation of researchers.",
    longDescription: "The College of Natural Sciences is dedicated to understanding the natural world through rigorous scientific inquiry. Our programs in biology, chemistry, physics, and environmental science combine classroom instruction with hands-on research, preparing students for careers in academia, industry, and beyond.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    dean: "Dr. David Kim",
    email: "sciences@westbrook.edu",
    phone: "(555) 123-4571",
    location: "Darwin Science Center, Room 100",
    facultyCount: 62,
    studentCount: 1400,
    programCount: 14,
    researchAreas: ["Molecular Biology", "Climate Science", "Quantum Physics", "Organic Chemistry", "Ecology"],
    highlights: ["Nobel Laureate on Faculty", "$18M NSF Grant Funding", "State-of-the-Art Research Facilities"]
  },
  {
    id: "6",
    slug: "medicine",
    name: "School of Medicine",
    shortName: "Medicine",
    description: "Training compassionate physicians and advancing medical knowledge through research.",
    longDescription: "The School of Medicine is committed to improving human health through excellence in education, research, and patient care. Our integrated curriculum emphasizes both the science and art of medicine, producing physicians who are skilled clinicians and compassionate caregivers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
    dean: "Dr. Sarah Johnson",
    email: "medicine@westbrook.edu",
    phone: "(555) 123-4572",
    location: "Medical Sciences Building, Room 100",
    facultyCount: 120,
    studentCount: 600,
    programCount: 6,
    researchAreas: ["Cancer Research", "Neuroscience", "Public Health", "Immunology", "Medical Genetics"],
    highlights: ["Top 25 Medical School", "Teaching Hospital Network", "98% Residency Match Rate"]
  }
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find(d => d.slug === slug);
}
