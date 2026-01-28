import React, { useState, useEffect, useRef } from 'react';

const PatientJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: '01',
      title: 'Schedule & Register',
      icon: 'fa-calendar-plus',
      description: 'Book your appointment online or via our app. Complete digital registration from anywhere.',
      features: ['Online Booking', 'Digital Forms', 'Insurance Verification', 'Appointment Reminders'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop'
    },
    {
      number: '02',
      title: 'Arrival & Check-in',
      icon: 'fa-door-open',
      description: 'Seamless arrival experience with valet parking, digital kiosks, and personalized welcome.',
      features: ['Valet Parking', 'Digital Check-in', 'Patient Navigator', 'Real-time Updates'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=400&fit=crop'
    },
    {
      number: '03',
      title: 'Consultation & Diagnosis',
      icon: 'fa-stethoscope',
      description: 'Meet with your specialist in private consultation rooms equipped with advanced diagnostics.',
      features: ['Private Rooms', 'Digital Records', 'Instant Imaging', 'Second Opinions'],
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=400&fit=crop'
    },
    {
      number: '04',
      title: 'Treatment & Care',
      icon: 'fa-hand-holding-medical',
      description: 'Receive world-class treatment with personalized care plans and continuous monitoring.',
      features: ['Personalized Care', '24/7 Nursing', 'Pain Management', 'Family Support'],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=400&fit=crop'
    },
    {
      number: '05',
      title: 'Recovery & Discharge',
      icon: 'fa-heart-circle-check',
      description: 'Comprehensive discharge planning with medication guidance and follow-up scheduling.',
      features: ['Discharge Planning', 'Medication Guide', 'Follow-up Care', 'Home Instructions'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&h=400&fit=crop'
    },
    {
      number: '06',
      title: 'Ongoing Support',
      icon: 'fa-users-medical',
      description: 'Continue your health journey with telemedicine, rehabilitation, and wellness programs.',
      features: ['Telemedicine', 'Rehab Programs', 'Health Monitoring', 'Patient Portal'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop'
    }
  ];

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

  return (
    <section className="patient-journey" ref={sectionRef}>
      <div className="journey-bg">
        <div className="journey-gradient"></div>
      </div>

      <div className="container">
        <div className="section-header center light">
          <span className="section-tag light">
            <i className="fas fa-route"></i>
            YOUR CARE PATH
          </span>
          <h2>The Patient <span className="gradient-text">Journey</span></h2>
          <p>Experience seamless, personalized care from your first call to full recovery</p>
        </div>

        <div className="journey-container">
          {/* Timeline */}
          <div className="journey-timeline">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`timeline-step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''} ${isVisible ? 'visible' : ''}`}
                onClick={() => setActiveStep(index)}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="step-marker">
                  <div className="marker-outer">
                    <div className="marker-inner">
                      <i className={`fas ${step.icon}`}></i>
                    </div>
                  </div>
                  <span className="step-number">{step.number}</span>
                </div>
                <div className="step-label">{step.title}</div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>

          {/* Content Panel */}
          <div className="journey-content">
            {steps.map((step, index) => (
              <div key={index} className={`journey-panel ${index === activeStep ? 'active' : ''}`}>
                <div className="panel-image">
                  <img src={step.image} alt={step.title} />
                  <div className="image-badge">
                    <span className="badge-number">{step.number}</span>
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                </div>
                <div className="panel-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="panel-features">
                    {step.features.map((feature, fIndex) => (
                      <div key={fIndex} className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="journey-nav">
            <button
              className="nav-btn"
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
            >
              <i className="fas fa-arrow-left"></i>
              Previous Step
            </button>
            <div className="step-counter">
              <span className="current">{String(activeStep + 1).padStart(2, '0')}</span>
              <span className="divider">/</span>
              <span className="total">{String(steps.length).padStart(2, '0')}</span>
            </div>
            <button
              className="nav-btn primary"
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
            >
              Next Step
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
