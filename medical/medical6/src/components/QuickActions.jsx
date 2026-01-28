import React from 'react';

const QuickActions = () => {
  const actions = [
    {
      icon: 'fa-file-medical',
      title: 'Upload Prescription',
      description: 'Get tests from prescription',
      color: '#00b38e',
      bgColor: '#e5f9f5'
    },
    {
      icon: 'fa-box-open',
      title: 'Health Packages',
      description: 'Explore all packages',
      color: '#fc9916',
      bgColor: '#fff4e5'
    },
    {
      icon: 'fa-x-ray',
      title: 'Book a Scan',
      description: 'MRI, CT Scan, X-Ray',
      color: '#1976d2',
      bgColor: '#e5eeff'
    },
    {
      icon: 'fa-clipboard-list',
      title: 'My Reports',
      description: 'View test reports',
      color: '#9c27b0',
      bgColor: '#f3e5f5'
    },
    {
      icon: 'fa-calendar-check',
      title: 'My Bookings',
      description: 'Track your orders',
      color: '#e91e63',
      bgColor: '#fce4ec'
    },
    {
      icon: 'fa-phone-alt',
      title: 'Need Help?',
      description: 'Talk to health expert',
      color: '#02475b',
      bgColor: '#e5f0f3'
    }
  ];

  return (
    <section className="quick-actions">
      <div className="container">
        <div className="actions-grid">
          {actions.map((action, index) => (
            <button key={index} className="action-card">
              <div
                className="action-icon"
                style={{ backgroundColor: action.bgColor, color: action.color }}
              >
                <i className={`fas ${action.icon}`}></i>
              </div>
              <div className="action-content">
                <h4>{action.title}</h4>
                <p>{action.description}</p>
              </div>
              <i className="fas fa-chevron-right action-arrow"></i>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
