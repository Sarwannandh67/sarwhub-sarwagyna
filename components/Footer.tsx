import React from 'react';
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from './Icons.tsx';

interface FooterProps {
  setView: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-medium text-2xl cursor-pointer" onClick={() => setView('home')}>S</div>
              <span className="font-medium text-2xl tracking-tighter cursor-pointer" onClick={() => setView('home')}>SarwHub</span>
            </div>
            <p className="text-white/30 max-w-xs text-sm leading-loose font-normal mb-8">
              The professional backbone for modern event organizers. Based on <a href="https://hi.events/" target="_blank" rel="noopener noreferrer" className="text-white/60 underline decoration-white/20 hover:text-white transition-colors">HI.Events</a>, build your legacy, own your data, and control your audience with a fully white-label platform.
            </p>
            <div className="inline-block">
              <span className="highlight-pill">
                <span className="metal text-[10px] uppercase tracking-[0.2em] font-bold">
                  A product of Sarwagyna Pvt Ltd.
                </span>
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Product</h4>
            <ul className="space-y-4 text-sm font-normal text-white/50">
              <li><button onClick={() => setView('home')} className="hover:text-white transition-colors text-left w-full">Features</button></li>
              <li><button onClick={() => setView('pricing')} className="hover:text-white transition-colors text-left w-full">Pricing</button></li>
              <li><button onClick={() => setView('payments')} className="hover:text-white transition-colors text-left w-full">Payments & Settlements</button></li>
              <li><a href="https://sarwhub.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">Blog</a></li>
              <li><button onClick={() => setView('home')} className="hover:text-white transition-colors text-left w-full text-white/30">Integration</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Support</h4>
            <ul className="space-y-4 text-sm font-normal text-white/50">
              <li><button onClick={() => setView('conduct')} className="hover:text-white transition-colors text-left w-full">Code of Conduct</button></li>
              <li><button onClick={() => setView('disclosure')} className="hover:text-white transition-colors text-left w-full">Responsible Disclosure</button></li>
              <li><button onClick={() => setView('refund')} className="hover:text-white transition-colors text-left w-full">Refund Policy</button></li>
              <li><a href="mailto:support@sarwhub.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-normal text-white/50">
              <li><button onClick={() => setView('about')} className="hover:text-white transition-colors text-left w-full">About Us</button></li>
              <li><button onClick={() => setView('partner')} className="hover:text-white transition-colors text-left w-full">Partner with us</button></li>
              <li><button onClick={() => setView('privacy')} className="hover:text-white transition-colors text-left w-full">Privacy Policy</button></li>
              <li><button onClick={() => setView('terms')} className="hover:text-white transition-colors text-left w-full">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-3 text-center md:text-left flex-grow">
            <p className="font-bold text-white text-[12px] md:text-[13px] uppercase tracking-[0.15em] leading-relaxed block">
              © 2026 SarwHub – The Backbone of Your Events. All Rights Reserved.
            </p>
            <p className="metal font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] block">
              A product of Sarwagyna Pvt Ltd.
            </p>
          </div>
          <div className="flex gap-6 shrink-0 items-center">
            <a href="https://instagram.com/sarwhub" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white hover:scale-110 transition-all duration-300">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com/company/sarwhub" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white hover:scale-110 transition-all duration-300">
              <LinkedInIcon />
            </a>
            <a href="https://youtube.com/@sarwhub" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white hover:scale-110 transition-all duration-300">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;