import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiClock,
  HiArrowRight,
  HiCheckCircle
} from 'react-icons/hi';
import { FaEye, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: <HiLocationMarker />,
      title: 'Visit Us',
      lines: ['123 Vision Lane, Suite 100', 'Eye City, EC 12345']
    },
    {
      icon: <HiPhone />,
      title: 'Call Us',
      lines: ['+1 (555) 123-4567', '+1 (555) 911-EYES']
    },
    {
      icon: <HiMail />,
      title: 'Email Us',
      lines: ['info@medicareeye.com', 'appointments@medicareeye.com']
    },
    {
      icon: <HiClock />,
      title: 'Working Hours',
      lines: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM']
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, url: '#', label: 'LinkedIn' },
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
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-badge">
              <HiMail /> Contact Us
            </div>
            <h1>Get in Touch With Us</h1>
            <p>
              Have questions about our services or need to schedule an appointment?
              We're here to help. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Main Section */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div className="contact-info" {...fadeIn}>
              <h2>Contact Information</h2>
              <p>
                Feel free to reach out through any of the following channels.
                Our team is ready to assist you.
              </p>

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
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-wrapper" {...fadeIn}>
              <h2>Send Us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <HiCheckCircle />
                  <h3>Message Sent!</h3>
                  <p>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-input"
                      rows="5"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message <HiArrowRight />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-wrapper">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&h=400&fit=crop"
            alt="Map location"
            className="map-img"
          />
          <div className="map-overlay">
            <div className="map-content">
              <HiLocationMarker />
              <p>123 Vision Lane, Eye City</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </motion.div>

          <div className="faq-grid">
            <motion.div className="faq-item" {...fadeIn}>
              <h4>What should I bring to my first appointment?</h4>
              <p>
                Please bring your ID, insurance card, current glasses or contact lenses,
                and a list of any medications you're taking.
              </p>
            </motion.div>
            <motion.div className="faq-item" {...fadeIn}>
              <h4>Do you accept walk-in patients?</h4>
              <p>
                While we prefer appointments, we do accept walk-ins based on availability.
                For urgent eye issues, please call ahead.
              </p>
            </motion.div>
            <motion.div className="faq-item" {...fadeIn}>
              <h4>What insurance plans do you accept?</h4>
              <p>
                We accept most major insurance plans including VSP, EyeMed, Medicare,
                and many others. Contact us to verify your coverage.
              </p>
            </motion.div>
            <motion.div className="faq-item" {...fadeIn}>
              <h4>How often should I have an eye exam?</h4>
              <p>
                We recommend annual eye exams for most adults. However, those with certain
                conditions may need more frequent visits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
