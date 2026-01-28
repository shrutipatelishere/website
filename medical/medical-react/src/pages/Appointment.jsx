import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiCalendar, FiClock, FiCheckCircle } from 'react-icons/fi';
import { FaUserMd, FaHospital, FaHeartbeat, FaBrain, FaBone, FaEye, FaTooth, FaBaby } from 'react-icons/fa';
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
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    { id: 'cardiology', name: 'Cardiology', icon: <FaHeartbeat /> },
    { id: 'neurology', name: 'Neurology', icon: <FaBrain /> },
    { id: 'orthopedics', name: 'Orthopedics', icon: <FaBone /> },
    { id: 'ophthalmology', name: 'Ophthalmology', icon: <FaEye /> },
    { id: 'dental', name: 'Dental Care', icon: <FaTooth /> },
    { id: 'pediatrics', name: 'Pediatrics', icon: <FaBaby /> },
  ];

  const doctors = {
    cardiology: ['Dr. John Smith', 'Dr. David Martinez'],
    neurology: ['Dr. Sarah Johnson', 'Dr. Amanda Thompson'],
    orthopedics: ['Dr. Michael Brown', 'Dr. Mark Taylor'],
    ophthalmology: ['Dr. Jennifer Lee'],
    dental: ['Dr. Robert Wilson'],
    pediatrics: ['Dr. Emily Davis', 'Dr. Lisa Chen'],
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset doctor when department changes
    if (name === 'department') {
      setFormData(prev => ({ ...prev, [name]: value, doctor: '' }));
    }
  };

  const selectDepartment = (deptId) => {
    setFormData({ ...formData, department: deptId, doctor: '' });
  };

  const selectTime = (time) => {
    setFormData({ ...formData, time });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.department && formData.doctor;
      case 2:
        return formData.date && formData.time;
      case 3:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="appointment-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <section className="page-header">
          <div className="page-header-bg"></div>
          <div className="container">
            <div className="page-header-content">
              <h1>Appointment Booked!</h1>
              <p>Your appointment has been successfully scheduled</p>
            </div>
          </div>
        </section>
        <section className="success-section">
          <div className="container">
            <motion.div
              className="success-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">
                <FiCheckCircle />
              </div>
              <h2>Thank You!</h2>
              <p>Your appointment has been confirmed. We've sent a confirmation email to <strong>{formData.email}</strong></p>
              <div className="booking-details">
                <div className="detail-item">
                  <FaHospital />
                  <span>{departments.find(d => d.id === formData.department)?.name}</span>
                </div>
                <div className="detail-item">
                  <FaUserMd />
                  <span>{formData.doctor}</span>
                </div>
                <div className="detail-item">
                  <FiCalendar />
                  <span>{formData.date}</span>
                </div>
                <div className="detail-item">
                  <FiClock />
                  <span>{formData.time}</span>
                </div>
              </div>
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="appointment-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg"></div>
        <div className="container">
          <motion.div
            className="page-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Book Appointment</h1>
            <p>Schedule your visit with our expert doctors</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Appointment</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="appointment-section">
        <div className="container">
          {/* Progress Steps */}
          <div className="progress-steps">
            <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="step-number">1</div>
              <span>Select Service</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="step-number">2</div>
              <span>Choose Date & Time</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <span>Your Details</span>
            </div>
          </div>

          {/* Form Steps */}
          <motion.div
            className="form-wrapper"
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Select Department & Doctor */}
            {step === 1 && (
              <div className="form-step">
                <h2>Select Department & Doctor</h2>
                <p>Choose the department and doctor for your appointment</p>

                <div className="department-grid">
                  {departments.map((dept) => (
                    <div
                      key={dept.id}
                      className={`department-card ${formData.department === dept.id ? 'selected' : ''}`}
                      onClick={() => selectDepartment(dept.id)}
                    >
                      <div className="dept-icon">{dept.icon}</div>
                      <span>{dept.name}</span>
                    </div>
                  ))}
                </div>

                {formData.department && (
                  <motion.div
                    className="doctor-selection"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3>Select Doctor</h3>
                    <div className="doctor-options">
                      {doctors[formData.department]?.map((doctor) => (
                        <label key={doctor} className={`doctor-option ${formData.doctor === doctor ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="doctor"
                            value={doctor}
                            checked={formData.doctor === doctor}
                            onChange={handleChange}
                          />
                          <FaUserMd />
                          <span>{doctor}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Step 2: Select Date & Time */}
            {step === 2 && (
              <div className="form-step">
                <h2>Choose Date & Time</h2>
                <p>Select your preferred appointment date and time slot</p>

                <div className="datetime-selection">
                  <div className="date-picker">
                    <label>Select Date</label>
                    <div className="input-with-icon">
                      <FiCalendar />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  {formData.date && (
                    <motion.div
                      className="time-slots"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <label>Select Time Slot</label>
                      <div className="slots-grid">
                        {timeSlots.map((time) => (
                          <div
                            key={time}
                            className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                            onClick={() => selectTime(time)}
                          >
                            <FiClock />
                            <span>{time}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <div className="form-step">
                <h2>Your Details</h2>
                <p>Please provide your contact information</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <div className="input-with-icon">
                        <FiUser />
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <div className="input-with-icon">
                        <FiMail />
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <div className="input-with-icon">
                        <FiPhone />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group full-width">
                    <label>Additional Message (Optional)</label>
                    <textarea
                      name="message"
                      placeholder="Any specific concerns or requirements?"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* Booking Summary */}
                  <div className="booking-summary">
                    <h3>Booking Summary</h3>
                    <div className="summary-details">
                      <div className="summary-item">
                        <span>Department:</span>
                        <strong>{departments.find(d => d.id === formData.department)?.name}</strong>
                      </div>
                      <div className="summary-item">
                        <span>Doctor:</span>
                        <strong>{formData.doctor}</strong>
                      </div>
                      <div className="summary-item">
                        <span>Date:</span>
                        <strong>{formData.date}</strong>
                      </div>
                      <div className="summary-item">
                        <span>Time:</span>
                        <strong>{formData.time}</strong>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {step > 1 && (
                <button type="button" className="btn btn-outline" onClick={prevStep}>
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={nextStep}
                  disabled={!canProceed()}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Appointment;
