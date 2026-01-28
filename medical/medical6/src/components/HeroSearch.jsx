import React, { useState } from 'react';

const HeroSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularTests = [
    'Complete Blood Count (CBC)',
    'Thyroid Profile',
    'Diabetes Screening',
    'Lipid Profile',
    'Liver Function Test',
    'Kidney Function Test'
  ];

  const suggestions = [
    { name: 'Complete Blood Count (CBC)', price: 299, discount: 50 },
    { name: 'Thyroid Profile Total (T3, T4, TSH)', price: 399, discount: 60 },
    { name: 'HbA1c (Glycated Hemoglobin)', price: 349, discount: 55 },
    { name: 'Lipid Profile Complete', price: 449, discount: 45 },
  ];

  return (
    <section className="hero-search">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Book Lab Tests & Health Checkups</h1>
            <p>From the comfort of your home with certified labs</p>

            <div className="hero-features">
              <div className="hero-feature">
                <i className="fas fa-home"></i>
                <span>Home Collection</span>
              </div>
              <div className="hero-feature">
                <i className="fas fa-clock"></i>
                <span>Reports in 24hrs</span>
              </div>
              <div className="hero-feature">
                <i className="fas fa-percent"></i>
                <span>Up to 60% Off</span>
              </div>
            </div>
          </div>

          <div className="search-card">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search for tests, packages or labs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              {searchQuery && (
                <button className="clear-btn" onClick={() => setSearchQuery('')}>
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>

            {showSuggestions && (
              <div className="search-suggestions">
                <div className="suggestions-header">Popular Searches</div>
                {suggestions.map((item, index) => (
                  <div key={index} className="suggestion-item">
                    <div className="suggestion-info">
                      <i className="fas fa-flask"></i>
                      <span>{item.name}</span>
                    </div>
                    <div className="suggestion-price">
                      <span className="discount-badge">{item.discount}% OFF</span>
                      <span className="price">₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="popular-searches">
              <span className="label">Popular:</span>
              {popularTests.slice(0, 4).map((test, index) => (
                <button key={index} className="popular-tag">
                  {test}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">50L+</span>
            <span className="stat-label">Tests Booked</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">100+</span>
            <span className="stat-label">Certified Labs</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">500+</span>
            <span className="stat-label">Cities Covered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">4.8★</span>
            <span className="stat-label">Customer Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
