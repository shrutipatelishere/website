import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fa-user-doctor',
      title: 'Experienced Medical Professionals',
      description: 'Our team consists of highly qualified doctors with years of experience.',
    },
    {
      icon: 'fa-hospital',
      title: 'Comprehensive Services',
      description: 'From diagnosis to treatment, we offer a full range of medical services.',
    },
    {
      icon: 'fa-heart',
      title: 'Patient-centered Approach',
      description: 'Your comfort and wellbeing is our top priority in everything we do.',
    },
    {
      icon: 'fa-microscope',
      title: 'State-of-the-art Facilities',
      description: 'Modern equipment and advanced technology for accurate diagnosis.',
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              Why Choose <span className="text-primary">ProHealth</span>
            </h2>
            <p className="section-desc">
              We provide exceptional healthcare services with a commitment to excellence and compassion.
            </p>

            <div className="features-list">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-image">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=700&fit=crop"
              alt="Medical team"
            />
            <div className="why-stats">
              <div className="why-stat">
                <h3>95%</h3>
                <p>Patient Satisfaction</p>
              </div>
              <div className="why-stat">
                <h3>24/7</h3>
                <p>Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
