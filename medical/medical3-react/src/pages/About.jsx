import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiArrowRight,
  HiCheck,
  HiUsers,
  HiShieldCheck,
  HiLightBulb,
  HiHeart,
  HiAcademicCap,
  HiGlobe
} from 'react-icons/hi';
import { FaEye, FaUserMd, FaAward, FaMedal } from 'react-icons/fa';
import './About.css';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <HiHeart />,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, understanding, and respect.'
    },
    {
      icon: <HiShieldCheck />,
      title: 'Excellence',
      description: 'We strive for the highest standards in eye care and patient outcomes.'
    },
    {
      icon: <HiLightBulb />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and treatments in ophthalmology.'
    },
    {
      icon: <HiUsers />,
      title: 'Patient-Centered',
      description: 'Your vision health and comfort are at the center of everything we do.'
    },
  ];

  const milestones = [
    { year: '2005', title: 'Foundation', description: 'Medicare Eye Clinic was established with a vision to provide accessible eye care.' },
    { year: '2010', title: 'Expansion', description: 'Opened our second location and introduced advanced diagnostic equipment.' },
    { year: '2015', title: 'Recognition', description: 'Received national accreditation for excellence in ophthalmology services.' },
    { year: '2020', title: 'Innovation', description: 'Launched telemedicine services and AI-powered diagnostic tools.' },
    { year: '2024', title: 'Today', description: 'Serving over 100,000 patients annually with comprehensive eye care.' },
  ];

  const stats = [
    { number: '20+', label: 'Years of Experience' },
    { number: '50+', label: 'Expert Doctors' },
    { number: '100K+', label: 'Patients Served' },
    { number: '15', label: 'Clinic Locations' },
  ];

  const certifications = [
    { icon: <FaAward />, title: 'JCI Accredited', description: 'International healthcare quality standard' },
    { icon: <FaMedal />, title: 'ISO 9001:2015', description: 'Quality management certification' },
    { icon: <HiAcademicCap />, title: 'Board Certified', description: 'All physicians board certified' },
    { icon: <HiGlobe />, title: 'Global Standards', description: 'Following international best practices' },
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-badge">
              <FaEye /> About Us
            </div>
            <h1>Leading the Way in Vision Care Excellence</h1>
            <p>
              For over two decades, Medicare Eye Clinic has been dedicated to providing
              exceptional eye care services with compassion, innovation, and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-grid">
            <motion.div className="story-image" {...fadeIn}>
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=700&fit=crop"
                alt="Eye examination"
                className="story-img"
              />
              <div className="story-badge">
                <span className="badge-number">20+</span>
                <span className="badge-text">Years of Excellence</span>
              </div>
            </motion.div>
            <motion.div className="story-content" {...fadeIn}>
              <span className="section-label">Our Story</span>
              <h2>A Legacy of Vision Care</h2>
              <p>
                Founded in 2005, Medicare Eye Clinic began with a simple mission: to make
                high-quality eye care accessible to everyone. What started as a small practice
                has grown into one of the region's most trusted eye care providers.
              </p>
              <p>
                Our team of dedicated ophthalmologists, optometrists, and support staff work
                together to deliver personalized care using the latest technology and treatments.
                We believe that clear vision is essential to a fulfilling life, and we're committed
                to helping every patient see their best.
              </p>
              <div className="story-features">
                <div className="feature-item">
                  <HiCheck />
                  <span>State-of-the-art facilities</span>
                </div>
                <div className="feature-item">
                  <HiCheck />
                  <span>Experienced specialists</span>
                </div>
                <div className="feature-item">
                  <HiCheck />
                  <span>Personalized treatment plans</span>
                </div>
                <div className="feature-item">
                  <HiCheck />
                  <span>Comprehensive eye care</span>
                </div>
              </div>
              <Link to="/doctors" className="btn btn-primary">
                Meet Our Team <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <motion.div
            className="about-stats-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-item">
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span className="section-label">Our Values</span>
            <h2>What Drives Us Every Day</h2>
            <p>
              Our core values guide every interaction and decision we make in caring for your vision.
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section section bg-gradient">
        <div className="container">
          <div className="mission-grid">
            <motion.div className="mission-card" {...fadeIn}>
              <div className="mission-icon">
                <FaEye />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide exceptional, patient-centered eye care that improves quality of life
                through advanced treatments, compassionate service, and continuous innovation in
                ophthalmology.
              </p>
            </motion.div>
            <motion.div className="mission-card" {...fadeIn}>
              <div className="mission-icon">
                <HiLightBulb />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading eye care provider recognized for excellence in patient outcomes,
                innovative treatments, and a commitment to making quality vision care accessible
                to all communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span className="section-label">Our Journey</span>
            <h2>Milestones That Shaped Us</h2>
          </motion.div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section section">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span className="section-label">Our Credentials</span>
            <h2>Certified Excellence</h2>
            <p>We maintain the highest standards through international certifications and accreditations.</p>
          </motion.div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="certification-icon">
                  {cert.icon}
                </div>
                <h4>{cert.title}</h4>
                <p>{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <motion.div className="about-cta-content" {...fadeIn}>
            <h2>Ready to Experience Better Vision?</h2>
            <p>Schedule a consultation with our expert team today.</p>
            <div className="about-cta-buttons">
              <Link to="/appointment" className="btn btn-primary btn-lg">
                Book Appointment <HiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
