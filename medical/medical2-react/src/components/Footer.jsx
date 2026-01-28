import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Our Services' },
    { to: '/doctors', label: 'Our Doctors' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/appointment', label: 'Appointments' },
  ];

  const services = [
    'General Medicine',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Emergency Care',
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-col footer-brand">
              <Link to="/" className="footer-logo">
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
              <p className="footer-desc">
                Providing compassionate, patient-centered healthcare with excellence since 1995.
                Your health and well-being are our top priorities.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service}>
                    <Link to="/services">{service}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <HiLocationMarker />
                  <span>123 Medical Drive<br />Health City, HC 12345</span>
                </li>
                <li>
                  <HiPhone />
                  <span>+1 (555) 123-4567<br />+1 (555) 911-0000</span>
                </li>
                <li>
                  <HiMail />
                  <span>info@serenitymedical.com</span>
                </li>
                <li>
                  <HiClock />
                  <span>Mon - Sat: 8AM - 8PM<br />Sun: Emergency Only</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Serenity Medical Center. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
