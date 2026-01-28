import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlinePhone,
  HiArrowRight,
  HiCheck
} from 'react-icons/hi';
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaChild,
  FaStethoscope,
  FaAmbulance,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: <HiOutlineUserGroup />, value: '50,000+', label: 'Patients Served' },
    { icon: <HiOutlineHeart />, value: '150+', label: 'Expert Doctors' },
    { icon: <HiOutlineClock />, value: '25+', label: 'Years Experience' },
    { icon: <HiOutlineShieldCheck />, value: '98%', label: 'Success Rate' },
  ];

  const services = [
    { icon: <FaHeartbeat />, title: 'Cardiology', desc: 'Complete heart care with advanced diagnostics and treatment.' },
    { icon: <FaBrain />, title: 'Neurology', desc: 'Expert care for brain and nervous system disorders.' },
    { icon: <FaBone />, title: 'Orthopedics', desc: 'Comprehensive bone and joint treatment and surgery.' },
    { icon: <FaChild />, title: 'Pediatrics', desc: 'Specialized healthcare for children of all ages.' },
    { icon: <FaStethoscope />, title: 'General Medicine', desc: 'Primary care and preventive health services.' },
    { icon: <FaAmbulance />, title: 'Emergency Care', desc: '24/7 emergency medical services available.' },
  ];

  const features = [
    'State-of-the-art medical facilities',
    'Board-certified physicians',
    'Personalized treatment plans',
    'Insurance accepted',
    'Online appointment booking',
    'Telemedicine available',
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Heart Surgery Patient',
      text: 'The cardiac team at Serenity saved my life. Their expertise and compassion throughout my treatment was remarkable.',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      role: 'Orthopedic Patient',
      text: 'After my knee replacement, I was back on my feet faster than expected. The rehabilitation support was excellent.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: "Pediatric Patient's Parent",
      text: 'The pediatric team treated my daughter with such care and patience. We felt like family throughout our visits.',
      rating: 5,
    },
  ];

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section - Clean Split Design */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-label">
                <span className="label-dot"></span>
                Trusted Healthcare Since 1995
              </span>
              <h1>
                Compassionate Care for a{' '}
                <span className="text-gradient">Healthier Tomorrow</span>
              </h1>
              <p>
                At Serenity Medical Center, we combine advanced medical expertise with genuine
                compassion to provide personalized healthcare that puts you first.
              </p>
              <div className="hero-cta">
                <Link to="/appointment" className="btn btn-primary btn-lg">
                  Schedule Appointment
                  <HiArrowRight />
                </Link>
                <a href="tel:+15551234567" className="btn btn-secondary btn-lg">
                  <HiOutlinePhone />
                  Call Us Now
                </a>
              </div>
              <div className="hero-features">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="hero-feature">
                    <HiCheck />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-image-container">
                <div className="hero-image-main">
                  <div className="doctor-placeholder">
                    <FaStethoscope />
                    <span>Expert Care</span>
                  </div>
                </div>
                <div className="hero-card hero-card-1">
                  <div className="card-icon">
                    <FaHeartbeat />
                  </div>
                  <div className="card-text">
                    <strong>24/7</strong>
                    <span>Emergency</span>
                  </div>
                </div>
                <div className="hero-card hero-card-2">
                  <div className="card-icon green">
                    <HiOutlineShieldCheck />
                  </div>
                  <div className="card-text">
                    <strong>100%</strong>
                    <span>Safe Care</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="stat-card" variants={fadeIn}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-images"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-img-main">
                <div className="img-placeholder">
                  <FaStethoscope />
                </div>
              </div>
              <div className="about-img-secondary">
                <div className="img-placeholder secondary">
                  <FaHeartbeat />
                </div>
              </div>
              <div className="experience-badge">
                <span className="exp-number">25+</span>
                <span className="exp-text">Years of Excellence</span>
              </div>
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">About Us</span>
              <h2>A Legacy of Healing & Compassionate Care</h2>
              <p>
                For over 25 years, Serenity Medical Center has been a pillar of healthcare
                excellence in our community. We believe in treating the whole person, not
                just the symptoms.
              </p>
              <p>
                Our state-of-the-art facilities, combined with our team of dedicated
                professionals, ensure you receive the highest quality care in a warm,
                welcoming environment.
              </p>
              <ul className="feature-list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <HiCheck />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section bg-secondary">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Comprehensive Medical Services</h2>
            <p className="section-subtitle">
              We offer a wide range of medical services to meet all your healthcare needs
            </p>
          </div>

          <motion.div
            className="services-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {services.map((service, index) => (
              <motion.div key={index} className="service-card" variants={fadeIn}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/services" className="service-link">
                  Learn More <HiArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="services-cta">
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Need Immediate Medical Attention?</h2>
              <p>Our emergency team is available 24/7 to provide urgent care when you need it most.</p>
            </div>
            <div className="cta-actions">
              <a href="tel:+15559110000" className="btn btn-white btn-lg">
                <HiOutlinePhone />
                Emergency: +1 (555) 911-0000
              </a>
              <Link to="/appointment" className="btn btn-outline-white btn-lg">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">
              Real stories from real patients who trusted us with their care
            </p>
          </div>

          <motion.div
            className="testimonials-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="testimonial-card" variants={fadeIn}>
                <FaQuoteLeft className="quote-icon" />
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
