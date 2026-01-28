import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Our Location',
      details: ['123 Medical Street', 'Health City, HC 12345']
    },
    {
      icon: <FiPhone />,
      title: 'Phone Number',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: <FiMail />,
      title: 'Email Address',
      details: ['info@medicare.com', 'support@medicare.com']
    },
    {
      icon: <FiClock />,
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 8:00 PM', 'Sat - Sun: 9:00 AM - 5:00 PM']
    },
  ];

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg"></div>
        <div className="container">
          <motion.div
            className="page-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p>Get in touch with us for any inquiries or assistance</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <motion.div
            className="contact-info-grid"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">Get In Touch</span>
              <h2>Send Us a <span className="highlight">Message</span></h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>

              {submitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <div className="input-icon">
                      <FiUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <FiMail />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <div className="input-icon">
                      <FiPhone />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <FiMessageSquare />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              className="contact-sidebar"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Map Placeholder */}
              <div className="map-wrapper">
                <div className="map-placeholder">
                  <FiMapPin />
                  <p>Interactive Map</p>
                  <span>123 Medical Street, Health City</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-connect">
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-link twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-link instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-link linkedin">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social-link youtube">
                    <FaYoutube />
                  </a>
                  <a href="#" className="social-link whatsapp">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">FAQ</span>
            <h2>Frequently Asked <span className="highlight">Questions</span></h2>
            <p>Find answers to common questions about our services</p>
          </motion.div>
          <motion.div
            className="faq-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {[
              { q: 'What are your working hours?', a: 'We are open Monday to Friday from 8:00 AM to 8:00 PM, and Saturday to Sunday from 9:00 AM to 5:00 PM.' },
              { q: 'Do you accept insurance?', a: 'Yes, we accept most major insurance plans. Please contact us to verify your specific coverage.' },
              { q: 'How can I book an appointment?', a: 'You can book an appointment online through our website, by calling us, or visiting our clinic in person.' },
              { q: 'Is emergency care available?', a: 'Yes, we offer 24/7 emergency care services. Please call our emergency line for immediate assistance.' },
            ].map((faq, index) => (
              <motion.div key={index} className="faq-card" variants={fadeInUp}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
