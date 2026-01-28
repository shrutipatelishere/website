import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX, HiPhone } from 'react-icons/hi';
import { FiClock } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/doctors', label: 'Doctors' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-item">
              <HiPhone />
              <span>Emergency: <strong>+1 (555) 911-0000</strong></span>
            </div>
            <div className="top-bar-item">
              <FiClock />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <nav className="nav-container">
            <Link to="/" className="logo">
              <div className="logo-mark">
                <svg viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="10" fill="currentColor"/>
                  <path d="M20 10v20M10 20h20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-name">Serenity</span>
                <span className="logo-tagline">Medical Center</span>
              </div>
            </Link>

            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <Link to="/appointment" className="btn btn-primary">
                Book Appointment
              </Link>
              <button
                className="mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container">
                <ul className="mobile-nav-links">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      >
                        {link.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
                <Link to="/appointment" className="btn btn-primary btn-block mobile-cta">
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
