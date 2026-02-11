
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySarwHub from './components/WhySarwHub';
import UseCases from './components/UseCases';
import Features from './components/Features';
import Segments from './components/Segments';
import Comparison from './components/Comparison';
import Education from './components/Education';
import Widget from './components/Widget';
import Demo from './components/Demo';
import FAQ from './components/FAQ';
import Conversion from './components/Conversion';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-white/20 bg-black text-white overflow-x-hidden">
      <Navbar />
      <main id="home">
        <Hero />
        <WhySarwHub />
        <UseCases />
        <Features />
        <Segments />
        <Comparison />
        <Education />
        <Widget />
        <Demo />
        <FAQ />
        <Conversion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
