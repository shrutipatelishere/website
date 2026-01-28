import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaBrain, FaBone, FaEye, FaTooth, FaBaby, FaLungs, FaAllergies, FaUserMd, FaStethoscope, FaSyringe, FaXRay, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { GiKidneys, GiStomach } from 'react-icons/gi';
import './Services.css';

const Services = () => {
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

  const services = [
    {
      icon: <FaHeartbeat />,
      title: 'Cardiology',
      desc: 'Comprehensive heart care including diagnostics, treatment, and rehabilitation for all cardiac conditions.',
      features: ['ECG & Echo', 'Angiography', 'Cardiac Surgery', 'Rehabilitation']
    },
    {
      icon: <FaBrain />,
      title: 'Neurology',
      desc: 'Expert care for neurological disorders including stroke, epilepsy, and movement disorders.',
      features: ['EEG Testing', 'Stroke Care', 'Spine Treatment', 'Rehabilitation']
    },
    {
      icon: <FaBone />,
      title: 'Orthopedics',
      desc: 'Complete bone and joint care from diagnosis to surgical treatment and physical therapy.',
      features: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Trauma Care']
    },
    {
      icon: <FaEye />,
      title: 'Ophthalmology',
      desc: 'Advanced eye care services including laser treatments, cataract surgery, and vision correction.',
      features: ['LASIK Surgery', 'Cataract Treatment', 'Retina Care', 'Glaucoma']
    },
    {
      icon: <FaTooth />,
      title: 'Dental Care',
      desc: 'Complete dental services from routine checkups to cosmetic dentistry and oral surgery.',
      features: ['Implants', 'Orthodontics', 'Cosmetic Dentistry', 'Oral Surgery']
    },
    {
      icon: <FaBaby />,
      title: 'Pediatrics',
      desc: 'Specialized healthcare for children with compassionate and child-friendly care.',
      features: ['Vaccinations', 'Growth Monitoring', 'Developmental Care', 'Emergency']
    },
    {
      icon: <FaLungs />,
      title: 'Pulmonology',
      desc: 'Expert care for respiratory conditions including asthma, COPD, and lung diseases.',
      features: ['Breathing Tests', 'Sleep Studies', 'Bronchoscopy', 'Allergy Testing']
    },
    {
      icon: <GiKidneys />,
      title: 'Nephrology',
      desc: 'Comprehensive kidney care including dialysis and kidney transplant services.',
      features: ['Dialysis', 'Transplant', 'Stone Treatment', 'Kidney Biopsy']
    },
    {
      icon: <GiStomach />,
      title: 'Gastroenterology',
      desc: 'Complete digestive system care including endoscopy and liver disease treatment.',
      features: ['Endoscopy', 'Colonoscopy', 'Liver Care', 'IBD Treatment']
    },
    {
      icon: <FaAllergies />,
      title: 'Dermatology',
      desc: 'Expert skin care services including cosmetic treatments and skin disease management.',
      features: ['Acne Treatment', 'Skin Cancer', 'Cosmetic Care', 'Laser Treatment']
    },
    {
      icon: <FaUserMd />,
      title: 'General Medicine',
      desc: 'Comprehensive primary care for adults including preventive health and chronic disease management.',
      features: ['Health Checkups', 'Chronic Care', 'Preventive Care', 'Consultations']
    },
    {
      icon: <FaSyringe />,
      title: 'Vaccination',
      desc: 'Complete vaccination services for children and adults including travel vaccines.',
      features: ['Child Vaccines', 'Adult Vaccines', 'Travel Vaccines', 'Flu Shots']
    },
  ];

  const highlights = [
    { icon: <FaStethoscope />, title: '500+ Doctors', desc: 'Expert specialists' },
    { icon: <FaXRay />, title: 'Advanced Tech', desc: 'Modern equipment' },
    { icon: <FaUserMd />, title: '24/7 Care', desc: 'Emergency services' },
    { icon: <FaCheckCircle />, title: 'Accredited', desc: 'Quality certified' },
  ];

  return (
    <motion.div
      className="services-page"
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
            <h1>Our Services</h1>
            <p>Comprehensive healthcare services tailored to meet all your medical needs</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="highlights-bar">
        <div className="container">
          <motion.div
            className="highlights-grid"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} className="highlight-item" variants={fadeInUp}>
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">What We Offer</span>
            <h2>Our Medical <span className="highlight">Departments</span></h2>
            <p>We offer a wide range of medical services to meet all your healthcare needs</p>
          </motion.div>
          <motion.div
            className="services-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/appointment" className="service-link">
                  Book Now <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="cta-text">
              <h2>Need a Specific Service?</h2>
              <p>Contact us to learn more about our specialized treatments and healthcare packages.</p>
            </div>
            <div className="cta-buttons">
              <Link to="/appointment" className="btn btn-white">
                Book Appointment
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
