import React from 'react';

const About = () => {
  const values = [
    { icon: 'fa-heart', title: 'Compassion', color: 'blue' },
    { icon: 'fa-award', title: 'Excellence', color: 'green' },
    { icon: 'fa-shield-halved', title: 'Integrity', color: 'purple' },
    { icon: 'fa-handshake', title: 'Respect', color: 'orange' },
    { icon: 'fa-users', title: 'Teamwork', color: 'teal' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=600&fit=crop"
                alt="Doctor with patient"
              />
            </div>
            <div className="about-img-secondary">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=350&fit=crop"
                alt="Medical team"
              />
            </div>
            <div className="experience-badge">
              <span className="exp-number">25+</span>
              <span className="exp-text">Years of Excellence</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              ProHealth is a Team of Experienced{' '}
              <span className="text-primary">Medical Professionals</span>
            </h2>
            <p className="section-desc">
              Dedicated to providing top-quality healthcare services. Our mission is
              to provide compassionate, personalized care that meets the unique needs
              of each patient. We believe in treating the whole person, not just the
              symptoms.
            </p>

            <div className="about-values">
              <h4>Our Values</h4>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div className={`value-item ${value.color}`} key={index}>
                    <div className="value-icon">
                      <i className={`fas ${value.icon}`}></i>
                    </div>
                    <span>{value.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#services" className="btn btn-primary">
              Explore More
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
