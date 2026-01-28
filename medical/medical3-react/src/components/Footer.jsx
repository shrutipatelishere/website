import { Link } from 'react-router-dom';
import { FaEye, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/doctors' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press', path: '/press' },
      { label: 'Blog', path: '/blog' },
    ],
    features: [
      { label: 'Eye Exams', path: '/services#eye-exams' },
      { label: 'Vision Testing', path: '/services#vision-test' },
      { label: 'Eye Surgery', path: '/services#surgery' },
      { label: 'Contact Lenses', path: '/services#contact-lens' },
      { label: 'Pediatric Care', path: '/services#pediatric' },
    ],
    solutions: [
      { label: 'For Patients', path: '/patients' },
      { label: 'For Doctors', path: '/for-doctors' },
      { label: 'Telemedicine', path: '/telemedicine' },
      { label: 'Insurance', path: '/insurance' },
      { label: 'Appointments', path: '/appointment' },
    ],
    resources: [
      { label: 'Help Center', path: '/help' },
      { label: 'FAQs', path: '/faq' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Contact Us', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="footer">
      {/* CTA Section */}
      <div className="footer-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Connect with us</h2>
            <div className="cta-buttons">
              <Link to="/appointment" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <div className="logo-icon">
                  <FaEye />
                </div>
                <span className="logo-text">Medicare</span>
              </Link>
              <p className="footer-description">
                Subscribe to our newsletter for updates
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="newsletter-input"
                />
                <button className="btn btn-primary btn-sm">
                  Book a Demo
                </button>
              </div>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <FaApple />
                  <span>App Store</span>
                </a>
                <a href="#" className="app-button">
                  <FaGooglePlay />
                  <span>Google Play</span>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer-links-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Features</h4>
              <ul>
                {footerLinks.features.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Solutions</h4>
              <ul>
                {footerLinks.solutions.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>For Accountants</h4>
              <ul>
                {footerLinks.resources.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; Medicare {currentYear} Privacy Accessibility Terms License Site map</p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
