import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaBrain, FaBone, FaEye, FaTooth, FaBaby, FaUserMd, FaHospital, FaAmbulance, FaAward, FaCheckCircle, FaQuoteLeft, FaStar, FaArrowRight } from 'react-icons/fa';
import { FiPhone, FiCalendar, FiUsers, FiActivity } from 'react-icons/fi';
import './Home.css';

const Home = () => {
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
    { icon: <FaHeartbeat />, title: 'Cardiology', desc: 'Expert heart care with advanced diagnostic and treatment options.' },
    { icon: <FaBrain />, title: 'Neurology', desc: 'Comprehensive care for neurological disorders.' },
    { icon: <FaBone />, title: 'Orthopedics', desc: 'Complete bone and joint care from diagnosis to recovery.' },
    { icon: <FaEye />, title: 'Ophthalmology', desc: 'Advanced eye care services including surgeries.' },
    { icon: <FaTooth />, title: 'Dental Care', desc: 'Complete dental services from routine checkups.' },
    { icon: <FaBaby />, title: 'Pediatrics', desc: 'Specialized healthcare for children with compassion.' },
  ];

  const stats = [
    { icon: <FiUsers />, number: '500+', label: 'Expert Doctors' },
    { icon: <FaHospital />, number: '50+', label: 'Clinic Locations' },
    { icon: <FiActivity />, number: '20k+', label: 'Happy Patients' },
    { icon: <FaAward />, number: '100+', label: 'Awards Won' },
  ];

  const doctors = [
    { name: 'Dr. John Smith', specialty: 'Cardiologist', image: '👨‍⚕️' },
    { name: 'Dr. Sarah Johnson', specialty: 'Neurologist', image: '👩‍⚕️' },
    { name: 'Dr. Michael Brown', specialty: 'Orthopedic Surgeon', image: '👨‍⚕️' },
    { name: 'Dr. Emily Davis', specialty: 'Pediatrician', image: '👩‍⚕️' },
  ];

  const testimonials = [
    {
      name: 'Robert Wilson',
      role: 'Patient',
      text: 'The care I received at MediCare was exceptional. The doctors were professional and the staff was incredibly supportive throughout my treatment.',
      rating: 5
    },
    {
      name: 'Jennifer Adams',
      role: 'Patient',
      text: 'I am grateful for the excellent medical care and attention. The facility is modern and the team made me feel comfortable at every step.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Patient',
      text: 'Outstanding healthcare services! The doctors took time to explain everything and ensured I understood my treatment plan completely.',
      rating: 5
    },
  ];

  return (
    <motion.div
      className="home"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.span className="hero-badge" variants={fadeInUp}>
                Welcome to MediCare
              </motion.span>
              <motion.h1 variants={fadeInUp}>
                Your Health Is Our <span className="highlight">Top Priority</span>
              </motion.h1>
              <motion.p variants={fadeInUp}>
                We provide comprehensive healthcare services with a team of experienced
                doctors and state-of-the-art medical equipment. Your wellness journey
                starts here with personalized care and attention.
              </motion.p>
              <motion.div className="hero-buttons" variants={fadeInUp}>
                <Link to="/appointment" className="btn btn-primary">
                  <FiCalendar /> Book Appointment
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Our Services <FaArrowRight />
                </Link>
              </motion.div>
              <motion.div className="hero-contact" variants={fadeInUp}>
                <FiPhone className="phone-icon" />
                <div>
                  <span>Emergency Call</span>
                  <strong>+1 (555) 123-4567</strong>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-image-wrapper">
                <div className="doctor-illustration">
                  <FaUserMd className="doctor-icon" />
                </div>
                <div className="floating-card card-1">
                  <FaHeartbeat className="card-icon" />
                  <span>24/7 Care</span>
                </div>
                <div className="floating-card card-2">
                  <FaAmbulance className="card-icon" />
                  <span>Emergency</span>
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
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <div className="about-illustration">
                  <FaHospital className="hospital-icon" />
                </div>
                <div className="experience-badge">
                  <span className="years">30+</span>
                  <span className="text">Years Experience</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">About Us</span>
              <h2>We Are Committed to <span className="highlight">Your Health</span></h2>
              <p>
                MediCare has been providing exceptional healthcare services for over three
                decades. Our commitment to excellence, combined with cutting-edge technology
                and compassionate care, makes us the preferred choice for patients seeking
                quality medical treatment.
              </p>
              <div className="about-features">
                <div className="feature">
                  <FaCheckCircle />
                  <span>Board Certified Doctors</span>
                </div>
                <div className="feature">
                  <FaCheckCircle />
                  <span>Modern Medical Equipment</span>
                </div>
                <div className="feature">
                  <FaCheckCircle />
                  <span>24/7 Emergency Services</span>
                </div>
                <div className="feature">
                  <FaCheckCircle />
                  <span>Affordable Healthcare</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Services</span>
            <h2>We Offer <span className="highlight">Different Services</span></h2>
            <p>Comprehensive healthcare services tailored to meet all your medical needs</p>
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
                <Link to="/services" className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Doctors</span>
            <h2>Meet Our <span className="highlight">Expert Doctors</span></h2>
            <p>Experienced professionals dedicated to providing the best healthcare</p>
          </motion.div>
          <motion.div
            className="doctors-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                className="doctor-card"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="doctor-image">
                  <span className="doctor-emoji">{doctor.image}</span>
                </div>
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="specialty">{doctor.specialty}</p>
                  <div className="doctor-social">
                    <a href="#">𝕏</a>
                    <a href="#">in</a>
                    <a href="#">f</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="doctors-cta">
            <Link to="/doctors" className="btn btn-primary">
              View All Doctors <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Book an appointment with our expert doctors today and take the first step towards better health.</p>
            <div className="cta-buttons">
              <Link to="/appointment" className="btn btn-white">
                <FiCalendar /> Book Appointment
              </Link>
              <a href="tel:+15551234567" className="btn btn-outline-white">
                <FiPhone /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Testimonials</span>
            <h2>What Our <span className="highlight">Patients Say</span></h2>
            <p>Real stories from our valued patients about their experience</p>
          </motion.div>
          <motion.div
            className="testimonials-grid"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
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
