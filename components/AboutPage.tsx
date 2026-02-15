import React from 'react';
import { ShieldCheckIcon, LightningIcon, BriefcaseIcon, UsersIcon, GlobeIcon, BeakerIcon } from './Icons.tsx';

interface AboutPageProps {
  setView: (view: 'home' | 'pricing' | 'about') => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setView }) => {
  return (
    <div className="pt-40 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full border-white/10 mb-6">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-normal tracking-tighter mb-8 leading-tight">
            The Vision Behind <br /><span className="metal italic">SarwHub</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-normal leading-relaxed">
            SarwHub exists to simplify how events are created, managed, and experienced. We believe organizers should focus on building meaningful events — not struggling with complicated tools.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <div className="glass p-12 md:p-20 rounded-[64px] border-white/10 relative overflow-hidden group">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 blur-[100px] rounded-full group-hover:bg-white/10 transition-all duration-700"></div>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-8 metal italic">Our Mission</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              We provide a powerful, transparent platform that helps organizers scale while keeping control of their brand, audience, and revenue. No complicated high fees or fragmented workflows.
            </p>
            <div className="flex gap-4">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                 <div className="text-white mb-2"><GlobeIcon /></div>
                 <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Global Infrastructure</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                 <div className="text-white mb-2"><ShieldCheckIcon /></div>
                 <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Absolute Ownership</p>
               </div>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-medium mb-4 tracking-tight">Who We Are</h3>
              <p className="text-white/50 leading-relaxed">
                SarwHub is a modern event technology platform built for today’s organizers — from college communities and independent creators to large-scale festivals and corporate teams. We combine flexible ticketing infrastructure with optional managed services.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="text-white/40"><LightningIcon /></div>
                <h4 className="font-medium text-lg">Transparent Pricing</h4>
                <p className="text-sm text-white/30">Clear pricing with no hidden surprises, ever.</p>
              </div>
              <div className="space-y-3">
                <div className="text-white/40"><BriefcaseIcon /></div>
                <h4 className="font-medium text-lg">Operational Support</h4>
                <p className="text-sm text-white/30">Real support when it matters, on-site or remote.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do - Features Grid */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-normal tracking-tighter mb-4 italic metal">What We Do</h2>
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">End-to-End Ecosystem</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ticketing & Management",
                desc: "Create events, manage attendees, and track performance through a dashboard designed for speed.",
                icon: <BriefcaseIcon />
              },
              {
                title: "Managed Support",
                desc: "Dedicated coordination, strategic guidance, and priority assistance for high-stakes events.",
                icon: <UsersIcon />
              },
              {
                title: "Marketing & Engagement",
                desc: "Email campaigns and post-event feedback workflows to keep your audience connected.",
                icon: <BeakerIcon />
              }
            ].map((item, i) => (
              <div key={i} className="glass p-10 rounded-[40px] border-white/5 hover:border-white/20 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid lg:grid-cols-2 gap-8 mb-40">
          <div className="glass p-12 rounded-[48px] border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
            <h3 className="text-3xl font-normal mb-6 italic metal">Our Vision</h3>
            <p className="text-white/50 leading-loose">
              We envision a future where event organizers are empowered by technology that adapts to their needs — not the other way around. SarwHub aims to become a trusted infrastructure layer for events, enabling creators and organizations to scale without operational friction.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Clarity Over Complexity", desc: "Pricing and tools should be easy to understand." },
              { title: "Organizer First", desc: "Every feature is built around real workflows." },
              { title: "Reliability", desc: "Designed to perform under extreme pressure." },
              { title: "Continuous Improvement", desc: "Evolving with feedback from our community." }
            ].map((v, i) => (
              <div key={i} className="glass p-8 rounded-[32px] border-white/5 flex flex-col justify-between">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-4">{v.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-20 bg-gradient-to-t from-white/[0.03] to-transparent rounded-[64px] border border-white/5">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-10">
            Join the <span className="metal italic">SarwHub Journey</span>
          </h2>
          <button 
            onClick={() => setView('pricing')}
            className="bg-white text-black px-12 py-5 rounded-2xl font-medium hover:scale-105 transition-all shadow-2xl shadow-white/10"
          >
            Start Your Next Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;