import React from 'react';

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Book Online',
      desc: 'Select your tests and pick a convenient time slot',
      icon: 'fas fa-calendar-check'
    },
    {
      num: '02',
      title: 'Sample Collection',
      desc: 'Our phlebotomist visits your home for sample collection',
      icon: 'fas fa-home'
    },
    {
      num: '03',
      title: 'Lab Analysis',
      desc: 'Samples processed at NABL certified labs',
      icon: 'fas fa-microscope'
    },
    {
      num: '04',
      title: 'Get Reports',
      desc: 'Digital reports delivered within 24 hours',
      icon: 'fas fa-file-medical'
    }
  ];

  return (
    <section id="process" className="process">
      <div className="section-container">
        <div className="section-header light">
          <span className="section-tag">Simple Process</span>
          <h2>How It Works</h2>
          <p>Four easy steps to complete your health checkup</p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-num">{step.num}</div>
              <div className="step-icon">
                <i className={step.icon}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
