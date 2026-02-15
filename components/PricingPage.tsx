import React, { useState, useMemo } from 'react';
import { 
  ShieldCheckIcon, 
  WalletIcon, 
  GlobeIcon, 
  TicketIcon, 
  UsersIcon, 
  MailIcon, 
  ChartBarIcon, 
  LayoutIcon,
  QRIcon,
  LightningIcon,
  BriefcaseIcon
} from './Icons.tsx';

interface PricingPageProps {
  setView: (view: 'home' | 'pricing' | 'about') => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ setView }) => {
  // Calculator States
  const [ticketPrice, setTicketPrice] = useState<number>(1500);
  const [ticketQuantity, setTicketQuantity] = useState<number>(250);
  const [platformFeeToCustomer, setPlatformFeeToCustomer] = useState<boolean>(false);
  const [pgFeeToCustomer, setPgFeeToCustomer] = useState<boolean>(true); // Default to participant
  const [collectTicketGST, setCollectTicketGST] = useState<boolean>(false);
  const [ticketGSTMode, setTicketGSTMode] = useState<'included' | 'added'>('added');
  const [selectedPackage, setSelectedPackage] = useState<string>('none');
  const [activeAddons, setActiveAddons] = useState<string[]>([]);

  const packages = {
    none: { price: 0, name: "Self-Serve", description: "Standard features with per-ticket commissions." },
    essential: { 
      price: 15000, 
      name: "Essential",
      points: ["Standard Account Manager", "Event Setup Assistance", "Priority Operational Help", "Fixed Service Fee", "0% Commission Charge"]
    },
    growth: { 
      price: 30000, 
      name: "Growth",
      points: ["Priority Account Manager", "Event Strategy Consultation", "Extended Support Window", "Fixed Service Fee", "0% Commission Charge"]
    },
    enterprise: { 
      price: 60000, 
      name: "Enterprise",
      points: ["Senior Account Manager", "Dedicated Coordination", "Fastest SLA Response", "Full Operational Support", "Fixed Service Fee", "0% Commission Charge"]
    }
  };

  const addonsList = [
    { id: 'branding', label: 'Branding Removal', price: 8000 },
    { id: 'marketing', label: 'Marketing Bundle', price: 7500 },
    { id: 'feedback', label: 'Feedback Analytics', price: 6000 }
  ];

  const addOns = [
    {
      title: "Branding Removal",
      price: "Starts from ₹8,000",
      items: ["Remove SarwHub logo", "Custom footer branding", "White-label emails"]
    },
    {
      title: "Marketing Bundle",
      price: "Starts from ₹7,500",
      items: ["Advanced SEO tools", "Social media templates", "Affiliate tracking"]
    },
    {
      title: "Analytics Pro",
      price: "Starts from ₹6,000",
      items: ["Advanced reports", "Heatmaps (beta)", "Custom data exports"]
    },
    {
      title: "Managed Check-in",
      price: "Starts from ₹5,000",
      items: ["On-site support crew", "Equipment rentals", "Priority scanning"]
    }
  ];

  const toggleAddon = (id: string) => {
    setActiveAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  // Calculation Logic
  const results = useMemo(() => {
    const isManaged = selectedPackage !== 'none';
    
    let ticketTaxPerUnit = 0;
    let baseRevenuePerTicket = ticketPrice;
    
    if (collectTicketGST) {
      if (ticketGSTMode === 'added') {
        ticketTaxPerUnit = ticketPrice * 0.18;
        baseRevenuePerTicket = ticketPrice;
      } else {
        baseRevenuePerTicket = ticketPrice / 1.18;
        ticketTaxPerUnit = ticketPrice - baseRevenuePerTicket;
      }
    }
    
    const totalTicketRevenue = baseRevenuePerTicket * ticketQuantity;
    const totalTicketTaxCollected = ticketTaxPerUnit * ticketQuantity;

    let platformFeeRate = 0;
    let platformFeeAmount = 0;
    
    if (!isManaged) {
      platformFeeRate = 0.02;
      if (ticketQuantity > 300 && ticketQuantity <= 1000) platformFeeRate = 0.03;
      if (ticketQuantity > 1000) platformFeeRate = 0.04;
      platformFeeAmount = (baseRevenuePerTicket * ticketQuantity) * platformFeeRate;
    }

    const estimatedPgFeeAmount = (ticketPrice * ticketQuantity) * 0.025; 

    const packageFee = (packages as any)[selectedPackage].price;
    const addonsTotal = activeAddons.reduce((sum, id) => {
      const addon = addonsList.find(a => a.id === id);
      return sum + (addon?.price || 0);
    }, 0);

    const taxableSarwHubServices = platformFeeAmount + packageFee + addonsTotal;
    const sarwHubGstAmount = taxableSarwHubServices * 0.18;

    let finalBuyerTicketPrice = ticketPrice;
    if (collectTicketGST && ticketGSTMode === 'added') finalBuyerTicketPrice += ticketTaxPerUnit;
    if (platformFeeToCustomer && !isManaged) finalBuyerTicketPrice += (platformFeeAmount / ticketQuantity);
    if (pgFeeToCustomer) finalBuyerTicketPrice += (estimatedPgFeeAmount / ticketQuantity);

    const deductionsFromOrganizer = 
      (!platformFeeToCustomer && !isManaged ? platformFeeAmount : 0) +
      (!pgFeeToCustomer ? estimatedPgFeeAmount : 0) + 
      packageFee + 
      addonsTotal + 
      sarwHubGstAmount;

    const netOrganizerEarnings = totalTicketRevenue - deductionsFromOrganizer;

    return {
      totalTicketRevenue,
      totalTicketTaxCollected,
      platformFeeRate: (platformFeeRate * 100).toFixed(0),
      platformFeeAmount,
      pgFeeAmount: estimatedPgFeeAmount,
      packageFee,
      addonsTotal,
      sarwHubGstAmount,
      finalBuyerTicketPrice,
      netOrganizerEarnings,
      isManaged
    };
  }, [ticketPrice, ticketQuantity, platformFeeToCustomer, pgFeeToCustomer, collectTicketGST, ticketGSTMode, selectedPackage, activeAddons]);

  return (
    <div className="pt-40 pb-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full border-white/10 mb-6">
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">No Setup Fees. No Lock-Ins.</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-normal tracking-tighter mb-6">
            Keep More From Every <span className="metal italic">Ticket</span>
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto font-normal leading-relaxed">
            Transparent pricing designed for Indian organizers. Run events with <span className="text-white">optional commissions</span> and full control over who pays. 
            <span className="text-white block mt-2">No hidden surprises. All prices exclusive of 18% GST.</span>
          </p>
        </div>

        {/* Section 1: Transaction-Based Plan (Detailed) */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-white/10 flex-grow"></div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">Core Transactional Plan</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="glass p-12 md:p-16 rounded-[48px] border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-medium mb-4">Self-Serve Ticketing</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Launch your event quickly with a tiered commission model based on volume. You decide how fees are applied:
                <br /><br />
                <span className="text-white font-medium">✔ Pass commissions to participants</span><br />
                <span className="text-white font-medium">✔ Absorb the commission yourself</span><br />
                <span className="text-white font-medium">✔ Run events with zero visible fee for attendees</span>
              </p>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-6 glass rounded-2xl border-white/5 hover:bg-white/[0.02] transition-all">
                  <span className="text-sm text-white/70">0 – 300 Tickets</span>
                  <span className="text-xl font-medium metal">2% Commission</span>
                </div>
                <div className="flex justify-between items-center p-6 glass rounded-2xl border-white/5 hover:bg-white/[0.02] transition-all">
                  <span className="text-sm text-white/70">301 – 1,000 Tickets</span>
                  <span className="text-xl font-medium metal">3% Commission</span>
                </div>
                <div className="flex justify-between items-center p-6 glass rounded-2xl border-white/10 bg-white/5">
                  <span className="text-sm text-white/70">1,000+ Tickets</span>
                  <span className="text-xl font-medium metal">4% Commission</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:pt-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Included Capabilities:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: <LayoutIcon />, text: "Branded Event Pages" },
                  { icon: <QRIcon />, text: "QR Code Check-in" },
                  { icon: <ChartBarIcon />, text: "Ticket Analytics" },
                  { icon: <UsersIcon />, text: "Attendee Management" },
                  { icon: <ShieldCheckIcon />, text: "Full Data Ownership" },
                  { icon: <GlobeIcon />, text: "Secure Payments" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80 list-none">
                    <div className="text-white/60">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => window.open('https://admin.sarwhub.com/signup', '_blank')}
                  className="w-full py-5 bg-white text-black rounded-2xl font-medium text-lg hover:scale-102 transition-all shadow-2xl shadow-white/10"
                >
                  Start Selling in Minutes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Managed Support Packages */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-white/10 flex-grow"></div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">Managed Support Packages</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          {/* Clarity Banner */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass px-8 py-4 rounded-full border-white/10 bg-white/[0.02] flex items-center justify-center text-center">
              <p className="text-xs sm:text-sm font-medium text-white/70">
                <span className="text-white font-bold mr-2">✔</span> All SarwHub features are included in every plan. Packages only change the level of dedicated support.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(packages).filter(([k]) => k !== 'none').map(([id, pkg]: [string, any]) => (
              <div 
                key={id} 
                className={`glass p-12 rounded-[48px] border-white/5 flex flex-col relative overflow-hidden group transition-all duration-700 ${selectedPackage === id ? 'bg-white/[0.05] border-white/20 scale-105 z-10 shadow-[0_0_80px_rgba(255,255,255,0.05)]' : 'hover:bg-white/[0.02] hover:border-white/10'}`}
              >
                {id === 'growth' && (
                  <div className="absolute top-0 right-0 px-8 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-3xl">
                    Organizer Choice
                  </div>
                )}
                
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-all pointer-events-none ${selectedPackage === id ? 'opacity-100' : 'opacity-0'}`} />

                <div className="mb-10">
                  <h3 className="text-2xl font-medium mb-6 tracking-tight flex items-center gap-3">
                    {pkg.name}
                    {id === 'enterprise' && <BriefcaseIcon />}
                    {id === 'growth' && <LightningIcon />}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-normal tracking-tighter">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-white/40 text-sm">/ event</span>
                    </div>
                    <p className="text-[10px] text-white/30 italic font-medium">Same SarwHub features. Different support level.</p>
                  </div>
                </div>

                <div className="space-y-5 mb-14 flex-grow">
                   {pkg.points.map((point: string, idx: number) => (
                     <div key={idx} className="flex items-center gap-4 text-xs font-normal text-white/70 group-hover:text-white transition-colors">
                       <div className={`w-1.5 h-1.5 rounded-full ${point.includes('0%') ? 'bg-white shadow-[0_0_8px_white]' : 'bg-white/30'}`}></div>
                       {point}
                     </div>
                   ))}
                </div>

                <button 
                  onClick={() => setSelectedPackage(id)}
                  className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all ${selectedPackage === id ? 'bg-white text-black hover:scale-[1.02] shadow-2xl shadow-white/10' : 'glass border-white/10 hover:bg-white hover:text-black hover:scale-[1.02]'}`}
                >
                  {selectedPackage === id ? 'Selected' : `Select ${pkg.name}`}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Add-ons */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-white/10 flex-grow"></div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">Optional Service Add-ons</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {addOns.map((addon, i) => (
              <div key={i} className="glass p-8 rounded-[32px] border-white/5 hover:border-white/20 transition-all flex flex-col group">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-lg font-medium tracking-tight group-hover:metal transition-all duration-500">{addon.title}</h4>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6">{addon.price}</div>
                <ul className="space-y-3 flex-grow">
                  {addon.items.map((item, j) => (
                    <li key={j} className="text-[11px] text-white/40 flex items-center gap-2 group-hover:text-white/60 transition-colors">
                      <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] font-medium text-white/30 uppercase tracking-[0.3em]">
            * Final pricing may vary based on event size, duration, and specific logistical requirements.
          </p>
        </div>

        {/* Section 4: GST & Transparency */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
           <div className="glass p-10 md:p-12 rounded-[40px] border-white/10 bg-white/[0.02] flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80">
                  <ShieldCheckIcon />
                </div>
                <h3 className="text-xl font-medium tracking-tight">Tax Compliance</h3>
              </div>
              <div className="space-y-4 text-white/70 leading-relaxed text-sm">
                <p>
                  Every fee explained. All prices mentioned are <strong className="text-white underline decoration-white/10">exclusive of GST</strong>.
                </p>
                <p>
                  An additional <strong className="text-white">18% GST</strong> will be applicable on SarwHub commissions, package plans, and optional services.
                </p>
              </div>
           </div>

           <div className="glass p-10 md:p-12 rounded-[40px] border-white/10 bg-white/[0.02] flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80">
                  <TicketIcon />
                </div>
                <h3 className="text-xl font-medium tracking-tight">Full Flexibility</h3>
              </div>
              <div className="space-y-4 text-white/70 leading-relaxed text-sm">
                <p>
                  Decide who pays the commission — you or your attendees. Fees are <strong className="text-white">completely optional</strong> to show.
                </p>
                <p>
                  Payment gateway charges are separate and based on your chosen settlement cycles.
                </p>
              </div>
           </div>
        </div>

        {/* Pricing Consultation CTA */}
        <div className="mb-32">
          <div className="glass p-12 md:p-16 rounded-[48px] border-white/10 bg-gradient-to-r from-white/[0.02] to-transparent flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-normal tracking-tighter mb-4 italic metal">Confused by the Math?</h3>
              <p className="text-lg text-white/50 font-normal leading-relaxed">
                If our pricing models feel complex or you need a personalized breakdown for your unique event requirements, our team is ready to help you craft a custom consultation.
              </p>
            </div>
            <a 
              href="mailto:sales@sarwhub.com?subject=Pricing Consultation Request"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all shadow-2xl shadow-white/20 whitespace-nowrap"
            >
              <MailIcon />
              Contact Us Now
            </a>
          </div>
        </div>

        {/* Pricing Calculator Section */}
        <div className="mb-40 pt-16 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-normal tracking-tighter mb-4 italic metal">Earnings Calculator</h2>
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">Know Exactly What You’ll Earn — Instantly</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Inputs Panel */}
            <div className="lg:col-span-3 glass p-10 rounded-[48px] border-white/10 space-y-12">
               
               {/* Step 1: Volume */}
               <div className="space-y-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">1. Event Volume</p>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-medium text-white/60">Ticket Price (₹)</label>
                      <input 
                        type="number" 
                        value={ticketPrice}
                        onChange={(e) => setTicketPrice(Number(e.target.value))}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-2xl font-normal focus:border-white/40 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-medium text-white/60">Expected Attendees</label>
                      <input 
                        type="number" 
                        value={ticketQuantity}
                        onChange={(e) => setTicketQuantity(Number(e.target.value))}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-2xl font-normal focus:border-white/40 outline-none transition-all"
                      />
                    </div>
                  </div>
               </div>

               {/* Step 2: Who Pays the Commission? */}
               <div className="space-y-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">2. Who Pays the Commission?</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <button 
                      onClick={() => setPlatformFeeToCustomer(!platformFeeToCustomer)}
                      className={`p-6 rounded-2xl border text-left transition-all flex items-center justify-between group ${platformFeeToCustomer ? 'bg-white text-black border-white' : 'glass border-white/10 hover:border-white/30'}`}
                    >
                      <div>
                        <span className="text-sm font-bold block">Commission to Participants</span>
                        <span className={`text-[10px] uppercase tracking-widest mt-1 block ${platformFeeToCustomer ? 'text-black/50' : 'text-white/30'}`}>Increases Buyer Price</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 ml-4`}>
                        {platformFeeToCustomer && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                      </div>
                    </button>
                    <button 
                      onClick={() => setPgFeeToCustomer(!pgFeeToCustomer)}
                      className={`p-6 rounded-2xl border text-left transition-all flex items-center justify-between group ${pgFeeToCustomer ? 'bg-white text-black border-white' : 'glass border-white/10 hover:border-white/30'}`}
                    >
                      <div>
                        <span className="text-sm font-bold block">Gateway Fee to Participants</span>
                        <span className={`text-[10px] uppercase tracking-widest mt-1 block ${pgFeeToCustomer ? 'text-black/50' : 'text-white/30'}`}>Increases Buyer Price</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 ml-4`}>
                        {pgFeeToCustomer && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                      </div>
                    </button>
                  </div>
               </div>

               {/* Step 3: GST on Tickets */}
               <div className="space-y-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">3. GST on Ticket Sales</p>
                  <div className="space-y-6">
                    <button 
                      onClick={() => setCollectTicketGST(!collectTicketGST)}
                      className={`p-6 w-full rounded-2xl border text-left transition-all flex items-center justify-between group ${collectTicketGST ? 'bg-white/10 border-white/40' : 'glass border-white/10 hover:border-white/30'}`}
                    >
                      <div>
                        <span className="text-sm font-bold block">Collect 18% GST on Ticket Sales?</span>
                        <span className="text-[10px] uppercase tracking-widest mt-1 block text-white/30">Tax collected from buyers for remittance</span>
                      </div>
                      <div className={`w-10 h-6 rounded-full border border-white/20 relative transition-colors ${collectTicketGST ? 'bg-white' : 'bg-white/5'}`}>
                         <div className={`absolute top-1 w-4 h-4 rounded-full transition-all ${collectTicketGST ? 'left-5 bg-black' : 'left-1 bg-white/40'}`} />
                      </div>
                    </button>

                    {collectTicketGST && (
                      <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                        <button 
                          onClick={() => setTicketGSTMode('included')}
                          className={`p-4 rounded-xl border text-center transition-all ${ticketGSTMode === 'included' ? 'bg-white text-black' : 'glass border-white/10 text-white/40'}`}
                        >
                          <span className="text-xs font-bold uppercase tracking-widest">Included in Price</span>
                        </button>
                        <button 
                          onClick={() => setTicketGSTMode('added')}
                          className={`p-4 rounded-xl border text-center transition-all ${ticketGSTMode === 'added' ? 'bg-white text-black' : 'glass border-white/10 text-white/40'}`}
                        >
                          <span className="text-xs font-bold uppercase tracking-widest">Added on Top</span>
                        </button>
                      </div>
                    )}
                  </div>
               </div>

               {/* Step 4: Support Model */}
               <div className="space-y-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">4. Select Support Model</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['none', 'essential', 'growth', 'enterprise'].map((pkg) => (
                      <button 
                        key={pkg}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`px-4 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${selectedPackage === pkg ? 'bg-white text-black border-white' : 'glass border-white/10 hover:border-white/30 text-white/40'}`}
                      >
                        {(packages as any)[pkg].name}
                      </button>
                    ))}
                  </div>
                  {results.isManaged && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                      <div className="text-white"><ShieldCheckIcon /></div>
                      <p className="text-xs text-white/60 italic font-medium">Package support active. Per-ticket commission removed (₹0).</p>
                    </div>
                  )}
               </div>

               {/* Step 5: Add-ons */}
               <div className="space-y-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">5. Optional Add-ons (Estimates)</p>
                  <div className="flex flex-wrap gap-3">
                    {addonsList.map((addon) => (
                      <button 
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`px-5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-3 border ${activeAddons.includes(addon.id) ? 'bg-white/10 text-white border-white/40' : 'glass border-white/10 text-white/30'}`}
                      >
                        {addon.label}
                        <span className="opacity-50">+₹{addon.price.toLocaleString()}</span>
                      </button>
                    ))}
                  </div>
               </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2 space-y-6 sticky top-28">
               <div className="glass p-10 rounded-[48px] border-white/20 bg-gradient-to-br from-white/[0.05] to-transparent relative overflow-hidden group">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-10">Event Financials</h4>
                  
                  <div className="space-y-6 mb-12">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/40">Gross Ticket Sales</span>
                      <span className="font-medium">₹{(ticketPrice * ticketQuantity).toLocaleString()}</span>
                    </div>

                    {collectTicketGST && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/40">GST on Tickets (18%)</span>
                        <span className="font-medium text-white/60">₹{Math.round(results.totalTicketTaxCollected).toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/40">Commission {results.isManaged ? '(Package)' : `(${results.platformFeeRate}%)`}</span>
                      <span className={`font-medium ${results.isManaged ? 'text-white/20' : 'text-white'}`}>
                        {results.isManaged ? '₹0' : `₹${results.platformFeeAmount.toLocaleString()}`}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/40">Gateway Charge (Avg 2.5%)</span>
                      <span className="font-medium">₹{results.pgFeeAmount.toLocaleString()}</span>
                    </div>

                    {(results.packageFee > 0 || results.addonsTotal > 0) && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/40">Managed Services & Add-ons</span>
                        <span className="font-medium text-white">₹{(results.packageFee + results.addonsTotal).toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center text-sm border-t border-white/5 pt-6">
                      <span className="text-white/30">GST (18% on SarwHub fees)</span>
                      <span className="font-medium text-white/30">₹{Math.round(results.sarwHubGstAmount).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="p-8 bg-white/[0.04] rounded-3xl border border-white/10">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3">Organizer Net Payout</p>
                      <p className="text-5xl font-normal metal">₹{Math.round(results.netOrganizerEarnings).toLocaleString()}</p>
                    </div>

                    <div className="p-6 glass border-white/10 rounded-3xl">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-2">Attendee Price / Ticket</p>
                          <p className="text-2xl font-normal text-white">₹{Math.round(results.finalBuyerTicketPrice).toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-2">Total from Buyers</p>
                          <p className="text-sm font-medium text-white/60">₹{(Math.round(results.finalBuyerTicketPrice) * ticketQuantity).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button className="w-full py-5 bg-white text-black rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:scale-[1.03] transition-all shadow-2xl shadow-white/10">
                      Lock This Configuration
                    </button>
                  </div>
               </div>

               {/* Mandated Financial Disclaimer */}
               <div className="p-8 glass border-white/10 rounded-[32px] text-center space-y-6 bg-white/[0.01]">
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold text-white/50 leading-relaxed uppercase tracking-[0.25em]">
                      Clear earnings before you publish.
                    </p>
                    <p className="text-[10px] font-bold text-white/40 leading-relaxed uppercase tracking-[0.25em]">
                      No surprise deductions. Ever.
                    </p>
                  </div>
                  
                  <div className="pt-5 border-t border-white/5 space-y-3">
                    <p className="text-[9px] font-semibold text-white/20 leading-relaxed italic uppercase tracking-[0.18em]">
                      * Provided calculations are approximate and based on assumptions.
                    </p>
                    <p className="text-[9px] font-semibold text-white/20 leading-relaxed italic uppercase tracking-[0.18em]">
                      Final payout might vary based on chosen mode of payment.
                    </p>
                    <p className="text-[9px] font-extrabold text-white/30 leading-relaxed uppercase tracking-[0.2em] mt-3">
                      Configurations made are not saved for your event automatically.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Section 5: Summary CTA */}
        <div className="glass p-12 md:p-20 rounded-[64px] border-white/5 text-center bg-gradient-to-b from-white/[0.02] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <h2 className="text-3xl md:text-5xl font-normal tracking-tighter mb-16 leading-tight">
            Honest Pricing for <br />
            <span className="metal italic">Real Organizers.</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-white/60 max-w-lg mx-auto text-base leading-relaxed mb-12">
              Join the future of event management. Build your legacy, own your data, and keep more from every ticket sold.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => window.open('https://admin.sarwhub.com/signup', '_blank')}
                className="bg-white text-black px-12 py-5 rounded-2xl font-bold shadow-2xl shadow-white/10 hover:scale-105 transition-all text-sm uppercase tracking-[0.2em]"
              >
                Host an Event
              </button>
              <button 
                onClick={() => window.open('https://cal.com/sarwhub/60min', '_blank')}
                className="glass border-white/10 px-12 py-5 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;