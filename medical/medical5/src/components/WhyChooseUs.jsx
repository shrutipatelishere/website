import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fas fa-user-md',
      title: 'Expert Doctors',
      description: 'Board-certified specialists with decades of experience in their respective fields.',
      stat: '150+',
      statLabel: 'Specialists'
    },
    {
      icon: 'fas fa-microscope',
      title: 'Advanced Technology',
      description: 'State-of-the-art medical equipment for accurate diagnosis and effective treatment.',
      stat: '500+',
      statLabel: 'Equipment'
    },
    {
      icon: 'fas fa-clock',
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency services with rapid response teams ready to help.',
      stat: '< 5min',
      statLabel: 'Response Time'
    },
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Compassionate Care',
      description: 'Patient-centered approach ensuring comfort and dignity at every step.',
      stat: '99%',
      statLabel: 'Satisfaction'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-choose-wrapper">
          <div className="why-choose-content">
            <span className="section-label">
              <i className="fas fa-award"></i>
              Why Choose Us
            </span>
            <h2>Delivering Excellence in Healthcare</h2>
            <p className="why-description">
              At Healix, we combine medical expertise with compassionate care to provide
              you with the best healthcare experience. Our commitment to excellence
              has made us a trusted partner in health for thousands of families.
            </p>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                  <div className="feature-stat">
                    <span className="stat-number">{feature.stat}</span>
                    <span className="stat-label">{feature.statLabel}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-row">
              <button className="btn-primary">
                <span>Discover More</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <div className="trust-text">
                <i className="fas fa-shield-alt"></i>
                <span>Trusted by 50,000+ patients</span>
              </div>
            </div>
          </div>

          <div className="why-choose-visual">
            <div className="visual-grid">
              <div className="visual-item item-1">
                <img src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=500&fit=crop" alt="Modern Hospital" />
              </div>
              <div className="visual-item item-2">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop" alt="Medical Team" />
              </div>
              <div className="visual-item item-3">
                <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop" alt="Patient Care" />
              </div>
            </div>

            <div className="experience-badge">
              <span className="exp-number">25</span>
              <span className="exp-text">Years of<br/>Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
