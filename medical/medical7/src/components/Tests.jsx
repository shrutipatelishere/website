import React, { useState } from 'react';

const Tests = () => {
  const [activeTab, setActiveTab] = useState('packages');

  const packages = [
    {
      id: 1,
      name: 'Essential Wellness',
      tests: 45,
      price: 999,
      original: 2800,
      popular: false,
      includes: ['CBC', 'Lipid Profile', 'Sugar Tests', 'Thyroid Basic', 'Liver Function']
    },
    {
      id: 2,
      name: 'Complete Health',
      tests: 78,
      price: 1799,
      original: 5200,
      popular: true,
      includes: ['All Essential Tests', 'Kidney Profile', 'Vitamin Panel', 'Iron Studies', 'Cardiac Risk']
    },
    {
      id: 3,
      name: 'Executive Premium',
      tests: 105,
      price: 2999,
      original: 8500,
      popular: false,
      includes: ['All Complete Tests', 'Tumor Markers', 'Hormone Panel', 'Allergy Screen', 'Bone Health']
    }
  ];

  const individual = [
    { id: 1, name: 'Complete Blood Count', params: 24, price: 249, original: 500 },
    { id: 2, name: 'Thyroid Profile Total', params: 3, price: 349, original: 800 },
    { id: 3, name: 'Lipid Profile', params: 8, price: 399, original: 750 },
    { id: 4, name: 'Liver Function Test', params: 12, price: 449, original: 900 },
    { id: 5, name: 'HbA1c', params: 1, price: 299, original: 600 },
    { id: 6, name: 'Vitamin D', params: 1, price: 549, original: 1200 },
    { id: 7, name: 'Vitamin B12', params: 1, price: 499, original: 1000 },
    { id: 8, name: 'Kidney Function Test', params: 10, price: 399, original: 850 },
  ];

  return (
    <section id="tests" className="tests">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Tests & Packages</span>
          <h2>Choose Your Health Package</h2>
          <p>Affordable packages designed for complete wellness assessment</p>
        </div>

        <div className="tests-tabs">
          <button
            className={activeTab === 'packages' ? 'active' : ''}
            onClick={() => setActiveTab('packages')}
          >
            Health Packages
          </button>
          <button
            className={activeTab === 'individual' ? 'active' : ''}
            onClick={() => setActiveTab('individual')}
          >
            Individual Tests
          </button>
        </div>

        {activeTab === 'packages' && (
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-tag">Most Popular</div>}
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="test-count">{pkg.tests} Tests</div>
                </div>
                <div className="package-price">
                  <span className="price">₹{pkg.price.toLocaleString()}</span>
                  <span className="original">₹{pkg.original.toLocaleString()}</span>
                  <span className="discount">{Math.round((1 - pkg.price/pkg.original) * 100)}% OFF</span>
                </div>
                <ul className="package-includes">
                  {pkg.includes.map((item, i) => (
                    <li key={i}><i className="fas fa-check"></i> {item}</li>
                  ))}
                </ul>
                <button className="package-btn">Book Now</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'individual' && (
          <div className="individual-grid">
            {individual.map((test) => (
              <div key={test.id} className="test-card">
                <div className="test-info">
                  <h4>{test.name}</h4>
                  <span className="params">{test.params} parameters</span>
                </div>
                <div className="test-action">
                  <div className="test-price">
                    <span className="price">₹{test.price}</span>
                    <span className="original">₹{test.original}</span>
                  </div>
                  <button className="add-btn">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="tests-footer">
          <p><i className="fas fa-info-circle"></i> All prices include home sample collection & doctor consultation</p>
        </div>
      </div>
    </section>
  );
};

export default Tests;
