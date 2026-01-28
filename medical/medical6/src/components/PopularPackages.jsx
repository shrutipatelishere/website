import React from 'react';

const PopularPackages = ({ addToCart, isInCart }) => {
  const packages = [
    {
      id: 'pkg1',
      name: 'Full Body Checkup - Essential',
      tests: 72,
      includes: ['CBC', 'Liver Function', 'Kidney Function', 'Thyroid', 'Lipid Profile'],
      price: 999,
      originalPrice: 2499,
      discount: 60,
      reportTime: '24 hours',
      popular: true,
      color: '#00b38e'
    },
    {
      id: 'pkg2',
      name: 'Comprehensive Health Package',
      tests: 92,
      includes: ['Full Body Checkup', 'Vitamin Profile', 'Diabetes Panel', 'Cardiac Risk'],
      price: 1499,
      originalPrice: 3999,
      discount: 63,
      reportTime: '24-48 hours',
      popular: true,
      color: '#1976d2'
    },
    {
      id: 'pkg3',
      name: 'Diabetes Screening Package',
      tests: 15,
      includes: ['Fasting Sugar', 'PP Sugar', 'HbA1c', 'Urine Routine'],
      price: 599,
      originalPrice: 1299,
      discount: 54,
      reportTime: '12 hours',
      popular: false,
      color: '#fc9916'
    },
    {
      id: 'pkg4',
      name: 'Thyroid Complete Profile',
      tests: 8,
      includes: ['T3', 'T4', 'TSH', 'Free T3', 'Free T4'],
      price: 499,
      originalPrice: 999,
      discount: 50,
      reportTime: '24 hours',
      popular: false,
      color: '#9c27b0'
    },
    {
      id: 'pkg5',
      name: 'Senior Citizen Health Package',
      tests: 85,
      includes: ['Complete Blood Count', 'Heart Health', 'Bone Profile', 'Vision Test'],
      price: 1799,
      originalPrice: 4499,
      discount: 60,
      reportTime: '24-48 hours',
      popular: true,
      color: '#e91e63'
    },
    {
      id: 'pkg6',
      name: 'Cardiac Risk Assessment',
      tests: 22,
      includes: ['Lipid Profile', 'ECG', 'Apolipoprotein', 'Homocysteine'],
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      reportTime: '24 hours',
      popular: false,
      color: '#e53935'
    }
  ];

  return (
    <section className="popular-packages">
      <div className="container">
        <div className="section-header-row">
          <h2 className="section-title">
            Popular Health Packages
            <span>Best Value for Complete Health</span>
          </h2>
          <a href="#" className="view-all">
            View All Packages <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              {pkg.popular && <span className="popular-tag">Bestseller</span>}
              <div className="discount-badge" style={{ backgroundColor: pkg.color }}>
                {pkg.discount}% OFF
              </div>

              <div className="package-header">
                <h3>{pkg.name}</h3>
                <p className="test-count">
                  <i className="fas fa-flask"></i>
                  Includes {pkg.tests} Tests
                </p>
              </div>

              <div className="package-includes">
                <p className="includes-label">Includes:</p>
                <div className="includes-tags">
                  {pkg.includes.slice(0, 3).map((item, idx) => (
                    <span key={idx} className="include-tag">{item}</span>
                  ))}
                  {pkg.includes.length > 3 && (
                    <span className="more-tag">+{pkg.includes.length - 3} more</span>
                  )}
                </div>
              </div>

              <div className="package-footer">
                <div className="package-pricing">
                  <span className="current-price">₹{pkg.price}</span>
                  <span className="original-price">₹{pkg.originalPrice}</span>
                </div>
                <div className="report-time">
                  <i className="fas fa-clock"></i>
                  Reports in {pkg.reportTime}
                </div>
              </div>

              <button
                className={`add-btn ${isInCart(pkg.id) ? 'added' : ''}`}
                onClick={() => addToCart({ id: pkg.id, name: pkg.name, price: pkg.price })}
                disabled={isInCart(pkg.id)}
              >
                {isInCart(pkg.id) ? (
                  <>
                    <i className="fas fa-check"></i> Added
                  </>
                ) : (
                  <>
                    <i className="fas fa-plus"></i> Add
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
