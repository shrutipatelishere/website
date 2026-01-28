import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const departments = [
    { name: 'Admissions Office', email: 'admissions@prestige.edu', phone: '+1 (555) 123-4567', hours: 'Mon-Fri: 8:30 AM - 5:00 PM' },
    { name: 'Registrar Office', email: 'registrar@prestige.edu', phone: '+1 (555) 123-4568', hours: 'Mon-Fri: 9:00 AM - 4:30 PM' },
    { name: 'Financial Aid', email: 'finaid@prestige.edu', phone: '+1 (555) 123-4569', hours: 'Mon-Fri: 8:30 AM - 5:00 PM' },
    { name: 'Student Services', email: 'students@prestige.edu', phone: '+1 (555) 123-4570', hours: 'Mon-Fri: 8:00 AM - 6:00 PM' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=600&fit=crop" alt="Contact Us" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
            <h1>Contact Us</h1>
            <p>We're here to help. Reach out to us anytime.</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <span className="section-label">Get in Touch</span>
              <h2>We'd Love to Hear From You</h2>
              <p>Whether you have questions about admissions, programs, or campus life, our team is ready to assist you.</p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>1234 University Avenue<br />Cambridge, MA 02138<br />United States</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>Main: +1 (555) 123-4567<br />Toll-Free: 1-800-PRESTIGE</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>General: info@prestige.edu<br />Admissions: admissions@prestige.edu</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Office Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter your first name" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="financial">Financial Aid</option>
                    <option value="campus">Campus Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-burgundy">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="departments-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Departments</span>
            <h2>Contact Specific Departments</h2>
            <p>Reach out directly to the department you need</p>
          </div>
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <h3>{dept.name}</h3>
                <div className="dept-info">
                  <p><i className="fas fa-envelope"></i> {dept.email}</p>
                  <p><i className="fas fa-phone"></i> {dept.phone}</p>
                  <p><i className="fas fa-clock"></i> {dept.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-bg">
          <img src="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?w=1920&h=450&fit=crop" alt="Map" />
        </div>
        <div className="map-overlay">
          <div className="map-content">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Find Us</h3>
            <p>1234 University Avenue, Cambridge, MA 02138</p>
            <a href="#" className="btn btn-white">Get Directions</a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-section">
        <div className="container">
          <div className="emergency-box">
            <div className="emergency-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="emergency-content">
              <h3>Emergency Contact</h3>
              <p>For campus emergencies, please contact Campus Security immediately.</p>
            </div>
            <div className="emergency-number">
              <span>24/7 Emergency Line</span>
              <a href="tel:5551234599">+1 (555) 123-4599</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
