import React from 'react';

const Booking = () => {
  return (
    <section id="booking" className="booking">
      <div className="section-container">
        <div className="booking-wrapper">
          <div className="booking-content">
            <span className="section-tag light">Book Now</span>
            <h2>Ready to Take Control of Your Health?</h2>
            <p>Schedule your health checkup today and get instant 20% off on your first booking.</p>

            <div className="booking-features">
              <div className="bf-item">
                <i className="fas fa-check-circle"></i>
                <span>Free Home Collection</span>
              </div>
              <div className="bf-item">
                <i className="fas fa-check-circle"></i>
                <span>Reports in 24 Hours</span>
              </div>
              <div className="bf-item">
                <i className="fas fa-check-circle"></i>
                <span>Free Doctor Consultation</span>
              </div>
            </div>
          </div>

          <div className="booking-form">
            <h3>Book Your Test</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Mobile Number" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select Test/Package</option>
                  <option value="essential">Essential Wellness - ₹999</option>
                  <option value="complete">Complete Health - ₹1,799</option>
                  <option value="executive">Executive Premium - ₹2,999</option>
                  <option value="cbc">Complete Blood Count - ₹249</option>
                  <option value="thyroid">Thyroid Profile - ₹349</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Pincode" required />
              </div>
              <button type="submit" className="submit-btn">
                Book Appointment
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <p className="form-note">
              <i className="fas fa-lock"></i> Your information is secure with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
