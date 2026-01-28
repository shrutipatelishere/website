export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  departmentSlug: string;
  image: string;
  email: string;
  specialization: string;
  bio: string;
  education: string[];
  featured: boolean;
}

export const faculty: FacultyMember[] = [
  {
    id: "1",
    name: "Dr. Margaret Chen",
    title: "Professor & Department Chair",
    department: "Computer Science",
    departmentSlug: "computer-science",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    email: "m.chen@westbrook.edu",
    specialization: "Artificial Intelligence & Machine Learning",
    bio: "Dr. Chen is a leading researcher in AI with over 200 publications. Her work on neural network architectures has been widely cited and has influenced modern deep learning practices.",
    education: ["Ph.D. Computer Science, MIT", "M.S. Computer Science, Stanford", "B.S. Mathematics, UC Berkeley"],
    featured: true
  },
  {
    id: "2",
    name: "Dr. Robert Williams",
    title: "Dean & Professor",
    department: "Business",
    departmentSlug: "business-administration",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    email: "r.williams@westbrook.edu",
    specialization: "Strategic Management",
    bio: "With 25 years of academic and industry experience, Dr. Williams has advised Fortune 500 companies on strategic initiatives and authored three bestselling management books.",
    education: ["Ph.D. Business Administration, Harvard", "MBA, Wharton", "B.A. Economics, Yale"],
    featured: true
  },
  {
    id: "3",
    name: "Dr. Sarah Johnson",
    title: "Professor of Neuroscience",
    department: "Medicine",
    departmentSlug: "medicine",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    email: "s.johnson@westbrook.edu",
    specialization: "Cognitive Neuroscience",
    bio: "Dr. Johnson's groundbreaking research on brain plasticity has advanced our understanding of learning and memory. She leads the Neural Imaging Lab.",
    education: ["M.D., Johns Hopkins", "Ph.D. Neuroscience, UCLA", "B.S. Biology, Duke"],
    featured: true
  },
  {
    id: "4",
    name: "Dr. James Patterson",
    title: "Distinguished Professor",
    department: "Engineering",
    departmentSlug: "engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    email: "j.patterson@westbrook.edu",
    specialization: "Sustainable Energy Systems",
    bio: "A pioneer in renewable energy research, Dr. Patterson holds 15 patents and has led the development of next-generation solar cell technology.",
    education: ["Ph.D. Mechanical Engineering, Caltech", "M.S. Environmental Engineering, Michigan", "B.S. Physics, Cornell"],
    featured: true
  },
  {
    id: "5",
    name: "Dr. Elizabeth Monroe",
    title: "Professor of Literature",
    department: "Liberal Arts",
    departmentSlug: "liberal-arts",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    email: "e.monroe@westbrook.edu",
    specialization: "Contemporary American Literature",
    bio: "Pulitzer Prize-nominated critic and author, Dr. Monroe has shaped literary discourse through her influential essays and five published novels.",
    education: ["Ph.D. English Literature, Columbia", "M.A. Creative Writing, Iowa Writers' Workshop", "B.A. English, Vassar"],
    featured: true
  },
  {
    id: "6",
    name: "Dr. David Kim",
    title: "Professor of Chemistry",
    department: "Natural Sciences",
    departmentSlug: "natural-sciences",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
    email: "d.kim@westbrook.edu",
    specialization: "Organic Synthesis",
    bio: "Dr. Kim's research focuses on developing sustainable chemical processes. He has received the ACS Award for Green Chemistry.",
    education: ["Ph.D. Chemistry, Princeton", "B.S. Chemistry, Seoul National University"],
    featured: true
  },
  {
    id: "7",
    name: "Dr. Patricia Lopez",
    title: "Associate Professor",
    department: "Computer Science",
    departmentSlug: "computer-science",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    email: "p.lopez@westbrook.edu",
    specialization: "Cybersecurity & Privacy",
    bio: "Former NSA researcher, Dr. Lopez now leads academic research on privacy-preserving computing and has advised government agencies on cybersecurity policy.",
    education: ["Ph.D. Computer Science, Carnegie Mellon", "M.S. Information Security, Georgia Tech", "B.S. Computer Engineering, Texas A&M"],
    featured: false
  },
  {
    id: "8",
    name: "Dr. Michael Brown",
    title: "Professor of Finance",
    department: "Business",
    departmentSlug: "business-administration",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    email: "m.brown@westbrook.edu",
    specialization: "Financial Markets & Risk Management",
    bio: "Former Wall Street executive turned academic, Dr. Brown brings practical insights to financial theory and has authored influential textbooks.",
    education: ["Ph.D. Finance, Chicago Booth", "MBA, NYU Stern", "B.S. Mathematics, MIT"],
    featured: false
  },
  {
    id: "9",
    name: "Dr. Amanda Foster",
    title: "Associate Professor",
    department: "Psychology",
    departmentSlug: "liberal-arts",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80",
    email: "a.foster@westbrook.edu",
    specialization: "Developmental Psychology",
    bio: "Dr. Foster's research on child development and early education has influenced policy decisions at state and federal levels.",
    education: ["Ph.D. Psychology, Stanford", "M.A. Child Development, UC Berkeley", "B.A. Psychology, Northwestern"],
    featured: false
  },
  {
    id: "10",
    name: "Dr. Thomas Reed",
    title: "Professor of Physics",
    department: "Natural Sciences",
    departmentSlug: "natural-sciences",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    email: "t.reed@westbrook.edu",
    specialization: "Quantum Computing",
    bio: "A pioneer in quantum computing research, Dr. Reed has made significant contributions to quantum error correction and quantum algorithms.",
    education: ["Ph.D. Physics, MIT", "M.S. Applied Physics, Harvard", "B.S. Physics, Caltech"],
    featured: false
  }
];

export function getFeaturedFaculty(): FacultyMember[] {
  return faculty.filter(f => f.featured);
}

export function getFacultyByDepartment(departmentSlug: string): FacultyMember[] {
  return faculty.filter(f => f.departmentSlug === departmentSlug);
}
