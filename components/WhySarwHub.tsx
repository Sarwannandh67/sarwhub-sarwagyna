
import React from 'react';
import { LayoutIcon, LightningIcon, BriefcaseIcon, AcademicCapIcon } from './Icons';

const WhySarwHub: React.FC = () => {
  const points = [
    {
      title: "Brand-first Experience",
      description: "No platform branding. Your event, your identity, your rules.",
      icon: <LayoutIcon />
    },
    {
      title: "Scales With You",
      description: "From small local workshops to massive multi-day conferences.",
      icon: <LightningIcon />
    },
    {
      title: "Simple Yet Powerful",
      description: "Simple enough for DIY setups, powerful enough for enterprises.",
      icon: <BriefcaseIcon />
    },
    {
      title: "Cost-Effective",
      description: "Pricing models designed for institutions and large communities.",
      icon: <AcademicCapIcon />
    }
  ];

  return (
    <section id="why-sarwhub" className="py-24 px-6 border-y border-white/5 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tighter leading-tight">
              Why Choose <br /> <span className="metal italic">SarwHub?</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed font-normal">
              SarwHub is built for organizers who want professional-grade tools without the limitations and noise of traditional marketplaces.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {points.map((p, i) => (
              <div key={i} className="glass p-8 rounded-[32px] border-white/5 group hover:border-white/20 transition-all">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 tracking-tight">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySarwHub;
