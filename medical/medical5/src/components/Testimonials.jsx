import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Heart Surgery Patient',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'The cardiac team at Healix saved my life. From diagnosis to surgery and recovery, every step was handled with exceptional care and professionalism. I am forever grateful.',
      rating: 5,
      date: '2 weeks ago',
      treatment: 'Cardiac Bypass'
    },
    {
      name: 'David Thompson',
      role: 'Orthopedic Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'After years of knee pain, Dr. Wilson performed my joint replacement surgery. The results are incredible - I am now back to hiking and enjoying life pain-free!',
      rating: 5,
      date: '1 month ago',
      treatment: 'Knee Replacement'
    },
    {
      name: 'Sarah Johnson',
      role: 'Pediatric Care Parent',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'As a mother, finding the right pediatric care was crucial. The team here treats my children with such warmth and expertise. We could not ask for better healthcare.',
      rating: 5,
      date: '3 weeks ago',
      treatment: 'Pediatric Care'
    },
    {
      name: 'Michael Chen',
      role: 'Neurology Patient',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      text: 'The neurological team diagnosed my condition when others could not. Their advanced diagnostic tools and expertise made all the difference in my treatment journey.',
      rating: 5,
      date: '2 months ago',
      treatment: 'Neurological Treatment'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonials-bg">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
      </div>

      <div className="container">
        <div className="section-header light">
          <span className="section-label light">
            <i className="fas fa-quote-left"></i>
            Testimonials
          </span>
          <h2>What Our Patients Say</h2>
          <p>
            Real stories from real patients who trusted us with their health
            and experienced the Healix difference.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="carousel-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${currentSlide === index ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                  opacity: currentSlide === index ? 1 : 0.3
                }}
              >
                <div className="card-header">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div className="treatment-badge">{testimonial.treatment}</div>
                </div>

                <p className="testimonial-text">{testimonial.text}</p>

                <div className="card-footer">
                  <div className="author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="rating-date">
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <span className="date">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button className="carousel-btn next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-card">
            <i className="fas fa-smile"></i>
            <span className="stat-value">50,000+</span>
            <span className="stat-label">Happy Patients</span>
          </div>
          <div className="stat-card">
            <i className="fas fa-star"></i>
            <span className="stat-value">4.9/5</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-card">
            <i className="fas fa-thumbs-up"></i>
            <span className="stat-value">99%</span>
            <span className="stat-label">Recommend Us</span>
          </div>
          <div className="stat-card">
            <i className="fas fa-comments"></i>
            <span className="stat-value">12,000+</span>
            <span className="stat-label">Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
