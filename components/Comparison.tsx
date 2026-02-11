
import React from 'react';

const Comparison: React.FC = () => {
  const points = [
    { label: "Data Ownership", sarw: "100% Yours", legacy: "Theirs" },
    { label: "Branding", sarw: "Full White-Label", legacy: "Platform First" },
    { label: "Customer Relationship", sarw: "Direct & Private", legacy: "Marketplace-owned" },
    { label: "Custom Domain", sarw: "Supported", legacy: "Rarely" },
    { label: "Payout Cycles", sarw: "Configurable", legacy: "Fixed" },
  ];

  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium mb-4 tracking-tighter">Why Professionals Choose <span className="metal italic">SarwHub</span></h2>
          <p className="text-white/40">Don't be a guest on someone else's platform. Own your business.</p>
        </div>

        <div className="glass rounded-[40px] overflow-hidden border-white/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="p-8 font-medium uppercase tracking-widest text-xs text-white/40">Feature Control</th>
                <th className="p-8 font-medium text-xl text-white">SarwHub</th>
                <th className="p-8 font-normal text-white/30 italic">Legacy Marketplaces</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {points.map((p, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-8 text-sm font-normal text-white/60">{p.label}</td>
                  <td className="p-8 text-sm font-medium text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]"></div>
                      {p.sarw}
                    </div>
                  </td>
                  <td className="p-8 text-sm font-normal text-white/20">{p.legacy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
