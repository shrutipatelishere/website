import React, { useState } from 'react';

const Doctors = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'];

  const doctors = [
    {
      name: 'Dr. Sarah Chen',
      specialty: 'Cardiology',
      title: 'Chief Cardiologist',
      experience: '15+ Years',
      rating: 4.9,
      patients: '5000+',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
      available: true
    },
    {
      name: 'Dr. Michael Brooks',
      specialty: 'Neurology',
      title: 'Senior Neurologist',
      experience: '12+ Years',
      rating: 4.8,
      patients: '3500+',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
      available: true
    },
    {
      name: 'Dr. Emily Watson',
      specialty: 'Pediatrics',
      title: 'Head of Pediatrics',
      experience: '10+ Years',
      rating: 4.9,
      patients: '4000+',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
      available: false
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      title: 'Orthopedic Surgeon',
      experience: '18+ Years',
      rating: 4.9,
      patients: '6000+',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
      available: true
    },
    {
      name: 'Dr. Lisa Anderson',
      specialty: 'Cardiology',
      title: 'Cardiac Surgeon',
      experience: '14+ Years',
      rating: 4.8,
      patients: '4500+',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop',
      available: true
    },
    {
      name: 'Dr. Robert Kim',
      specialty: 'Neurology',
      title: 'Neurosurgeon',
      experience: '20+ Years',
      rating: 4.9,
      patients: '7000+',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop',
      available: true
    }
  ];

  const filteredDoctors = activeFilter === 'All'
    ? doctors
    : doctors.filter(doc => doc.specialty === activeFilter);

  return (
    <section className="doctors" id="doctors">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <i className="fas fa-user-md"></i>
            Our Experts
          </span>
          <h2>Meet Our Specialist Doctors</h2>
          <p>
            Our team of experienced doctors is dedicated to providing the highest
            quality of care with expertise across various medical specialties.
          </p>
        </div>

        <div className="doctors-filters">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="doctors-grid">
          {filteredDoctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
                <div className="image-overlay">
                  <div className="overlay-actions">
                    <button className="action-btn">
                      <i className="fas fa-calendar-alt"></i>
                      Book Now
                    </button>
                    <button className="action-btn outline">
                      <i className="fas fa-info-circle"></i>
                      View Profile
                    </button>
                  </div>
                </div>
                {doctor.available && (
                  <span className="availability-badge">
                    <span className="dot"></span>
                    Available Today
                  </span>
                )}
              </div>
              <div className="doctor-info">
                <div className="info-header">
                  <div>
                    <h4>{doctor.name}</h4>
                    <p className="doctor-title">{doctor.title}</p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>{doctor.rating}</span>
                  </div>
                </div>
                <div className="info-meta">
                  <span className="meta-item">
                    <i className="fas fa-briefcase-medical"></i>
                    {doctor.experience}
                  </span>
                  <span className="meta-item">
                    <i className="fas fa-users"></i>
                    {doctor.patients} Patients
                  </span>
                </div>
                <div className="specialty-tag">{doctor.specialty}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="doctors-cta">
          <button className="btn-view-all">
            View All Doctors
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
