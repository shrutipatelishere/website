import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiPaperAirplane } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    { icon: <HiLocationMarker />, title: 'Visit Us', lines: ['123 Medical Drive', 'Health City, HC 12345'] },
    { icon: <HiPhone />, title: 'Call Us', lines: ['+1 (555) 123-4567', '+1 (555) 911-0000 (Emergency)'] },
    { icon: <HiMail />, title: 'Email Us', lines: ['info@serenitymedical.com', 'appointments@serenitymedical.com'] },
    { icon: <HiClock />, title: 'Working Hours', lines: ['Mon - Fri: 8:00 AM - 8:00 PM', 'Sat - Sun: 9:00 AM - 5:00 PM'] },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <motion.div className="contact-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="page-header">
        <div className="container">
          <motion.div className="page-header-content" {...fadeIn}>
            <span className="section-label">Contact Us</span>
            <h1>Get in Touch</h1>
            <p>We're here to help. Reach out to us for any questions or assistance.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div className="contact-info" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2>Contact Information</h2>
              <p>Feel free to reach out through any of the following channels.</p>

              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-wrapper" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2>Send Us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <HiPaperAirplane />
                  <h3>Message Sent!</h3>
                  <p>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-input" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-input" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-input" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input type="text" className="form-input" placeholder="How can we help?" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-input" rows="5" placeholder="Your message..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message <HiPaperAirplane />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-placeholder">
          <HiLocationMarker />
          <p>Interactive Map</p>
          <span>123 Medical Drive, Health City</span>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
