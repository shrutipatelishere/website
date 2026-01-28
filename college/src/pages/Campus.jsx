import React from 'react';
import { Link } from 'react-router-dom';

const Campus = () => {
  const facilities = [
    { icon: 'fas fa-book', name: 'Central Library', desc: '3 million volumes, 24/7 study spaces, digital resources' },
    { icon: 'fas fa-flask', name: 'Research Labs', desc: 'State-of-the-art facilities for scientific research' },
    { icon: 'fas fa-running', name: 'Sports Complex', desc: 'Olympic-size pool, fitness center, indoor courts' },
    { icon: 'fas fa-home', name: 'Residence Halls', desc: '12 residential halls with modern amenities' },
    { icon: 'fas fa-utensils', name: 'Dining Services', desc: '8 dining locations with diverse cuisine options' },
    { icon: 'fas fa-heartbeat', name: 'Health Center', desc: 'Comprehensive medical and counseling services' },
  ];

  const clubs = [
    'Student Government', 'Debate Society', 'Cultural Association', 'Music Ensemble',
    'Drama Club', 'Environmental Club', 'Entrepreneurship Club', 'Community Service',
    'Photography Club', 'Sports Teams', 'Academic Societies', 'International Club'
  ];

  const events = [
    { name: 'Founders Day', date: 'September 15', desc: 'Annual celebration of our university heritage' },
    { name: 'Cultural Festival', date: 'October 20-22', desc: 'Three days of music, dance, and cultural performances' },
    { name: 'Sports Week', date: 'November 5-12', desc: 'Inter-college competitions and athletic events' },
    { name: 'Winter Concert', date: 'December 10', desc: 'Annual performance by university orchestra and choir' },
  ];

  const housingFeatures = [
    'Furnished single and double rooms',
    'High-speed WiFi throughout',
    '24/7 security',
    'Laundry facilities on each floor',
    'Common kitchens and lounges',
    'Resident advisors for support'
  ];

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&h=600&fit=crop" alt="Campus Life" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Campus Life</span>
            </div>
            <h1>Campus Life</h1>
            <p>Experience a vibrant community beyond the classroom</p>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="campus-overview">
        <div className="container">
          <div className="campus-grid">
            <div className="campus-content">
              <span className="section-label">Our Campus</span>
              <h2>A World-Class Learning Environment</h2>
              <p>Spread across 500 acres of beautifully landscaped grounds, our campus combines historic architecture with modern facilities. From state-of-the-art laboratories to peaceful gardens, every corner of our campus is designed to inspire learning and personal growth.</p>
              <p>Our campus is more than just buildings—it's a community where lifelong friendships are formed, ideas are born, and futures are shaped.</p>
              <a href="#" className="btn btn-burgundy">Schedule a Campus Tour</a>
            </div>
            <div className="campus-stats">
              <div className="campus-stat">
                <span className="stat-num">500</span>
                <span className="stat-label">Acres of Campus</span>
              </div>
              <div className="campus-stat">
                <span className="stat-num">85+</span>
                <span className="stat-label">Buildings</span>
              </div>
              <div className="campus-stat">
                <span className="stat-num">12</span>
                <span className="stat-label">Residence Halls</span>
              </div>
              <div className="campus-stat">
                <span className="stat-num">200+</span>
                <span className="stat-label">Student Clubs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Facilities</span>
            <h2>Campus Facilities</h2>
            <p>Modern amenities designed for your comfort and success</p>
          </div>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon">
                  <i className={facility.icon}></i>
                </div>
                <h3>{facility.name}</h3>
                <p>{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="student-life">
        <div className="container">
          <div className="student-life-grid">
            <div className="student-life-content">
              <span className="section-label">Student Organizations</span>
              <h2>Get Involved</h2>
              <p>With over 200 student organizations, there's something for everyone. Whether you're passionate about community service, performing arts, sports, or academic pursuits, you'll find your community here.</p>
              <div className="clubs-list">
                {clubs.map((club, index) => (
                  <span key={index} className="club-tag">{club}</span>
                ))}
              </div>
            </div>
            <div className="student-life-image">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=450&fit=crop" alt="Student Life" />
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="events-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label light">Campus Events</span>
            <h2>Upcoming Events</h2>
            <p>Join us for exciting events throughout the year</p>
          </div>
          <div className="events-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">{event.date}</div>
                <h3>{event.name}</h3>
                <p>{event.desc}</p>
                <a href="#" className="event-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="housing-section">
        <div className="container">
          <div className="housing-grid">
            <div className="housing-image">
              <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=450&fit=crop" alt="Residence Hall" />
            </div>
            <div className="housing-content">
              <span className="section-label">Residential Life</span>
              <h2>Home Away From Home</h2>
              <p>Our residence halls offer comfortable, safe, and supportive living environments. Each hall features modern amenities, study lounges, and common areas designed to foster community.</p>
              <ul className="housing-features">
                {housingFeatures.map((feature, index) => (
                  <li key={index}><i className="fas fa-check"></i> {feature}</li>
                ))}
              </ul>
              <a href="#" className="btn btn-burgundy">Housing Options</a>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="tour-cta">
        <div className="container">
          <div className="tour-content">
            <h2>Experience Our Campus</h2>
            <p>Can't visit in person? Take a virtual tour of our beautiful campus from anywhere in the world.</p>
            <div className="tour-buttons">
              <a href="#" className="btn btn-white">Virtual Tour</a>
              <a href="#" className="btn btn-outline-white">Schedule Visit</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Campus;
