import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: 'fa-search',
      title: 'Search & Select',
      description: 'Search for tests or packages and add them to your cart'
    },
    {
      number: '02',
      icon: 'fa-calendar-check',
      title: 'Book Slot',
      description: 'Choose a convenient time slot for sample collection'
    },
    {
      number: '03',
      icon: 'fa-vial',
      title: 'Sample Collection',
      description: 'Our trained phlebotomist visits your home to collect samples'
    },
    {
      number: '04',
      icon: 'fa-file-medical',
      title: 'Get Reports',
      description: 'Receive accurate digital reports within 24-48 hours'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title centered">How It Works</h2>
        <p className="section-subtitle">
          Book your lab tests in 4 simple steps
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <i className="fas fa-chevron-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to Book Your Test?</h3>
            <p>Get started with your health checkup today</p>
          </div>
          <button className="cta-btn">
            <i className="fas fa-calendar-plus"></i>
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
