import React, { useState } from 'react';

const DepartmentExplorer = () => {
  const [activeDept, setActiveDept] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      icon: 'fa-heart-pulse',
      color: '#ef4444',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
      description: 'Advanced cardiovascular care with state-of-the-art catheterization labs and heart failure programs.',
      stats: { surgeries: '2,500+', success: '99.2%', specialists: 24 },
      services: ['Heart Surgery', 'Angioplasty', 'Pacemaker Implant', 'Cardiac Rehab', 'ECG/Echo']
    },
    {
      id: 'neurology',
      name: 'Neurology',
      icon: 'fa-brain',
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      description: 'Comprehensive neurological services including stroke care, epilepsy treatment, and brain tumor surgery.',
      stats: { surgeries: '1,800+', success: '98.5%', specialists: 18 },
      services: ['Brain Surgery', 'Stroke Center', 'Epilepsy Care', 'Movement Disorders', 'Neuro Rehab']
    },
    {
      id: 'oncology',
      name: 'Oncology',
      icon: 'fa-ribbon',
      color: '#f59e0b',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop',
      description: 'Leading cancer care with precision medicine, immunotherapy, and personalized treatment protocols.',
      stats: { patients: '10,000+', trials: 45, specialists: 32 },
      services: ['Chemotherapy', 'Radiation', 'Immunotherapy', 'Surgical Oncology', 'Clinical Trials']
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      icon: 'fa-bone',
      color: '#06b6d4',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
      description: 'Expert musculoskeletal care from sports medicine to complex joint replacements and spine surgery.',
      stats: { surgeries: '5,000+', success: '99.5%', specialists: 28 },
      services: ['Joint Replacement', 'Spine Surgery', 'Sports Medicine', 'Trauma Care', 'Physical Therapy']
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      icon: 'fa-baby',
      color: '#10b981',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&h=400&fit=crop',
      description: 'Dedicated children\'s hospital providing specialized care for newborns through adolescents.',
      stats: { patients: '15,000+', specialists: 42, beds: 120 },
      services: ['NICU', 'Pediatric Surgery', 'Child Neurology', 'Pediatric Cardiology', 'Adolescent Care']
    },
    {
      id: 'emergency',
      name: 'Emergency',
      icon: 'fa-truck-medical',
      color: '#dc2626',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop',
      description: 'Level 1 Trauma Center with 24/7 emergency services and rapid response teams.',
      stats: { daily: '200+', response: '< 5 min', beds: 60 },
      services: ['Trauma Care', 'Critical Care', 'Stroke Response', 'Cardiac Emergency', 'Pediatric ER']
    },
  ];

  return (
    <section id="departments" className="department-explorer">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-hospital"></i>
            MEDICAL EXCELLENCE
          </span>
          <h2>Explore Our <span className="gradient-text">Departments</span></h2>
          <p>World-class specialized care across multiple disciplines, powered by innovation and expertise</p>
        </div>

        <div className="explorer-container">
          {/* Department Tabs */}
          <div className="dept-tabs">
            {departments.map((dept, index) => (
              <button
                key={dept.id}
                className={`dept-tab ${index === activeDept ? 'active' : ''}`}
                onClick={() => setActiveDept(index)}
                style={{ '--dept-color': dept.color }}
              >
                <div className="tab-icon">
                  <i className={`fas ${dept.icon}`}></i>
                </div>
                <span className="tab-name">{dept.name}</span>
                <div className="tab-indicator"></div>
              </button>
            ))}
          </div>

          {/* Department Content */}
          <div className="dept-content">
            {departments.map((dept, index) => (
              <div
                key={dept.id}
                className={`dept-panel ${index === activeDept ? 'active' : ''}`}
                style={{ '--dept-color': dept.color }}
              >
                <div className="panel-grid">
                  <div className="panel-image">
                    <img src={dept.image} alt={dept.name} />
                    <div className="image-overlay">
                      <div className="overlay-stats">
                        {Object.entries(dept.stats).map(([key, value]) => (
                          <div key={key} className="overlay-stat">
                            <span className="stat-value">{value}</span>
                            <span className="stat-key">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="panel-info">
                    <div className="info-header">
                      <div className="dept-icon" style={{ background: dept.color }}>
                        <i className={`fas ${dept.icon}`}></i>
                      </div>
                      <div>
                        <h3>{dept.name} Department</h3>
                        <span className="dept-rank">Top 10 Nationally Ranked</span>
                      </div>
                    </div>

                    <p className="dept-description">{dept.description}</p>

                    <div className="services-grid">
                      {dept.services.map((service, sIndex) => (
                        <div
                          key={sIndex}
                          className={`service-chip ${hoveredService === `${index}-${sIndex}` ? 'hovered' : ''}`}
                          onMouseEnter={() => setHoveredService(`${index}-${sIndex}`)}
                          onMouseLeave={() => setHoveredService(null)}
                        >
                          <i className="fas fa-check-circle"></i>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>

                    <div className="panel-actions">
                      <a href={`#${dept.id}`} className="btn-dept-primary" style={{ background: dept.color }}>
                        <span>Explore Department</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                      <a href="#doctors" className="btn-dept-outline" style={{ color: dept.color, borderColor: dept.color }}>
                        <span>View Specialists</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentExplorer;
