import React from 'react';

const TestCategories = () => {
  const categories = [
    {
      icon: 'fa-heart-pulse',
      name: 'Heart Health',
      tests: '25+ Tests',
      color: '#e53935',
      bgColor: '#ffebee'
    },
    {
      icon: 'fa-droplet',
      name: 'Diabetes',
      tests: '15+ Tests',
      color: '#fc9916',
      bgColor: '#fff4e5'
    },
    {
      icon: 'fa-shield-virus',
      name: 'Immunity',
      tests: '20+ Tests',
      color: '#00b38e',
      bgColor: '#e5f9f5'
    },
    {
      icon: 'fa-bone',
      name: 'Bone & Joint',
      tests: '18+ Tests',
      color: '#795548',
      bgColor: '#efebe9'
    },
    {
      icon: 'fa-venus',
      name: "Women's Health",
      tests: '30+ Tests',
      color: '#e91e63',
      bgColor: '#fce4ec'
    },
    {
      icon: 'fa-baby',
      name: 'Pregnancy',
      tests: '22+ Tests',
      color: '#9c27b0',
      bgColor: '#f3e5f5'
    },
    {
      icon: 'fa-kidney',
      name: 'Kidney',
      tests: '12+ Tests',
      color: '#ff5722',
      bgColor: '#fbe9e7'
    },
    {
      icon: 'fa-liver',
      name: 'Liver',
      tests: '14+ Tests',
      color: '#8bc34a',
      bgColor: '#f1f8e9'
    },
    {
      icon: 'fa-lungs',
      name: 'Allergy',
      tests: '35+ Tests',
      color: '#00bcd4',
      bgColor: '#e0f7fa'
    },
    {
      icon: 'fa-dna',
      name: 'Thyroid',
      tests: '10+ Tests',
      color: '#673ab7',
      bgColor: '#ede7f6'
    },
    {
      icon: 'fa-syringe',
      name: 'Vitamins',
      tests: '20+ Tests',
      color: '#ffc107',
      bgColor: '#fff8e1'
    },
    {
      icon: 'fa-vial',
      name: 'Infections',
      tests: '40+ Tests',
      color: '#607d8b',
      bgColor: '#eceff1'
    }
  ];

  return (
    <section className="test-categories">
      <div className="container">
        <div className="section-header-row">
          <h2 className="section-title">Browse by Health Concern</h2>
          <a href="#" className="view-all">
            View All <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <a key={index} href="#" className="category-card">
              <div
                className="category-icon"
                style={{ backgroundColor: category.bgColor, color: category.color }}
              >
                <i className={`fas ${category.icon}`}></i>
              </div>
              <h4>{category.name}</h4>
              <span className="test-count">{category.tests}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestCategories;
