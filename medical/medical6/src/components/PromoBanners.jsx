import React, { useState, useEffect } from 'react';

const PromoBanners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: 'Full Body Checkup',
      subtitle: 'Complete Health Screening',
      description: '90+ Parameters | Includes Vitamin Tests',
      offer: 'Flat 60% OFF',
      price: '₹999',
      originalPrice: '₹2,499',
      bgColor: '#e5f9f8',
      accentColor: '#00b38e',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Diabetes Care Package',
      subtitle: 'Monitor Your Sugar Levels',
      description: 'HbA1c + Fasting Sugar + Post Meal',
      offer: 'Save ₹500',
      price: '₹599',
      originalPrice: '₹1,099',
      bgColor: '#fff4e5',
      accentColor: '#fc9916',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Thyroid Profile',
      subtitle: 'Complete Thyroid Check',
      description: 'T3, T4, TSH Tests Included',
      offer: '50% OFF',
      price: '₹399',
      originalPrice: '₹799',
      bgColor: '#e5eeff',
      accentColor: '#1976d2',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Women\'s Health Package',
      subtitle: 'Complete Wellness Check',
      description: '70+ Parameters | Hormonal Profile',
      offer: 'Special Price',
      price: '₹1,299',
      originalPrice: '₹3,499',
      bgColor: '#fce5f2',
      accentColor: '#e91e63',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=300&h=200&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="promo-banners">
      <div className="container">
        <div className="banners-carousel">
          <button className="carousel-nav prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="banners-track">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`banner-card ${currentSlide === index ? 'active' : ''}`}
                style={{
                  backgroundColor: banner.bgColor,
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
              >
                <div className="banner-content">
                  <span className="banner-offer" style={{ backgroundColor: banner.accentColor }}>
                    {banner.offer}
                  </span>
                  <h3>{banner.title}</h3>
                  <p className="banner-subtitle">{banner.subtitle}</p>
                  <p className="banner-desc">{banner.description}</p>
                  <div className="banner-pricing">
                    <span className="current-price">{banner.price}</span>
                    <span className="original-price">{banner.originalPrice}</span>
                  </div>
                  <button className="banner-btn" style={{ backgroundColor: banner.accentColor }}>
                    Book Now <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
                <div className="banner-image">
                  <img src={banner.image} alt={banner.title} />
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-nav next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="carousel-dots">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
