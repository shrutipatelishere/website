import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiCalendar,
  HiClock,
  HiUser,
  HiPhone,
  HiMail,
  HiCheckCircle,
  HiArrowRight,
  HiArrowLeft
} from 'react-icons/hi';
import { FaEye, FaUserMd } from 'react-icons/fa';
import './Appointment.css';

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    reason: '',
    isNewPatient: 'yes',
    insurance: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { id: 'eye-exam', name: 'Comprehensive Eye Exam', duration: '45 min', price: '$99' },
    { id: 'contact-lens', name: 'Contact Lens Fitting', duration: '30 min', price: '$149' },
    { id: 'lasik-consult', name: 'LASIK Consultation', duration: '60 min', price: 'Free' },
    { id: 'glaucoma', name: 'Glaucoma Screening', duration: '30 min', price: '$129' },
    { id: 'pediatric', name: 'Pediatric Eye Exam', duration: '45 min', price: '$79' },
    { id: 'retina', name: 'Retinal Examination', duration: '45 min', price: '$149' },
  ];

  const doctors = [
    { id: 1, name: 'Dr. Martin Chen', specialty: 'Ophthalmologist', available: ['09:00', '10:00', '14:00', '15:00'] },
    { id: 2, name: 'Dr. Kullok Dash', specialty: 'Retina Specialist', available: ['10:00', '11:00', '13:00', '16:00'] },
    { id: 3, name: 'Dr. Shelly Adams', specialty: 'Pediatric Ophthalmologist', available: ['09:00', '10:00', '11:00', '14:00'] },
    { id: 4, name: 'Dr. Andrew Wilson', specialty: 'Glaucoma Specialist', available: ['08:00', '09:00', '14:00', '15:00'] },
    { id: 5, name: 'Dr. James Rodriguez', specialty: 'LASIK Surgeon', available: ['09:00', '11:00', '14:00', '16:00'] },
  ];

  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

  const getAvailableTimes = () => {
    if (!formData.doctor) return [];
    const selectedDoc = doctors.find(d => d.name === formData.doctor);
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
    if (step === 1) return formData.service && formData.doctor;
    if (step === 2) return formData.date && formData.time;
    return formData.name && formData.email && formData.phone;
  };

  const selectedService = services.find(s => s.id === formData.service);
  const selectedDoctor = doctors.find(d => d.name === formData.doctor);

  return (
    <motion.div
      className="appointment-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="appointment-hero">
        <div className="container">
          <motion.div
            className="appointment-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-badge">
              <HiCalendar /> Book Now
            </div>
            <h1>Schedule Your Appointment</h1>
            <p>
              Book your visit with our expert eye care specialists in just a few simple steps.
              Your vision is our priority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Main */}
      <section className="appointment-main section">
        <div className="container">
          {submitted ? (
            <motion.div
              className="confirmation-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="confirmation-icon">
                <HiCheckCircle />
              </div>
              <h2>Appointment Confirmed!</h2>
              <p>Your appointment has been successfully scheduled.</p>

              <div className="confirmation-details">
                <div className="detail-row">
                  <FaEye />
                  <div>
                    <span>Service</span>
                    <strong>{selectedService?.name}</strong>
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
                    <strong>
                      {new Date(formData.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </strong>
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

              <p className="confirmation-note">
                A confirmation email has been sent to <strong>{formData.email}</strong>
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setFormData({
                    service: '',
                    doctor: '',
                    date: '',
                    time: '',
                    name: '',
                    email: '',
                    phone: '',
                    reason: '',
                    isNewPatient: 'yes',
                    insurance: ''
                  });
                }}
              >
                Book Another Appointment
              </button>
            </motion.div>
          ) : (
            <div className="appointment-content">
              {/* Progress Steps */}
              <div className="progress-steps">
                <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                  <div className="step-number">1</div>
                  <span>Select Service</span>
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

              <div className="appointment-form-container">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Select Service & Doctor */}
                  {step === 1 && (
                    <motion.div
                      className="form-step"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h2>Select Service & Doctor</h2>
                      <p>Choose the service you need and your preferred doctor.</p>

                      <div className="form-section">
                        <label className="form-label">Select Service</label>
                        <div className="service-grid">
                          {services.map(service => (
                            <div
                              key={service.id}
                              className={`service-option ${formData.service === service.id ? 'selected' : ''}`}
                              onClick={() => setFormData({ ...formData, service: service.id })}
                            >
                              <div className="service-option-header">
                                <span className="service-name">{service.name}</span>
                                <span className="service-price">{service.price}</span>
                              </div>
                              <span className="service-duration">{service.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {formData.service && (
                        <motion.div
                          className="form-section"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <label className="form-label">Select Doctor</label>
                          <div className="doctor-options">
                            {doctors.map(doc => (
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
                                  <span>{doc.specialty}</span>
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
                    <motion.div
                      className="form-step"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
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
                        <motion.div
                          className="form-section"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
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
                    <motion.div
                      className="form-step"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
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
                              <span>Returning patient</span>
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
                        <label className="form-label">Insurance Provider (Optional)</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter your insurance provider"
                          value={formData.insurance}
                          onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                        />
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
                      <button type="button" className="btn btn-secondary" onClick={prevStep}>
                        <HiArrowLeft /> Back
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={nextStep}
                        disabled={!canProceed()}
                      >
                        Continue <HiArrowRight />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!canProceed()}
                      >
                        Confirm Appointment <HiCheckCircle />
                      </button>
                    )}
                  </div>
                </form>

                {/* Appointment Summary Sidebar */}
                <div className="appointment-summary">
                  <h3>Appointment Summary</h3>
                  <div className="summary-content">
                    {formData.service && (
                      <div className="summary-item">
                        <FaEye />
                        <div>
                          <span>Service</span>
                          <strong>{selectedService?.name}</strong>
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
                          <strong>
                            {new Date(formData.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </strong>
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
                    {!formData.service && !formData.doctor && !formData.date && !formData.time && (
                      <p className="summary-empty">Select your options to see the summary</p>
                    )}
                  </div>
                  {selectedService && (
                    <div className="summary-total">
                      <span>Estimated Cost</span>
                      <strong>{selectedService.price}</strong>
                    </div>
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
