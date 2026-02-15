import React from 'react';
import { TicketIcon } from './Icons.tsx';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 text-white/60">Live Experience</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Your <span className="metal italic">Event</span>, Embedded.</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium">See how the SarwHub widget integrates seamlessly into your existing web presence.</p>
        </div>

        {/* Mock Browser UI */}
        <div className="glass rounded-[40px] overflow-hidden border-white/10 shadow-2xl shadow-white/5">
          <div className="bg-neutral-900 px-6 py-4 border-b border-white/5 flex items-center gap-4">
            <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            <div className="bg-black/40 rounded-lg px-4 py-1 text-[10px] text-white/30 font-medium flex-grow text-center">
              https://yourbrand.com/events/summit-2024
            </div>
            <div className="w-12"></div>
          </div>
          
          {/* Mock Website Content */}
          <div className="p-8 md:p-16 bg-[#0a0a0a] min-h-[500px] flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-2xl grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-black mb-4 text-white">The Future Summit</h3>
                <p className="text-white/40 text-sm mb-6 leading-relaxed">
                  Join us for the most exclusive gathering of digital creators and entrepreneurs in New Delhi.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    October 14-16, 2024
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    Taj Palace, New Delhi
                  </div>
                </div>
              </div>

              {/* The Live Widget Component */}
              <div className="glass p-8 rounded-[32px] border-white/20 shadow-xl bg-black/60 backdrop-blur-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 bg-white text-black rounded-xl">
                    <TicketIcon />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Secure Ticketing</p>
                    <p className="text-sm font-bold text-white">Select Tickets</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="group cursor-pointer">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all">
                      <div>
                        <p className="text-xs font-bold text-white">Full Access</p>
                        <p className="text-[9px] text-white/40">Early Bird Rate</p>
                      </div>
                      <p className="text-xs font-black text-white">₹4,999</p>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all">
                      <div>
                        <p className="text-xs font-bold text-white">Student Pass</p>
                        <p className="text-[9px] text-white/40">Requires Valid ID</p>
                      </div>
                      <p className="text-xs font-black text-white">₹1,499</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-white text-black rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-white/10">
                  Book Now
                </button>
                
                <div className="mt-4 flex items-center justify-center gap-2 opacity-30">
                   <p className="text-[8px] font-bold uppercase tracking-widest">Powered by</p>
                   <div className="w-3 h-3 bg-white rounded-[2px]"></div>
                   <p className="text-[8px] font-black tracking-tight">SarwHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;