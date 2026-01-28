import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment through our website by clicking the "Book Appointment" button, calling our 24/7 helpline at 1-800-123-456, or visiting our reception desk. Online booking allows you to select your preferred doctor, date, and time slot.'
    },
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, and many more. Please contact our billing department or bring your insurance card during your visit for verification.'
    },
    {
      question: 'Are virtual consultations available?',
      answer: 'Yes, we offer telemedicine services for many types of consultations. You can schedule a virtual visit through our patient portal. Virtual consultations are available for follow-ups, prescription refills, minor ailments, and initial consultations for non-emergency cases.'
    },
    {
      question: 'What should I bring to my first visit?',
      answer: 'For your first visit, please bring: a valid photo ID, your insurance card, list of current medications, any relevant medical records or test results, referral letter (if required), and a list of questions for your doctor.'
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Yes, our emergency department is open 24/7, 365 days a year. We have a dedicated team of emergency physicians, nurses, and specialists ready to handle all types of medical emergencies. For life-threatening emergencies, please call 911.'
    },
    {
      question: 'How can I access my medical records?',
      answer: 'You can access your medical records through our secure patient portal available on our website and mobile app. The portal allows you to view test results, visit summaries, immunization records, and billing information. You can also request physical copies at our medical records department.'
    },
    {
      question: 'What are your visiting hours?',
      answer: 'General visiting hours are from 10 AM to 8 PM daily. ICU visiting hours are limited to specific times. Pediatric ward allows one parent to stay overnight. Please check with the specific department for any restrictions or special visiting policies.'
    }
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-content">
            <span className="section-label">
              <i className="fas fa-question-circle"></i>
              FAQ
            </span>
            <h2>Frequently Asked Questions</h2>
            <p className="faq-description">
              Find answers to common questions about our services, appointments,
              and policies. Can't find what you're looking for?
            </p>
            <div className="faq-contact">
              <a href="#contact" className="contact-link">
                <i className="fas fa-headset"></i>
                <span>Contact Support</span>
              </a>
              <a href="tel:+1800123456" className="contact-link">
                <i className="fas fa-phone-alt"></i>
                <span>1-800-123-456</span>
              </a>
            </div>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <i className={`fas fa-${openIndex === index ? 'minus' : 'plus'}`}></i>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
