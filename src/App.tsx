import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Audience from './components/Audience';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfUse from './components/legal/TermsOfUse';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'privacy' | 'terms'>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  if (activePage === 'privacy') {
    return (
      <div className="font-sans min-h-screen text-brand-neutral-800 bg-white antialiased overflow-x-hidden">
        <Navigation onHome={() => setActivePage('home')} />
        <PrivacyPolicy onBack={() => setActivePage('home')} />
        <Footer 
          onShowPrivacy={() => setActivePage('privacy')} 
          onShowTerms={() => setActivePage('terms')} 
        />
      </div>
    );
  }

  if (activePage === 'terms') {
    return (
      <div className="font-sans min-h-screen text-brand-neutral-800 bg-white antialiased overflow-x-hidden">
        <Navigation onHome={() => setActivePage('home')} />
        <TermsOfUse onBack={() => setActivePage('home')} />
        <Footer 
          onShowPrivacy={() => setActivePage('privacy')} 
          onShowTerms={() => setActivePage('terms')} 
        />
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen text-brand-neutral-800 bg-brand-neutral-50 antialiased overflow-x-hidden selection:bg-brand-green-200">
      {/* Dynamic Header Toolbar */}
      <Navigation onHome={() => setActivePage('home')} />

      {/* Main Core Elements */}
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <Comparison />
        <Audience />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Brand Footer Metadata */}
      <Footer 
        onShowPrivacy={() => setActivePage('privacy')} 
        onShowTerms={() => setActivePage('terms')} 
      />
    </div>
  );
}
