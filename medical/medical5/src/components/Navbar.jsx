import React, { useState } from 'react';

const Navbar = ({ scrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#logoGrad)"/>
              <path d="M20 12v16M12 20h16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="logoGrad" x1="4" y1="4" x2="36" y2="36">
                  <stop stopColor="#0ea5e9"/>
                  <stop offset="1" stopColor="#10b981"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">Healix</span>
            <span className="logo-tagline">Healthcare Center</span>
          </div>
        </a>

        <div className="navbar-nav">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <a href="tel:+1800123456" className="nav-phone">
            <i className="fas fa-phone-alt"></i>
            <span>1-800-123-456</span>
          </a>
          <button className="btn-appointment">
            <span>Book Appointment</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <button
          className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="tel:+1800123456" className="mobile-phone">
          <i className="fas fa-phone-alt"></i>
          1-800-123-456
        </a>
        <button className="mobile-btn">Book Appointment</button>
      </div>
    </nav>
  );
};

export default Navbar;
