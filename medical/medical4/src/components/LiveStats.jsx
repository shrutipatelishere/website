import React, { useState, useEffect, useRef } from 'react';

const LiveStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [liveData, setLiveData] = useState({
    patientsToday: 847,
    surgeriesCompleted: 23,
    bedsAvailable: 156,
    doctorsOnDuty: 89,
    labResults: 234,
    appointments: 412
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        patientsToday: prev.patientsToday + Math.floor(Math.random() * 3),
        labResults: prev.labResults + Math.floor(Math.random() * 2),
        appointments: prev.appointments + Math.floor(Math.random() * 2),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: 'fa-hospital-user',
      value: liveData.patientsToday,
      label: 'Patients Today',
      trend: '+12%',
      color: 'teal'
    },
    {
      icon: 'fa-heart-pulse',
      value: liveData.surgeriesCompleted,
      label: 'Surgeries Today',
      trend: '100%',
      color: 'rose'
    },
    {
      icon: 'fa-bed-pulse',
      value: liveData.bedsAvailable,
      label: 'Beds Available',
      trend: 'Live',
      color: 'blue'
    },
    {
      icon: 'fa-user-doctor',
      value: liveData.doctorsOnDuty,
      label: 'Doctors On Duty',
      trend: 'Active',
      color: 'amber'
    },
    {
      icon: 'fa-flask-vial',
      value: liveData.labResults,
      label: 'Lab Results',
      trend: '+8%',
      color: 'purple'
    },
    {
      icon: 'fa-calendar-check',
      value: liveData.appointments,
      label: 'Appointments',
      trend: '+15%',
      color: 'green'
    },
  ];

  return (
    <section className="live-stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-header">
          <div className="live-indicator">
            <span className="pulse-dot"></span>
            <span>LIVE DASHBOARD</span>
          </div>
          <h2>Hospital Activity <span className="gradient-text">Right Now</span></h2>
          <p>Real-time insights into our hospital operations and patient care metrics</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${stat.color} ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-card-header">
                <div className="stat-icon">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <span className={`stat-trend ${stat.trend === 'Live' || stat.trend === 'Active' ? 'live' : ''}`}>
                  {stat.trend}
                </span>
              </div>
              <div className="stat-value">
                <span className="number">{stat.value.toLocaleString()}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{ width: `${Math.min(100, (stat.value / 10))}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Activity Feed */}
        <div className="activity-feed">
          <div className="feed-header">
            <i className="fas fa-wave-square"></i>
            <span>Live Activity</span>
          </div>
          <div className="feed-ticker">
            <div className="ticker-content">
              <span className="ticker-item">
                <i className="fas fa-check-circle"></i>
                Surgery completed successfully - OR 3
              </span>
              <span className="ticker-item">
                <i className="fas fa-ambulance"></i>
                Emergency admission - Trauma Unit
              </span>
              <span className="ticker-item">
                <i className="fas fa-baby"></i>
                New arrival at Maternity Ward
              </span>
              <span className="ticker-item">
                <i className="fas fa-vial"></i>
                Lab results ready - Patient #4521
              </span>
              <span className="ticker-item">
                <i className="fas fa-user-plus"></i>
                New patient registered
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
