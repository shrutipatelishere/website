import { cn } from '@/lib/utils';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  milestones: Milestone[];
  className?: string;
}

export function Timeline({ milestones, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-navy-300 to-gold-500 dark:from-gold-600 dark:via-navy-600 dark:to-gold-600" />

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={cn(
              "relative flex items-start gap-8",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-background shadow-sm z-10" />

            {/* Content */}
            <div
              className={cn(
                "ml-16 md:ml-0 md:w-1/2",
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              )}
            >
              <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-700 dark:text-gold-400 rounded-full text-sm font-semibold mb-2">
                {milestone.year}
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {milestone.title}
              </h3>
              <p className="text-muted-foreground">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sample milestones for About page
export const universityMilestones: Milestone[] = [
  {
    year: "1847",
    title: "University Founded",
    description: "Westbrook University was established with a founding class of 47 students and a mission to advance knowledge and serve the public good."
  },
  {
    year: "1892",
    title: "First Graduate Programs",
    description: "The university expanded to offer its first master's degree programs in natural sciences and literature."
  },
  {
    year: "1925",
    title: "Medical School Opens",
    description: "The School of Medicine welcomed its inaugural class, marking a new era in healthcare education and research."
  },
  {
    year: "1958",
    title: "Engineering College Established",
    description: "In response to the space age, Westbrook founded its College of Engineering with programs in aerospace and mechanical engineering."
  },
  {
    year: "1985",
    title: "Computer Science Department",
    description: "Recognizing the digital revolution, the Department of Computer Science was established with cutting-edge facilities."
  },
  {
    year: "2010",
    title: "Sustainability Commitment",
    description: "Westbrook committed to carbon neutrality and launched comprehensive sustainability initiatives across campus."
  },
  {
    year: "2024",
    title: "New Research Center",
    description: "The Center for Climate Solutions opens with $100M in NSF funding, cementing our role as a leader in environmental research."
  },
];
