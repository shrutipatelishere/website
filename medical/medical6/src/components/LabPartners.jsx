import React from 'react';

const LabPartners = () => {
  const partners = [
    { name: 'Thyrocare', logo: 'T' },
    { name: 'SRL Diagnostics', logo: 'SRL' },
    { name: 'Metropolis', logo: 'M' },
    { name: 'Dr. Lal PathLabs', logo: 'LP' },
    { name: 'Suburban', logo: 'S' },
    { name: 'iGenetic', logo: 'iG' },
  ];

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata',
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Indore'
  ];

  return (
    <section className="lab-partners">
      <div className="container">
        <div className="partners-section">
          <h2 className="section-title centered">Our Lab Partners</h2>
          <p className="section-subtitle">
            We partner with India's leading NABL certified diagnostic labs
          </p>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">{partner.logo}</div>
                <span className="partner-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cities-section">
          <h3>Available in Major Cities</h3>
          <div className="cities-grid">
            {cities.map((city, index) => (
              <a key={index} href="#" className="city-tag">
                <i className="fas fa-map-marker-alt"></i>
                {city}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabPartners;
