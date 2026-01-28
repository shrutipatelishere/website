import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ doctors: 0, patients: 0, satisfaction: 0, experience: 0, awards: 0 });
  const statsRef = useRef(null);

  const stats = [
    { id: 'doctors', icon: 'fa-user-doctor', count: 20, suffix: '+', label: 'Expert Doctors' },
    { id: 'satisfaction', icon: 'fa-face-smile', count: 95, suffix: '%', label: 'Patient Satisfaction' },
    { id: 'patients', icon: 'fa-hospital-user', count: 5000, suffix: '+', label: 'Happy Patients' },
    { id: 'experience', icon: 'fa-clock', count: 10, suffix: '+', label: 'Years Experience' },
    { id: 'awards', icon: 'fa-trophy', count: 3, suffix: '', label: 'Awards Won' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach(({ id, count }) => {
        let start = 0;
        const increment = count / 50;
        const timer = setInterval(() => {
          start += increment;
          if (start >= count) {
            setCounts((prev) => ({ ...prev, [id]: count }));
            clearInterval(timer);
          } else {
            setCounts((prev) => ({ ...prev, [id]: Math.floor(start) }));
          }
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section className="stats" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map(({ id, icon, suffix, label }) => (
            <div className="stat-item" key={id}>
              <div className="stat-icon">
                <i className={`fas ${icon}`}></i>
              </div>
              <div className="stat-content">
                <h3>
                  {counts[id]}{suffix}
                </h3>
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
