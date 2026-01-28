import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    { icon: 'fas fa-lightbulb', title: 'Innovation', desc: 'Pioneering new frontiers in research and education' },
    { icon: 'fas fa-handshake', title: 'Integrity', desc: 'Upholding the highest ethical standards' },
    { icon: 'fas fa-users', title: 'Inclusivity', desc: 'Embracing diversity in all its forms' },
    { icon: 'fas fa-globe', title: 'Global Impact', desc: 'Making a difference worldwide' },
  ];

  const milestones = [
    { year: '1892', title: 'Foundation', desc: 'University established by visionary educators' },
    { year: '1925', title: 'First Graduate School', desc: 'Expanded to offer advanced degrees' },
    { year: '1960', title: 'Research Institute', desc: 'Established world-class research facilities' },
    { year: '1985', title: 'Global Expansion', desc: 'Opened international campuses' },
    { year: '2010', title: 'Innovation Hub', desc: 'Launched technology incubator' },
    { year: '2024', title: 'New Era', desc: 'State-of-the-art campus expansion' },
  ];

  const leadership = [
    { name: 'Dr. Elizabeth Warren', role: 'President', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
    { name: 'Dr. James Morrison', role: 'Provost', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
    { name: 'Dr. Sarah Chen', role: 'Dean of Academics', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' },
    { name: 'Dr. Michael Adams', role: 'Dean of Research', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=600&fit=crop" alt="About Us" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
            <h1>About Prestige University</h1>
            <p>A legacy of excellence, innovation, and global impact since 1892</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Our Story</span>
              <h2>A Tradition of Excellence</h2>
              <p className="lead">For over 130 years, Prestige University has been at the forefront of higher education, nurturing generations of leaders, innovators, and changemakers.</p>
              <p>Founded in 1892 by a group of visionary educators, our university began with a simple yet powerful mission: to provide world-class education that transforms lives and advances society. What started as a small college with just 50 students has grown into a globally recognized institution with over 15,000 students from more than 50 countries.</p>
              <p>Today, we continue to build on our rich heritage while embracing innovation and looking toward the future. Our commitment to academic excellence, groundbreaking research, and community engagement remains as strong as ever.</p>
            </div>
            <div className="story-images">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" alt="Campus" className="story-img-1" />
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop" alt="Historic" className="story-img-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-block">
          <div className="mv-image">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop" alt="Mission" />
          </div>
          <div className="mv-content">
            <span className="section-label light">Our Mission</span>
            <h2>Empowering Future Leaders</h2>
            <p>To provide transformative education that develops intellectual curiosity, critical thinking, and a commitment to ethical leadership, preparing students to address complex global challenges and make meaningful contributions to society.</p>
          </div>
        </div>
        <div className="vision-block">
          <div className="mv-content">
            <span className="section-label">Our Vision</span>
            <h2>Shaping Tomorrow's World</h2>
            <p>To be recognized globally as a premier institution of higher learning, known for academic excellence, groundbreaking research, and graduates who lead positive change in their communities and around the world.</p>
          </div>
          <div className="mv-image">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop" alt="Vision" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Our Core Values</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon"><i className={value.icon}></i></div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="timeline-bg">
          <img src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=1920&h=800&fit=crop" alt="History" />
          <div className="timeline-overlay"></div>
        </div>
        <div className="container">
          <div className="section-intro light">
            <span className="section-label light">Our Journey</span>
            <h2>Milestones in Excellence</h2>
          </div>
          <div className="timeline-grid">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Leadership</span>
            <h2>Guiding Our Future</h2>
            <p>Meet the visionary leaders steering Prestige University toward continued excellence</p>
          </div>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <h4>{leader.name}</h4>
                <p>{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-num">130+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">15,000+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">200,000+</span>
              <span className="stat-label">Alumni Worldwide</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">Top 50</span>
              <span className="stat-label">Global Ranking</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
