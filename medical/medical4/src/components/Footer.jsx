import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const footerLinks = {
    'Patient Care': [
      { name: 'Find a Doctor', href: '#doctors' },
      { name: 'Appointments', href: '#appointment' },
      { name: 'Patient Portal', href: '#portal' },
      { name: 'Billing & Insurance', href: '#billing' },
      { name: 'Medical Records', href: '#records' },
      { name: 'Visitor Information', href: '#visitors' },
    ],
    'Departments': [
      { name: 'Cardiology', href: '#cardiology' },
      { name: 'Neurology', href: '#neurology' },
      { name: 'Oncology', href: '#oncology' },
      { name: 'Orthopedics', href: '#orthopedics' },
      { name: 'Pediatrics', href: '#pediatrics' },
      { name: 'Emergency Care', href: '#emergency' },
    ],
    'About Medix': [
      { name: 'Our Story', href: '#about' },
      { name: 'Leadership Team', href: '#leadership' },
      { name: 'Careers', href: '#careers' },
      { name: 'News & Research', href: '#research' },
      { name: 'Community Health', href: '#community' },
      { name: 'Partnerships', href: '#partners' },
    ],
    'Resources': [
      { name: 'Health Library', href: '#library' },
      { name: 'Health Tools', href: '#tools' },
      { name: 'Clinical Trials', href: '#trials' },
      { name: 'Insurance Accepted', href: '#insurance' },
      { name: 'FAQs', href: '#faqs' },
      { name: 'Contact Us', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: 'fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fa-youtube', href: '#', label: 'YouTube' },
  ];

  const certifications = [
    { icon: 'fa-award', text: 'JCI Accredited' },
    { icon: 'fa-shield-halved', text: 'HIPAA Compliant' },
    { icon: 'fa-certificate', text: 'ISO 9001:2015' },
  ];

  return (
    <footer className="footer">
      {/* Top Section - CTA */}
      <div className="footer-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Ready to Experience <span className="gradient-text">World-Class Care?</span></h3>
              <p>Book an appointment with our expert medical team today</p>
            </div>
            <div className="cta-actions">
              <a href="#appointment" className="cta-btn primary">
                <i className="fas fa-calendar-plus"></i>
                Book Appointment
              </a>
              <a href="tel:18006334911" className="cta-btn outline">
                <i className="fas fa-phone"></i>
                Call: 1-800-MEDIX
              </a>
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
              <a href="#home" className="footer-logo">
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
              <p className="footer-desc">
                Setting the standard in healthcare excellence. Our commitment to innovation, compassion, and patient-centered care makes us the region's leading medical institution.
              </p>

              {/* Contact Info */}
              <div className="footer-contact">
                <div className="contact-item">
                  <i className="fas fa-location-dot"></i>
                  <span>500 Medical Center Drive<br/>Healthcare City, HC 10001</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>1-800-MEDIX (633-4911)</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>contact@medixhospital.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} aria-label={social.label}>
                    <i className={`fab ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div key={index} className="footer-column">
                <h4>{title}</h4>
                <ul>
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Column */}
            <div className="footer-newsletter">
              <h4>Stay Informed</h4>
              <p>Subscribe to receive health tips, hospital news, and updates from Medix.</p>
              <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>

              {/* Certifications */}
              <div className="footer-certs">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-badge">
                    <i className={`fas ${cert.icon}`}></i>
                    <span>{cert.text}</span>
                  </div>
                ))}
              </div>

              {/* App Download */}
              <div className="app-download">
                <p>Download Our App</p>
                <div className="app-buttons">
                  <a href="#ios" className="app-btn">
                    <i className="fab fa-apple"></i>
                    <span>App Store</span>
                  </a>
                  <a href="#android" className="app-btn">
                    <i className="fab fa-google-play"></i>
                    <span>Play Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p>&copy; 2025 Medix Hospital. All rights reserved.</p>
            <div className="bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#accessibility">Accessibility</a>
              <a href="#sitemap">Sitemap</a>
            </div>
            <div className="language-selector">
              <i className="fas fa-globe"></i>
              <select defaultValue="en">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
