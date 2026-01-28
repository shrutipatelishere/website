import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Michael Roberts',
      role: 'Heart Surgery Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'The care I received at ProHealth was exceptional. Dr. Mitchell took the time to explain everything and made me feel completely at ease. The modern facilities and friendly staff made my recovery smooth and comfortable.',
      rating: 5,
    },
    {
      name: 'Jennifer Adams',
      role: 'Parent of Pediatric Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: "I can't thank the pediatric team enough for the wonderful care they provided for my daughter. Dr. Chen and her team are incredibly skilled and so gentle with children. We felt like family from day one.",
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Orthopedic Patient',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      text: 'After my knee replacement surgery, I was walking again in just two weeks. The orthopedic team\'s expertise and the post-operative care were outstanding. Highly recommend ProHealth to everyone!',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-grid">
          <div className="testimonials-content">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">
              What Our <span className="text-primary">Patients Say</span> About Us
            </h2>

            <div className="testimonial-slider">
              <div className="testimonial-item">
                <div className="testimonial-rating">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
                <div className="testimonial-author">
                  <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                  <div className="author-info">
                    <h5>{testimonials[activeIndex].name}</h5>
                    <span>{testimonials[activeIndex].role}</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-nav">
                <button onClick={prevSlide} className="nav-btn">
                  <i className="fas fa-arrow-left"></i>
                </button>
                <div className="nav-dots">
                  {testimonials.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                    ></span>
                  ))}
                </div>
                <button onClick={nextSlide} className="nav-btn">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="testimonials-images">
            <div className="testimonial-img-grid">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-img ${index === activeIndex ? 'active' : ''}`}
                >
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
