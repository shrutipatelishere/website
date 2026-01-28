import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-icon">V</span>
              <span className="logo-text">VitaLab</span>
            </a>
            <p>India's trusted diagnostic platform offering accurate, affordable, and convenient blood testing services at your doorstep.</p>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Tests</a></li>
              <li><a href="#">Health Packages</a></li>
              <li><a href="#">Partner Labs</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Popular Tests</h4>
            <ul>
              <li><a href="#">Complete Blood Count</a></li>
              <li><a href="#">Thyroid Profile</a></li>
              <li><a href="#">Lipid Profile</a></li>
              <li><a href="#">Diabetes Panel</a></li>
              <li><a href="#">Vitamin Tests</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <i className="fas fa-phone"></i>
                <span>1800-123-456 (Toll Free)</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>support@vitalab.com</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Mumbai, Delhi, Bangalore + 150 cities</span>
              </li>
            </ul>
            <div className="footer-badges">
              <span><i className="fas fa-certificate"></i> NABL</span>
              <span><i className="fas fa-award"></i> ISO 9001</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 VitaLab Diagnostics. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
