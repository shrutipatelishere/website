import React from 'react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. James Lee, MD',
      specialty: 'Head of Cardiology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
      rating: 4.9,
      experience: '15+ Years',
    },
    {
      name: 'Dr. John Smith, MD',
      specialty: 'Neurologist',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop',
      rating: 4.8,
      experience: '12+ Years',
    },
    {
      name: 'Dr. Susan Bones, MD',
      specialty: 'Pediatrician',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
      rating: 5.0,
      experience: '10+ Years',
    },
    {
      name: 'Dr. Sarah Patel, MD',
      specialty: 'Dermatologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
      rating: 4.9,
      experience: '8+ Years',
    },
    {
      name: 'Dr. David Nguyen, MD',
      specialty: 'Orthopedic Surgeon',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop',
      rating: 4.7,
      experience: '20+ Years',
    },
    {
      name: 'Dr. Karen Lee, MD',
      specialty: 'Oncologist',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop',
      rating: 4.8,
      experience: '14+ Years',
    },
  ];

  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Meet Our Team</span>
          <h2 className="section-title">
            Our <span className="text-primary">Expert Doctors</span>
          </h2>
          <p className="section-desc">
            Our doctors are leaders in their respective fields, committed to providing the highest quality care.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
                <div className="doctor-social">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="doctor-info">
                <h4>{doctor.name}</h4>
                <span className="doctor-specialty">{doctor.specialty}</span>
                <div className="doctor-meta">
                  <div className="doctor-rating">
                    <i className="fas fa-star"></i>
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="doctor-experience">
                    <i className="fas fa-briefcase-medical"></i>
                    <span>{doctor.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="doctors-cta">
          <a href="#appointment" className="btn btn-primary">
            Book an Appointment
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
