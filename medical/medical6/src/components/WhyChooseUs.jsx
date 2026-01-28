import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fa-house-medical',
      title: 'Home Sample Collection',
      description: 'Trained phlebotomists collect samples from your doorstep',
      highlight: 'FREE'
    },
    {
      icon: 'fa-clock',
      title: 'Quick Reports',
      description: 'Get accurate digital reports within 24-48 hours',
      highlight: '24 HRS'
    },
    {
      icon: 'fa-certificate',
      title: 'NABL Certified Labs',
      description: 'All partner labs are NABL & CAP accredited',
      highlight: 'NABL'
    },
    {
      icon: 'fa-percent',
      title: 'Best Prices',
      description: 'Save up to 60% compared to walk-in lab prices',
      highlight: '60% OFF'
    },
    {
      icon: 'fa-headset',
      title: '24x7 Support',
      description: 'Round the clock customer support for all queries',
      highlight: '24/7'
    },
    {
      icon: 'fa-shield-check',
      title: 'Safe & Hygienic',
      description: 'Following strict COVID-19 safety protocols',
      highlight: 'SAFE'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title centered">Why Choose DiagnoLab?</h2>
        <p className="section-subtitle">
          Trusted by millions of customers across India for reliable diagnostic services
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-highlight">{feature.highlight}</div>
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="trust-banner">
          <div className="trust-item">
            <i className="fas fa-users"></i>
            <div className="trust-content">
              <span className="trust-value">50 Lakh+</span>
              <span className="trust-label">Happy Customers</span>
            </div>
          </div>
          <div className="trust-item">
            <i className="fas fa-flask"></i>
            <div className="trust-content">
              <span className="trust-value">1 Crore+</span>
              <span className="trust-label">Tests Processed</span>
            </div>
          </div>
          <div className="trust-item">
            <i className="fas fa-building"></i>
            <div className="trust-content">
              <span className="trust-value">100+</span>
              <span className="trust-label">Certified Labs</span>
            </div>
          </div>
          <div className="trust-item">
            <i className="fas fa-city"></i>
            <div className="trust-content">
              <span className="trust-value">500+</span>
              <span className="trust-label">Cities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
