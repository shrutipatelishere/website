import React from 'react';
import { Link } from 'react-router-dom';

const Academics = () => {
  const schools = [
    {
      name: 'School of Arts & Sciences',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
      programs: ['English Literature', 'History', 'Philosophy', 'Psychology', 'Biology', 'Chemistry', 'Physics', 'Mathematics'],
      dean: 'Dr. Robert Anderson'
    },
    {
      name: 'School of Business',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      programs: ['MBA', 'Finance', 'Marketing', 'Management', 'Accounting', 'Economics', 'Entrepreneurship'],
      dean: 'Dr. Jennifer Liu'
    },
    {
      name: 'School of Engineering',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      programs: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Biomedical Engineering'],
      dean: 'Dr. David Kim'
    },
    {
      name: 'School of Medicine',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      programs: ['Medicine (MD)', 'Nursing', 'Public Health', 'Biomedical Sciences', 'Pharmacy'],
      dean: 'Dr. Maria Santos'
    },
  ];

  const features = [
    { icon: 'fas fa-chalkboard-teacher', title: '850+ Faculty', desc: 'World-renowned educators' },
    { icon: 'fas fa-book-open', title: '200+ Programs', desc: 'Undergraduate & Graduate' },
    { icon: 'fas fa-flask', title: '$150M Research', desc: 'Annual funding' },
    { icon: 'fas fa-globe-americas', title: '120+ Partners', desc: 'Global universities' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&h=600&fit=crop" alt="Academics" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Academics</span>
            </div>
            <h1>Academic Excellence</h1>
            <p>World-class education across diverse disciplines</p>
          </div>
        </div>
      </section>

      {/* Academic Overview */}
      <section className="academic-overview">
        <div className="container">
          <div className="overview-grid">
            {features.map((feature, index) => (
              <div key={index} className="overview-item">
                <div className="overview-icon"><i className={feature.icon}></i></div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="schools">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Our Schools</span>
            <h2>Academic Divisions</h2>
            <p>Explore our comprehensive range of programs across four distinguished schools</p>
          </div>
        </div>
        <div className="schools-list">
          {schools.map((school, index) => (
            <div key={index} className={`school-block ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="school-image">
                <img src={school.image} alt={school.name} />
              </div>
              <div className="school-content">
                <h3>{school.name}</h3>
                <p className="school-dean">Dean: {school.dean}</p>
                <div className="school-programs">
                  <h5>Programs Offered:</h5>
                  <ul>
                    {school.programs.map((program, i) => (
                      <li key={i}><i className="fas fa-chevron-right"></i> {program}</li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="btn btn-burgundy">Explore School</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="research">
        <div className="research-bg">
          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&h=700&fit=crop" alt="Research" />
          <div className="research-overlay"></div>
        </div>
        <div className="container">
          <div className="research-content">
            <span className="section-label light">Research Excellence</span>
            <h2>Pioneering Discovery</h2>
            <p>Our faculty and students conduct groundbreaking research that addresses the world's most pressing challenges.</p>
            <div className="research-stats">
              <div className="rs-item">
                <span className="rs-num">50+</span>
                <span className="rs-label">Research Centers</span>
              </div>
              <div className="rs-item">
                <span className="rs-num">2,500+</span>
                <span className="rs-label">Annual Publications</span>
              </div>
              <div className="rs-item">
                <span className="rs-num">300+</span>
                <span className="rs-label">Patents Filed</span>
              </div>
            </div>
            <a href="#" className="btn btn-gold">Explore Research</a>
          </div>
        </div>
      </section>

      {/* Global Programs */}
      <section className="global-programs">
        <div className="container">
          <div className="global-grid">
            <div className="global-content">
              <span className="section-label">Global Reach</span>
              <h2>Study Abroad Programs</h2>
              <p>Expand your horizons with our extensive network of international partner universities. Experience different cultures, perspectives, and educational systems while earning credits toward your degree.</p>
              <ul className="global-features">
                <li><i className="fas fa-check"></i> 120+ partner universities worldwide</li>
                <li><i className="fas fa-check"></i> Semester and year-long programs</li>
                <li><i className="fas fa-check"></i> Scholarship opportunities available</li>
                <li><i className="fas fa-check"></i> Full academic credit transfer</li>
              </ul>
              <a href="#" className="btn btn-outline-navy">Learn More</a>
            </div>
            <div className="global-image">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=500&fit=crop" alt="Global" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academics;
