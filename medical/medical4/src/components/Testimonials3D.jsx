import React, { useState, useEffect } from 'react';

const Testimonials3D = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Robert Johnson',
      role: 'Heart Transplant Recipient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      quote: 'The cardiac team at Medix gave me a second chance at life. From the moment I arrived for my transplant evaluation to my recovery, every staff member treated me with incredible care and compassion.',
      rating: 5,
      department: 'Cardiology',
      date: 'October 2024'
    },
    {
      id: 2,
      name: 'Maria Santos',
      role: 'Cancer Survivor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      quote: 'When I was diagnosed with breast cancer, the oncology team at Medix became my family. Their cutting-edge treatment and emotional support helped me beat cancer. I am forever grateful.',
      rating: 5,
      department: 'Oncology',
      date: 'September 2024'
    },
    {
      id: 3,
      name: 'David Park',
      role: 'Spine Surgery Patient',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      quote: 'After years of chronic back pain, Dr. Thompson performed my spinal fusion surgery. The minimally invasive technique meant faster recovery. I was back to playing golf in just 8 weeks!',
      rating: 5,
      department: 'Orthopedics',
      date: 'November 2024'
    },
    {
      id: 4,
      name: 'Jennifer Williams',
      role: "Mother of NICU Graduate",
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
      quote: 'Our premature twins spent 10 weeks in the NICU. The pediatric team\'s expertise and round-the-clock care brought our babies home healthy. We cannot thank them enough.',
      rating: 5,
      department: 'Pediatrics',
      date: 'August 2024'
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'Stroke Survivor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      quote: 'The stroke response team saved my life. Within minutes of arriving at the ER, I was receiving treatment. Today, thanks to their rapid intervention and rehabilitation program, I have fully recovered.',
      rating: 5,
      department: 'Neurology',
      date: 'December 2024'
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const totalCards = testimonials.length;
    let normalizedDiff = diff;

    if (diff > totalCards / 2) normalizedDiff = diff - totalCards;
    if (diff < -totalCards / 2) normalizedDiff = diff + totalCards;

    const absDistance = Math.abs(normalizedDiff);
    const translateX = normalizedDiff * 120;
    const translateZ = -absDistance * 150;
    const rotateY = normalizedDiff * -15;
    const opacity = absDistance > 2 ? 0 : 1 - absDistance * 0.3;
    const scale = 1 - absDistance * 0.15;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 10 - absDistance,
    };
  };

  return (
    <section className="testimonials-3d">
      <div className="testimonials-bg">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
      </div>

      <div className="container">
        <div className="section-header center light">
          <span className="section-tag light">
            <i className="fas fa-comments"></i>
            PATIENT STORIES
          </span>
          <h2>Voices of <span className="gradient-text">Hope & Healing</span></h2>
          <p>Real stories from real patients whose lives were transformed at Medix Hospital</p>
        </div>

        <div className="testimonials-carousel">
          <div className="carousel-stage">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card-3d ${index === activeIndex ? 'active' : ''}`}
                style={getCardStyle(index)}
                onClick={() => { setActiveIndex(index); setIsAutoPlay(false); }}
              >
                <div className="card-inner">
                  <div className="card-quote">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="card-text">{testimonial.quote}</p>
                  <div className="card-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span className="author-role">{testimonial.role}</span>
                      <div className="author-meta">
                        <span className="department">{testimonial.department}</span>
                        <span className="date">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button
              className="carousel-btn prev"
              onClick={() => { setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); setIsAutoPlay(false); }}
            >
              <i className="fas fa-arrow-left"></i>
            </button>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => { setActiveIndex(index); setIsAutoPlay(false); }}
                >
                  <span className="dot-progress"></span>
                </button>
              ))}
            </div>

            <button
              className="carousel-btn next"
              onClick={() => { setActiveIndex((prev) => (prev + 1) % testimonials.length); setIsAutoPlay(false); }}
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-value">50,000+</span>
            <span className="trust-label">Happy Patients</span>
          </div>
          <div className="trust-item">
            <span className="trust-value">4.9/5</span>
            <span className="trust-label">Average Rating</span>
          </div>
          <div className="trust-item">
            <span className="trust-value">98%</span>
            <span className="trust-label">Would Recommend</span>
          </div>
          <div className="trust-item">
            <span className="trust-value">#1</span>
            <span className="trust-label">Patient Choice</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials3D;
