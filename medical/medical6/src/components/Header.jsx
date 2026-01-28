import React, { useState } from 'react';

const Header = ({ cartCount, onCartClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Doctors', icon: 'fa-user-doctor', href: '#' },
    { name: 'Lab Tests', icon: 'fa-flask', href: '#', active: true },
    { name: 'Medicines', icon: 'fa-pills', href: '#' },
    { name: 'Health Records', icon: 'fa-file-medical', href: '#' },
  ];

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="top-links">
              <a href="#"><i className="fas fa-download"></i> Download App</a>
              <a href="#"><i className="fas fa-headset"></i> 24/7 Support</a>
              <a href="#"><i className="fas fa-map-marker-alt"></i> Find Lab</a>
            </div>
            <div className="top-info">
              <span><i className="fas fa-phone"></i> 1800-123-4567</span>
              <span><i className="fas fa-envelope"></i> help@diagnolab.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">
              <div className="logo-icon">
                <i className="fas fa-microscope"></i>
              </div>
              <div className="logo-text">
                <span className="logo-name">DiagnoLab</span>
                <span className="logo-tagline">Trusted Diagnostics</span>
              </div>
            </a>

            <div className="location-selector">
              <i className="fas fa-map-marker-alt"></i>
              <div className="location-info">
                <span className="location-label">Your Location</span>
                <span className="location-value">
                  Mumbai, Maharashtra
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
            </div>

            <nav className="main-nav">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`nav-link ${link.active ? 'active' : ''}`}
                >
                  <i className={`fas ${link.icon}`}></i>
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>

            <div className="header-actions">
              <button className="cart-btn" onClick={onCartClick}>
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>

              <button className="login-btn">
                <i className="fas fa-user"></i>
                <span>Login</span>
              </button>
            </div>

            <button
              className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-location">
          <i className="fas fa-map-marker-alt"></i>
          <span>Mumbai, Maharashtra</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className="mobile-nav-link">
            <i className={`fas ${link.icon}`}></i>
            {link.name}
          </a>
        ))}
        <button className="mobile-login-btn">
          <i className="fas fa-user"></i>
          Login / Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
