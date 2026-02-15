import React from 'react';
import { WalletIcon, ShieldCheckIcon, ChartBarIcon, ReceiptIcon, GlobeIcon, LightningIcon } from './Icons.tsx';

interface PaymentsSettlementsProps {
  setView: (view: any) => void;
}

const PaymentsSettlements: React.FC<PaymentsSettlementsProps> = ({ setView }) => {
  const sections = [
    {
      title: "Payment Infrastructure",
      icon: <GlobeIcon />,
      description: "SarwHub integrates natively with India's leading payment gateway, Razorpay, ensuring 99.9% uptime and supporting all major payment methods including UPI, Credit/Debit Cards, Net Banking, and Wallets."
    },
    {
      title: "Standard Settlement Cycles",
      icon: <LightningIcon />,
      description: "Our standard settlement cycle is T+3 working days (Transaction date + 3 days). For established organizers and high-volume events, we offer T+1 or T+2 cycles upon request and verification."
    },
    {
      title: "Refunds & Reversals",
      icon: <WalletIcon />,
      description: "Organizers have full control to initiate refunds directly from the dashboard. Once initiated, funds are usually credited back to the source account within 5-7 business days as per banking norms."
    },
    {
      title: "GST & Tax Compliance",
      icon: <ReceiptIcon />,
      description: "We provide automated GST-compliant invoicing for both organizers and ticket buyers. You can configure HSN codes and tax rates (usually 18%) directly in your event settings."
    },
    {
      title: "Security & PCI Compliance",
      icon: <ShieldCheckIcon />,
      description: "SarwHub never stores sensitive card data. All transactions are processed through PCI-DSS Level 1 compliant environments. We use advanced 256-bit encryption for all financial data transmission."
    },
    {
      title: "Payout Reporting",
      icon: <ChartBarIcon />,
      description: "Access detailed settlement reports including transaction IDs, UTR numbers, and breakdown of platform fees and taxes. Reconcile your event financials with a single click."
    }
  ];

  return (
    <div className="pt-40 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full border-white/10 mb-6">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">Financial Infrastructure</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-normal tracking-tighter mb-6">
            Payments & <span className="metal italic">Settlements</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-normal leading-relaxed">
            Transparent payout structures and institutional-grade security for your event revenue.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {sections.map((item, i) => (
            <div key={i} className="glass p-10 rounded-[40px] border-white/5 hover:border-white/15 transition-all group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 mb-8 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4 tracking-tight">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="glass p-12 md:p-20 rounded-[64px] border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-normal tracking-tighter mb-8 italic metal">Need a Custom Payout Cycle?</h2>
          <p className="text-white/50 max-w-xl mx-auto mb-12 text-lg">
            For large scale festivals or recurring high-volume events, we can provide tailored settlement solutions to match your cashflow needs.
          </p>
          <a 
            href="mailto:billing@sarwhub.com?subject=Custom Payout Query"
            className="bg-white text-black px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-white/10"
          >
            Contact Billing Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentsSettlements;