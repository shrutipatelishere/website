import React from 'react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const steps = [
    { num: '01', title: 'Create Account', desc: 'Register on our application portal to begin your journey' },
    { num: '02', title: 'Complete Application', desc: 'Fill in your academic history, achievements, and personal statement' },
    { num: '03', title: 'Submit Documents', desc: 'Upload transcripts, test scores, and letters of recommendation' },
    { num: '04', title: 'Application Review', desc: 'Our admissions committee reviews your application holistically' },
    { num: '05', title: 'Decision', desc: 'Receive your admission decision via email and portal' },
  ];

  const requirements = [
    {
      type: 'Undergraduate',
      items: [
        'High School Diploma or equivalent',
        'Official transcripts',
        'SAT or ACT scores',
        'Two letters of recommendation',
        'Personal statement (500-650 words)',
        'Application fee: $75'
      ]
    },
    {
      type: 'Graduate',
      items: [
        "Bachelor's degree from accredited institution",
        'Official transcripts',
        'GRE/GMAT scores (program specific)',
        'Three letters of recommendation',
        'Statement of purpose',
        'Resume/CV',
        'Application fee: $100'
      ]
    },
  ];

  const deadlines = [
    { round: 'Early Decision', date: 'November 1, 2024', notification: 'December 15, 2024' },
    { round: 'Early Action', date: 'November 15, 2024', notification: 'January 15, 2025' },
    { round: 'Regular Decision', date: 'January 15, 2025', notification: 'April 1, 2025' },
    { round: 'Transfer Students', date: 'March 15, 2025', notification: 'May 15, 2025' },
  ];

  const faqs = [
    {
      question: 'What is the acceptance rate?',
      answer: 'Our acceptance rate is approximately 15%, making Prestige University highly selective. We take a holistic approach to reviewing applications.'
    },
    {
      question: 'Are interviews required?',
      answer: 'Interviews are optional but recommended. They provide an opportunity for you to learn more about our university and for us to learn more about you.'
    },
    {
      question: 'Can I apply for financial aid?',
      answer: 'Yes, we offer need-based and merit-based financial aid. Complete the FAFSA and CSS Profile by the priority deadline.'
    },
    {
      question: 'What test scores do you accept?',
      answer: 'We accept SAT or ACT for undergraduate admissions. Graduate programs may require GRE or GMAT depending on the program.'
    },
  ];

  const aidTypes = [
    { icon: 'fas fa-graduation-cap', title: 'Merit Scholarships', desc: 'Awarded based on academic excellence and achievements' },
    { icon: 'fas fa-hand-holding-usd', title: 'Need-Based Grants', desc: 'Financial support based on demonstrated need' },
    { icon: 'fas fa-briefcase', title: 'Work-Study', desc: 'On-campus employment opportunities' },
    { icon: 'fas fa-file-invoice-dollar', title: 'Student Loans', desc: 'Federal and institutional loan programs' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop" alt="Admissions" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Admissions</span>
            </div>
            <h1>Admissions</h1>
            <p>Start your journey to academic excellence</p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="admissions-welcome">
        <div className="container">
          <div className="welcome-content">
            <span className="section-label">Join Our Community</span>
            <h2>Your Future Starts Here</h2>
            <p>At Prestige University, we seek students who demonstrate intellectual curiosity, leadership potential, and a commitment to making a positive impact. Our admissions process is designed to identify individuals who will thrive in our rigorous academic environment and contribute to our diverse community.</p>
            <div className="welcome-buttons">
              <a href="#" className="btn btn-gold">Start Application</a>
              <a href="#" className="btn btn-outline-navy">Request Information</a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Application Process</span>
            <h2>How to Apply</h2>
            <p>Follow these steps to complete your application</p>
          </div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="process-step">
                <span className="step-number">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="requirements-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Requirements</span>
            <h2>Application Requirements</h2>
            <p>What you need to submit for your application</p>
          </div>
          <div className="requirements-grid">
            {requirements.map((req, index) => (
              <div key={index} className="requirement-card">
                <h3>{req.type} Admission</h3>
                <ul className="requirement-list">
                  {req.items.map((item, i) => (
                    <li key={i}>
                      <i className="fas fa-check"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="deadlines-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label light">Important Dates</span>
            <h2>Application Deadlines</h2>
            <p>Fall 2025 admission deadlines for undergraduate applicants</p>
          </div>
          <div className="deadlines-table">
            <div className="table-header">
              <span>Application Round</span>
              <span>Deadline</span>
              <span>Notification</span>
            </div>
            {deadlines.map((deadline, index) => (
              <div key={index} className="table-row">
                <span>{deadline.round}</span>
                <span>{deadline.date}</span>
                <span>{deadline.notification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="financial-section">
        <div className="container">
          <div className="financial-grid">
            <div className="financial-content">
              <span className="section-label">Financial Aid</span>
              <h2>Making Education Accessible</h2>
              <p>We are committed to making a Prestige education affordable for all admitted students. Over 60% of our students receive some form of financial aid.</p>
              <div className="aid-stats">
                <div className="aid-stat">
                  <span className="stat-number">$65M+</span>
                  <span className="stat-label">Annual Financial Aid</span>
                </div>
                <div className="aid-stat">
                  <span className="stat-number">60%</span>
                  <span className="stat-label">Students Receiving Aid</span>
                </div>
              </div>
              <a href="#" className="btn btn-burgundy">Explore Financial Aid</a>
            </div>
            <div className="aid-types">
              {aidTypes.map((aid, index) => (
                <div key={index} className="aid-type">
                  <i className={aid.icon}></i>
                  <h4>{aid.title}</h4>
                  <p>{aid.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common admissions questions</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=600&fit=crop" alt="Students" />
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin?</h2>
            <p>Take the first step toward your extraordinary future at Prestige University.</p>
            <div className="cta-actions">
              <a href="#" className="btn btn-gold">Start Your Application</a>
              <Link to="/contact" className="btn btn-outline-white">Contact Admissions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
