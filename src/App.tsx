import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrendingSection from './components/TrendingSection';
import FeaturesGrid from './components/FeaturesGrid';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

const App: React.FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <TrendingSection />
        <FeaturesGrid />
        <FaqSection />
      </main>
      <Footer />
      {showCookieBanner && (
        <CookieBanner 
          onAccept={handleAcceptCookies}
          onReject={handleRejectCookies}
          onClose={() => setShowCookieBanner(false)}
        />
      )}
    </div>
  );
};

export default App;