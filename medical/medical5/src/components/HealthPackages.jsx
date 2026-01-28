import React, { useState } from 'react';

const HealthPackages = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const packages = [
    {
      name: 'Basic Care',
      description: 'Essential health checkup for individuals',
      price: { monthly: 49, yearly: 470 },
      icon: 'fas fa-heartbeat',
      color: '#0ea5e9',
      popular: false,
      features: [
        'Annual Health Checkup',
        'Blood Test Panel',
        'BMI & Body Analysis',
        'Doctor Consultation',
        'Digital Health Report',
        'Email Support'
      ],
      notIncluded: [
        'Specialist Consultations',
        'Advanced Imaging',
        'Home Visit Service'
      ]
    },
    {
      name: 'Family Plus',
      description: 'Complete coverage for your entire family',
      price: { monthly: 129, yearly: 1190 },
      icon: 'fas fa-users',
      color: '#10b981',
      popular: true,
      features: [
        'Everything in Basic Care',
        'Coverage for 4 Family Members',
        'Quarterly Health Checkups',
        'Specialist Consultations',
        'Dental & Vision Screening',
        'Priority Appointments',
        '24/7 Helpline Access',
        'Medicine Discounts (15%)'
      ],
      notIncluded: [
        'Home Visit Service'
      ]
    },
    {
      name: 'Premium Elite',
      description: 'Premium care with exclusive benefits',
      price: { monthly: 249, yearly: 2390 },
      icon: 'fas fa-crown',
      color: '#8b5cf6',
      popular: false,
      features: [
        'Everything in Family Plus',
        'Unlimited Family Coverage',
        'Monthly Health Checkups',
        'All Specialist Access',
        'Advanced Imaging Included',
        'Home Visit Service',
        'Personal Health Concierge',
        'Medicine Discounts (30%)',
        'International Coverage',
        'Executive Lounge Access'
      ],
      notIncluded: []
    }
  ];

  return (
    <section className="health-packages" id="packages">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <i className="fas fa-gift"></i>
            Health Packages
          </span>
          <h2>Choose Your Health Plan</h2>
          <p>
            Affordable healthcare packages designed to keep you and your
            family healthy throughout the year.
          </p>
        </div>

        <div className="billing-toggle">
          <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
          <button
            className={`toggle-switch ${billingCycle === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          >
            <span className="toggle-thumb"></span>
          </button>
          <span className={billingCycle === 'yearly' ? 'active' : ''}>
            Yearly
            <span className="save-badge">Save 20%</span>
          </span>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && (
                <div className="popular-badge">
                  <i className="fas fa-fire"></i>
                  Most Popular
                </div>
              )}
              <div className="package-header" style={{ '--pkg-color': pkg.color }}>
                <div className="package-icon" style={{ background: `${pkg.color}15`, color: pkg.color }}>
                  <i className={pkg.icon}></i>
                </div>
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
              </div>

              <div className="package-price">
                <span className="currency">$</span>
                <span className="amount">{pkg.price[billingCycle]}</span>
                <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>

              <div className="package-features">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="feature-item included">
                    <i className="fas fa-check-circle"></i>
                    <span>{feature}</span>
                  </div>
                ))}
                {pkg.notIncluded.map((feature, idx) => (
                  <div key={idx} className="feature-item not-included">
                    <i className="fas fa-times-circle"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`package-btn ${pkg.popular ? 'primary' : ''}`}
                style={pkg.popular ? { background: pkg.color } : {}}
              >
                Get Started
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="packages-note">
          <i className="fas fa-info-circle"></i>
          <p>
            All plans include access to our patient portal, health records, and basic telemedicine.
            <a href="#">View full comparison</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
