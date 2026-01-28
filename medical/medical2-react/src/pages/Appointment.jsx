import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiClock, HiUser, HiPhone, HiMail, HiCheckCircle } from 'react-icons/hi';
import { FaUserMd, FaStethoscope } from 'react-icons/fa';
import './Appointment.css';

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    reason: '',
    isNewPatient: 'yes'
  });
  const [submitted, setSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const departments = [
    { id: 'cardiology', name: 'Cardiology', icon: '❤️' },
    { id: 'neurology', name: 'Neurology', icon: '🧠' },
    { id: 'orthopedics', name: 'Orthopedics', icon: '🦴' },
    { id: 'pediatrics', name: 'Pediatrics', icon: '👶' },
    { id: 'general', name: 'General Medicine', icon: '🩺' },
    { id: 'ophthalmology', name: 'Ophthalmology', icon: '👁️' },
  ];

  const doctors = {
    cardiology: [
      { id: 1, name: 'Dr. Richard Thompson', available: ['09:00', '10:00', '14:00', '15:00'] },
      { id: 7, name: 'Dr. Robert Lee', available: ['10:00', '11:00', '13:00', '16:00'] },
    ],
    neurology: [
      { id: 2, name: 'Dr. Maria Santos', available: ['09:00', '11:00', '14:00', '16:00'] },
    ],
    orthopedics: [
      { id: 3, name: 'Dr. James Wilson', available: ['08:00', '10:00', '13:00', '15:00'] },
    ],
    pediatrics: [
      { id: 4, name: 'Dr. Sarah Chen', available: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { id: 8, name: 'Dr. Jennifer Adams', available: ['10:00', '13:00', '14:00', '16:00'] },
    ],
    general: [
      { id: 5, name: 'Dr. Michael Brown', available: ['08:00', '09:00', '10:00', '14:00', '15:00', '16:00'] },
    ],
    ophthalmology: [
      { id: 6, name: 'Dr. Emily Davis', available: ['09:00', '11:00', '14:00', '15:00'] },
    ],
  };

  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

  const getAvailableTimes = () => {
    if (!formData.department || !formData.doctor) return [];
    const deptDoctors = doctors[formData.department] || [];
    const selectedDoc = deptDoctors.find(d => d.name === formData.doctor);
    return selectedDoc ? selectedDoc.available : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    if (step === 1) return formData.department && formData.doctor;
    if (step === 2) return formData.date && formData.time;
    return formData.name && formData.email && formData.phone;
  };

  return (
    <motion.div className="appointment-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="page-header">
        <div className="container">
          <motion.div className="page-header-content" {...fadeIn}>
            <span className="section-label">Book Now</span>
            <h1>Schedule an Appointment</h1>
            <p>Book your visit with our expert medical professionals in just a few steps.</p>
          </motion.div>
        </div>
      </section>

      <section className="appointment-main section">
        <div className="container">
          {submitted ? (
            <motion.div className="confirmation-card" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <div className="confirmation-icon">
                <HiCheckCircle />
              </div>
              <h2>Appointment Confirmed!</h2>
              <p>Your appointment has been successfully scheduled.</p>

              <div className="confirmation-details">
                <div className="detail-row">
                  <FaStethoscope />
                  <div>
                    <span>Department</span>
                    <strong>{departments.find(d => d.id === formData.department)?.name}</strong>
                  </div>
                </div>
                <div className="detail-row">
                  <FaUserMd />
                  <div>
                    <span>Doctor</span>
                    <strong>{formData.doctor}</strong>
                  </div>
                </div>
                <div className="detail-row">
                  <HiCalendar />
                  <div>
                    <span>Date</span>
                    <strong>{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                  </div>
                </div>
                <div className="detail-row">
                  <HiClock />
                  <div>
                    <span>Time</span>
                    <strong>{formData.time}</strong>
                  </div>
                </div>
              </div>

              <p className="confirmation-note">A confirmation email has been sent to <strong>{formData.email}</strong></p>
              <button className="btn btn-primary btn-lg" onClick={() => { setSubmitted(false); setStep(1); setFormData({ department: '', doctor: '', date: '', time: '', name: '', email: '', phone: '', reason: '', isNewPatient: 'yes' }); }}>
                Book Another Appointment
              </button>
            </motion.div>
          ) : (
            <div className="appointment-content">
              {/* Progress Steps */}
              <div className="progress-steps">
                <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                  <div className="step-number">1</div>
                  <span>Select Doctor</span>
                </div>
                <div className="progress-line"></div>
                <div className={`progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                  <div className="step-number">2</div>
                  <span>Choose Time</span>
                </div>
                <div className="progress-line"></div>
                <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                  <div className="step-number">3</div>
                  <span>Your Details</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Select Department & Doctor */}
                {step === 1 && (
                  <motion.div className="form-step" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h2>Select Department & Doctor</h2>
                    <p>Choose the department and doctor for your appointment.</p>

                    <div className="form-section">
                      <label className="form-label">Select Department</label>
                      <div className="department-grid">
                        {departments.map(dept => (
                          <div
                            key={dept.id}
                            className={`department-card ${formData.department === dept.id ? 'selected' : ''}`}
                            onClick={() => setFormData({ ...formData, department: dept.id, doctor: '' })}
                          >
                            <span className="dept-icon">{dept.icon}</span>
                            <span className="dept-name">{dept.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {formData.department && (
                      <motion.div className="form-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <label className="form-label">Select Doctor</label>
                        <div className="doctor-options">
                          {doctors[formData.department]?.map(doc => (
                            <div
                              key={doc.id}
                              className={`doctor-option ${formData.doctor === doc.name ? 'selected' : ''}`}
                              onClick={() => setFormData({ ...formData, doctor: doc.name })}
                            >
                              <div className="doctor-option-icon">
                                <FaUserMd />
                              </div>
                              <div className="doctor-option-info">
                                <strong>{doc.name}</strong>
                                <span>{departments.find(d => d.id === formData.department)?.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Select Date & Time */}
                {step === 2 && (
                  <motion.div className="form-step" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h2>Choose Date & Time</h2>
                    <p>Select your preferred appointment date and time slot.</p>

                    <div className="form-section">
                      <label className="form-label">Select Date</label>
                      <div className="date-input-wrapper">
                        <HiCalendar />
                        <input
                          type="date"
                          className="form-input"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>

                    {formData.date && (
                      <motion.div className="form-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <label className="form-label">Available Time Slots</label>
                        <div className="time-slots">
                          {timeSlots.map(time => {
                            const isAvailable = getAvailableTimes().includes(time);
                            return (
                              <button
                                key={time}
                                type="button"
                                className={`time-slot ${formData.time === time ? 'selected' : ''} ${!isAvailable ? 'disabled' : ''}`}
                                onClick={() => isAvailable && setFormData({ ...formData, time })}
                                disabled={!isAvailable}
                              >
                                <HiClock />
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 3: Patient Information */}
                {step === 3 && (
                  <motion.div className="form-step" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h2>Your Information</h2>
                    <p>Please provide your contact details.</p>

                    <div className="form-section">
                      <div className="radio-group">
                        <label className="form-label">Are you a new patient?</label>
                        <div className="radio-options">
                          <label className={`radio-option ${formData.isNewPatient === 'yes' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="isNewPatient"
                              value="yes"
                              checked={formData.isNewPatient === 'yes'}
                              onChange={(e) => setFormData({ ...formData, isNewPatient: e.target.value })}
                            />
                            <span>Yes, I'm new</span>
                          </label>
                          <label className={`radio-option ${formData.isNewPatient === 'no' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="isNewPatient"
                              value="no"
                              checked={formData.isNewPatient === 'no'}
                              onChange={(e) => setFormData({ ...formData, isNewPatient: e.target.value })}
                            />
                            <span>No, returning patient</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <div className="input-with-icon">
                          <HiUser />
                          <input
                            type="text"
                            className="form-input"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <div className="input-with-icon">
                          <HiPhone />
                          <input
                            type="tel"
                            className="form-input"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <div className="input-with-icon">
                        <HiMail />
                        <input
                          type="email"
                          className="form-input"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Reason for Visit (Optional)</label>
                      <textarea
                        className="form-input"
                        rows="3"
                        placeholder="Briefly describe your symptoms or reason for the appointment..."
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      ></textarea>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="form-navigation">
                  {step > 1 && (
                    <button type="button" className="btn btn-outline" onClick={prevStep}>
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button type="button" className="btn btn-primary" onClick={nextStep} disabled={!canProceed()}>
                      Continue
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary" disabled={!canProceed()}>
                      Confirm Appointment
                    </button>
                  )}
                </div>
              </form>

              {/* Appointment Summary Sidebar */}
              <div className="appointment-summary">
                <h3>Appointment Summary</h3>
                <div className="summary-content">
                  {formData.department && (
                    <div className="summary-item">
                      <FaStethoscope />
                      <div>
                        <span>Department</span>
                        <strong>{departments.find(d => d.id === formData.department)?.name}</strong>
                      </div>
                    </div>
                  )}
                  {formData.doctor && (
                    <div className="summary-item">
                      <FaUserMd />
                      <div>
                        <span>Doctor</span>
                        <strong>{formData.doctor}</strong>
                      </div>
                    </div>
                  )}
                  {formData.date && (
                    <div className="summary-item">
                      <HiCalendar />
                      <div>
                        <span>Date</span>
                        <strong>{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</strong>
                      </div>
                    </div>
                  )}
                  {formData.time && (
                    <div className="summary-item">
                      <HiClock />
                      <div>
                        <span>Time</span>
                        <strong>{formData.time}</strong>
                      </div>
                    </div>
                  )}
                  {!formData.department && !formData.doctor && !formData.date && !formData.time && (
                    <p className="summary-empty">Select your options to see the summary</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Appointment;
