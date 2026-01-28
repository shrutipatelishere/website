import React from 'react';

const TrustBadges = () => {
  const badges = [
    {
      icon: 'fas fa-award',
      title: 'JCI Accredited',
      description: 'International Healthcare Standards'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'ISO 9001:2015',
      description: 'Quality Management Certified'
    },
    {
      icon: 'fas fa-certificate',
      title: 'NABH Certified',
      description: 'National Accreditation Board'
    },
    {
      icon: 'fas fa-user-md',
      title: '150+ Specialists',
      description: 'Expert Medical Team'
    },
    {
      icon: 'fas fa-microscope',
      title: 'Advanced Labs',
      description: 'State-of-the-Art Equipment'
    },
    {
      icon: 'fas fa-heart',
      title: '50,000+ Patients',
      description: 'Trusted Healthcare Partner'
    }
  ];

  return (
    <section className="trust-badges">
      <div className="container">
        <div className="badges-wrapper">
          <div className="badges-track">
            {[...badges, ...badges].map((badge, index) => (
              <div key={index} className="badge-card">
                <div className="badge-icon">
                  <i className={badge.icon}></i>
                </div>
                <div className="badge-content">
                  <h4>{badge.title}</h4>
                  <p>{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
