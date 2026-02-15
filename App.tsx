import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import WhySarwHub from './components/WhySarwHub.tsx';
import UseCases from './components/UseCases.tsx';
import Features from './components/Features.tsx';
import PricingFlexibility from './components/PricingFlexibility.tsx';
import Segments from './components/Segments.tsx';
import Comparison from './components/Comparison.tsx';
import Education from './components/Education.tsx';
import Widget from './components/Widget.tsx';
import Demo from './components/Demo.tsx';
import FAQ from './components/FAQ.tsx';
import Conversion from './components/Conversion.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import PricingPage from './components/PricingPage.tsx';
import AboutPage from './components/AboutPage.tsx';
import LegalView, { LegalType } from './components/LegalView.tsx';
import PaymentsSettlements from './components/PaymentsSettlements.tsx';
import PartnerWithUs from './components/PartnerWithUs.tsx';
import WaitlistPage from './components/WaitlistPage.tsx';

export type ViewType = 'home' | 'pricing' | 'about' | 'payments' | 'partner' | LegalType;

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [isAuthorized, setIsAuthorized] = useState<boolean>(() => {
    // Check session storage to keep user authorized during session
    return sessionStorage.getItem('sarwhub_auth') === 'true';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, isAuthorized]);

  const handleUnlock = () => {
    setIsAuthorized(true);
    sessionStorage.setItem('sarwhub_auth', 'true');
  };

  const isLegalView = (v: ViewType): v is LegalType => {
    return ['conduct', 'privacy', 'terms', 'disclosure', 'refund'].includes(v);
  };

  if (!isAuthorized) {
    return <WaitlistPage onUnlock={handleUnlock} />;
  }

  return (
    <div className="min-h-screen selection:bg-white/20 bg-black text-white overflow-x-hidden">
      <Navbar currentView={view as any} setView={setView} />
      
      {view === 'home' && (
        <main id="home">
          <Hero />
          <WhySarwHub />
          <UseCases />
          <Features />
          <PricingFlexibility setView={setView} />
          <Segments />
          <Comparison />
          <Education />
          <Widget />
          <Demo />
          <Testimonials />
          <FAQ />
          <Conversion setView={setView} />
        </main>
      )}

      {view === 'pricing' && <PricingPage setView={setView} />}
      {view === 'about' && <AboutPage setView={setView} />}
      {view === 'payments' && <PaymentsSettlements setView={setView} />}
      {view === 'partner' && <PartnerWithUs setView={setView} />}
      {isLegalView(view) && <LegalView type={view} setView={setView} />}
      
      <Footer setView={setView} />
    </div>
  );
};

export default App;