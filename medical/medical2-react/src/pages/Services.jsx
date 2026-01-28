import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCheck } from 'react-icons/hi';
import { FaHeartbeat, FaBrain, FaBone, FaChild, FaStethoscope, FaAmbulance, FaEye, FaTooth, FaLungs, FaAllergies, FaSyringe, FaXRay } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <FaHeartbeat />, title: 'Cardiology', desc: 'Complete heart care including diagnostics, treatment, and cardiac rehabilitation programs.', features: ['ECG & Echocardiography', 'Cardiac Catheterization', 'Pacemaker Services'] },
    { icon: <FaBrain />, title: 'Neurology', desc: 'Expert care for brain and nervous system disorders with advanced diagnostic capabilities.', features: ['EEG Testing', 'Stroke Management', 'Epilepsy Treatment'] },
    { icon: <FaBone />, title: 'Orthopedics', desc: 'Comprehensive bone and joint treatment including surgery and rehabilitation.', features: ['Joint Replacement', 'Sports Medicine', 'Spine Care'] },
    { icon: <FaChild />, title: 'Pediatrics', desc: 'Specialized healthcare for children from newborns to adolescents.', features: ['Well-Child Visits', 'Vaccinations', 'Developmental Screening'] },
    { icon: <FaStethoscope />, title: 'General Medicine', desc: 'Primary care services for adults including preventive health and chronic disease management.', features: ['Annual Checkups', 'Chronic Care', 'Preventive Services'] },
    { icon: <FaAmbulance />, title: 'Emergency Care', desc: '24/7 emergency medical services with rapid response teams.', features: ['24/7 Availability', 'Trauma Care', 'Critical Care'] },
    { icon: <FaEye />, title: 'Ophthalmology', desc: 'Complete eye care from routine exams to advanced surgical procedures.', features: ['Vision Testing', 'Cataract Surgery', 'Glaucoma Treatment'] },
    { icon: <FaTooth />, title: 'Dental Care', desc: 'Full spectrum dental services for the whole family.', features: ['Cleanings & Exams', 'Restorative Care', 'Cosmetic Dentistry'] },
    { icon: <FaLungs />, title: 'Pulmonology', desc: 'Expert care for respiratory conditions and lung diseases.', features: ['Pulmonary Testing', 'Asthma Management', 'Sleep Studies'] },
    { icon: <FaAllergies />, title: 'Dermatology', desc: 'Skin care services from medical to cosmetic treatments.', features: ['Skin Exams', 'Acne Treatment', 'Mole Removal'] },
    { icon: <FaSyringe />, title: 'Vaccinations', desc: 'Complete immunization services for all ages.', features: ['Child Vaccines', 'Travel Vaccines', 'Flu Shots'] },
    { icon: <FaXRay />, title: 'Diagnostics', desc: 'Advanced imaging and laboratory services.', features: ['X-Ray & MRI', 'CT Scans', 'Lab Testing'] },
  ];

  return (
    <motion.div className="services-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="page-header">
        <div className="container">
          <motion.div className="page-header-content" {...fadeIn}>
            <span className="section-label">Our Services</span>
            <h1>Comprehensive Medical Services</h1>
            <p>We offer a wide range of healthcare services to meet all your medical needs under one roof.</p>
          </motion.div>
        </div>
      </section>

      <section className="services-main section">
        <div className="container">
          <motion.div className="services-grid" initial="initial" whileInView="animate" viewport={{ once: true }} variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            {services.map((service, index) => (
              <motion.div key={index} className="service-card-detailed" variants={fadeIn}>
                <div className="service-icon-lg">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}><HiCheck /> {feature}</li>
                    ))}
                  </ul>
                  <Link to="/appointment" className="service-link">
                    Book Consultation <HiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Help Choosing a Service?</h2>
            <p>Our patient coordinators can help guide you to the right specialist.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white btn-lg">Contact Us</Link>
              <Link to="/appointment" className="btn btn-outline-white btn-lg">Book Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
