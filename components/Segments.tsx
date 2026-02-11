
import React, { useState } from 'react';
import { Segment } from '../types';

const Segments: React.FC = () => {
  const [activeTab, setActiveTab] = useState('nightlife');

  const segments: Segment[] = [
    {
      id: 'nightlife',
      label: 'Nightlife & Clubs',
      cases: ['Exclusive Guestlists', 'VIP Table Bookings', 'Recurring Weekly Events'],
      benefits: ['QR scanning at entry', 'Shared capacity limits', 'Promo code tracking'],
      speed: '5 minute setup'
    },
    {
      id: 'festivals',
      label: 'Festivals & Concerts',
      cases: ['Multi-day Passes', 'Tiered Pricing Rounds', 'Affiliate Sales Tracking'],
      benefits: ['Razorpay integration', 'Offline check-in mode', 'Data exports anytime'],
      speed: 'Scale in seconds'
    },
    {
      id: 'venues',
      label: 'Venues & Bars',
      cases: ['Seated Events', 'Workshop Registration', 'Regular Programming'],
      benefits: ['Branded listing pages', 'Email notifications', 'Team role controls'],
      speed: 'Instant listing'
    },
    {
      id: 'ga',
      label: 'General Admission',
      cases: ['Conferences', 'Social Meetups', 'Corporate Mixers'],
      benefits: ['Embeddable widgets', 'Attendee questionnaires', 'SEO meta tags'],
      speed: 'Deploy anywhere'
    }
  ];

  const currentSegment = segments.find(s => s.id === activeTab)!;

  return (
    <section id="segments" className="py-24 px-6 border-y border-white/5 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Built for Your Event Type</h2>
          <p className="text-white/50">Experience-first features tailored for professional organizers.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {segments.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === s.id ? 'bg-white text-black' : 'glass text-white/60 hover:text-white'}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="glass p-10 md:p-16 rounded-[48px] grid md:grid-cols-2 gap-12 items-center min-h-[400px]">
          <div>
            <h3 className="text-4xl font-black mb-6 tracking-tight">{currentSegment.label}</h3>
            
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">Core Use Cases</p>
                <div className="flex flex-wrap gap-2">
                  {currentSegment.cases.map((c, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">{c}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">Native Capabilities</p>
                <ul className="grid gap-3">
                  {currentSegment.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 font-medium">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-white/10 blur-[100px] rounded-full group-hover:bg-white/15 transition-all"></div>
            <div className="relative glass p-10 rounded-[40px] border-white/20 text-center">
              <div className="text-6xl font-black mb-4 text-gradient">
                {currentSegment.speed}
              </div>
              <p className="text-white/40 font-medium mb-8">Maintain 100% brand control and data ownership from day one.</p>
              <button className="w-full py-5 bg-white text-black rounded-2xl font-black hover:scale-[1.02] transition-transform shadow-xl shadow-white/5">
                Launch Event Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segments;
