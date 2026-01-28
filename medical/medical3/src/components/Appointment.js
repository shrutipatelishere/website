import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      doctor: '',
      date: '',
      time: '',
      message: '',
    });
  };

  const departments = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Dermatology',
    'Oncology',
  ];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="appointment-grid">
          <div className="appointment-info">
            <span className="section-tag">Book Appointment</span>
            <h2 className="section-title">
              Schedule Your <span className="text-primary">Appointment</span>
            </h2>
            <p>
              Take the first step towards better health. Book an appointment with our
              specialists today.
            </p>

            <div className="appointment-features">
              <div className="appt-feature">
                <div className="appt-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="appt-text">
                  <h4>Quick & Easy Booking</h4>
                  <p>Book your appointment in just a few clicks</p>
                </div>
              </div>
              <div className="appt-feature">
                <div className="appt-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="appt-text">
                  <h4>Flexible Scheduling</h4>
                  <p>Choose a time that works best for you</p>
                </div>
              </div>
              <div className="appt-feature">
                <div className="appt-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <div className="appt-text">
                  <h4>Appointment Reminders</h4>
                  <p>Never miss an appointment with our reminders</p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <span>Call Us</span>
                  <strong>+1 (555) 123-4567</strong>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <span>Email Us</span>
                  <strong>hello@prohealth.com</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="appointment-form-wrapper">
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <div className="input-wrapper">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <div className="input-wrapper">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
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
                  <div className="input-wrapper">
                    <i className="fas fa-phone"></i>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <div className="input-wrapper">
                    <i className="fas fa-hospital"></i>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept.toLowerCase()}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date</label>
                  <div className="input-wrapper">
                    <i className="fas fa-calendar"></i>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Preferred Time</label>
                  <div className="input-wrapper">
                    <i className="fas fa-clock"></i>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Message (Optional)</label>
                <div className="input-wrapper textarea">
                  <i className="fas fa-comment-medical"></i>
                  <textarea
                    name="message"
                    placeholder="Describe your symptoms or concerns..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <span>Confirm Appointment</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
