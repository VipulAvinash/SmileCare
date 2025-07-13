import React, { useState } from 'react';
import axios from 'axios';
//import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Contact Us</h2>

      <div className="row justify-content-center mb-5">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm p-4">
            {success && (
              <div className="alert alert-success text-center" role="alert">
                ✅ Message sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="row align-items-stretch">
        <div className="col-md-6 mb-4">
          <div className="bg-light p-4 shadow-sm h-100 rounded">
            <h5 className="text-primary mb-3">Our Address</h5>
            <p><b>SmileCare Dental Clinic</b></p>
            <p>PVR Mall, Musurmbagh, Malakpet<br/>Hyderabad, Telangana - 500001<br/>Phone: +91 98765 43210<br/>Email: info@smilecare.com</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="ratio ratio-4x3 shadow-sm rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.095364100874!2d78.47470997469748!3d17.44775310130914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f25ecbd1ef%3A0x11fbb94b64dfc1e!2sHyderabad%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1628253058032!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
