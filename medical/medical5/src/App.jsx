import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import HealthPackages from './components/HealthPackages';
import AppointmentCTA from './components/AppointmentCTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <TrustBadges />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <HealthPackages />
      <AppointmentCTA />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
