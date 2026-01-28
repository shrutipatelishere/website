import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiArrowRight,
  HiCheck,
  HiEye,
  HiLightBulb,
  HiShieldCheck,
  HiClock,
  HiUserGroup,
  HiHeart
} from 'react-icons/hi';
import {
  FaEye,
  FaGlasses,
  FaMicroscope,
  FaUserMd,
  FaSyringe,
  FaChild,
  FaLaptopMedical,
  FaHandHoldingMedical,
  FaBrain,
  FaLeaf
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Key Vision services matching the design
  const keyVisionServices = [
    { id: '001', icon: <HiLightBulb />, title: 'Path to Wellness', description: 'Our vision is to empower patients through personalized care.' },
    { id: '002', icon: <FaBrain />, title: 'Mental Health Services', description: 'Counseling, therapy, and psychiatric care for mental health conditions.' },
    { id: '003', icon: <FaMicroscope />, title: 'Diagnostic Services', description: 'Medical procedures and tests used to identify diseases.' },
    { id: '004', icon: <HiHeart />, title: 'Beyond Medicine', description: 'We are ready to serve you with passion and full responsive.' },
    { id: '005', icon: <FaChild />, title: 'Pediatric Care', description: 'Comprehensive healthcare services for infants, children, adolescents.' },
    { id: '006', icon: <FaLaptopMedical />, title: 'Telehealth Services', description: 'Remote consultations and follow-up appointments via video or phone.' },
    { id: '007', icon: <HiShieldCheck />, title: 'Future of Care', description: 'We are ready to serve you with passion and fast response.' },
    { id: '008', icon: <FaLeaf />, title: 'Holistic Health', description: 'Holistic health is an approach to well being that considers person.' },
  ];

  // Detailed eye care services
  const detailedServices = [
    {
      id: 'vision-test',
      icon: <FaEye />,
      title: 'Comprehensive Eye Exams',
      description: 'Complete vision testing and eye health evaluation using advanced diagnostic technology.',
      features: ['Visual acuity testing', 'Refraction assessment', 'Eye pressure measurement', 'Retinal imaging'],
      price: 'From $99'
    },
    {
      id: 'eye-surgery',
      icon: <FaSyringe />,
      title: 'Laser Eye Surgery',
      description: 'State-of-the-art LASIK and PRK procedures for vision correction.',
      features: ['LASIK surgery', 'PRK procedure', 'Bladeless technology', 'Custom wavefront treatment'],
      price: 'From $1,999/eye'
    },
    {
      id: 'contact-lens',
      icon: <FaGlasses />,
      title: 'Contact Lens Services',
      description: 'Expert fitting and prescription for all types of contact lenses.',
      features: ['Contact lens fitting', 'Specialty lenses', 'Orthokeratology', 'Multifocal contacts'],
      price: 'From $149'
    },
    {
      id: 'glaucoma',
      icon: <HiShieldCheck />,
      title: 'Glaucoma Management',
      description: 'Comprehensive glaucoma diagnosis, monitoring, and treatment.',
      features: ['Pressure monitoring', 'Visual field testing', 'OCT imaging', 'Laser treatment'],
      price: 'From $129'
    },
  ];

  const processSteps = [
    { number: '01', icon: <HiClock />, title: 'Schedule', description: 'Book your appointment online or by phone at your convenience.' },
    { number: '02', icon: <FaUserMd />, title: 'Consultation', description: 'Meet with our specialists for a comprehensive evaluation.' },
    { number: '03', icon: <HiLightBulb />, title: 'Treatment Plan', description: 'Receive a personalized treatment plan tailored to your needs.' },
    { number: '04', icon: <HiEye />, title: 'Better Vision', description: 'Experience improved vision and ongoing care support.' },
  ];

  const benefits = [
    { icon: <FaUserMd />, title: 'Expert Doctors', description: 'Board-certified specialists' },
    { icon: <HiShieldCheck />, title: 'Latest Technology', description: 'Advanced equipment' },
    { icon: <HiUserGroup />, title: 'Patient-Centered', description: 'Personalized care' },
    { icon: <HiClock />, title: 'Quick Service', description: 'Minimal wait times' },
  ];

  return (
    <motion.div
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-badge">
              <FaEye /> Our Services
            </div>
            <h1>Comprehensive Eye Care Services</h1>
            <p>
              From routine eye exams to advanced surgical procedures, we offer a full range
              of services to meet all your vision care needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="benefits-bar">
        <div className="container">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-text">
                  <strong>{benefit.title}</strong>
                  <span>{benefit.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Vision Section - Matching Design */}
      <section className="key-vision-section section bg-gradient">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <h2>Here are some key vision</h2>
            <p>
              We are committed to upholding the highest standards of medical
              excellence while ensuring each patient feels valued and heard.
            </p>
          </motion.div>

          <div className="key-vision-grid">
            {keyVisionServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="key-vision-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="key-vision-header">
                  <span className="key-vision-number">{service.id}</span>
                  <div className="key-vision-icon">
                    {service.icon}
                  </div>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="services-main section">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span className="section-label">What We Offer</span>
            <h2>Our Eye Care Services</h2>
            <p>
              Discover our comprehensive range of services designed to protect and enhance your vision.
            </p>
          </motion.div>

          <div className="services-detailed-grid">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="service-card-detailed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-card-header">
                  <div className="service-icon-large">
                    {service.icon}
                  </div>
                  <span className="service-price">{service.price}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <HiCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/appointment" className="btn btn-outline btn-sm">
                  Book Now <HiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span className="section-label">How It Works</span>
            <h2>Your Journey to Better Vision</h2>
            <p>Our simple four-step process ensures you receive the best possible care.</p>
          </motion.div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="process-number">{step.number}</div>
                <div className="process-icon">
                  {step.icon}
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="insurance-section section">
        <div className="container">
          <div className="insurance-grid">
            <motion.div className="insurance-content" {...fadeIn}>
              <span className="section-label">Insurance & Payment</span>
              <h2>We Accept Most Insurance Plans</h2>
              <p>
                We work with a wide range of insurance providers to make quality eye care
                accessible and affordable. Our team will help verify your coverage and
                explain your benefits.
              </p>
              <ul className="insurance-list">
                <li><HiCheck /> Major medical insurance</li>
                <li><HiCheck /> Vision insurance plans</li>
                <li><HiCheck /> Medicare & Medicaid</li>
                <li><HiCheck /> Flexible payment options</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Verify Coverage <HiArrowRight />
              </Link>
            </motion.div>
            <motion.div className="insurance-image" {...fadeIn}>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=500&fit=crop"
                alt="Medical insurance"
                className="insurance-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <motion.div className="services-cta-content" {...fadeIn}>
            <h2>Ready to See the Difference?</h2>
            <p>Schedule your appointment today and take the first step toward better vision.</p>
            <Link to="/appointment" className="btn btn-primary btn-lg">
              Book Appointment <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
