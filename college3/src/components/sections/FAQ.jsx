import { useState } from 'react';
import { SectionHeader, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui';
import { useRevealOnScroll } from '../../hooks';
import { faqs, faqCategories } from '../../data';

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('admissions');
  const [ref, isInView] = useRevealOnScroll();

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to common questions about admissions, academics, financial aid, and campus life."
        />

        <div ref={ref} className="max-w-3xl mx-auto">
          <div
            className={`
              flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10
              transition-all duration-500
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full
                  transition-all duration-200
                  ${activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div
            className={`
              bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden
              transition-all duration-500 delay-100
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <Accordion type="single" collapsible defaultValue={filteredFaqs[0]?.id.toString()}>
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id.toString()}
                  className="border-b border-neutral-200 dark:border-neutral-700 last:border-0"
                >
                  <div className="px-4 sm:px-6">
                    <AccordionTrigger className="text-left text-sm sm:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-xs sm:text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div
            className={`
              mt-8 sm:mt-10 text-center
              transition-all duration-500 delay-300
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="#contact"
              className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Contact our admissions team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
