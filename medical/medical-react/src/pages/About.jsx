import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaHospital, FaUserMd, FaAward, FaCheckCircle, FaHandHoldingHeart, FaShieldAlt, FaClock, FaUsers, FaStethoscope, FaMicroscope, FaHospitalAlt, FaArrowRight } from 'react-icons/fa';
import './About.css';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: <FaHandHoldingHeart />,
      title: 'Compassionate Care',
      desc: 'We treat every patient with empathy, respect, and understanding.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Trust & Safety',
      desc: 'Your safety and trust are paramount in everything we do.'
    },
    {
      icon: <FaUserMd />,
      title: 'Expert Team',
      desc: 'Our doctors are leaders in their respective medical fields.'
    },
    {
      icon: <FaClock />,
      title: '24/7 Availability',
      desc: 'Round-the-clock medical services for emergencies.'
    },
  ];

  const milestones = [
    { year: '1990', title: 'Founded', desc: 'MediCare was established with a vision to provide quality healthcare.' },
    { year: '2000', title: 'Expansion', desc: 'Opened 10 new branches across the region.' },
    { year: '2010', title: 'Innovation', desc: 'Introduced state-of-the-art medical technology.' },
    { year: '2020', title: 'Recognition', desc: 'Awarded Best Healthcare Provider nationally.' },
  ];

  const features = [
    { icon: <FaStethoscope />, title: '500+ Specialists', desc: 'Expert doctors across all departments' },
    { icon: <FaMicroscope />, title: 'Advanced Labs', desc: 'State-of-the-art diagnostic facilities' },
    { icon: <FaHospitalAlt />, title: '50+ Locations', desc: 'Conveniently located clinics' },
    { icon: <FaUsers />, title: '20k+ Patients', desc: 'Trusted by thousands annually' },
  ];

  return (
    <motion.div
      className="about-page"
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
            <h1>About Us</h1>
            <p>Learn more about MediCare and our commitment to your health</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-content">
            <motion.div
              className="about-intro-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <div className="main-image">
                  <FaHospital className="hospital-icon" />
                </div>
                <div className="small-image">
                  <FaHeartbeat className="heart-icon" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="about-intro-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">Who We Are</span>
              <h2>Your Trusted Partner in <span className="highlight">Healthcare</span></h2>
              <p>
                For over three decades, MediCare has been at the forefront of providing exceptional
                healthcare services. Our journey began with a simple mission: to make quality
                healthcare accessible to everyone.
              </p>
              <p>
                Today, we have grown into a comprehensive healthcare network with over 50 locations,
                500+ specialist doctors, and a commitment to using the latest medical technology
                to ensure the best outcomes for our patients.
              </p>
              <div className="intro-features">
                <div className="intro-feature">
                  <FaCheckCircle />
                  <span>Board Certified Doctors</span>
                </div>
                <div className="intro-feature">
                  <FaCheckCircle />
                  <span>Modern Medical Equipment</span>
                </div>
                <div className="intro-feature">
                  <FaCheckCircle />
                  <span>24/7 Emergency Services</span>
                </div>
                <div className="intro-feature">
                  <FaCheckCircle />
                  <span>Affordable Healthcare Plans</span>
                </div>
              </div>
              <Link to="/appointment" className="btn btn-primary">
                Book Appointment <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <motion.div
            className="mv-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="mv-card mission" variants={fadeInUp}>
              <div className="mv-icon">
                <FaHeartbeat />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide compassionate, accessible, and high-quality healthcare services
                that improve the health and well-being of our community. We are committed
                to treating every patient with dignity and respect.
              </p>
            </motion.div>
            <motion.div className="mv-card vision" variants={fadeInUp}>
              <div className="mv-icon">
                <FaAward />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading healthcare provider recognized for excellence in patient
                care, medical innovation, and community health. We aspire to set the standard
                for healthcare delivery worldwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Values</span>
            <h2>What We <span className="highlight">Stand For</span></h2>
            <p>Our core values guide everything we do at MediCare</p>
          </motion.div>
          <motion.div
            className="values-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="features-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={fadeInUp}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Journey</span>
            <h2>Milestones <span className="highlight">& Growth</span></h2>
            <p>A look back at our journey of excellence in healthcare</p>
          </motion.div>
          <motion.div
            className="timeline"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                variants={fadeInUp}
              >
                <div className="timeline-content">
                  <span className="year">{milestone.year}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Experience Quality Healthcare?</h2>
            <p>Join thousands of patients who trust MediCare for their health needs.</p>
            <Link to="/appointment" className="btn btn-white">
              Book an Appointment <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
