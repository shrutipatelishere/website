import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What services does ProHealth offer?',
      answer: 'ProHealth offers a comprehensive range of medical services including diagnostic testing, rehabilitation services, treatment for chronic conditions, mental health services, pediatric care, and dental services. Our expert team is equipped to handle various healthcare needs.',
    },
    {
      question: 'How do I schedule an appointment with ProHealth?',
      answer: 'You can schedule an appointment through our online booking form, by calling our helpline at +1 (555) 123-4567, or by visiting our clinic in person. We offer flexible scheduling to accommodate your needs.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major insurance plans. We recommend contacting our billing department or your insurance provider to verify coverage before your appointment. We also offer payment plans for uninsured patients.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring a valid ID, your insurance card, a list of current medications, any relevant medical records, and a list of questions or concerns you would like to discuss with your doctor.',
    },
    {
      question: 'Are virtual consultations available?',
      answer: 'Yes, we offer telemedicine services for many types of appointments. This allows you to consult with our doctors from the comfort of your home. Contact us to see if your condition is suitable for a virtual visit.',
    },
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-content">
            <span className="section-tag">FAQs</span>
            <h2 className="section-title">
              Usually <span className="text-primary">Asked</span>
            </h2>
            <p className="section-desc">
              Find answers to commonly asked questions about our services and procedures.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${index === activeIndex ? 'active' : ''}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <i className={`fas fa-${index === activeIndex ? 'minus' : 'plus'}`}></i>
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
