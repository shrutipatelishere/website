export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  category: 'Academic' | 'Athletics' | 'Arts & Culture' | 'Career' | 'Community' | 'Student Life';
  image: string;
  featured: boolean;
  registrationRequired: boolean;
  registrationLink?: string;
}

export const events: Event[] = [
  {
    id: "1",
    slug: "spring-commencement-2024",
    title: "Spring Commencement Ceremony",
    description: "Join us in celebrating our graduating class as they receive their degrees.",
    longDescription: "The Spring Commencement Ceremony marks the culmination of years of hard work and dedication. Join family, friends, faculty, and staff as we honor our graduates and celebrate their achievements. The ceremony will feature addresses from distinguished speakers, the conferral of degrees, and special recognition of outstanding graduates.",
    date: "2024-05-18",
    time: "10:00 AM - 1:00 PM",
    location: "University Stadium",
    category: "Academic",
    image: "/placeholder-event.jpg",
    featured: true,
    registrationRequired: true,
    registrationLink: "#"
  },
  {
    id: "2",
    slug: "research-symposium-2024",
    title: "Annual Research Symposium",
    description: "Graduate students present their research across all disciplines.",
    longDescription: "The Annual Research Symposium showcases the innovative research being conducted by our graduate students. Attendees will have the opportunity to explore poster presentations, attend oral sessions, and engage with researchers across all departments. This event highlights the breadth and depth of scholarly inquiry at Westbrook University.",
    date: "2024-04-15",
    time: "9:00 AM - 5:00 PM",
    location: "University Conference Center",
    category: "Academic",
    image: "/placeholder-event.jpg",
    featured: true,
    registrationRequired: false
  },
  {
    id: "3",
    slug: "spring-concert-series",
    title: "Spring Concert Series: University Orchestra",
    description: "Experience the University Orchestra's spring performance featuring classical masterworks.",
    longDescription: "The University Orchestra presents its annual Spring Concert, featuring works by Beethoven, Tchaikovsky, and contemporary composers. Under the direction of Maestro Elena Rodriguez, our talented student musicians deliver an unforgettable evening of classical music in the acoustically renowned Morrison Concert Hall.",
    date: "2024-04-22",
    time: "7:30 PM - 9:30 PM",
    location: "Morrison Concert Hall",
    category: "Arts & Culture",
    image: "/placeholder-event.jpg",
    featured: true,
    registrationRequired: true,
    registrationLink: "#"
  },
  {
    id: "4",
    slug: "career-fair-spring-2024",
    title: "Spring Career Fair",
    description: "Connect with over 150 employers seeking to hire Westbrook talent.",
    longDescription: "The Spring Career Fair brings together over 150 top employers from various industries to meet with Westbrook students and alumni. Whether you're seeking internships, entry-level positions, or career advancement opportunities, this is your chance to make connections that could launch your professional journey. Business professional attire recommended.",
    date: "2024-03-28",
    time: "10:00 AM - 3:00 PM",
    location: "Recreation Center",
    category: "Career",
    image: "/placeholder-event.jpg",
    featured: true,
    registrationRequired: true,
    registrationLink: "#"
  },
  {
    id: "5",
    slug: "basketball-championship",
    title: "Conference Basketball Championship",
    description: "Cheer on the Westbrook Eagles in the conference championship game.",
    longDescription: "The Westbrook Eagles take on their rivals in the conference championship game. Join thousands of fans as our basketball team competes for the championship title. Student sections open early for the best seats. Show your Westbrook pride and be part of this historic event!",
    date: "2024-03-09",
    time: "7:00 PM - 10:00 PM",
    location: "Eagles Arena",
    category: "Athletics",
    image: "/placeholder-event.jpg",
    featured: false,
    registrationRequired: false
  },
  {
    id: "6",
    slug: "alumni-homecoming-weekend",
    title: "Alumni Homecoming Weekend",
    description: "Welcome back alumni for a weekend of reunion events and campus celebrations.",
    longDescription: "Homecoming Weekend brings together generations of Westbrook alumni for a celebration of our university's heritage and community. Events include class reunions, the annual parade, tailgating, the homecoming football game, and the All-Alumni Gala. Reconnect with classmates and relive your fondest Westbrook memories.",
    date: "2024-10-18",
    endDate: "2024-10-20",
    time: "All Day",
    location: "Various Campus Locations",
    category: "Community",
    image: "/placeholder-event.jpg",
    featured: true,
    registrationRequired: true,
    registrationLink: "#"
  },
  {
    id: "7",
    slug: "new-student-orientation",
    title: "New Student Orientation",
    description: "Welcome incoming students to the Westbrook community.",
    longDescription: "New Student Orientation prepares incoming freshmen and transfer students for success at Westbrook. Activities include academic advising, campus tours, workshops on university resources, and social events to help new students make connections before classes begin.",
    date: "2024-08-22",
    endDate: "2024-08-24",
    time: "8:00 AM - 8:00 PM",
    location: "Student Union",
    category: "Student Life",
    image: "/placeholder-event.jpg",
    featured: false,
    registrationRequired: true,
    registrationLink: "#"
  },
  {
    id: "8",
    slug: "guest-lecture-tech-ethics",
    title: "Guest Lecture: Ethics in Technology",
    description: "Dr. Maya Patel discusses the ethical implications of AI in society.",
    longDescription: "Join us for a thought-provoking lecture by Dr. Maya Patel, renowned author and ethicist, as she explores the complex ethical landscape of artificial intelligence. Topics include algorithmic bias, privacy concerns, and the future of human-AI interaction. A Q&A session will follow the lecture.",
    date: "2024-04-05",
    time: "4:00 PM - 6:00 PM",
    location: "Turing Hall Auditorium",
    category: "Academic",
    image: "/placeholder-event.jpg",
    featured: false,
    registrationRequired: false
  },
  {
    id: "9",
    slug: "spring-theater-production",
    title: "Spring Theater: A Midsummer Night's Dream",
    description: "The University Theater presents Shakespeare's beloved comedy.",
    longDescription: "The Department of Theater Arts presents its spring production of Shakespeare's magical comedy, A Midsummer Night's Dream. Directed by Professor Thomas Hart, this enchanting production features student actors, original music, and innovative staging that brings the forest of Athens to life.",
    date: "2024-04-12",
    endDate: "2024-04-14",
    time: "7:30 PM",
    location: "Black Box Theater",
    category: "Arts & Culture",
    image: "/placeholder-event.jpg",
    featured: false,
    registrationRequired: true,
    registrationLink: "#"
  },
  {
    id: "10",
    slug: "volunteer-day-2024",
    title: "Community Volunteer Day",
    description: "Join fellow students in a day of service to the local community.",
    longDescription: "Community Volunteer Day brings together students, faculty, and staff for a day of giving back. Volunteer projects include park cleanups, food bank assistance, tutoring at local schools, and visiting senior centers. Transportation provided from campus. Make a difference while building lasting friendships.",
    date: "2024-04-06",
    time: "9:00 AM - 3:00 PM",
    location: "Meet at Student Union",
    category: "Community",
    image: "/placeholder-event.jpg",
    featured: false,
    registrationRequired: true,
    registrationLink: "#"
  }
];

export function getFeaturedEvents(): Event[] {
  return events.filter(e => e.featured);
}

export function getEventsByCategory(category: string): Event[] {
  if (category === 'All') return events;
  return events.filter(e => e.category === category);
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find(e => e.slug === slug);
}

export function getEventCategories(): string[] {
  const categories = new Set<string>();
  events.forEach(e => categories.add(e.category));
  return ['All', ...Array.from(categories).sort()];
}
