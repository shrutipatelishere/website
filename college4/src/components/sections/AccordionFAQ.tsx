import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
}

export function AccordionFAQ({ faqs, title, className }: AccordionFAQProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-10">
            {title}
          </h2>
        )}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-serif text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// Sample FAQs
export const admissionsFAQs: FAQItem[] = [
  {
    question: "What are the admission requirements?",
    answer: "Admission requirements include a completed application form, official transcripts, standardized test scores (SAT/ACT for undergraduate, GRE/GMAT for graduate), letters of recommendation, and a personal statement. Specific programs may have additional requirements."
  },
  {
    question: "What is the application deadline?",
    answer: "For fall admission, the early decision deadline is November 1st and the regular decision deadline is January 15th. For spring admission, the deadline is October 1st. We encourage early applications as spaces are limited."
  },
  {
    question: "How much is tuition?",
    answer: "Undergraduate tuition is $52,500 per year. Graduate program tuition varies by program. These figures don't include room, board, and fees. Financial aid is available to eligible students."
  },
  {
    question: "What financial aid options are available?",
    answer: "We offer need-based grants, merit scholarships, work-study programs, and federal/private loans. Over 65% of our students receive some form of financial assistance. Complete the FAFSA to be considered for aid."
  },
  {
    question: "Can I visit the campus before applying?",
    answer: "Yes! We encourage prospective students to visit. We offer daily campus tours, overnight visits, and virtual tour options. Schedule your visit through our admissions website or contact our office."
  },
  {
    question: "What is the acceptance rate?",
    answer: "Westbrook University has a competitive admission process with an acceptance rate of approximately 18%. We practice holistic review, considering academic achievement, extracurricular involvement, and personal qualities."
  },
];

export const generalFAQs: FAQItem[] = [
  {
    question: "How many students attend Westbrook University?",
    answer: "Westbrook University has approximately 12,500 students, including 8,000 undergraduates and 4,500 graduate students. Our student-to-faculty ratio is 11:1."
  },
  {
    question: "What housing options are available?",
    answer: "We guarantee housing for all first-year students and offer various options including traditional residence halls, suite-style living, and apartments for upperclassmen. All residence halls feature modern amenities and community spaces."
  },
  {
    question: "What research opportunities exist for students?",
    answer: "Research is central to the Westbrook experience. Undergraduates can participate in faculty-led research projects, receive summer research fellowships, and present at our annual research symposium. Graduate students engage in cutting-edge research across all disciplines."
  },
  {
    question: "What career services are available?",
    answer: "Our Career Center provides comprehensive services including career counseling, resume workshops, interview preparation, job fairs, and networking events. We maintain strong connections with employers, with 96% of graduates employed or in graduate school within six months."
  },
];
