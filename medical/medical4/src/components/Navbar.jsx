import React, { useState, useEffect } from 'react';

const Navbar = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    {
      name: 'Departments',
      href: '#departments',
      dropdown: ['Cardiology', 'Neurology', 'Oncology', 'Orthopedics', 'Pediatrics', 'Emergency']
    },
    {
      name: 'Services',
      href: '#services',
      dropdown: ['Diagnostics', 'Surgery', 'Rehabilitation', 'Telemedicine', 'Lab Services']
    },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Research', href: '#research' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 5L35 12.5V27.5L20 35L5 27.5V12.5L20 5Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 15V25M15 20H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">MEDIX</span>
            <span className="logo-tagline">Hospital</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href={item.href} className="nav-link">
                {item.name}
                {item.dropdown && <i className="fas fa-chevron-down"></i>}
              </a>
              {item.dropdown && activeDropdown === index && (
                <div className="dropdown-menu">
                  {item.dropdown.map((subItem, subIndex) => (
                    <a key={subIndex} href={`#${subItem.toLowerCase()}`} className="dropdown-item">
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <a href="tel:911" className="emergency-btn">
            <i className="fas fa-phone-alt"></i>
            <span>Emergency</span>
          </a>
          <button className="book-btn" onClick={onBookAppointment}>
            <span>Book Now</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          <button
            className={`mobile-toggle ${isMobileOpen ? 'active' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <a key={index} href={item.href} className="mobile-link" onClick={() => setIsMobileOpen(false)}>
            {item.name}
          </a>
        ))}
        <button className="mobile-book-btn" onClick={() => { onBookAppointment(); setIsMobileOpen(false); }}>
          Book Appointment
        </button>
      </div>
    </header>
  );
};

export default Navbar;
