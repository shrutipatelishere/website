import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      lines: ['123 Healthcare Avenue', 'Medical District, NY 10001']
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Call Us',
      lines: ['Emergency: 1-800-HEALIX', 'General: (555) 123-4567']
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      lines: ['info@healix.com', 'appointments@healix.com']
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      lines: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Emergency: 24/7']
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <i className="fas fa-map-marked-alt"></i>
            Contact Us
          </span>
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? Our team is here to help you
            with any inquiries about our services.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.lines.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-connect">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="#" className="social-link facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-link youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919364!2d-74.00425878459418!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle%20NYC!5e0!3m2!1sen!2sus!4v1635959751219!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Healix Location"
              ></iframe>
            </div>
            <div className="map-overlay">
              <div className="location-card">
                <div className="location-icon">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="location-info">
                  <h4>Healix Medical Center</h4>
                  <p>123 Healthcare Avenue, Medical District</p>
                  <a href="#" className="directions-link">
                    <i className="fas fa-directions"></i>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
