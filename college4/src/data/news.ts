export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorTitle: string;
  date: string;
  category: 'Announcements' | 'Research' | 'Campus Life' | 'Athletics' | 'Alumni' | 'Awards';
  image: string;
  featured: boolean;
  tags: string[];
}

export const news: NewsArticle[] = [
  {
    id: "1",
    slug: "westbrook-receives-100m-research-grant",
    title: "Westbrook University Receives $100 Million Research Grant",
    excerpt: "The National Science Foundation awards Westbrook its largest grant ever for climate research initiative.",
    content: `
      <p>In a landmark achievement for Westbrook University, the National Science Foundation has awarded a $100 million grant to establish the Center for Climate Solutions on campus. This five-year grant represents the largest research award in the university's history.</p>

      <p>"This grant validates our commitment to addressing the most pressing challenges of our time," said University President Dr. Helen Morrison. "Our researchers will lead groundbreaking work in climate science, sustainable energy, and environmental policy."</p>

      <h3>Research Priorities</h3>
      <p>The Center for Climate Solutions will focus on three main areas:</p>
      <ul>
        <li>Developing next-generation renewable energy technologies</li>
        <li>Creating climate modeling systems for better prediction and planning</li>
        <li>Studying the socioeconomic impacts of climate change on vulnerable communities</li>
      </ul>

      <p>The center will bring together researchers from the College of Engineering, College of Natural Sciences, and School of Business Administration in an interdisciplinary approach to climate challenges.</p>

      <h3>Impact on Students</h3>
      <p>The grant will fund over 50 graduate research positions and create internship opportunities for undergraduate students. Additionally, new courses related to climate science and sustainability will be introduced across multiple departments.</p>

      <p>"This is an extraordinary opportunity for our students to engage in meaningful research that will shape our planet's future," said Dr. James Patterson, Director of the new center.</p>
    `,
    author: "Sarah Mitchell",
    authorTitle: "University Communications",
    date: "2024-03-15",
    category: "Research",
    image: "/placeholder-news.jpg",
    featured: true,
    tags: ["Research", "Grants", "Climate Science", "Featured"]
  },
  {
    id: "2",
    slug: "new-student-center-opens",
    title: "New Student Center Opens Its Doors",
    excerpt: "The $45 million state-of-the-art facility offers enhanced spaces for student life and collaboration.",
    content: `
      <p>After two years of construction, the new Westbrook Student Center officially opened its doors this week, providing students with modern spaces for studying, socializing, and student organization activities.</p>

      <p>The 150,000-square-foot facility features a food hall with diverse dining options, collaborative study spaces, a 500-seat auditorium, and dedicated offices for student organizations. The building also includes a rooftop garden and outdoor terrace with views of the campus quad.</p>

      <h3>Sustainable Design</h3>
      <p>The Student Center was designed to achieve LEED Platinum certification, featuring solar panels, rainwater harvesting systems, and energy-efficient HVAC systems. The building serves as a model for sustainable campus construction.</p>

      <p>"We wanted to create a building that reflects our values of sustainability and community," said Vice President for Student Affairs Maria Santos. "This center will be the heart of student life for generations to come."</p>
    `,
    author: "Michael Torres",
    authorTitle: "Campus News Editor",
    date: "2024-03-10",
    category: "Campus Life",
    image: "/placeholder-news.jpg",
    featured: true,
    tags: ["Campus", "Facilities", "Student Life"]
  },
  {
    id: "3",
    slug: "professor-chen-elected-to-national-academy",
    title: "Professor Chen Elected to National Academy of Sciences",
    excerpt: "Computer Science chair recognized for pioneering work in artificial intelligence research.",
    content: `
      <p>Dr. Margaret Chen, Professor and Chair of the Department of Computer Science, has been elected to the National Academy of Sciences in recognition of her distinguished contributions to artificial intelligence research.</p>

      <p>Dr. Chen's groundbreaking work on neural network architectures and machine learning algorithms has influenced the development of AI systems used worldwide. Her research has led to advances in natural language processing, computer vision, and autonomous systems.</p>

      <p>"Election to the National Academy is one of the highest honors a scientist can receive," said Dean of Sciences Dr. David Kim. "Dr. Chen's work exemplifies the innovative research happening at Westbrook."</p>

      <p>Dr. Chen joined Westbrook University in 2008 after completing her doctorate at MIT. She has published over 200 peer-reviewed papers and holds 12 patents in AI technologies.</p>
    `,
    author: "Jennifer Walsh",
    authorTitle: "Science Communications",
    date: "2024-03-05",
    category: "Awards",
    image: "/placeholder-news.jpg",
    featured: true,
    tags: ["Faculty", "Awards", "Computer Science", "AI"]
  },
  {
    id: "4",
    slug: "eagles-basketball-wins-conference",
    title: "Eagles Basketball Captures Conference Championship",
    excerpt: "Men's basketball team wins first conference title in 15 years with thrilling overtime victory.",
    content: `
      <p>The Westbrook Eagles men's basketball team captured their first conference championship in 15 years with a dramatic 78-75 overtime victory over rival Northfield University on Saturday night.</p>

      <p>Junior guard Marcus Thompson led the Eagles with 28 points, including the game-winning three-pointer with 3 seconds remaining in overtime. The sold-out crowd of 8,500 fans at Eagles Arena erupted as the final buzzer sounded.</p>

      <p>"This team showed incredible heart and determination all season," said Head Coach William Porter. "Our players never stopped believing, and tonight they achieved something special."</p>

      <p>The Eagles will now advance to the national tournament, their first appearance since 2015.</p>
    `,
    author: "Chris Anderson",
    authorTitle: "Sports Information Director",
    date: "2024-03-09",
    category: "Athletics",
    image: "/placeholder-news.jpg",
    featured: false,
    tags: ["Athletics", "Basketball", "Championship"]
  },
  {
    id: "5",
    slug: "alumni-gift-establishes-scholarship",
    title: "Alumni Gift Establishes First-Generation Scholarship Fund",
    excerpt: "Class of 1985 graduate donates $5 million to support first-generation college students.",
    content: `
      <p>Robert Martinez, a 1985 graduate of Westbrook University's School of Business, has donated $5 million to establish the Martinez First-Generation Scholars Program, which will provide full scholarships to students who are the first in their families to attend college.</p>

      <p>"As a first-generation student myself, I know the challenges and opportunities that come with being the first in your family to pursue higher education," Martinez said. "I want to remove financial barriers and help the next generation of first-generation students achieve their dreams."</p>

      <p>The scholarship will cover tuition, room and board, and provide a stipend for books and personal expenses. Recipients will also receive mentoring from faculty and alumni.</p>
    `,
    author: "Patricia Blake",
    authorTitle: "Development Office",
    date: "2024-02-28",
    category: "Alumni",
    image: "/placeholder-news.jpg",
    featured: false,
    tags: ["Alumni", "Scholarships", "Giving"]
  },
  {
    id: "6",
    slug: "spring-semester-dean-list",
    title: "Record Number of Students Named to Dean's List",
    excerpt: "Over 2,500 students achieve academic distinction in fall semester.",
    content: `
      <p>A record 2,547 students have been named to the Dean's List for the Fall 2023 semester, representing nearly 25% of the undergraduate student body. To qualify, students must earn a GPA of 3.5 or higher while completing at least 12 credit hours.</p>

      <p>"We are proud of the academic achievements of so many of our students," said Provost Dr. Linda Hayes. "This reflects their dedication to their studies and the supportive academic environment our faculty creates."</p>

      <p>Students named to the Dean's List will be honored at a recognition ceremony later this month.</p>
    `,
    author: "Academic Affairs Office",
    authorTitle: "Office of the Provost",
    date: "2024-02-15",
    category: "Announcements",
    image: "/placeholder-news.jpg",
    featured: false,
    tags: ["Academics", "Students", "Achievement"]
  },
  {
    id: "7",
    slug: "medical-school-research-breakthrough",
    title: "Medical School Researchers Announce Cancer Treatment Breakthrough",
    excerpt: "New immunotherapy approach shows promising results in clinical trials.",
    content: `
      <p>Researchers at Westbrook University School of Medicine have announced promising results from clinical trials of a new immunotherapy treatment for pancreatic cancer, one of the most difficult cancers to treat.</p>

      <p>The treatment, developed by a team led by Dr. Sarah Johnson, uses modified immune cells to target cancer cells while sparing healthy tissue. In early-phase trials, 60% of patients showed significant tumor reduction.</p>

      <p>"These results give us hope that we can improve outcomes for patients with pancreatic cancer," Dr. Johnson said. "We're cautiously optimistic as we move into larger clinical trials."</p>
    `,
    author: "Medical Communications",
    authorTitle: "School of Medicine",
    date: "2024-02-10",
    category: "Research",
    image: "/placeholder-news.jpg",
    featured: false,
    tags: ["Medical Research", "Cancer", "Innovation"]
  },
  {
    id: "8",
    slug: "sustainability-initiative-launched",
    title: "University Launches Ambitious Sustainability Initiative",
    excerpt: "Campus commits to carbon neutrality by 2035 with comprehensive action plan.",
    content: `
      <p>Westbrook University has announced a comprehensive sustainability initiative aimed at achieving carbon neutrality by 2035. The plan includes transitioning to 100% renewable energy, expanding green spaces, and implementing sustainable practices across all campus operations.</p>

      <p>"Climate change is the defining challenge of our time, and universities have a responsibility to lead," said President Morrison. "This initiative commits Westbrook to being part of the solution."</p>

      <p>Key elements of the plan include installing solar panels on all suitable buildings, converting the campus vehicle fleet to electric, and incorporating sustainability into the curriculum across all departments.</p>
    `,
    author: "Environmental Affairs",
    authorTitle: "Office of Sustainability",
    date: "2024-01-30",
    category: "Announcements",
    image: "/placeholder-news.jpg",
    featured: false,
    tags: ["Sustainability", "Campus", "Environment"]
  }
];

export function getFeaturedNews(): NewsArticle[] {
  return news.filter(n => n.featured);
}

export function getNewsByCategory(category: string): NewsArticle[] {
  if (category === 'All') return news;
  return news.filter(n => n.category === category);
}

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return news.find(n => n.slug === slug);
}

export function getNewsCategories(): string[] {
  const categories = new Set<string>();
  news.forEach(n => categories.add(n.category));
  return ['All', ...Array.from(categories).sort()];
}

export function getRecentNews(limit: number = 5): NewsArticle[] {
  return [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
}
