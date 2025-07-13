import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <p className="mb-0 fw-light">&copy; 2002 SmileCare Dental Clinic. All rights reserved.</p>
        <div className="d-flex gap-3">
          <a
            href="/feedback"
            className="text-light text-decoration-none small"
            style={{ transition: 'color 0.3s' }}
            onMouseEnter={e => (e.target.style.color = '#ffc107')}
            onMouseLeave={e => (e.target.style.color = '')}
          >
            Feedback
          </a>
          <a
            href="/privacypolicy"
            className="text-light text-decoration-none small"
            style={{ transition: 'color 0.3s' }}
            onMouseEnter={e => (e.target.style.color = '#ffc107')}
            onMouseLeave={e => (e.target.style.color = '')}
          >
            Privacy Policy
          </a>
          <a
            href="/Grievance"
            className="text-light text-decoration-none small"
            style={{ transition: 'color 0.3s' }}
            onMouseEnter={e => (e.target.style.color = '#ffc107')}
            onMouseLeave={e => (e.target.style.color = '')}
          >
            Grievance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
