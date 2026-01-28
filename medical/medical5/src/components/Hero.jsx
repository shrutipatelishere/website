import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '50K+', label: 'Happy Patients' },
    { value: '150+', label: 'Expert Doctors' },
    { value: '25+', label: 'Years Experience' },
    { value: '99%', label: 'Success Rate' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-mesh"></div>
        <div className="hero-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Trusted by 50,000+ Patients</span>
            </div>

            <h1>
              Your Health, Our
              <span className="hero-highlight"> Priority</span>
            </h1>

            <p className="hero-description">
              Experience world-class healthcare with compassionate doctors,
              cutting-edge technology, and personalized treatment plans designed
              just for you.
            </p>

            <div className="hero-actions">
              <button className="btn-primary">
                <span>Schedule Consultation</span>
                <i className="fas fa-calendar-check"></i>
              </button>
              <button className="btn-secondary">
                <div className="play-icon">
                  <i className="fas fa-play"></i>
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>24/7 Emergency Care</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Online Consultations</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Insurance Accepted</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-main">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=700&fit=crop"
                alt="Healthcare Professional"
              />
              <div className="visual-overlay"></div>
            </div>

            {/* Floating Cards */}
            <div className="floating-card card-rating">
              <div className="card-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="card-content">
                <span className="card-value">4.9/5</span>
                <span className="card-label">Patient Rating</span>
              </div>
            </div>

            <div className="floating-card card-appointment">
              <div className="card-icon green">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="card-content">
                <span className="card-value">Easy Booking</span>
                <span className="card-label">Book in 2 Minutes</span>
              </div>
            </div>

            <div className="floating-card card-doctor">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop" alt="Doctor" />
              <div className="card-content">
                <span className="card-value">Dr. Sarah Chen</span>
                <span className="card-label">Available Now</span>
              </div>
              <span className="online-dot"></span>
            </div>
          </div>
        </div>

        {/* Stats Ticker */}
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-item ${currentStat === index ? 'active' : ''}`}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
