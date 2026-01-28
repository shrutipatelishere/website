import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <i className="fas fa-award"></i>
              <span>Welcome to ProHealth Medical & Healthcare Center</span>
            </div>

            <h1>
              Your Partner in <span className="text-primary">Health</span> and{' '}
              <span className="text-primary">Wellness</span>
            </h1>

            <p>
              We are committed to providing you with the best medical and healthcare
              services to help you live healthier and happier. Our team of expert
              doctors ensures personalized care for every patient.
            </p>

            <div className="hero-buttons">
              <a href="#appointment" className="btn btn-primary btn-lg">
                <span>Book Appointment</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#about" className="btn btn-outline btn-lg">
                <i className="fas fa-play-circle"></i>
                <span>Learn More</span>
              </a>
            </div>

            <div className="hero-features">
              <div className="hero-feature">
                <div className="feature-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <span>Compassion</span>
              </div>
              <div className="hero-feature">
                <div className="feature-icon">
                  <i className="fas fa-award"></i>
                </div>
                <span>Excellence</span>
              </div>
              <div className="hero-feature">
                <div className="feature-icon">
                  <i className="fas fa-shield-halved"></i>
                </div>
                <span>Integrity</span>
              </div>
              <div className="hero-feature">
                <div className="feature-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <span>Respect</span>
              </div>
              <div className="hero-feature">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <span>Teamwork</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                alt="Female Doctor"
              />
              <div className="hero-card hero-card-1">
                <div className="card-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="card-content">
                  <span>Appointments</span>
                  <strong>24/7 Available</strong>
                </div>
              </div>
              <div className="hero-card hero-card-2">
                <div className="card-icon success">
                  <i className="fas fa-user-doctor"></i>
                </div>
                <div className="card-content">
                  <span>Expert Doctors</span>
                  <strong>150+ Specialists</strong>
                </div>
              </div>
              <div className="hero-rating">
                <div className="rating-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span>4.9 Rating</span>
                <p>from 2,000+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
