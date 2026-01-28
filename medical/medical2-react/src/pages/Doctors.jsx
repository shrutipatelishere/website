import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiSearch, HiStar } from 'react-icons/hi';
import { FaUserMd, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Doctors.css';

const Doctors = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const doctors = [
    { id: 1, name: 'Dr. Richard Thompson', specialty: 'Cardiology', dept: 'cardiology', experience: '20+ Years', rating: 4.9, patients: '5000+', education: 'MD, Harvard Medical School' },
    { id: 2, name: 'Dr. Maria Santos', specialty: 'Neurology', dept: 'neurology', experience: '15+ Years', rating: 4.8, patients: '4200+', education: 'MD, Johns Hopkins University' },
    { id: 3, name: 'Dr. James Wilson', specialty: 'Orthopedics', dept: 'orthopedics', experience: '18+ Years', rating: 4.9, patients: '3800+', education: 'MD, Mayo Clinic' },
    { id: 4, name: 'Dr. Sarah Chen', specialty: 'Pediatrics', dept: 'pediatrics', experience: '12+ Years', rating: 5.0, patients: '6000+', education: 'MD, Stanford University' },
    { id: 5, name: 'Dr. Michael Brown', specialty: 'General Medicine', dept: 'general', experience: '16+ Years', rating: 4.8, patients: '4500+', education: 'MD, Yale University' },
    { id: 6, name: 'Dr. Emily Davis', specialty: 'Ophthalmology', dept: 'ophthalmology', experience: '14+ Years', rating: 4.7, patients: '3500+', education: 'MD, UCLA' },
    { id: 7, name: 'Dr. Robert Lee', specialty: 'Cardiology', dept: 'cardiology', experience: '22+ Years', rating: 4.9, patients: '5500+', education: 'MD, Columbia University' },
    { id: 8, name: 'Dr. Jennifer Adams', specialty: 'Pediatrics', dept: 'pediatrics', experience: '10+ Years', rating: 4.9, patients: '4000+', education: 'MD, Duke University' },
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'general', name: 'General Medicine' },
    { id: 'ophthalmology', name: 'Ophthalmology' },
  ];

  const filteredDoctors = doctors.filter(doc => {
    const matchesFilter = filter === 'all' || doc.dept === filter;
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) || doc.specialty.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.div className="doctors-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="page-header">
        <div className="container">
          <motion.div className="page-header-content" {...fadeIn}>
            <span className="section-label">Our Team</span>
            <h1>Meet Our Expert Doctors</h1>
            <p>Experienced physicians dedicated to providing exceptional patient care.</p>
          </motion.div>
        </div>
      </section>

      <section className="doctors-main section">
        <div className="container">
          {/* Filters */}
          <div className="doctors-filters">
            <div className="search-box">
              <HiSearch />
              <input type="text" placeholder="Search doctors..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="filter-tabs">
              {departments.map(dept => (
                <button key={dept.id} className={`filter-tab ${filter === dept.id ? 'active' : ''}`} onClick={() => setFilter(dept.id)}>
                  {dept.name}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <motion.div className="doctors-grid" initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
            {filteredDoctors.map((doctor) => (
              <motion.div key={doctor.id} className="doctor-card" variants={fadeIn} layout>
                <div className="doctor-image">
                  <FaUserMd />
                  <div className="doctor-social">
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaTwitter /></a>
                  </div>
                </div>
                <div className="doctor-info">
                  <div className="doctor-rating">
                    <HiStar /> {doctor.rating}
                  </div>
                  <h3>{doctor.name}</h3>
                  <span className="doctor-specialty">{doctor.specialty}</span>
                  <p className="doctor-education">{doctor.education}</p>
                  <div className="doctor-stats">
                    <div className="stat"><strong>{doctor.experience}</strong><span>Experience</span></div>
                    <div className="stat"><strong>{doctor.patients}</strong><span>Patients</span></div>
                  </div>
                  <Link to="/appointment" className="btn btn-primary btn-sm">Book Appointment</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredDoctors.length === 0 && (
            <div className="no-results">
              <FaUserMd />
              <h3>No doctors found</h3>
              <p>Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </section>

      <section className="join-section">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Medical Team</h2>
            <p>We're always looking for talented healthcare professionals to join our team.</p>
            <Link to="/contact" className="btn btn-white btn-lg">Apply Now <HiArrowRight /></Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Doctors;
