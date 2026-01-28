import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <Link to="/" className="footer-logo">
                <div className="logo-shield"><span>P</span></div>
                <div className="logo-text">
                  <span className="logo-main">PRESTIGE</span>
                  <span className="logo-sub">UNIVERSITY</span>
                </div>
              </Link>
              <p>Empowering minds and shaping futures since 1892. Join our community of scholars, innovators, and leaders making a difference in the world.</p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/academics">Academic Programs</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/campus">Campus Life</Link></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Library</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Student Portal</a></li>
                <li><a href="#">Faculty Directory</a></li>
                <li><a href="#">Academic Calendar</a></li>
                <li><a href="#">Career Services</a></li>
                <li><a href="#">Financial Aid</a></li>
                <li><a href="#">Health Services</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <p>1234 University Avenue</p>
                    <p>Cambridge, MA 02138</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri, 8am-6pm EST</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <p>info@prestige.edu</p>
                    <p>admissions@prestige.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; 2024 Prestige University. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Accessibility</a>
              <a href="#">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
