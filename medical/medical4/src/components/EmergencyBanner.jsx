import React from 'react';

const EmergencyBanner = () => {
  const services = [
    { icon: 'fa-truck-medical', title: 'Ambulance', desc: 'GPS Tracked Fleet', time: '< 8 min response' },
    { icon: 'fa-helicopter', title: 'Air Ambulance', desc: 'Critical Care Transport', time: '24/7 Available' },
    { icon: 'fa-kit-medical', title: 'Trauma Center', desc: 'Level 1 Certified', time: 'Immediate Care' },
    { icon: 'fa-phone-volume', title: 'Helpline', desc: '+1 (800) MEDIX-911', time: 'Always Ready' },
  ];

  return (
    <section className="emergency-banner">
      <div className="emergency-bg">
        <div className="pulse-ring ring-1"></div>
        <div className="pulse-ring ring-2"></div>
        <div className="pulse-ring ring-3"></div>
      </div>

      <div className="container">
        <div className="emergency-content">
          <div className="emergency-header">
            <div className="emergency-icon-wrapper">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="emergency-title">
              <span className="label">24/7 EMERGENCY</span>
              <h2>Rapid Response Medical Services</h2>
            </div>
          </div>

          <div className="emergency-services">
            {services.map((service, index) => (
              <div key={index} className="emergency-service-card">
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <div className="service-info">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                  <span className="service-time">{service.time}</span>
                </div>
                <div className="service-pulse"></div>
              </div>
            ))}
          </div>

          <a href="tel:18006334911" className="emergency-cta">
            <span className="cta-text">Call Emergency Now</span>
            <span className="cta-number">1-800-MEDIX-911</span>
            <div className="cta-pulse"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
