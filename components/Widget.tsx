
import React from 'react';

const Widget: React.FC = () => {
  return (
    <section id="widget" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="glass p-1 rounded-3xl overflow-hidden shadow-2xl shadow-white/5">
              <div className="bg-neutral-900 px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-white/10"></div>
                   <div className="w-3 h-3 rounded-full bg-white/10"></div>
                   <div className="w-3 h-3 rounded-full bg-white/10"></div>
                </div>
                <div className="text-[10px] text-white/30 font-bold tracking-widest uppercase">Integration SDK</div>
                <div className="w-8"></div>
              </div>
              <div className="p-8 font-mono text-sm text-white/40 leading-relaxed overflow-x-auto bg-black/40">
                <span className="text-purple-400">import</span> {'{'} SarwWidget {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@sarwhub/sdk'</span>;<br /><br />
                <span className="text-purple-400">const</span> App = () ={'>'} (<br />
                &nbsp;&nbsp;{'<'}<span className="text-blue-400">SarwWidget</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">eventId</span>=<span className="text-green-400">"event_4920"</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">theme</span>=<span className="text-green-400">"minimal-dark"</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">accentColor</span>=<span className="text-green-400">"#ffffff"</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">onSuccess</span>={`={() => console.log(`}<span className="text-green-400">'Booked!'</span>{`)}`}<br />
                &nbsp;&nbsp;{'/'}{'>'}<br />
                );
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">Sell Tickets Directly <br /> on Your Own Site</h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed font-medium">
              Maintain a seamless checkout experience. Our embeddable widget lets you sell tickets without ever sending customers away.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full font-black text-xs">1</div>
                <span className="text-white/80 font-bold">Works with React, WordPress, Wix, Squarespace, & HTML</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full font-black text-xs">2</div>
                <span className="text-white/80 font-bold">Fully brand-customizable to match your design system</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full font-black text-xs">3</div>
                <span className="text-white/80 font-bold">Mobile responsive & conversion optimized out-of-the-box</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full font-black text-xs">4</div>
                <span className="text-white/80 font-bold">Zero coding required — just copy and paste the snippet</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:scale-[1.05] transition-all shadow-lg shadow-white/5">
                 Get Integration Code
               </button>
               <a href="#demo" className="glass px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all border-white/10 flex items-center justify-center gap-2">
                 <span>Explore Widget Demo</span>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget;
