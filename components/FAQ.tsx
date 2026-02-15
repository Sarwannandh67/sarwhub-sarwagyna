import React, { useState } from 'react';
import { QuestionMarkCircleIcon, MailIcon } from './Icons.tsx';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I own my attendee data?",
      answer: "Yes. All attendee and order data is fully accessible and exportable. We never resell or lock your data."
    },
    {
      question: "Can I fully brand my event pages and domain?",
      answer: "Yes. You can customize event pages, checkout, emails, and use your own domain so everything looks and feels like your brand."
    },
    {
      question: "How are payments handled?",
      answer: "Payments are processed securely via Razorpay. You control how fees and taxes are applied and how settlements are configured."
    },
    {
      question: "Is SarwHub suitable for colleges and universities?",
      answer: "Yes. We offer special pricing and workflows for colleges, tech fests, and institutional events."
    },
    {
      question: "Do I need technical knowledge to use SarwHub?",
      answer: "No. SarwHub is built for DIY organizers. Most events can be set up and launched in minutes without coding."
    },
    {
      question: "Can I embed ticket sales on my own website?",
      answer: "Yes. You can embed ticket sales directly into your website using our responsive widget."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium mb-4 tracking-tighter">
            Questions? We’re <span className="metal italic">Here to Help.</span>
          </h2>
          <p className="text-white/40 text-lg font-normal">Clear answers. Real support when you need it.</p>
        </div>

        <div className="space-y-4 mb-24">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass rounded-3xl border-white/5 overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-white/[0.05] border-white/10' : 'hover:bg-white/[0.02]'}`}
            >
              <button 
                onClick={() => toggle(i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-medium tracking-tight transition-colors ${openIndex === i ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-white text-black border-white' : 'text-white/30'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8 text-white/50 leading-relaxed font-normal">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Sub-section */}
        <div className="glass p-12 md:p-16 rounded-[48px] border-white/5 text-center bg-gradient-to-b from-white/[0.03] to-transparent relative overflow-hidden group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">Need a Custom Plan or More Details?</h4>
            <p className="text-white/40 mb-10 max-w-lg mx-auto leading-relaxed">
              If you have specific requirements or need a tailored setup, our team is happy to help you build the right infrastructure for your event.
            </p>
            
            <a 
              href="mailto:support@sarwhub.com"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl text-lg font-medium hover:scale-105 transition-all shadow-xl shadow-white/5 group/btn"
            >
              <MailIcon />
              Contact Us
              <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
            
            <div className="mt-8 flex justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Priority Support</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Custom Workflows</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Onboarding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;