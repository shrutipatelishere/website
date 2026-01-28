import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiArrowRight,
  HiSearch,
  HiStar,
  HiHeart
} from 'react-icons/hi';
import { FaEye, FaUserMd, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Doctors.css';

const Doctors = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const doctors = [
    {
      id: 1,
      name: 'Martin',
      specialty: 'Ophthalmologist',
      department: 'general',
      featured: false,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Kullok Dash',
      specialty: 'Retina Specialist',
      department: 'retina',
      featured: true,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Shelly',
      specialty: 'Pediatric Care',
      department: 'pediatric',
      featured: false,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Andrew',
      specialty: 'Glaucoma Specialist',
      department: 'glaucoma',
      featured: false,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Dr. Sarah Kim',
      specialty: 'Cornea Specialist',
      department: 'cornea',
      featured: false,
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Dr. James Rodriguez',
      specialty: 'LASIK Surgeon',
      department: 'lasik',
      featured: true,
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 7,
      name: 'Dr. Emily Thompson',
      specialty: 'Oculoplastic Surgeon',
      department: 'general',
      featured: false,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 8,
      name: 'Dr. Michael Patel',
      specialty: 'Neuro-Ophthalmologist',
      department: 'neuro',
      featured: false,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 9,
      name: 'Dr. Lisa Chen',
      specialty: 'Cataract Surgeon',
      department: 'general',
      featured: false,
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 10,
      name: 'Dr. Robert Williams',
      specialty: 'Retina Specialist',
      department: 'retina',
      featured: true,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 11,
      name: 'Dr. Amanda Foster',
      specialty: 'Pediatric Eye Care',
      department: 'pediatric',
      featured: false,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 12,
      name: 'Dr. David Martinez',
      specialty: 'Glaucoma Expert',
      department: 'glaucoma',
      featured: false,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 13,
      name: 'Dr. Jennifer Lee',
      specialty: 'Cornea Transplant',
      department: 'cornea',
      featured: false,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 14,
      name: 'Dr. Kevin Brown',
      specialty: 'LASIK Specialist',
      department: 'lasik',
      featured: false,
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 15,
      name: 'Dr. Rachel Green',
      specialty: 'Vision Therapy',
      department: 'pediatric',
      featured: false,
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 16,
      name: 'Dr. Thomas Anderson',
      specialty: 'Neuro-Ophthalmology',
      department: 'neuro',
      featured: false,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face'
    },
  ];

  const departments = [
    { id: 'all', name: 'All Specialists' },
    { id: 'general', name: 'General' },
    { id: 'retina', name: 'Retina' },
    { id: 'glaucoma', name: 'Glaucoma' },
    { id: 'cornea', name: 'Cornea' },
    { id: 'lasik', name: 'LASIK' },
    { id: 'pediatric', name: 'Pediatric' },
    { id: 'neuro', name: 'Neuro' },
  ];

  const filteredDoctors = doctors.filter(doc => {
    const matchesFilter = filter === 'all' || doc.department === filter;
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.div
      className="doctors-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="doctors-hero">
        <div className="container">
          <motion.div
            className="doctors-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-badge">
              <FaUserMd /> Our Team
            </div>
            <h1>Meet our expert doctors</h1>
            <p>
              We aim to share information about our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Main Section */}
      <section className="doctors-main section">
        <div className="container">
          {/* Filters */}
          <div className="doctors-filters">
            <div className="search-box">
              <HiSearch />
              <input
                type="text"
                placeholder="Search doctors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-tabs">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  className={`filter-tab ${filter === dept.id ? 'active' : ''}`}
                  onClick={() => setFilter(dept.id)}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid - Matching Reference Design */}
          <motion.div
            className="doctors-grid"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            {filteredDoctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                className={`doctor-card ${doctor.featured ? 'featured' : ''}`}
                variants={fadeIn}
                layout
              >
                <div className="doctor-image-wrapper">
                  <div className={`doctor-image-circle ${doctor.featured ? 'featured-border' : ''}`}>
                    <img src={doctor.image} alt={doctor.name} className="doctor-avatar-img" />
                  </div>
                </div>
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <span className="doctor-specialty">{doctor.specialty}</span>
                  <div className="doctor-social">
                    <a href="#" className="social-btn">
                      <FaEye />
                    </a>
                    <a href="#" className="social-btn">
                      <HiStar />
                    </a>
                    <a href="#" className="social-btn">
                      <HiHeart />
                    </a>
                  </div>
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

      {/* Join Team Section */}
      <section className="join-section">
        <div className="container">
          <motion.div className="join-content" {...fadeIn}>
            <div className="join-text">
              <h2>Join Our Medical Team</h2>
              <p>
                We're always looking for talented ophthalmologists and eye care
                professionals to join our growing team.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Apply Now <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Doctors;
