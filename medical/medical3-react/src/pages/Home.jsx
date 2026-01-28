import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiArrowRight,
  HiCheck,
  HiChartBar,
  HiShieldCheck,
  HiLightBulb,
  HiHeart
} from 'react-icons/hi';
import {
  FaEye,
  FaUserMd,
  FaBrain,
  FaMicroscope,
  FaVideo,
  FaLeaf
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1 }
    },
    viewport: { once: true }
  };

  const stats = [
    { number: '100%', label: 'Our Doctors Certified', suffix: '' },
    { number: '25M+', label: 'Happy global users', suffix: '' },
    { number: '99%', label: 'Satisfying treatment', suffix: '' },
  ];

  const services = [
    { id: '001', icon: <HiLightBulb />, title: 'Path to Wellness', description: 'Our vision is to empower patients through personalized care.' },
    { id: '002', icon: <FaBrain />, title: 'Mental Health Services', description: 'Counseling, therapy, and psychiatric care for mental health conditions.' },
    { id: '003', icon: <FaMicroscope />, title: 'Diagnostic Services', description: 'Medical procedures and tests used to identify diseases.' },
    { id: '004', icon: <HiHeart />, title: 'Beyond Medicine', description: 'We are ready to serve you with passion and full responsive.' },
    { id: '005', icon: <FaUserMd />, title: 'Pediatric Care', description: 'Comprehensive healthcare services for infants, children, adolescents.' },
    { id: '006', icon: <FaVideo />, title: 'Telehealth Services', description: 'Remote consultations and follow-up appointments via video or phone.' },
    { id: '007', icon: <HiShieldCheck />, title: 'Future of Care', description: 'We are ready to serve you with passion and fast response.' },
    { id: '008', icon: <FaLeaf />, title: 'Holistic Health', description: 'Holistic health is an approach to well being that considers person.' },
  ];

  const goals = [
    { icon: <HiCheck />, title: 'Providing Accessible Information' },
    { icon: <HiCheck />, title: 'Building Trust' },
    { icon: <HiCheck />, title: 'Enhancing Patient Engagement' },
    { icon: <HiCheck />, title: 'Community Involvement' },
    { icon: <HiCheck />, title: 'Promoting Health Education' },
    { icon: <HiCheck />, title: 'Security and Privacy' },
  ];

  const teamMembers = [
    { name: 'Alex', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { name: 'Hamilton', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
    { name: 'Jenny', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
    { name: 'Metro', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  ];

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-badge">
              <FaEye /> About Us
            </div>
            <h1>
              Discover Our Mission and Values in Patient-Centered Healthcare
            </h1>
            <p>
              We are dedicated to providing exceptional healthcare through a compassionate, patient-centered approach.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Us <HiArrowRight />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-images"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-grid">
              <div className="hero-image-left">
                <div className="hero-img-wrapper small">
                  <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=500&fit=crop" alt="Eye examination" />
                </div>
              </div>
              <div className="hero-image-center">
                <div className="hero-img-wrapper large">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=600&fit=crop" alt="Medical professional" />
                  <div className="image-stats">
                    <div className="stat-badge green">
                      <span>100%</span> Fast Response
                    </div>
                    <div className="stat-badge purple">
                      <span>99%</span> Satisfying treatment
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-image-right">
                <div className="hero-img-wrapper small">
                  <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=500&fit=crop" alt="Medical equipment" />
                </div>
                <div className="eye-icon-float">
                  <FaEye />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section section">
        <div className="container">
          <div className="trust-grid">
            <motion.div className="trust-content" {...fadeIn}>
              <h2>Your Trusted Healthcare Providers</h2>
              <p>
                Patients does not participate in payment fee order flow as a source of revenue. Instead, we route all orders directly.
              </p>
              <Link to="/appointment" className="btn btn-dark">
                Make a schedule <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div className="trust-card chat-card" {...fadeIn}>
              <div className="chat-header">
                <span className="status-dot"></span>
                Very fast and accurate service with us
              </div>
              <p>
                Consult with our professional doctors who are ready to help you manage your health.
              </p>
              <div className="chat-user">
                <div className="user-avatar">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face" alt="Doctor" />
                </div>
                <div className="user-info">
                  <strong>Hi, Modhu</strong>
                  <span>Optics Interness</span>
                </div>
              </div>
              <div className="chat-actions">
                <div className="action-item">
                  <span>Appointment</span>
                  <small>6 Hrs ago</small>
                </div>
              </div>
            </motion.div>

            <motion.div className="trust-card analysis-card" {...fadeIn}>
              <h4>Analysis your physical performance from anywhere</h4>
              <p>
                Comprehensive data, detailed measurements, and biostatistical impedance analysis.
              </p>
              <div className="team-avatars">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-avatar">
                    <img src={member.avatar} alt={member.name} className="avatar-img" />
                    <span>{member.name}</span>
                  </div>
                ))}
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
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                variants={fadeIn}
              >
                <div className="stat-dot"></div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-icon">
                  <HiChartBar />
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-index">{String(index + 1).padStart(3, '0')}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="goals-section section">
        <div className="container">
          <div className="goals-grid">
            <motion.div className="goals-image" {...fadeIn}>
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=700&fit=crop"
                alt="Doctor consultation"
                className="goals-img"
              />
            </motion.div>
            <motion.div className="goals-content" {...fadeIn}>
              <h2>Let's know about our main goal</h2>
              <p>
                We aim to offer clear and comprehensive information about our services, conditions treated, and treatment options. This ensures that patients can make informed decisions about their healthcare.
              </p>
              <div className="goals-list">
                {goals.map((goal, index) => (
                  <div key={index} className="goal-item">
                    <div className="goal-icon">
                      {goal.icon}
                    </div>
                    <span>{goal.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section bg-gradient">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <h2>Here are some key vision</h2>
            <p>
              We are committed to upholding the highest standards of medical excellence while ensuring each patient feels valued and heard.
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="service-card"
                variants={fadeIn}
              >
                <div className="service-header">
                  <span className="service-id">{service.id}</span>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="container">
          <motion.div className="home-cta-content" {...fadeIn}>
            <h2>Bring your customer services the next level of excellence.</h2>
            <Link to="/appointment" className="btn btn-dark btn-lg">
              Make a schedule <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
