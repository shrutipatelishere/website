import React, { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: 'fas fa-heartbeat',
      title: 'Cardiology',
      shortDesc: 'Heart & Cardiovascular Care',
      description: 'Comprehensive cardiac care including diagnostics, interventional procedures, and cardiac rehabilitation with the latest technology.',
      features: ['ECG & Echocardiography', 'Cardiac Catheterization', 'Pacemaker Implantation', 'Heart Failure Management'],
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop',
      color: '#ef4444'
    },
    {
      icon: 'fas fa-brain',
      title: 'Neurology',
      shortDesc: 'Brain & Nervous System',
      description: 'Expert neurological care for conditions affecting the brain, spine, and nervous system with advanced diagnostic tools.',
      features: ['EEG & EMG Testing', 'Stroke Treatment', 'Epilepsy Management', 'Movement Disorders'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
      color: '#8b5cf6'
    },
    {
      icon: 'fas fa-bone',
      title: 'Orthopedics',
      shortDesc: 'Bones & Joint Care',
      description: 'Complete musculoskeletal care including joint replacement, sports medicine, and spine surgery.',
      features: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery', 'Arthroscopy'],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
      color: '#f59e0b'
    },
    {
      icon: 'fas fa-baby',
      title: 'Pediatrics',
      shortDesc: 'Child Healthcare',
      description: 'Specialized care for infants, children, and adolescents with a child-friendly environment.',
      features: ['Well-Child Visits', 'Vaccinations', 'Development Screening', 'Pediatric Emergency'],
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop',
      color: '#10b981'
    },
    {
      icon: 'fas fa-eye',
      title: 'Ophthalmology',
      shortDesc: 'Eye Care & Surgery',
      description: 'Complete eye care services from routine exams to advanced surgical procedures.',
      features: ['LASIK Surgery', 'Cataract Treatment', 'Glaucoma Care', 'Retina Services'],
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=400&fit=crop',
      color: '#0ea5e9'
    },
    {
      icon: 'fas fa-tooth',
      title: 'Dental Care',
      shortDesc: 'Oral Health Services',
      description: 'Comprehensive dental services including preventive care, cosmetic dentistry, and oral surgery.',
      features: ['Teeth Whitening', 'Dental Implants', 'Orthodontics', 'Root Canal'],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
      color: '#ec4899'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <i className="fas fa-stethoscope"></i>
            Our Services
          </span>
          <h2>Comprehensive Medical Services</h2>
          <p>
            We offer a wide range of healthcare services with state-of-the-art
            facilities and expert medical professionals.
          </p>
        </div>

        <div className="services-container">
          <div className="services-nav">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-nav-item ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
                style={{ '--service-color': service.color }}
              >
                <div className="nav-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="nav-content">
                  <h4>{service.title}</h4>
                  <p>{service.shortDesc}</p>
                </div>
                <i className="fas fa-chevron-right nav-arrow"></i>
              </button>
            ))}
          </div>

          <div className="services-display">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-panel ${activeService === index ? 'active' : ''}`}
                style={{ '--service-color': service.color }}
              >
                <div className="panel-image">
                  <img src={service.image} alt={service.title} />
                  <div className="image-badge" style={{ background: service.color }}>
                    <i className={service.icon}></i>
                  </div>
                </div>
                <div className="panel-content">
                  <h3>{service.title}</h3>
                  <p className="panel-description">{service.description}</p>
                  <div className="panel-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-tag">
                        <i className="fas fa-check"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="panel-actions">
                    <button className="btn-learn-more" style={{ background: service.color }}>
                      Learn More
                      <i className="fas fa-arrow-right"></i>
                    </button>
                    <button className="btn-book">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards Grid for Mobile */}
        <div className="services-grid-mobile">
          {services.map((service, index) => (
            <div key={index} className="service-card-mobile" style={{ '--service-color': service.color }}>
              <div className="card-icon" style={{ background: `${service.color}15`, color: service.color }}>
                <i className={service.icon}></i>
              </div>
              <h4>{service.title}</h4>
              <p>{service.shortDesc}</p>
              <a href="#" className="card-link" style={{ color: service.color }}>
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
