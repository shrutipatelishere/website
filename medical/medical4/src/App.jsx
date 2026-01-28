import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EmergencyBanner from './components/EmergencyBanner';
import LiveStats from './components/LiveStats';
import DepartmentExplorer from './components/DepartmentExplorer';
import VirtualTour from './components/VirtualTour';
import DoctorSpotlight from './components/DoctorSpotlight';
import PatientJourney from './components/PatientJourney';
import HealthTools from './components/HealthTools';
import Testimonials3D from './components/Testimonials3D';
import NewsResearch from './components/NewsResearch';
import AppointmentModal from './components/AppointmentModal';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Custom Cursor Glow Effect */}
      <div
        className="cursor-glow"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <Navbar onBookAppointment={() => setIsAppointmentOpen(true)} />
      <HeroSection onBookAppointment={() => setIsAppointmentOpen(true)} />
      <EmergencyBanner />
      <LiveStats />
      <DepartmentExplorer />
      <VirtualTour />
      <DoctorSpotlight />
      <PatientJourney />
      <HealthTools />
      <Testimonials3D />
      <NewsResearch />
      <Footer />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      {/* Back to Top */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-rocket"></i>
      </button>
    </div>
  );
}

export default App;
