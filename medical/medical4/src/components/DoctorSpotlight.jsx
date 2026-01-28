import React, { useState } from 'react';

const DoctorSpotlight = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredDoctor, setHoveredDoctor] = useState(null);

  const filters = [
    { id: 'all', label: 'All Specialists' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'neurology', label: 'Neurology' },
    { id: 'oncology', label: 'Oncology' },
    { id: 'orthopedics', label: 'Orthopedics' },
    { id: 'pediatrics', label: 'Pediatrics' },
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      title: 'Chief of Cardiology',
      specialty: 'cardiology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
      education: 'Harvard Medical School',
      experience: '25+ Years',
      surgeries: '5,000+',
      rating: 4.9,
      languages: ['English', 'Spanish'],
      awards: ['Best Cardiologist 2023', 'Research Excellence']
    },
    {
      id: 2,
      name: 'Dr. James Chen',
      title: 'Head of Neurosurgery',
      specialty: 'neurology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
      education: 'Johns Hopkins',
      experience: '20+ Years',
      surgeries: '3,500+',
      rating: 4.95,
      languages: ['English', 'Mandarin'],
      awards: ['Neurosurgery Pioneer', 'Innovation Award']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Oncology Director',
      specialty: 'oncology',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
      education: 'Stanford University',
      experience: '18+ Years',
      surgeries: '2,800+',
      rating: 4.88,
      languages: ['English', 'Portuguese'],
      awards: ['Cancer Research Award', 'Patient Care Excellence']
    },
    {
      id: 4,
      name: 'Dr. Michael Thompson',
      title: 'Orthopedic Surgeon',
      specialty: 'orthopedics',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
      education: 'Mayo Clinic',
      experience: '22+ Years',
      surgeries: '6,200+',
      rating: 4.92,
      languages: ['English', 'German'],
      awards: ['Sports Medicine Expert', 'Joint Replacement Pioneer']
    },
    {
      id: 5,
      name: 'Dr. Lisa Park',
      title: 'Pediatric Specialist',
      specialty: 'pediatrics',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop',
      education: 'Yale Medical School',
      experience: '15+ Years',
      surgeries: '2,100+',
      rating: 4.97,
      languages: ['English', 'Korean'],
      awards: ['Child Health Champion', 'Compassionate Care']
    },
    {
      id: 6,
      name: 'Dr. David Williams',
      title: 'Cardiac Surgeon',
      specialty: 'cardiology',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop',
      education: 'Columbia University',
      experience: '28+ Years',
      surgeries: '7,500+',
      rating: 4.94,
      languages: ['English', 'French'],
      awards: ['Lifetime Achievement', 'Heart Surgery Innovation']
    },
  ];

  const filteredDoctors = activeFilter === 'all'
    ? doctors
    : doctors.filter(d => d.specialty === activeFilter);

  return (
    <section id="doctors" className="doctor-spotlight">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">
            <i className="fas fa-user-doctor"></i>
            MEDICAL EXPERTS
          </span>
          <h2>Meet Our <span className="gradient-text">World-Renowned Specialists</span></h2>
          <p>Award-winning physicians dedicated to advancing medicine and patient care</p>
        </div>

        {/* Filter Tabs */}
        <div className="doctor-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`doctor-card ${hoveredDoctor === doctor.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredDoctor(doctor.id)}
              onMouseLeave={() => setHoveredDoctor(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
                <div className="doctor-overlay">
                  <div className="overlay-content">
                    <div className="doctor-stats">
                      <div className="doc-stat">
                        <span className="stat-val">{doctor.surgeries}</span>
                        <span className="stat-lbl">Procedures</span>
                      </div>
                      <div className="doc-stat">
                        <span className="stat-val">{doctor.experience}</span>
                        <span className="stat-lbl">Experience</span>
                      </div>
                    </div>
                    <div className="doctor-awards">
                      {doctor.awards.map((award, i) => (
                        <span key={i} className="award-badge">
                          <i className="fas fa-medal"></i>
                          {award}
                        </span>
                      ))}
                    </div>
                    <div className="doctor-actions">
                      <button className="doc-btn primary">Book Appointment</button>
                      <button className="doc-btn outline">View Profile</button>
                    </div>
                  </div>
                </div>
                <div className="rating-badge">
                  <i className="fas fa-star"></i>
                  <span>{doctor.rating}</span>
                </div>
              </div>

              <div className="doctor-info">
                <h4>{doctor.name}</h4>
                <span className="doctor-title">{doctor.title}</span>
                <div className="doctor-meta">
                  <span className="education">
                    <i className="fas fa-graduation-cap"></i>
                    {doctor.education}
                  </span>
                  <div className="languages">
                    {doctor.languages.map((lang, i) => (
                      <span key={i} className="lang-tag">{lang}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="doctors-cta">
          <a href="#all-doctors" className="btn-view-all">
            <span>View All 200+ Specialists</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctorSpotlight;
