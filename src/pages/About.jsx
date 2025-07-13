import React from 'react';
import './about.css';
import clinicImg from '../assets/clinic.jpg';
import doctorImg from '../assets/doctor.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Clinic Background Section */}
      <section className="clinic-background" style={{ backgroundImage: `url(${clinicImg})` }}>
        <div className="clinic-text">
          <h2>Welcome to SmileCare Dental Clinic</h2>
          <p>We provide gentle and advanced dental care with cutting-edge equipment and a patient-first philosophy.</p>
        </div>
      </section>

      {/* Practitioner Section */}
      <section className="practitioner-section container my-5">
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <img src={doctorImg} alt="Dr. Mehta" className="doctor-img" />
          </div>
          <div className="col-md-9">
            <h3>Dr. Arjun Mehta, BDS, MDS</h3>
            <p>With over 15 years of experience, Dr. Mehta specializes in restorative and cosmetic dentistry. His commitment to patient care and continuing education sets the tone for our clinic's excellence.</p>
          </div>
        </div>
      </section>

      {/* Mission / Philosophy */}
      <section className="mission-section text-center py-4 px-3">
        <h4>Our Mission</h4>
        <p>
          To provide affordable, ethical, and high-quality dental care in a welcoming and compassionate environment. We strive to empower our patients with knowledge and comfort in every visit.
        </p>
      </section>
    </div>
  );
};

export default About;
