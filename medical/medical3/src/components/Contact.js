import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fa-location-dot',
      title: 'Visit Us',
      lines: ['123 Healthcare Avenue', 'Medical District, NY 10001'],
    },
    {
      icon: 'fa-phone-alt',
      title: 'Call Us',
      lines: ['Main: +1 (555) 123-4567', 'Emergency: +1 (555) 911-0000'],
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      lines: ['info@prohealth.com', 'support@prohealth.com'],
    },
    {
      icon: 'fa-clock',
      title: 'Working Hours',
      lines: ['Mon - Fri: 8AM - 8PM', 'Sat - Sun: 9AM - 5PM'],
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">
            Find <span className="text-primary">Us Here</span>
          </h2>
          <p className="section-desc">
            We're here to help! Reach out to us through any of these channels.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <div className="contact-card" key={index}>
                <div className="contact-card-icon">
                  <i className={`fas ${info.icon}`}></i>
                </div>
                <div className="contact-card-content">
                  <h4>{info.title}</h4>
                  {info.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949927!2d-74.11976389828743!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ProHealth Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
