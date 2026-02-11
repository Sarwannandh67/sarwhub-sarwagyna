
import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto glass p-12 md:p-20 rounded-[50px] border-white/5 relative bg-gradient-to-br from-white/[0.03] to-transparent">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">Edu Program</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Special Pricing for Universities & Colleges</h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Empower your student associations and campus events with professional-grade ticketing at institutional rates.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-white mb-2">Campus-Ready</h4>
                <p className="text-sm text-white/40">Simplified registration flows for students and staff.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Admin Controls</h4>
                <p className="text-sm text-white/40">Hierarchical reporting for university administrators.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Bulk Handling</h4>
                <p className="text-sm text-white/40">Manage hundreds of society events from one dashboard.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Direct Support</h4>
                <p className="text-sm text-white/40">Priority assistance for high-volume campus festivals.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/50 border border-white/10 p-8 rounded-3xl">
             <div className="mb-6 pb-6 border-b border-white/5">
                <div className="text-sm text-white/40 mb-1">Education Plan</div>
                <div className="text-4xl font-black flex items-baseline gap-2">
                  Custom
                  <span className="text-lg font-medium text-white/20">/ annum</span>
                </div>
             </div>
             <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   Discounted institutional rates
                </li>
                <li className="flex items-center gap-3 text-sm">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   Unlimited admin accounts
                </li>
                <li className="flex items-center gap-3 text-sm text-white/40">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   Dedicated Account Manager
                </li>
             </ul>
             <button className="w-full py-4 glass border-white/20 font-bold rounded-xl hover:bg-white hover:text-black transition-all">
                Inquire for Institutional Pricing
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
