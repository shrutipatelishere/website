import React, { useState } from 'react';

const HealthCheckups = ({ addToCart, isInCart }) => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', name: 'All' },
    { id: 'full-body', name: 'Full Body' },
    { id: 'diabetes', name: 'Diabetes' },
    { id: 'heart', name: 'Heart' },
    { id: 'women', name: "Women's Health" },
    { id: 'senior', name: 'Senior Citizen' },
  ];

  const checkups = [
    {
      id: 'chk1',
      name: 'Basic Health Checkup',
      category: 'full-body',
      tests: 45,
      parameters: ['Blood Sugar', 'Kidney', 'Liver', 'Thyroid'],
      price: 699,
      originalPrice: 1799,
      discount: 61,
      fasting: true,
      homeCollection: true
    },
    {
      id: 'chk2',
      name: 'Advanced Full Body Checkup',
      category: 'full-body',
      tests: 78,
      parameters: ['Complete Hemogram', 'Lipid', 'Liver', 'Kidney', 'Thyroid', 'Vitamins'],
      price: 1299,
      originalPrice: 3499,
      discount: 63,
      fasting: true,
      homeCollection: true
    },
    {
      id: 'chk3',
      name: 'Diabetes Care Package',
      category: 'diabetes',
      tests: 18,
      parameters: ['HbA1c', 'Fasting Sugar', 'PP Sugar', 'Kidney Function'],
      price: 599,
      originalPrice: 1499,
      discount: 60,
      fasting: true,
      homeCollection: true
    },
    {
      id: 'chk4',
      name: 'Heart Health Package',
      category: 'heart',
      tests: 25,
      parameters: ['Lipid Profile', 'Cardiac Markers', 'ECG', 'Blood Pressure'],
      price: 1499,
      originalPrice: 3499,
      discount: 57,
      fasting: true,
      homeCollection: true
    },
    {
      id: 'chk5',
      name: "Women's Wellness Package",
      category: 'women',
      tests: 65,
      parameters: ['Hormonal Profile', 'Thyroid', 'Vitamin D', 'Iron Studies', 'Pap Smear'],
      price: 1799,
      originalPrice: 4499,
      discount: 60,
      fasting: true,
      homeCollection: true
    },
    {
      id: 'chk6',
      name: 'Senior Citizen Complete',
      category: 'senior',
      tests: 90,
      parameters: ['Complete Body', 'Heart', 'Kidney', 'Liver', 'Bone', 'Vision'],
      price: 2499,
      originalPrice: 5999,
      discount: 58,
      fasting: true,
      homeCollection: true
    },
    {
      id: 'chk7',
      name: 'Pre-Diabetes Screening',
      category: 'diabetes',
      tests: 12,
      parameters: ['Fasting Glucose', 'HbA1c', 'Insulin', 'Lipid Profile'],
      price: 799,
      originalPrice: 1999,
      discount: 60,
      fasting: true,
      homeCollection: true
    },
    {
      id: 'chk8',
      name: 'Cardiac Risk Markers',
      category: 'heart',
      tests: 15,
      parameters: ['hs-CRP', 'Homocysteine', 'Lipid', 'Apolipoprotein'],
      price: 1199,
      originalPrice: 2799,
      discount: 57,
      fasting: true,
      homeCollection: true
    }
  ];

  const filteredCheckups = activeTab === 'all'
    ? checkups
    : checkups.filter(c => c.category === activeTab);

  return (
    <section className="health-checkups">
      <div className="container">
        <div className="section-header-row">
          <h2 className="section-title">
            Doctor Created Health Checkups
            <span>{checkups.length} Checkups</span>
          </h2>
          <a href="#" className="view-all">
            View All <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <div className="checkup-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="checkups-grid">
          {filteredCheckups.map((checkup) => (
            <div key={checkup.id} className="checkup-card">
              <div className="checkup-discount">
                <span>{checkup.discount}% OFF</span>
              </div>

              <div className="checkup-content">
                <h3>{checkup.name}</h3>
                <p className="tests-info">
                  <i className="fas fa-vial"></i>
                  {checkup.tests} Tests Included
                </p>

                <div className="parameters">
                  {checkup.parameters.slice(0, 4).map((param, idx) => (
                    <span key={idx} className="param-tag">{param}</span>
                  ))}
                  {checkup.parameters.length > 4 && (
                    <span className="param-more">+{checkup.parameters.length - 4}</span>
                  )}
                </div>

                <div className="checkup-meta">
                  {checkup.fasting && (
                    <span className="meta-tag">
                      <i className="fas fa-utensils"></i> Fasting Required
                    </span>
                  )}
                  {checkup.homeCollection && (
                    <span className="meta-tag">
                      <i className="fas fa-home"></i> Home Collection
                    </span>
                  )}
                </div>
              </div>

              <div className="checkup-footer">
                <div className="checkup-pricing">
                  <span className="price">₹{checkup.price}</span>
                  <span className="original">₹{checkup.originalPrice}</span>
                </div>
                <button
                  className={`add-btn ${isInCart(checkup.id) ? 'added' : ''}`}
                  onClick={() => addToCart({ id: checkup.id, name: checkup.name, price: checkup.price })}
                  disabled={isInCart(checkup.id)}
                >
                  {isInCart(checkup.id) ? 'Added' : 'Add'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthCheckups;
