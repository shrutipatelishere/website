import React from 'react';

const WhyUs = () => {
  const features = [
    {
      icon: 'fas fa-award',
      title: 'NABL Certified Labs',
      desc: 'All partner labs are NABL accredited ensuring highest quality standards'
    },
    {
      icon: 'fas fa-clock',
      title: 'Quick Reports',
      desc: 'Get your test reports within 24 hours via email and app'
    },
    {
      icon: 'fas fa-user-md',
      title: 'Free Consultation',
      desc: 'Complimentary doctor consultation to explain your reports'
    },
    {
      icon: 'fas fa-rupee-sign',
      title: 'Best Prices',
      desc: 'Up to 70% discount compared to market rates'
    },
    {
      icon: 'fas fa-home',
      title: 'Home Collection',
      desc: 'Free sample collection from your doorstep'
    },
    {
      icon: 'fas fa-redo',
      title: 'Free Re-test',
      desc: 'Free re-testing in case of any sample issues'
    }
  ];

  const stats = [
    { num: '2M+', label: 'Tests Done' },
    { num: '500K+', label: 'Happy Customers' },
    { num: '150+', label: 'Cities Covered' },
    { num: '99.9%', label: 'Accuracy Rate' }
  ];

  return (
    <section className="why-us">
      <div className="section-container">
        <div className="why-us-content">
          <div className="why-us-left">
            <span className="section-tag">Why Choose Us</span>
            <h2>India's Most Trusted<br />Diagnostic Platform</h2>
            <p>We combine technology with care to deliver accurate, affordable, and convenient diagnostic services.</p>

            <div className="stats-row">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-num">{stat.num}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="why-us-right">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
