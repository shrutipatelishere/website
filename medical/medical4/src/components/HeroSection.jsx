import React, { useState, useEffect } from 'react';

const HeroSection = ({ onBookAppointment }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const slides = [
    {
      title: 'Revolutionary',
      highlight: 'Healthcare',
      subtitle: 'Experience Tomorrow',
      description: 'Where cutting-edge technology meets compassionate care. Our world-class facilities and expert medical team are dedicated to your complete well-being.',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&h=800&fit=crop',
      stat: { value: '50K+', label: 'Lives Saved' }
    },
    {
      title: 'Precision',
      highlight: 'Medicine',
      subtitle: 'Personalized Treatment',
      description: 'Advanced genomic testing and AI-driven diagnostics enable us to create treatment plans tailored specifically to your unique health profile.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop',
      stat: { value: '99.7%', label: 'Accuracy Rate' }
    },
    {
      title: 'World-Class',
      highlight: 'Specialists',
      subtitle: '200+ Expert Doctors',
      description: 'Our internationally acclaimed medical professionals bring decades of experience and groundbreaking research to deliver exceptional patient outcomes.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&h=800&fit=crop',
      stat: { value: '#1', label: 'Ranked Hospital' }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / 50,
      y: (e.clientY - rect.top - rect.height / 2) / 50
    });
  };

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      {/* Animated Background */}
      <div className="hero-bg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero-overlay" />
        <div className="hero-grid-pattern" />
      </div>

      {/* Floating 3D Elements */}
      <div className="hero-floating-elements">
        <div
          className="float-element el-1"
          style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
        >
          <i className="fas fa-heartbeat"></i>
        </div>
        <div
          className="float-element el-2"
          style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}
        >
          <i className="fas fa-dna"></i>
        </div>
        <div
          className="float-element el-3"
          style={{ transform: `translate(${mousePos.x * 1}px, ${mousePos.y * -2}px)` }}
        >
          <i className="fas fa-brain"></i>
        </div>
        <div
          className="float-element el-4"
          style={{ transform: `translate(${mousePos.x * -2}px, ${mousePos.y * 1}px)` }}
        >
          <i className="fas fa-microscope"></i>
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-main">
          {slides.map((slide, index) => (
            <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
              <span className="hero-badge">
                <i className="fas fa-star"></i>
                {slide.subtitle}
              </span>
              <h1>
                {slide.title}<br />
                <span className="gradient-text">{slide.highlight}</span>
              </h1>
              <p>{slide.description}</p>
            </div>
          ))}

          <div className="hero-actions">
            <button className="btn-primary-glow" onClick={onBookAppointment}>
              <span>Schedule Consultation</span>
              <div className="btn-glow"></div>
            </button>
            <a href="#facilities" className="btn-outline-hero">
              <i className="fas fa-play-circle"></i>
              <span>Virtual Tour</span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="hero-quick-stats">
            <div className="quick-stat">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Emergency Care</span>
            </div>
            <div className="stat-divider"></div>
            <div className="quick-stat">
              <span className="stat-value">15min</span>
              <span className="stat-label">Avg. Wait Time</span>
            </div>
            <div className="stat-divider"></div>
            <div className="quick-stat">
              <span className="stat-value">4.9</span>
              <span className="stat-label">Patient Rating</span>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="hero-side-panel">
          <div className="side-stat-card">
            <div className="stat-card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-card-content">
              <span className="stat-card-value">{slides[currentSlide].stat.value}</span>
              <span className="stat-card-label">{slides[currentSlide].stat.label}</span>
            </div>
            <div className="stat-card-glow"></div>
          </div>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="indicator-progress"></span>
              </button>
            ))}
          </div>
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

export default HeroSection;
