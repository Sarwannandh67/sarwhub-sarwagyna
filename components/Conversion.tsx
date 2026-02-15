import React from 'react';

interface ConversionProps {
  setView: (view: 'home' | 'pricing' | 'about') => void;
}

const Conversion: React.FC<ConversionProps> = ({ setView }) => {
  return (
    <section id="final-conversion" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[64px] text-center relative overflow-hidden group border-white/10">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/[0.02] blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-normal mb-8 leading-tight tracking-tighter">
            Ready to <span className="metal italic">Scale?</span> <br />
            <span className="text-white">Start With Full Pricing Control.</span>
          </h2>
          
          <p className="text-white/60 text-base md:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-normal">
            No setup fees. No subscriptions. No surprises. <br />
            Just <span className="text-white font-medium">honest event infrastructure.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.open('https://admin.sarwhub.com/signup', '_blank')}
              className="bg-white text-black px-12 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all shadow-2xl shadow-white/20 active:scale-95 w-full sm:w-auto"
            >
              Host Your First Event
            </button>
            <button 
              onClick={() => setView('pricing')}
              className="glass border-white/10 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:bg-white/5 hover:border-white/30 transition-all active:scale-95 w-full sm:w-auto"
            >
              Calculate Your Earnings
            </button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/5">
            <p className="text-[10px] text-white/20 font-bold tracking-[0.4em] uppercase">
              Keep more from every ticket sold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversion;