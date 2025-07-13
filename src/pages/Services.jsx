import React, { useState } from 'react';
import './Services.css';

const services = [
  { title: 'Teeth Cleaning', description: 'Professional dental cleaning to keep your teeth healthy.', icon: '🦷' },
  { title: 'Teeth Whitening', description: 'Brighten your smile with our safe whitening treatments.', icon: '✨' },
  { title: 'Braces & Aligners', description: 'Orthodontic solutions for all ages.', icon: '🪥' },
  { title: 'Root Canal', description: 'Painless and effective root canal treatment.', icon: '🔬' },
  { title: 'Dental Implants', description: 'Permanent solutions for missing teeth.', icon: '🦷' },
  { title: 'Fillings & Restorations', description: 'Tooth-colored fillings that look natural.', icon: '🧪' },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="services-page">
      <h1>Our Dental Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-header" onClick={() => toggleDetails(index)}>
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
            </div>
            {activeIndex === index && (
              <div className="service-description">{service.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services