import React, { useState, useEffect } from 'react';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    visitType: 'in-person',
    name: '',
    email: '',
    phone: '',
    dob: '',
    insurance: '',
    reason: '',
    isNewPatient: true
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setStep(1);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const departments = [
    { id: 'cardiology', name: 'Cardiology', icon: 'fa-heart-pulse' },
    { id: 'neurology', name: 'Neurology', icon: 'fa-brain' },
    { id: 'oncology', name: 'Oncology', icon: 'fa-ribbon' },
    { id: 'orthopedics', name: 'Orthopedics', icon: 'fa-bone' },
    { id: 'pediatrics', name: 'Pediatrics', icon: 'fa-baby' },
    { id: 'general', name: 'General Medicine', icon: 'fa-stethoscope' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    alert('Appointment booked successfully! You will receive a confirmation email shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="appointment-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-header">
          <h2>Book Your <span className="gradient-text">Appointment</span></h2>
          <p>Schedule a visit with our expert medical team</p>
        </div>

        {/* Progress Steps */}
        <div className="modal-progress">
          {[1, 2, 3].map(s => (
            <div key={s} className={`progress-step ${step >= s ? 'active' : ''} ${step > s ? 'completed' : ''}`}>
              <div className="step-circle">
                {step > s ? <i className="fas fa-check"></i> : s}
              </div>
              <span>{s === 1 ? 'Select Service' : s === 2 ? 'Choose Time' : 'Your Details'}</span>
            </div>
          ))}
          <div className="progress-line">
            <div className="progress-fill" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
          </div>
        </div>

        <div className="modal-content">
          {/* Step 1: Select Department & Doctor */}
          {step === 1 && (
            <div className="modal-step">
              <h3>Select Department</h3>
              <div className="department-grid">
                {departments.map(dept => (
                  <button
                    key={dept.id}
                    className={`dept-option ${formData.department === dept.id ? 'selected' : ''}`}
                    onClick={() => handleChange('department', dept.id)}
                  >
                    <i className={`fas ${dept.icon}`}></i>
                    <span>{dept.name}</span>
                  </button>
                ))}
              </div>

              <h3>Visit Type</h3>
              <div className="visit-type-options">
                <button
                  className={`visit-option ${formData.visitType === 'in-person' ? 'selected' : ''}`}
                  onClick={() => handleChange('visitType', 'in-person')}
                >
                  <i className="fas fa-hospital"></i>
                  <span>In-Person Visit</span>
                </button>
                <button
                  className={`visit-option ${formData.visitType === 'telemedicine' ? 'selected' : ''}`}
                  onClick={() => handleChange('visitType', 'telemedicine')}
                >
                  <i className="fas fa-video"></i>
                  <span>Telemedicine</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <div className="modal-step">
              <h3>Select Date</h3>
              <input
                type="date"
                className="date-input"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />

              <h3>Available Time Slots</h3>
              <div className="time-slots-grid">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                    onClick={() => handleChange('time', time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Patient Information */}
          {step === 3 && (
            <div className="modal-step">
              <div className="patient-type-toggle">
                <button
                  className={formData.isNewPatient ? 'active' : ''}
                  onClick={() => handleChange('isNewPatient', true)}
                >
                  New Patient
                </button>
                <button
                  className={!formData.isNewPatient ? 'active' : ''}
                  onClick={() => handleChange('isNewPatient', false)}
                >
                  Returning Patient
                </button>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => handleChange('dob', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Reason for Visit</label>
                <textarea
                  placeholder="Please describe your symptoms or reason for the appointment..."
                  value={formData.reason}
                  onChange={(e) => handleChange('reason', e.target.value)}
                  rows="3"
                ></textarea>
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="modal-actions">
          {step > 1 && (
            <button className="modal-btn back" onClick={() => setStep(step - 1)}>
              <i className="fas fa-arrow-left"></i>
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              className="modal-btn next"
              onClick={() => setStep(step + 1)}
              disabled={step === 1 && !formData.department}
            >
              Continue
              <i className="fas fa-arrow-right"></i>
            </button>
          ) : (
            <button className="modal-btn submit" onClick={handleSubmit}>
              <i className="fas fa-calendar-check"></i>
              Confirm Appointment
            </button>
          )}
        </div>

        {/* Summary Sidebar */}
        <div className="modal-summary">
          <h4>Appointment Summary</h4>
          <div className="summary-item">
            <span className="summary-label">Department</span>
            <span className="summary-value">{formData.department || '—'}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Visit Type</span>
            <span className="summary-value">{formData.visitType === 'in-person' ? 'In-Person' : 'Telemedicine'}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Date</span>
            <span className="summary-value">{formData.date || '—'}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Time</span>
            <span className="summary-value">{formData.time || '—'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
