import React, { useState, useEffect, useCallback } from 'react';
import { SarwHubLogo } from './Icons.tsx';

interface NavbarProps {
  currentView: 'home' | 'pricing' | 'about' | 'payments' | 'partner' | any;
  setView: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldBeScrolled = currentScrollY > 20;
      
      // Only update state if value actually changed to prevent re-renders
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    setIsMenuOpen(false);
    
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(id.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    if (e.type === 'click') {
      e.preventDefault();
    }
    
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', id);
    }
  }, [currentView, setView]);

  const navigateToView = (view: any) => {
    setView(view);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] sm:w-[95%] max-w-7xl ${isScrolled ? 'top-4' : 'top-6'}`}
        style={{ willChange: 'top, transform' }}
      >
        <div className={`glass px-4 sm:px-8 py-3 sm:py-4 rounded-[28px] sm:rounded-full flex items-center justify-between transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-black/60 shadow-2xl backdrop-blur-xl border-white/20' : 'bg-transparent border-white/5'}`}>
          <button onClick={() => navigateToView('home')} className="flex items-center gap-2 sm:gap-3 group">
            <SarwHubLogo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(112,0,255,0.3)]" />
            <span className="font-medium text-xl sm:text-2xl tracking-tighter hidden sm:block">SarwHub</span>
          </button>
          
          {/* Desktop Nav - Full Links */}
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-white transition-colors duration-300">Features</a>
            <button 
              onClick={() => navigateToView('pricing')} 
              className={`transition-colors duration-300 uppercase tracking-[0.2em] ${currentView === 'pricing' ? 'text-white' : 'hover:text-white'}`}
            >
              Pricing
            </button>
            <button 
              onClick={() => navigateToView('about')} 
              className={`transition-colors duration-300 uppercase tracking-[0.2em] ${currentView === 'about' ? 'text-white' : 'hover:text-white'}`}
            >
              About
            </button>
            <a href="#faq-contact" onClick={(e) => handleNavClick(e, '#faq-contact')} className="hover:text-white transition-colors duration-300">FAQ</a>
            
            <div className="w-px h-6 bg-white/10 mx-6"></div>
            
            <a 
              href="https://cal.com/sarwhub/60min" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 text-white/60"
            >
              Book Demo
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.open('https://admin.sarwhub.com/login', '_blank')}
              className="bg-white text-black px-6 sm:px-10 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl shadow-white/5 whitespace-nowrap"
            >
              Login
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass border-white/10 rounded-xl"
              aria-label="Toggle Menu"
            >
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-x-0 top-[calc(100%+12px)] transition-all duration-500 origin-top ${isMenuOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
          <div className="glass mx-4 rounded-[32px] p-8 border-white/20 bg-black/90 backdrop-blur-2xl shadow-2xl flex flex-col gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
            <button onClick={(e) => handleNavClick(e, '#features')} className="text-left py-2 hover:text-white transition-colors duration-300">Features</button>
            <button onClick={() => navigateToView('pricing')} className={`text-left py-2 transition-colors duration-300 ${currentView === 'pricing' ? 'text-white' : 'hover:text-white'}`}>Pricing</button>
            <button onClick={() => navigateToView('about')} className={`text-left py-2 transition-colors duration-300 ${currentView === 'about' ? 'text-white' : 'hover:text-white'}`}>About</button>
            <button onClick={(e) => handleNavClick(e, '#faq-contact')} className="text-left py-2 hover:text-white transition-colors duration-300">FAQ</button>
            
            <a 
              href="https://cal.com/sarwhub/60min" 
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 hover:text-white transition-colors duration-300 text-center border-t border-white/5 pt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Demo
            </a>
            
            <div className="pt-2">
              <button 
                onClick={() => { window.open('https://admin.sarwhub.com/login', '_blank'); setIsMenuOpen(false); }}
                className="w-full bg-white text-black py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] active:scale-95 transition-transform"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for closing menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;