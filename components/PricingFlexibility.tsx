import React from 'react';
import { WalletIcon, ShieldCheckIcon, LightningIcon } from './Icons.tsx';

interface PricingFlexibilityProps {
  setView: (view: 'home' | 'pricing' | 'about') => void;
}

const PricingFlexibility: React.FC<PricingFlexibilityProps> = ({ setView }) => {
  return (
    <section id="pricing-flexibility" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[64px] border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden group">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full -z-10 group-hover:bg-white/[0.04] transition-all duration-700" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full border-white/10 mb-8">
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/60">Designed to Reduce Costs</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-normal tracking-tighter mb-8 leading-[1.1]">
                Your Event. <br />
                <span className="metal italic">Your Pricing Rules.</span>
              </h2>
              
              <p className="text-lg text-white/50 mb-12 leading-relaxed max-w-lg">
                Sell tickets without traditional convenience charges. Our flexible engine puts you in charge of how every rupee is accounted for.
              </p>

              <button 
                onClick={() => setView('pricing')}
                className="group flex items-center gap-3 text-white font-medium text-lg hover:gap-5 transition-all"
              >
                Calculate Your Real Earnings 
                <span className="metal italic text-2xl">→</span>
              </button>
            </div>

            <div className="grid gap-6">
              <div className="glass p-8 rounded-[32px] border-white/5 hover:border-white/20 transition-all flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <WalletIcon />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 tracking-tight">Decide who pays the fees</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Choose whether to pass fees to participants or absorb them. Total transparency for your brand.</p>
                </div>
              </div>

              <div className="glass p-8 rounded-[32px] border-white/5 hover:border-white/20 transition-all flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <ShieldCheckIcon />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 tracking-tight">Show zero platform fee</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Provide a premium experience with no visible platform charges for your high-value stakeholders.</p>
                </div>
              </div>

              <div className="glass p-8 rounded-[32px] border-white/5 hover:border-white/20 transition-all flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <LightningIcon />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 tracking-tight">Cost Advantage Pricing</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Our infrastructure is built to scale with your volume — ensuring your costs decrease as your events grow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFlexibility;