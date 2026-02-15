import React from 'react';
import { UsersIcon, GlobeIcon, BeakerIcon, TrophyIcon, AcademicCapIcon, ShareIcon } from './Icons.tsx';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: "Conferences & Summits",
      description: "Multi-track sessions, attendee data, branded registration, and analytics built for scale.",
      icon: <GlobeIcon />,
      tags: ["Branded Registration", "Scale Analytics"]
    },
    {
      title: "Expos & Trade Fairs",
      description: "Streamline large events with exhibitor portals, on-site kiosks, and networking tools.",
      icon: <UsersIcon />,
      tags: ["Exhibitor Portals", "On-site Kiosks"]
    },
    {
      title: "Workshops & Trainings",
      description: "Perfect for skill-based events with team registrations and automated certificates.",
      icon: <BeakerIcon />,
      tags: ["Team Registration", "Auto Certificates"]
    },
    {
      title: "Marathons & Sports",
      description: "Participant registrations, category-based ticketing, and smooth check-in flows.",
      icon: <TrophyIcon />,
      tags: ["Category Tickets", "Fast Check-in"]
    },
    {
      title: "Tech Fests & College",
      description: "Designed for student-led events with cost-effective pricing and DIY setup.",
      icon: <AcademicCapIcon />,
      tags: ["Student Rates", "DIY Setup"]
    },
    {
      title: "Associations & Communities",
      description: "Run recurring events with branded pages and centralized attendee data.",
      icon: <ShareIcon />,
      tags: ["Recurring Events", "Member Data"]
    }
  ];

  return (
    <section id="use-cases" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium mb-4 tracking-tighter">Built for Every Type of <span className="metal italic">Event</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-normal">The professional backbone that adapts to your unique workflow and audience needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="glass p-10 rounded-[40px] border-white/5 flex flex-col h-full group hover:bg-white/[0.04] transition-all duration-500">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-white text-group-hover:black transition-all">
                {c.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4 tracking-tight">{c.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-normal mb-8 flex-grow">
                {c.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {c.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] font-medium uppercase tracking-widest text-white/30 px-3 py-1.5 bg-white/5 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;