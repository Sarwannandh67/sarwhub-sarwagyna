
import React from 'react';
import { TagIcon, ChartBarIcon, LightningIcon, UsersIcon } from './Icons.tsx';

interface BlogPageProps {
  setView: (view: any) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ setView }) => {
  const posts = [
    {
      title: "Why Data Ownership is the Future of Events",
      category: "Strategy",
      description: "Stop renting your audience from marketplaces. Learn why direct data access is critical for long-term organizer success.",
      icon: <UsersIcon />,
      date: "Feb 12, 2026"
    },
    {
      title: "Mastering Hybrid Event Check-ins",
      category: "Operations",
      description: "How to maintain a 99% check-in success rate for large-scale festivals using SarwHub's native scanning engine.",
      icon: <LightningIcon />,
      date: "Feb 05, 2026"
    },
    {
      title: "Optimizing Your Payout Cycle for Scale",
      category: "Finance",
      description: "A deep dive into how configurable settlements can help maintain your event's cash flow during peak booking periods.",
      icon: <ChartBarIcon />,
      date: "Jan 28, 2026"
    }
  ];

  return (
    <div className="pt-40 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full border-white/10 mb-6">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">Insights & Resources</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-normal tracking-tighter mb-6">
            SarwHub <span className="metal italic">Perspectives</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal leading-relaxed">
            Resources, case studies, and strategic advice for the modern, high-growth event organizer.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {posts.map((post, i) => (
            <div key={i} className="glass p-10 rounded-[40px] border-white/5 hover:border-white/15 transition-all group flex flex-col h-full cursor-pointer">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                  {post.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 border border-white/5 px-3 py-1 rounded-full group-hover:border-white/20 transition-colors">
                  {post.category}
                </span>
              </div>
              <h3 className="text-2xl font-medium mb-4 tracking-tight leading-tight flex-grow">{post.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-normal mb-8">
                {post.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">{post.date}</span>
                <span className="text-white/60 text-xs font-medium group-hover:translate-x-1 transition-transform">Read Article →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="glass p-12 md:p-20 rounded-[64px] border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent flex flex-col items-center text-center">
          <div className="mb-8 text-white/40"><TagIcon /></div>
          <h2 className="text-3xl md:text-5xl font-normal tracking-tighter mb-8 italic metal">Stay in the Loop</h2>
          <p className="text-white/50 max-w-xl mx-auto mb-12 text-lg">
            Join 5,000+ organizers receiving our monthly breakdown of event tech trends and operational playbooks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input 
              type="email" 
              placeholder="organizer@company.com" 
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/40 transition-all text-sm"
            />
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-white/10 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
