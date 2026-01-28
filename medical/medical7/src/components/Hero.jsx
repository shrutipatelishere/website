import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="dot"></span>
            Trusted by 50,000+ families
          </div>

          <h1>
            Blood Tests
            <span className="highlight"> Made Simple</span>
            <br />& Affordable
          </h1>

          <p className="hero-desc">
            Book lab tests from home. Get accurate results in 24 hours.
            Free sample collection & doctor consultation included.
          </p>

          <div className="hero-cta">
            <button className="btn-primary">
              Book a Test
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className="btn-outline">
              <i className="fas fa-play-circle"></i>
              See How it Works
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Tests Available</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">24hr</span>
              <span className="stat-label">Report Delivery</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">4.9★</span>
              <span className="stat-label">Customer Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card main">
            <div className="card-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <div className="card-content">
              <h4>Full Body Checkup</h4>
              <p>92 tests included</p>
              <div className="card-price">
                <span className="price">₹1,499</span>
                <span className="original">₹4,500</span>
              </div>
            </div>
            <div className="card-badge">67% OFF</div>
          </div>

          <div className="visual-card floating-1">
            <i className="fas fa-home"></i>
            <span>Free Home Collection</span>
          </div>

          <div className="visual-card floating-2">
            <i className="fas fa-shield-alt"></i>
            <span>NABL Certified</span>
          </div>

          <div className="visual-card floating-3">
            <div className="mini-chart">
              <div className="bar" style={{height: '40%'}}></div>
              <div className="bar" style={{height: '70%'}}></div>
              <div className="bar" style={{height: '55%'}}></div>
              <div className="bar" style={{height: '85%'}}></div>
              <div className="bar" style={{height: '60%'}}></div>
            </div>
            <span>Health Trends</span>
          </div>

          <div className="hero-blob"></div>
          <div className="hero-blob-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
