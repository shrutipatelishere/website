import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const programs = [
    {
      name: 'Arts & Humanities',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      count: '24 Programs'
    },
    {
      name: 'Business & Economics',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      count: '18 Programs'
    },
    {
      name: 'Engineering & Technology',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      count: '22 Programs'
    },
    {
      name: 'Sciences & Research',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
      count: '28 Programs'
    },
  ];

  const news = [
    {
      category: 'RESEARCH',
      date: 'December 18, 2024',
      title: 'Breakthrough in Quantum Computing Research',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    },
    {
      category: 'CAMPUS',
      date: 'December 15, 2024',
      title: 'New State-of-the-Art Library Opening',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
    },
    {
      category: 'ACHIEVEMENT',
      date: 'December 12, 2024',
      title: 'Students Win International Innovation Award',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop" alt="Campus" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-inner">
              <span className="hero-label">Est. 1892</span>
              <h1>Shape Your Future at<br /><span>Prestige University</span></h1>
              <p>Where tradition meets innovation. Join a community of scholars dedicated to academic excellence, groundbreaking research, and positive global impact.</p>
              <div className="hero-actions">
                <Link to="/admissions" className="btn btn-gold">Begin Your Journey</Link>
                <Link to="/about" className="btn btn-outline-white">Discover Our Story</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">130+</span>
            <span className="stat-text">Years of Excellence</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15,000</span>
            <span className="stat-text">Students Worldwide</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">96%</span>
            <span className="stat-text">Graduate Employment</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Top 50</span>
            <span className="stat-text">Global Ranking</span>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-images">
              <div className="welcome-img-main">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=700&fit=crop" alt="Graduation" />
              </div>
              <div className="welcome-img-secondary">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" alt="Students" />
              </div>
              <div className="welcome-badge">
                <span className="badge-number">50+</span>
                <span className="badge-text">Countries Represented</span>
              </div>
            </div>
            <div className="welcome-content">
              <span className="section-label">Welcome to Prestige</span>
              <h2>A Legacy of Academic Excellence & Innovation</h2>
              <p className="lead">For over a century, Prestige University has been nurturing the brightest minds and producing leaders who shape the world.</p>
              <p>Our commitment to academic rigor, combined with a supportive community environment, creates the perfect setting for intellectual growth and personal development. Here, you'll find world-class faculty, cutting-edge research facilities, and endless opportunities to explore your passions.</p>
              <div className="welcome-features">
                <div className="welcome-feature">
                  <div className="feature-icon"><i className="fas fa-award"></i></div>
                  <div>
                    <h4>World-Class Faculty</h4>
                    <p>Learn from Nobel laureates and industry leaders</p>
                  </div>
                </div>
                <div className="welcome-feature">
                  <div className="feature-icon"><i className="fas fa-globe"></i></div>
                  <div>
                    <h4>Global Network</h4>
                    <p>200,000+ alumni across 120 countries</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-burgundy">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <div className="programs-header">
          <div className="container">
            <span className="section-label light">Academic Excellence</span>
            <h2>Explore Our Programs</h2>
            <p>Discover world-class education across diverse disciplines</p>
          </div>
        </div>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <Link to="/academics" key={index} className="program-card">
              <div className="program-image">
                <img src={program.image} alt={program.name} />
                <div className="program-overlay"></div>
              </div>
              <div className="program-content">
                <span className="program-count">{program.count}</span>
                <h3>{program.name}</h3>
                <span className="program-link">Explore Programs <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Campus Life Banner */}
      <section className="campus-banner">
        <div className="campus-banner-bg">
          <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&h=800&fit=crop" alt="Campus Life" />
          <div className="campus-banner-overlay"></div>
        </div>
        <div className="container">
          <div className="campus-banner-content">
            <span className="section-label light">Experience Campus Life</span>
            <h2>Where Learning Meets Living</h2>
            <p>Immerse yourself in a vibrant campus community with state-of-the-art facilities, diverse cultural events, and endless opportunities for personal growth.</p>
            <div className="campus-highlights">
              <div className="highlight">
                <i className="fas fa-home"></i>
                <span>12 Residence Halls</span>
              </div>
              <div className="highlight">
                <i className="fas fa-users"></i>
                <span>200+ Student Clubs</span>
              </div>
              <div className="highlight">
                <i className="fas fa-trophy"></i>
                <span>25 Varsity Sports</span>
              </div>
              <div className="highlight">
                <i className="fas fa-utensils"></i>
                <span>15 Dining Options</span>
              </div>
            </div>
            <Link to="/campus" className="btn btn-gold">Explore Campus</Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <div className="container">
          <div className="news-header">
            <div>
              <span className="section-label">Latest Updates</span>
              <h2>News & Events</h2>
            </div>
            <a href="#" className="view-all">View All News <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="news-grid">
            {news.map((item, index) => (
              <article key={index} className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <a href="#" className="news-link">Read More <i className="fas fa-arrow-right"></i></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-bg">
          <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=600&fit=crop" alt="Students" />
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Begin Your Journey Today</h2>
            <p>Applications for Fall 2025 are now open. Take the first step toward your extraordinary future.</p>
            <div className="cta-actions">
              <Link to="/admissions" className="btn btn-gold">Apply Now</Link>
              <Link to="/contact" className="btn btn-outline-white">Request Information</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-inner">
            <div className="testimonial-image">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" alt="Alumni" />
            </div>
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <blockquote>
                "My years at Prestige University transformed not just my career, but my entire perspective on life. The mentorship, the friendships, and the opportunities I received here laid the foundation for everything I've achieved."
              </blockquote>
              <div className="testimonial-author">
                <strong>Dr. Sarah Mitchell</strong>
                <span>CEO, Global Health Initiative | Class of 2005</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
