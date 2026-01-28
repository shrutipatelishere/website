import React, { useState } from 'react';

const VirtualTour = () => {
  const [activeArea, setActiveArea] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const areas = [
    {
      name: 'Main Lobby',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop',
      description: 'Welcome to our state-of-the-art medical center featuring a 24/7 reception, patient concierge services, and comfortable waiting areas.',
      features: ['24/7 Reception', 'Patient Concierge', 'Digital Check-in', 'Valet Parking'],
      sqft: '15,000 sq ft',
      capacity: '500 visitors/day'
    },
    {
      name: 'Operating Theaters',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=500&fit=crop',
      description: '32 fully-equipped operating rooms with robotic surgery capabilities, hybrid OR suites, and real-time imaging integration.',
      features: ['Robotic Surgery', 'Hybrid OR', '4K Imaging', 'Laminar Flow'],
      sqft: '45,000 sq ft',
      capacity: '120 surgeries/day'
    },
    {
      name: 'ICU & Critical Care',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop',
      description: 'Advanced intensive care units with continuous monitoring, isolation capabilities, and specialized cardiac and neuro ICUs.',
      features: ['24/7 Monitoring', 'Isolation Rooms', 'ECMO Support', 'Telemedicine'],
      sqft: '28,000 sq ft',
      capacity: '150 ICU beds'
    },
    {
      name: 'Diagnostic Center',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=500&fit=crop',
      description: 'Comprehensive diagnostic imaging with 3T MRI, PET-CT, digital X-ray, and advanced ultrasound capabilities.',
      features: ['3T MRI', 'PET-CT Scan', '64-Slice CT', 'Digital Mammo'],
      sqft: '20,000 sq ft',
      capacity: '400 scans/day'
    },
    {
      name: 'Patient Suites',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=500&fit=crop',
      description: 'Private luxury suites with hotel-quality amenities, family accommodation, and personalized nursing care.',
      features: ['Private Rooms', 'Smart TV/WiFi', 'Family Suite', 'Room Service'],
      sqft: '120,000 sq ft',
      capacity: '600 beds'
    },
    {
      name: 'Research Labs',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop',
      description: 'Cutting-edge research facilities for clinical trials, genomic medicine, and breakthrough medical discoveries.',
      features: ['Genomic Lab', 'Clinical Trials', 'Stem Cell', 'AI Research'],
      sqft: '35,000 sq ft',
      capacity: '200 researchers'
    },
  ];

  return (
    <section id="facilities" className="virtual-tour">
      <div className="tour-background">
        {areas.map((area, index) => (
          <div
            key={index}
            className={`tour-bg-image ${index === activeArea ? 'active' : ''}`}
            style={{ backgroundImage: `url(${area.image})` }}
          />
        ))}
        <div className="tour-overlay" />
      </div>

      <div className="container">
        <div className="tour-header">
          <span className="section-tag">
            <i className="fas fa-vr-cardboard"></i>
            VIRTUAL EXPERIENCE
          </span>
          <h2>Explore Our <span className="gradient-text">World-Class Facilities</span></h2>
          <p>Take a virtual journey through our 1.2 million sq ft medical campus</p>
        </div>

        <div className="tour-container">
          {/* Area Selector */}
          <div className="tour-selector">
            {areas.map((area, index) => (
              <button
                key={index}
                className={`tour-area-btn ${index === activeArea ? 'active' : ''}`}
                onClick={() => setActiveArea(index)}
              >
                <span className="area-number">0{index + 1}</span>
                <span className="area-name">{area.name}</span>
                <div className="area-progress">
                  <div className="progress-fill" style={{ width: index === activeArea ? '100%' : '0%' }}></div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Display */}
          <div className="tour-display">
            <div className="display-content">
              {areas.map((area, index) => (
                <div key={index} className={`area-content ${index === activeArea ? 'active' : ''}`}>
                  <div className="area-header">
                    <h3>{area.name}</h3>
                    <div className="area-meta">
                      <span><i className="fas fa-expand"></i> {area.sqft}</span>
                      <span><i className="fas fa-users"></i> {area.capacity}</span>
                    </div>
                  </div>
                  <p>{area.description}</p>
                  <div className="area-features">
                    {area.features.map((feature, fIndex) => (
                      <span key={fIndex} className="feature-tag">
                        <i className="fas fa-check"></i>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="tour-controls">
                <button
                  className="tour-btn prev"
                  onClick={() => setActiveArea((prev) => (prev - 1 + areas.length) % areas.length)}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  className={`tour-btn play ${isPlaying ? 'playing' : ''}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </button>
                <button
                  className="tour-btn next"
                  onClick={() => setActiveArea((prev) => (prev + 1) % areas.length)}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* 360 Indicator */}
            <div className="tour-360-badge">
              <i className="fas fa-sync-alt"></i>
              <span>360° Tour Available</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="facility-stats">
          <div className="fstat">
            <span className="fstat-value">1.2M</span>
            <span className="fstat-label">Square Feet</span>
          </div>
          <div className="fstat">
            <span className="fstat-value">32</span>
            <span className="fstat-label">Operating Rooms</span>
          </div>
          <div className="fstat">
            <span className="fstat-value">600+</span>
            <span className="fstat-label">Patient Beds</span>
          </div>
          <div className="fstat">
            <span className="fstat-value">150</span>
            <span className="fstat-label">ICU Beds</span>
          </div>
          <div className="fstat">
            <span className="fstat-value">50+</span>
            <span className="fstat-label">Specialties</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
