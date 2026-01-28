import React from 'react';

const AppointmentCTA = () => {
  return (
    <section className="appointment-cta">
      <div className="cta-bg">
        <div className="bg-gradient"></div>
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <span className="cta-badge">
              <i className="fas fa-calendar-check"></i>
              Easy Appointment
            </span>
            <h2>Ready to Get Started?</h2>
            <p>
              Book your appointment in just a few clicks. Our team is ready to
              provide you with exceptional healthcare services.
            </p>

            <div className="cta-features">
              <div className="cta-feature">
                <i className="fas fa-check"></i>
                <span>Same-day appointments available</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-check"></i>
                <span>No long waiting times</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-check"></i>
                <span>Online & in-person options</span>
              </div>
            </div>

            <div className="cta-actions">
              <button className="btn-book-now">
                <i className="fas fa-calendar-alt"></i>
                Book Appointment
              </button>
              <a href="tel:+1800123456" className="btn-call">
                <i className="fas fa-phone-alt"></i>
                1-800-123-456
              </a>
            </div>
          </div>

          <div className="cta-form-wrapper">
            <div className="quick-form">
              <h3>Quick Appointment</h3>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Your phone" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Department</label>
                    <select>
                      <option>Select Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Orthopedics</option>
                      <option>Pediatrics</option>
                      <option>General Medicine</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Preferred Date</label>
                    <input type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea placeholder="Any specific concerns..." rows="3"></textarea>
                </div>
                <button type="submit" className="form-submit">
                  Request Appointment
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
