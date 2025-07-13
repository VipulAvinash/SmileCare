import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import hero from '../assets/hero.jpg'; 

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-5 fw-bold text-primary">Smile with Confidence</h1>
              <p className="lead text-secondary">Expert Care for a Healthier Tomorrow</p>
              <p>Your smile, our commitment.</p>
              <Link to="/contact">
                <button className="btn btn-primary btn-lg mt-3">Book Appointment</button>
              </Link>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={hero}
                alt="Hero banner"
                className="img-fluid rounded shadow hero-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="site-intro-section py-5 bg-light">
  <div className="container text-center">
    <h2 className="mb-3">Welcome to SmileCare</h2>
    <p className="lead text-muted">
      At SmileCare Dental Clinic, we believe that a healthy smile is a reflection of a healthy life.
      Our website is designed to give you easy access to our dental services, help you understand your treatment options,
      and simplify your appointment booking experience.
    </p>
  </div>
</section>
       <section className="services-overview container py-5">
        <h2 className="mb-4">Our Services</h2>
        <div className="row g-3">
          {['Cleaning', 'Whitening', 'Braces', 'Fillings', 'Implants', 'Root Canal'].map((service, index) => (
            <div className="col-6 col-md-4" key={index}>
              <div className="p-3 border rounded text-center bg-light service-card">
                {service === 'Whitening' ? '🦷' : '🦷'} {service}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
