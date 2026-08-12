import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Maestro from './components/Maestro';
import LiveStatus from './components/LiveStatus';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main id="top">
        <Hero />
        <div className="wrap"><div className="divider" /></div>
        <About />
        <Services />
        <Maestro />
        <LiveStatus />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
