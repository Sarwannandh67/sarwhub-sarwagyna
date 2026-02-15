import React from 'react';
import { ShieldCheckIcon, LayoutIcon, WalletIcon, QRIcon, ChartBarIcon, TicketIcon } from './Icons.tsx';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-40 pb-24 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-white/[0.03] blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Messaging */}
        <div className="text-left space-y-10 animate-in fade-in slide-in-from-left-4 duration-700 relative z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/60">India’s Flexible Event Infrastructure</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tighter">
            The Backbone of Your <span className="metal italic">Events</span>. <br />
            <span className="text-white/90">Keep More From Every</span> <span className="metal italic">Ticket</span>.
          </h1>

          <p className="text-base md:text-lg text-white/50 max-w-lg leading-relaxed font-normal">
            Professional event management built for organizers who want full brand control and transparent pricing. No setup fees. No surprise lock-ins.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
              onClick={() => window.open('https://admin.sarwhub.com/signup', '_blank')}
              className="bg-white text-black px-10 py-5 rounded-full text-base font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-white/10 w-full sm:w-auto"
            >
              Start Selling in Minutes
            </button>
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass px-10 py-5 rounded-full text-base font-bold uppercase tracking-widest hover:bg-white/10 transition-all border-white/10 flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              View Features
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="pt-8 border-t border-white/5 max-w-sm">
            <p className="text-sm text-white/40 font-normal leading-relaxed">
              Transparent pricing designed to help you earn more, not pay more. <br />
              <button onClick={() => window.open('https://admin.sarwhub.com/signup', '_blank')} className="text-white font-medium hover:underline">Get started for free.</button>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <PillarCard 
              icon={<ShieldCheckIcon />}
              title="Own Your Audience"
              description="Every attendee and order data point is 100% yours to keep."
            />
            <PillarCard 
              icon={<LayoutIcon />}
              title="White-Label Default"
              description="Checkout pages that feel like your brand, not ours."
            />
            <PillarCard 
              icon={<WalletIcon />}
              title="0% Visible Fees"
              description="Show zero platform fees to your audience whenever you choose."
            />
          </div>
        </div>

        {/* Right Column: Visual Preview */}
        <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-4 duration-1000 z-10">
          <div className="relative w-full aspect-square scale-110">
            {/* Dashboard Card */}
            <div className="absolute top-[5%] right-0 w-[420px] glass p-1 rounded-[32px] rotate-2 shadow-2xl border-white/20 transform hover:rotate-0 transition-all duration-700 z-20 overflow-hidden">
               <div className="bg-neutral-900 rounded-[28px] overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-black/40">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">Revenue Analysis</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/10"></div>
                      <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[9px] font-medium text-white/30 uppercase tracking-widest mb-1">PROJECTED EARNINGS</p>
                        <p className="text-4xl font-normal">₹12,40,500</p>
                      </div>
                      <div className="w-20 h-8 bg-white/5 rounded-xl flex items-center justify-center border border-white/5">
                         <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[8px] font-medium text-white/30 tracking-widest uppercase mb-1">FEE SAVINGS</p>
                        <p className="text-xl font-normal">+18.5%</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[8px] font-medium text-white/30 tracking-widest uppercase mb-1">CONVERSION</p>
                        <p className="text-xl font-normal">14.2%</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Checkout Modal Preview */}
            <div className="absolute bottom-[5%] left-[5%] w-[340px] glass p-8 rounded-[40px] -rotate-3 shadow-2xl border-white/20 z-30 hover:rotate-0 transition-all duration-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h4 className="font-normal text-xl tracking-tight">Full Access Pass</h4>
                  <p className="text-xs text-white/40 font-normal">Global Summit 2026</p>
                </div>
                <div className="p-3 bg-white text-black rounded-xl">
                  <TicketIcon />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-sm font-normal">1 x Standard</span>
                  <span className="text-sm font-medium">₹2,499</span>
                </div>
                <button className="w-full py-4 bg-white text-black rounded-xl font-medium text-sm hover:bg-white/90 transition-colors">
                  Complete Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PillarCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="glass p-7 rounded-2xl border-white/5 hover:border-white/15 transition-all group cursor-default">
    <div className="text-white/30 group-hover:text-white transition-colors mb-4 scale-110 origin-left">
      {icon}
    </div>
    <h3 className="text-base font-medium mb-2 tracking-tight">{title}</h3>
    <p className="text-sm text-white/40 leading-relaxed font-normal">
      {description}
    </p>
  </div>
);

export default Hero;