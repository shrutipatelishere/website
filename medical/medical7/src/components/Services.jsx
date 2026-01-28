import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-vial',
      title: 'Blood Tests',
      desc: 'Complete blood analysis with 500+ test options',
      color: '#6366f1'
    },
    {
      icon: 'fas fa-dna',
      title: 'Genetic Testing',
      desc: 'DNA analysis for hereditary conditions',
      color: '#ec4899'
    },
    {
      icon: 'fas fa-heart',
      title: 'Cardiac Screening',
      desc: 'Comprehensive heart health assessment',
      color: '#ef4444'
    },
    {
      icon: 'fas fa-bacterium',
      title: 'Allergy Tests',
      desc: 'Identify food & environmental allergies',
      color: '#f59e0b'
    },
    {
      icon: 'fas fa-lungs',
      title: 'Hormone Panel',
      desc: 'Thyroid, fertility & metabolic hormones',
      color: '#10b981'
    },
    {
      icon: 'fas fa-virus',
      title: 'Infection Markers',
      desc: 'Viral, bacterial & fungal detection',
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2>Diagnostic Solutions for Every Need</h2>
          <p>Comprehensive testing services with state-of-the-art technology</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{'--accent': service.color}}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#" className="service-link">
                Learn more <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
