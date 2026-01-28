import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserMd, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGraduationCap, FaAward, FaClock, FaArrowRight, FaSearch } from 'react-icons/fa';
import './Doctors.css';

const Doctors = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  const doctors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      specialty: 'Cardiology',
      department: 'cardiology',
      experience: '15+ Years',
      education: 'MD, Harvard Medical School',
      rating: 4.9,
      image: '👨‍⚕️',
      available: 'Mon - Fri'
    },
    {
      id: 2,
      name: 'Dr. Sarah Johnson',
      specialty: 'Neurology',
      department: 'neurology',
      experience: '12+ Years',
      education: 'MD, Stanford University',
      rating: 4.8,
      image: '👩‍⚕️',
      available: 'Tue - Sat'
    },
    {
      id: 3,
      name: 'Dr. Michael Brown',
      specialty: 'Orthopedic Surgery',
      department: 'orthopedics',
      experience: '18+ Years',
      education: 'MD, Johns Hopkins',
      rating: 4.9,
      image: '👨‍⚕️',
      available: 'Mon - Fri'
    },
    {
      id: 4,
      name: 'Dr. Emily Davis',
      specialty: 'Pediatrics',
      department: 'pediatrics',
      experience: '10+ Years',
      education: 'MD, Yale University',
      rating: 4.9,
      image: '👩‍⚕️',
      available: 'Mon - Sat'
    },
    {
      id: 5,
      name: 'Dr. Robert Wilson',
      specialty: 'Dermatology',
      department: 'dermatology',
      experience: '14+ Years',
      education: 'MD, UCLA',
      rating: 4.7,
      image: '👨‍⚕️',
      available: 'Wed - Sun'
    },
    {
      id: 6,
      name: 'Dr. Jennifer Lee',
      specialty: 'Ophthalmology',
      department: 'ophthalmology',
      experience: '11+ Years',
      education: 'MD, Columbia University',
      rating: 4.8,
      image: '👩‍⚕️',
      available: 'Mon - Fri'
    },
    {
      id: 7,
      name: 'Dr. David Martinez',
      specialty: 'Cardiology',
      department: 'cardiology',
      experience: '20+ Years',
      education: 'MD, Mayo Clinic',
      rating: 4.9,
      image: '👨‍⚕️',
      available: 'Tue - Sat'
    },
    {
      id: 8,
      name: 'Dr. Amanda Thompson',
      specialty: 'Neurology',
      department: 'neurology',
      experience: '9+ Years',
      education: 'MD, Duke University',
      rating: 4.7,
      image: '👩‍⚕️',
      available: 'Mon - Fri'
    },
    {
      id: 9,
      name: 'Dr. James Anderson',
      specialty: 'General Medicine',
      department: 'general',
      experience: '16+ Years',
      education: 'MD, University of Michigan',
      rating: 4.8,
      image: '👨‍⚕️',
      available: 'Mon - Sat'
    },
    {
      id: 10,
      name: 'Dr. Lisa Chen',
      specialty: 'Pediatrics',
      department: 'pediatrics',
      experience: '8+ Years',
      education: 'MD, University of Pennsylvania',
      rating: 4.9,
      image: '👩‍⚕️',
      available: 'Tue - Fri'
    },
    {
      id: 11,
      name: 'Dr. Mark Taylor',
      specialty: 'Orthopedic Surgery',
      department: 'orthopedics',
      experience: '13+ Years',
      education: 'MD, Northwestern University',
      rating: 4.8,
      image: '👨‍⚕️',
      available: 'Mon - Fri'
    },
    {
      id: 12,
      name: 'Dr. Rachel Green',
      specialty: 'Dermatology',
      department: 'dermatology',
      experience: '7+ Years',
      education: 'MD, Boston University',
      rating: 4.7,
      image: '👩‍⚕️',
      available: 'Wed - Sun'
    },
  ];

  const departments = [
    { id: 'all', name: 'All Doctors' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'dermatology', name: 'Dermatology' },
    { id: 'ophthalmology', name: 'Ophthalmology' },
    { id: 'general', name: 'General Medicine' },
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesFilter = activeFilter === 'all' || doctor.department === activeFilter;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.div
      className="doctors-page"
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
            <h1>Our Doctors</h1>
            <p>Meet our team of experienced and dedicated medical professionals</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Doctors</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors-main">
        <div className="container">
          {/* Search and Filter */}
          <motion.div
            className="doctors-filter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="search-box">
              <FaSearch />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-tabs">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  className={`filter-tab ${activeFilter === dept.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(dept.id)}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Doctors Grid */}
          <motion.div
            className="doctors-grid"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  className="doctor-card"
                  variants={fadeInUp}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="doctor-image">
                    <span className="doctor-emoji">{doctor.image}</span>
                    <div className="doctor-rating">
                      <span>⭐ {doctor.rating}</span>
                    </div>
                  </div>
                  <div className="doctor-info">
                    <h3>{doctor.name}</h3>
                    <p className="specialty">{doctor.specialty}</p>
                    <div className="doctor-details">
                      <div className="detail">
                        <FaGraduationCap />
                        <span>{doctor.education}</span>
                      </div>
                      <div className="detail">
                        <FaAward />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="detail">
                        <FaClock />
                        <span>{doctor.available}</span>
                      </div>
                    </div>
                    <div className="doctor-actions">
                      <Link to="/appointment" className="btn btn-primary btn-sm">
                        Book Appointment
                      </Link>
                      <div className="doctor-social">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredDoctors.length === 0 && (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FaUserMd />
              <h3>No doctors found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="join-team">
        <div className="container">
          <motion.div
            className="join-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="join-text">
              <h2>Join Our Medical Team</h2>
              <p>Are you a medical professional looking to make a difference? Join MediCare and be part of our mission to provide exceptional healthcare.</p>
            </div>
            <Link to="/contact" className="btn btn-white">
              Apply Now <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Doctors;
