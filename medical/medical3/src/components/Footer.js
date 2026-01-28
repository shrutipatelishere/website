import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Emergency Care',
  ];

  const socialLinks = [
    { icon: 'fa-facebook-f', href: '#' },
    { icon: 'fa-twitter', href: '#' },
    { icon: 'fa-instagram', href: '#' },
    { icon: 'fa-linkedin-in', href: '#' },
    { icon: 'fa-youtube', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <a href="#home" className="footer-logo">
                <div className="logo-icon">
                  <i className="fas fa-plus"></i>
                </div>
                <span>Pro<span className="text-primary">Health</span></span>
              </a>
              <p>
                Providing exceptional healthcare services with compassion, expertise,
                and cutting-edge technology since 1998.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a href={social.href} key={index} aria-label={social.icon}>
                    <i className={`fab ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#services">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter for health tips and updates.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <div className="newsletter-input">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              <div className="footer-badges">
                <span>
                  <i className="fas fa-award"></i> Certified
                </span>
                <span>
                  <i className="fas fa-shield-check"></i> HIPAA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 ProHealth. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
