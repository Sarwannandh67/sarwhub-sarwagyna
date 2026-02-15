import React from 'react';
import { 
  QRIcon, WalletIcon, ChartBarIcon, LayoutIcon, UsersIcon, 
  ShieldCheckIcon, TicketIcon, TagIcon, MonitorIcon, GlobeIcon, 
  CodeIcon, MailIcon, ClipboardListIcon, QuestionMarkCircleIcon, 
  TerminalIcon, AcademicCapIcon, CapacityIcon, ShareIcon, BriefcaseIcon 
} from './Icons.tsx';

const Features: React.FC = () => {
  const features = [
    {
      title: "Custom Branding & Design",
      description: "Fully white-label event pages with your logo, colors, fonts, and layout.",
      icon: <LayoutIcon />
    },
    {
      title: "Full Data Ownership",
      description: "Access and export attendee and order data anytime.",
      icon: <ShieldCheckIcon />
    },
    {
      title: "Razorpay Payments",
      description: "Secure payment collection with configurable settlement cycles.",
      icon: <WalletIcon />
    },
    {
      title: "QR Code Check-In",
      description: "Fast mobile scanning with offline support and live sync.",
      icon: <QRIcon />
    },
    {
      title: "Multiple Ticket Types",
      description: "Paid, free, donation, tiered pricing, and registration-only tickets.",
      icon: <TicketIcon />
    },
    {
      title: "Capacity Management",
      description: "Named capacity groups with shared limits across ticket types.",
      icon: <CapacityIcon />
    },
    {
      title: "Promo Codes & Discounts",
      description: "Fixed or percentage discounts with limits and expiry rules.",
      icon: <TagIcon />
    },
    {
      title: "Custom Fees & Taxes",
      description: "Add service fees, booking fees, or taxes—pass on or absorb.",
      icon: <WalletIcon />
    },
    {
      title: "Branded Event Listing Pages",
      description: "A branded portal showcasing all your events in one place.",
      icon: <MonitorIcon />
    },
    {
      title: "SEO & Social Sharing",
      description: "Custom meta titles, descriptions, and social preview images.",
      icon: <ShareIcon />
    },
    {
      title: "Real-Time Analytics",
      description: "Track sales, revenue, check-ins, and page views with exports.",
      icon: <ChartBarIcon />
    },
    {
      title: "Embeddable Ticket Widget",
      description: "Sell tickets directly from your website with a copy-paste widget.",
      icon: <CodeIcon />
    },
    {
      title: "Affiliate Program",
      description: "Track partner links, visitors, and sales with exportable reports.",
      icon: <BriefcaseIcon />
    },
    {
      title: "Team Collaboration",
      description: "Invite team members with role-based access controls.",
      icon: <UsersIcon />
    },
    {
      title: "Email Marketing",
      description: "Send targeted emails to attendees using customizable templates.",
      icon: <MailIcon />
    },
    {
      title: "Order Management",
      description: "Refunds, ticket resends, attendee edits, and offline payments.",
      icon: <ClipboardListIcon />
    },
    {
      title: "Custom Attendee Questions",
      description: "Collect structured attendee information with flexible fields.",
      icon: <QuestionMarkCircleIcon />
    },
    {
      title: "Webhook Integrations",
      description: "Connect orders, attendees, and check-ins to external systems.",
      icon: <TerminalIcon />
    },
    {
      title: "University & College Support",
      description: "Special pricing and workflows for educational institutions.",
      icon: <AcademicCapIcon />
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium mb-4 tracking-tighter">Everything You Need to Run <span className="metal italic">Events</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-normal">19 core features designed to give professional organizers complete control and scalable growth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="glass p-8 rounded-[32px] glass-hover border-white/5 flex flex-col items-start h-full">
              <div className="text-white mb-6 bg-white/5 w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors shrink-0">
                {feature.icon}
              </div>
              <h4 className="text-xl font-medium mb-3 tracking-tight">{feature.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed font-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;