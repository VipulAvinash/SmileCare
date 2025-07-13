import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Components
import Header from './components/Header';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
           <FAQ/>
          <Footer/>
         
        </main>

  
      </div>
    </Router>
  );
};

export default App;
