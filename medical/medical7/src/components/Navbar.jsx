import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-icon">V</span>
          <span className="logo-text">VitaLab</span>
        </a>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#services">Services</a>
          <a href="#tests">Tests</a>
          <a href="#process">How it Works</a>
          <a href="#booking">Book Now</a>
        </div>

        <div className="nav-actions">
          <a href="tel:1800123456" className="nav-phone">
            <i className="fas fa-phone"></i>
            <span>1800-123-456</span>
          </a>
          <button className="nav-btn">Get Started</button>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
