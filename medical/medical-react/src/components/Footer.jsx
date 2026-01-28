import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/doctors', label: 'Our Doctors' },
    { path: '/contact', label: 'Contact' },
    { path: '/appointment', label: 'Appointment' },
  ];

  const services = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Dermatology',
    'General Medicine',
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="footer-logo">
                <FaHeartbeat className="logo-icon" />
                <span>Medi<span className="highlight">Care</span></span>
              </Link>
              <p className="footer-desc">
                Providing exceptional healthcare services with compassion, expertise,
                and cutting-edge technology since 1990.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Our Services</h4>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service}>
                    <Link to="/services">{service}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <FiMapPin />
                  <span>123 Medical Street, Health City, HC 12345</span>
                </li>
                <li>
                  <FiPhone />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <FiMail />
                  <span>info@medicare.com</span>
                </li>
                <li>
                  <FiClock />
                  <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get health tips and updates delivered to your inbox</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">
                <FiSend />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} MediCare. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
