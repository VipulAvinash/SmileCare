import React, { useState } from 'react'; 
import checkup from '../assets/patient-checkup.jpg'; 
const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We provide cleaning, whitening, braces, implants, root canal treatments, and more.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'Scheduling an appointment at SmileCare is easy! You can book your appointment online through our user-friendly website, or contact us directly by phone.',
  },
  {
    question: 'Can teeth whitening cause damage?',
    answer:
      'This process does not damage the tooth layers or integrity of the tooth, but can sometimes lead to temporary tooth sensitivity.',
  },
  {
    question: 'What are dental clinic timings?',
    answer: 'Our dental clinic operates during “9:00 AM to 8:00 PM” convenient time slots to accommodate your busy schedule.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-md-6 text-center">
          <img
           src={checkup}
            alt="Dental checkup"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="text-primary text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {faqData.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`collapse${index}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
