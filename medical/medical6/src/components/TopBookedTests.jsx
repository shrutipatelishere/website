import React from 'react';

const TopBookedTests = ({ addToCart, isInCart }) => {
  const tests = [
    {
      id: 'test1',
      name: 'Complete Blood Count (CBC)',
      alsoKnown: 'Hemogram',
      parameters: 24,
      price: 299,
      originalPrice: 599,
      discount: 50,
      popular: true
    },
    {
      id: 'test2',
      name: 'Thyroid Profile Total',
      alsoKnown: 'T3, T4, TSH',
      parameters: 3,
      price: 399,
      originalPrice: 999,
      discount: 60,
      popular: true
    },
    {
      id: 'test3',
      name: 'HbA1c (Glycated Hemoglobin)',
      alsoKnown: 'Diabetes Test',
      parameters: 1,
      price: 349,
      originalPrice: 699,
      discount: 50,
      popular: true
    },
    {
      id: 'test4',
      name: 'Lipid Profile',
      alsoKnown: 'Cholesterol Test',
      parameters: 8,
      price: 399,
      originalPrice: 899,
      discount: 56,
      popular: false
    },
    {
      id: 'test5',
      name: 'Liver Function Test (LFT)',
      alsoKnown: 'Hepatic Panel',
      parameters: 12,
      price: 449,
      originalPrice: 999,
      discount: 55,
      popular: false
    },
    {
      id: 'test6',
      name: 'Kidney Function Test (KFT)',
      alsoKnown: 'Renal Panel',
      parameters: 10,
      price: 449,
      originalPrice: 899,
      discount: 50,
      popular: false
    },
    {
      id: 'test7',
      name: 'Vitamin D (25-OH)',
      alsoKnown: 'Vitamin D Total',
      parameters: 1,
      price: 599,
      originalPrice: 1499,
      discount: 60,
      popular: true
    },
    {
      id: 'test8',
      name: 'Vitamin B12',
      alsoKnown: 'Cobalamin',
      parameters: 1,
      price: 499,
      originalPrice: 1199,
      discount: 58,
      popular: false
    },
    {
      id: 'test9',
      name: 'Urine Routine & Microscopy',
      alsoKnown: 'Urinalysis',
      parameters: 15,
      price: 149,
      originalPrice: 299,
      discount: 50,
      popular: false
    },
    {
      id: 'test10',
      name: 'Fasting Blood Sugar',
      alsoKnown: 'FBS',
      parameters: 1,
      price: 79,
      originalPrice: 199,
      discount: 60,
      popular: true
    },
    {
      id: 'test11',
      name: 'Iron Studies',
      alsoKnown: 'Serum Iron, TIBC, Ferritin',
      parameters: 4,
      price: 699,
      originalPrice: 1499,
      discount: 53,
      popular: false
    },
    {
      id: 'test12',
      name: 'ESR (Erythrocyte Sedimentation Rate)',
      alsoKnown: 'Sed Rate',
      parameters: 1,
      price: 99,
      originalPrice: 199,
      discount: 50,
      popular: false
    }
  ];

  return (
    <section className="top-booked-tests">
      <div className="container">
        <div className="section-header-row">
          <h2 className="section-title">
            Top Booked Tests
            <span>{tests.length} Tests</span>
          </h2>
          <a href="#" className="view-all">
            View All Tests <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <div className="tests-grid">
          {tests.map((test) => (
            <div key={test.id} className="test-card">
              {test.popular && <span className="popular-badge">Popular</span>}

              <div className="test-info">
                <h4>{test.name}</h4>
                <p className="also-known">Also known as: {test.alsoKnown}</p>
                <p className="parameters">
                  <i className="fas fa-vial"></i>
                  {test.parameters} {test.parameters === 1 ? 'Parameter' : 'Parameters'}
                </p>
              </div>

              <div className="test-footer">
                <div className="test-pricing">
                  <div className="price-row">
                    <span className="current-price">₹{test.price}</span>
                    <span className="original-price">₹{test.originalPrice}</span>
                  </div>
                  <span className="discount-text">{test.discount}% off</span>
                </div>
                <button
                  className={`add-btn ${isInCart(test.id) ? 'added' : ''}`}
                  onClick={() => addToCart({ id: test.id, name: test.name, price: test.price })}
                  disabled={isInCart(test.id)}
                >
                  {isInCart(test.id) ? (
                    <><i className="fas fa-check"></i> Added</>
                  ) : (
                    <><i className="fas fa-plus"></i> Add</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBookedTests;
