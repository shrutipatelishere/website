import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { FaEye } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    {
      path: '/services',
      label: 'Services',
      hasDropdown: true,
      dropdown: [
        { path: '/services#vision-test', label: 'Vision Testing' },
        { path: '/services#eye-surgery', label: 'Eye Surgery' },
        { path: '/services#pediatric', label: 'Pediatric Care' },
        { path: '/services#contact-lens', label: 'Contact Lens' },
      ]
    },
    { path: '/doctors', label: 'Doctors' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <FaEye />
            </div>
            <span className="logo-text">Medicare</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path} className={link.hasDropdown ? 'has-dropdown' : ''}>
                {link.hasDropdown ? (
                  <div
                    className="nav-dropdown-trigger"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.label}
                      <HiChevronDown className="dropdown-icon" />
                    </NavLink>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="dropdown-menu"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.dropdown.map((item) => (
                            <Link key={item.path} to={item.path} className="dropdown-item">
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Nav Actions */}
          <div className="nav-actions">
            <Link to="/appointment" className="btn btn-secondary btn-sm hide-tablet">
              Get Started
            </Link>
            <Link to="/appointment" className="btn btn-primary btn-sm">
              Contact Us
            </Link>
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container">
              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mobile-cta">
                <Link
                  to="/appointment"
                  className="btn btn-primary btn-block"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
