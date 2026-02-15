import React from 'react';
import { BriefcaseIcon, UsersIcon, LightningIcon, GlobeIcon, ShieldCheckIcon, TrophyIcon } from './Icons.tsx';

interface PartnerWithUsProps {
  setView: (view: any) => void;
}

const PartnerWithUs: React.FC<PartnerWithUsProps> = ({ setView }) => {
  const partnerTypes = [
    {
      title: "Agency Partners",
      icon: <BriefcaseIcon />,
      desc: "For event agencies and production houses looking to offer white-label ticketing infrastructure to their clients.",
      benefits: ["Revenue sharing model", "Priority technical support", "Co-branded event pages", "Client management dashboard"]
    },
    {
      title: "Influencers & Creators",
      icon: <UsersIcon />,
      desc: "For community leaders and creators who want to monetize their audience through high-quality events.",
      benefits: ["High referral commissions", "Custom affiliate links", "Early access to features", "Personal account manager"]
    },
    {
      title: "Strategic Partners",
      icon: <GlobeIcon />,
      desc: "For technology providers and venue owners looking for deep integration and ecosystem collaboration.",
      benefits: ["Native API access", "Joint marketing ventures", "Bulk venue licensing", "Custom feature development"]
    }
  ];

  return (
    <div className="pt-40 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full border-white/10 mb-6">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">Partnership Program</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-normal tracking-tighter mb-8 leading-tight">
            Let's Build the Future <br /> of <span className="metal italic">Events Together</span>
          </h1>
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-normal leading-relaxed">
            Join the SarwHub ecosystem. Empower your clients, grow your community, and earn rewards by providing the most professional event backbone in India.
          </p>
        </div>

        {/* Partner Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-40">
          {partnerTypes.map((type, i) => (
            <div key={i} className="glass p-12 rounded-[48px] border-white/5 flex flex-col hover:border-white/20 transition-all group relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all"></div>
               
               <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 mb-8 group-hover:bg-white group-hover:text-black transition-all">
                {type.icon}
              </div>
              
              <h3 className="text-2xl font-medium mb-4 tracking-tight">{type.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-10 flex-grow">
                {type.desc}
              </p>
              
              <ul className="space-y-4 mb-10">
                {type.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.location.href = `mailto:partners@sarwhub.com?subject=Inquiry: ${type.title}`}
                className="w-full py-4 glass border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Apply for {type.title}
              </button>
            </div>
          ))}
        </div>

        {/* Why Partner Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
           <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-normal tracking-tighter leading-tight italic metal">
                Why Partner <br /> with SarwHub?
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <div className="text-white/40"><LightningIcon /></div>
                   <h4 className="font-medium text-lg">Fast Payouts</h4>
                   <p className="text-sm text-white/30">Get your referral commissions settled within 14 days of the event completion.</p>
                </div>
                <div className="space-y-4">
                   <div className="text-white/40"><ShieldCheckIcon /></div>
                   <h4 className="font-medium text-lg">Brand Reputation</h4>
                   <p className="text-sm text-white/30">Associate with India's most flexible and brand-first event platform.</p>
                </div>
                <div className="space-y-4">
                   <div className="text-white/40"><TrophyIcon /></div>
                   <h4 className="font-medium text-lg">Tiered Rewards</h4>
                   <p className="text-sm text-white/30">As you bring more organizers, your commission percentages and benefits increase.</p>
                </div>
                <div className="space-y-4">
                   <div className="text-white/40"><UsersIcon /></div>
                   <h4 className="font-medium text-lg">Marketing Support</h4>
                   <p className="text-sm text-white/30">Access our creative team for pitch decks, sales collateral, and event audits.</p>
                </div>
              </div>
           </div>

           <div className="glass p-12 md:p-16 rounded-[64px] border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black font-bold text-3xl">S</div>
              </div>
              <p className="text-2xl text-white/80 leading-relaxed italic mb-10">
                "SarwHub's partner program allowed us to offer a completely branded experience to our VIP corporate clients while generating an additional 15% in passive revenue."
              </p>
              <div>
                <p className="font-bold text-lg">Rahul Verma</p>
                <p className="text-white/40 text-sm uppercase tracking-widest">MD, Vertex Events Production</p>
              </div>
           </div>
        </div>

        {/* Final CTA */}
        <div className="glass p-12 md:p-20 rounded-[64px] border-white/5 text-center bg-gradient-to-b from-white/[0.02] to-transparent relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-normal tracking-tighter mb-8 italic metal">Ready to Start?</h2>
          <p className="text-white/50 max-w-xl mx-auto mb-12 text-lg">
            Our partnership team review applications weekly. Send us your proposal or reach out for a quick discovery call.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:partners@sarwhub.com"
              className="bg-white text-black px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-white/10"
            >
              Contact Partnership Team
            </a>
            <button 
              onClick={() => setView('pricing')}
              className="glass border-white/10 px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
            >
              Learn More About Platform
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;