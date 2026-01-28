import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/academics', label: 'Academics' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/campus', label: 'Campus Life' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isHome && !scrolled ? 'transparent' : ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-top-left">
              <a href="tel:+15551234567"><i className="fas fa-phone-alt"></i> +1 (555) 123-4567</a>
              <a href="mailto:info@prestige.edu"><i className="fas fa-envelope"></i> info@prestige.edu</a>
              <span><i className="fas fa-map-marker-alt"></i> Cambridge, MA</span>
            </div>
            <div className="header-top-right">
              <a href="#">Student Portal</a>
              <a href="#">Faculty</a>
              <a href="#">Alumni</a>
              <a href="#">Give</a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="logo">
              <div className="logo-shield">
                <span>P</span>
              </div>
              <div className="logo-text">
                <span className="logo-main">PRESTIGE</span>
                <span className="logo-sub">UNIVERSITY</span>
              </div>
            </Link>

            <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="nav-right">
              <Link to="/admissions" className="btn btn-gold nav-cta">Apply Now</Link>
              <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
