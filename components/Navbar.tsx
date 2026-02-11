
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl ${isScrolled ? 'top-4' : 'top-6'}`}>
      <div className={`glass px-8 py-4 rounded-[32px] flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-black/60 shadow-2xl backdrop-blur-xl border-white/20' : 'bg-transparent border-white/5'}`}>
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-medium text-2xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">S</div>
          <span className="font-medium text-2xl tracking-tighter hidden sm:block">SarwHub</span>
        </a>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
          <a href="#why-sarwhub" className="hover:text-white transition-colors">Why SarwHub</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#faq-contact" className="hover:text-white transition-colors">FAQ</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#comparison" className="hover:text-white transition-colors">Comparison</a>
        </div>

        <div>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-3 rounded-2xl text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-white/90 transition-all hover:scale-105 shadow-xl shadow-white/5"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
