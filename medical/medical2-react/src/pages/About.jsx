import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheck, HiArrowRight } from 'react-icons/hi';
import { FaHospital, FaAward, FaUserMd, FaHeartbeat, FaHandHoldingMedical, FaMicroscope } from 'react-icons/fa';
import './About.css';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    { icon: <FaHeartbeat />, title: 'Compassion', desc: 'We treat every patient with empathy and understanding.' },
    { icon: <FaAward />, title: 'Excellence', desc: 'We maintain the highest standards of medical care.' },
    { icon: <FaHandHoldingMedical />, title: 'Integrity', desc: 'We are honest and transparent in all interactions.' },
    { icon: <FaMicroscope />, title: 'Innovation', desc: 'We embrace new technologies and treatments.' },
  ];

  const timeline = [
    { year: '1995', title: 'Foundation', desc: 'Serenity Medical Center was established with a vision to provide quality healthcare.' },
    { year: '2002', title: 'Expansion', desc: 'Opened our first specialized cardiac care unit and expanded facilities.' },
    { year: '2010', title: 'Recognition', desc: 'Received national accreditation for excellence in patient care.' },
    { year: '2018', title: 'Innovation', desc: 'Launched telemedicine services and digital patient portals.' },
    { year: '2023', title: 'Today', desc: 'Serving 50,000+ patients annually with 150+ dedicated specialists.' },
  ];

  return (
    <motion.div className="about-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div className="page-header-content" {...fadeIn}>
            <span className="section-label">About Us</span>
            <h1>Your Trusted Healthcare Partner</h1>
            <p>Dedicated to providing exceptional medical care with compassion and expertise since 1995.</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-grid">
            <motion.div className="story-images" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="story-img-main">
                <FaHospital />
              </div>
              <div className="story-img-accent">
                <FaUserMd />
              </div>
            </motion.div>
            <motion.div className="story-content" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Our Story</span>
              <h2>A Legacy of Healing Excellence</h2>
              <p>
                Founded in 1995, Serenity Medical Center began with a simple yet profound mission: to provide
                healthcare that treats the whole person, not just the illness. What started as a small
                community clinic has grown into a comprehensive medical center.
              </p>
              <p>
                Today, we stand as a beacon of hope and healing, equipped with cutting-edge technology
                and staffed by some of the most dedicated healthcare professionals in the region.
              </p>
              <ul className="check-list">
                <li><HiCheck /> Patient-centered approach to care</li>
                <li><HiCheck /> State-of-the-art medical facilities</li>
                <li><HiCheck /> Multidisciplinary team of specialists</li>
                <li><HiCheck /> Commitment to continuous improvement</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section bg-secondary">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Guides Us</h2>
            <p className="section-subtitle">Our core values shape every interaction and decision we make</p>
          </div>
          <motion.div className="values-grid" initial="initial" whileInView="animate" viewport={{ once: true }} variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            {values.map((value, index) => (
              <motion.div key={index} className="value-card" variants={fadeIn}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones & Achievements</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div className="cta-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>Ready to Experience Our Care?</h2>
            <p>Schedule an appointment with our expert medical team today.</p>
            <Link to="/appointment" className="btn btn-white btn-lg">
              Book Appointment <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
