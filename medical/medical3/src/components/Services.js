import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-stethoscope',
      title: 'Diagnostic Testing',
      description: 'Accurate and rapid testing services to identify health conditions quickly.',
      color: 'blue',
    },
    {
      icon: 'fa-brain',
      title: 'Rehabilitation Services',
      description: 'Comprehensive rehabilitation programs to help you recover and regain strength.',
      color: 'green',
    },
    {
      icon: 'fa-heart-pulse',
      title: 'Treatment for Chronic Conditions',
      description: 'Expert care and management for long-term health conditions.',
      color: 'purple',
    },
    {
      icon: 'fa-user-nurse',
      title: 'Mental Health Services',
      description: 'Professional support for mental wellness and emotional health.',
      color: 'orange',
    },
    {
      icon: 'fa-baby',
      title: 'Pediatric Services',
      description: 'Specialized healthcare services for infants, children, and adolescents.',
      color: 'teal',
    },
    {
      icon: 'fa-tooth',
      title: 'Dental Services',
      description: 'Complete dental care from routine checkups to advanced procedures.',
      color: 'pink',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">
            Provides Our <span className="text-primary">Best Services</span>
          </h2>
          <p className="section-desc">
            We offer a wide range of healthcare services to meet all your medical needs under one roof.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className={`service-card ${service.color}`} key={index}>
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#appointment" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
