
import React from 'react';
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-medium text-2xl">S</div>
              <span className="font-medium text-2xl tracking-tighter">SarwHub</span>
            </div>
            <p className="text-white/30 max-w-xs text-sm leading-loose font-normal">
              The professional backbone for modern event organizers. Build your legacy, own your data, and control your audience with a fully white-label platform.
            </p>
            <p className="mt-6 text-xs font-normal text-white/20 uppercase tracking-widest">
              A product of Sarwagyna Pvt Ltd.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Product</h4>
            <ul className="space-y-4 text-sm font-normal text-white/50">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Comparison</a></li>
              <li><a href="#widget" className="hover:text-white transition-colors">Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Support</h4>
            <ul className="space-y-4 text-sm font-normal text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Legal</h4>
            <ul className="space-y-4 text-sm font-normal text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-3 text-center md:text-left flex-grow">
            <p className="metal text-[12px] md:text-[13px] uppercase tracking-[0.15em] leading-relaxed block">
              © 2026 SarwHub – The Backbone of Your Events. All Rights Reserved.
            </p>
            <p className="metal text-[10px] md:text-[11px] uppercase tracking-[0.4em] block opacity-80">
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
