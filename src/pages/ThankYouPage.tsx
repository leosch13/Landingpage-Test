import React, { useEffect } from 'react';
import { HeroSection } from '../components/thank-you/HeroSection';
import { VideoSection } from '../components/thank-you/VideoSection';
import { BookingSection } from '../components/thank-you/BookingSection';
import { Footer } from '../components/thank-you/Footer';
import { SuccessBanner } from '../components/thank-you/SuccessBanner';

interface ThankYouPageProps {
  onHomeClick: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onHomeClick }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-green-500/30 selection:text-green-500">

      {/* Success Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4">
        <SuccessBanner />
      </div>

      <main className="pt-24 md:pt-28">
        <HeroSection />
        <VideoSection />
        <BookingSection />
      </main>

      <Footer />

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </div>
  );
};

export default ThankYouPage;
