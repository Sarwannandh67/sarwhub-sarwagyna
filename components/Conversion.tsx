
import React from 'react';

const Conversion: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[64px] text-center relative overflow-hidden group border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 blur-[120px] rounded-full"></div>
        
        <h2 className="text-4xl md:text-6xl font-normal mb-6 leading-tight tracking-tighter">
          Own Your <span className="metal italic">Audience</span>. <br /> 
          <span className="text-white/40">Keep Your Brand in Control.</span>
        </h2>
        
        <p className="text-white/40 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed font-normal">
          The professional backbone for modern organizers. Scale your events without sacrificing your brand or data ownership.
        </p>
        
        <button className="bg-white text-black px-10 py-4 rounded-[20px] text-lg font-medium hover:scale-105 transition-all shadow-2xl shadow-white/20 active:scale-95">
          Start Selling in Minutes
        </button>
        
        <div className="mt-10 text-[10px] text-white/20 font-medium tracking-[0.2em] uppercase">
          Trusted by Top-Tier Event Professionals
        </div>
      </div>
    </section>
  );
};

export default Conversion;
