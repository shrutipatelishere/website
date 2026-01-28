import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tests from './components/Tests';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Tests />
      <Process />
      <WhyUs />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
