import React from 'react';

const Footer = () => {
  const footerLinks = {
    tests: [
      'Complete Blood Count',
      'Thyroid Profile',
      'Lipid Profile',
      'Liver Function Test',
      'Kidney Function Test',
      'HbA1c Test',
      'Vitamin D Test',
      'Urine Routine'
    ],
    packages: [
      'Full Body Checkup',
      'Diabetes Care',
      'Heart Health Package',
      "Women's Health",
      'Senior Citizen Package',
      'Thyroid Package',
      'Vitamin Package',
      'Basic Health Checkup'
    ],
    company: [
      'About Us',
      'Careers',
      'Blog',
      'Press',
      'Partner Labs',
      'Contact Us'
    ],
    support: [
      'Help Center',
      'Track Order',
      'Refund Policy',
      'Privacy Policy',
      'Terms & Conditions',
      'FAQs'
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <div className="logo-icon">
                  <i className="fas fa-microscope"></i>
                </div>
                <div className="logo-text">
                  <span className="logo-name">DiagnoLab</span>
                  <span className="logo-tagline">Trusted Diagnostics</span>
                </div>
              </a>
              <p className="footer-desc">
                Your trusted partner for diagnostic services. We bring quality
                healthcare to your doorstep with certified labs and trained professionals.
              </p>
              <div className="contact-info">
                <a href="tel:18001234567">
                  <i className="fas fa-phone"></i>
                  1800-123-4567
                </a>
                <a href="mailto:help@diagnolab.com">
                  <i className="fas fa-envelope"></i>
                  help@diagnolab.com
                </a>
              </div>
              <div className="app-download">
                <p>Download Our App</p>
                <div className="app-buttons">
                  <a href="#" className="app-btn">
                    <i className="fab fa-google-play"></i>
                    <span>Google Play</span>
                  </a>
                  <a href="#" className="app-btn">
                    <i className="fab fa-apple"></i>
                    <span>App Store</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h4>Popular Tests</h4>
              <ul>
                {footerLinks.tests.map((link, index) => (
                  <li key={index}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Health Packages</h4>
              <ul>
                {footerLinks.packages.map((link, index) => (
                  <li key={index}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}><a href="#">{link}</a></li>
                ))}
              </ul>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p>&copy; 2024 DiagnoLab. All rights reserved.</p>
            <div className="certifications">
              <span><i className="fas fa-certificate"></i> NABL Certified</span>
              <span><i className="fas fa-shield-alt"></i> ISO 9001:2015</span>
              <span><i className="fas fa-lock"></i> SSL Secured</span>
            </div>
            <div className="payment-methods">
              <span>We Accept:</span>
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-amex"></i>
              <i className="fab fa-google-pay"></i>
              <i className="fas fa-money-bill-wave"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
