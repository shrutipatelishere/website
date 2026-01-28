import React from 'react';

const Footer = () => {
  const footerLinks = {
    services: [
      'Cardiology',
      'Neurology',
      'Orthopedics',
      'Pediatrics',
      'Ophthalmology',
      'Dental Care'
    ],
    quickLinks: [
      'About Us',
      'Our Doctors',
      'Health Packages',
      'Appointments',
      'Patient Portal',
      'Careers'
    ],
    support: [
      'Help Center',
      'Contact Us',
      'Privacy Policy',
      'Terms of Service',
      'Insurance Info',
      'Billing & Payments'
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                <div className="logo-icon">
                  <svg viewBox="0 0 40 40" fill="none">
                    <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#footerLogoGrad)"/>
                    <path d="M20 12v16M12 20h16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="footerLogoGrad" x1="4" y1="4" x2="36" y2="36">
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
              <p className="footer-description">
                Providing compassionate, world-class healthcare services to our
                community for over 25 years. Your health is our priority.
              </p>
              <div className="footer-contact-info">
                <a href="tel:+1800123456" className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  1-800-123-456
                </a>
                <a href="mailto:info@healix.com" className="contact-item">
                  <i className="fas fa-envelope"></i>
                  info@healix.com
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>Our Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for health tips and updates.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p>&copy; 2024 Healix Healthcare Center. All rights reserved.</p>
            <div className="bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="certifications">
              <span><i className="fas fa-shield-alt"></i> HIPAA Compliant</span>
              <span><i className="fas fa-lock"></i> SSL Secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
