
import React, { useRef, useEffect } from 'react';

import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import ProblemSlider from '../components/ProblemSlider';
import ExpertiseSection from '../components/ExpertiseSection';
import ExpertSlider from '../components/ExpertSlider';
import OfferSection from '../components/OfferSection';
import StrategicSystemsSection from '../components/StrategicSystemsSection';
import VideoSection from '../components/VideoSection';
import CalendarSection from '../components/CalendarSection';
import { Testimonials } from '../components/ui/unique-testimonial';
import FAQSection from '../components/FAQSection';

interface HomePageProps {
  onCtaClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onCtaClick }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;

      const rect = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startTrigger = windowHeight * 0.9;
      const endTrigger = windowHeight * 0.2;

      const rawProgress = (startTrigger - rect.top) / (startTrigger - endTrigger);
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      headingRef.current.style.setProperty('--reveal-progress', `${progress * 100}%`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#000000] text-white">


      <main>
        <Hero onCtaClick={onCtaClick} />

        <LogoTicker />

        {/* Promise Section */}
        <section className="py-32 bg-white text-[#111111] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div className="text-[#ff3d00] uppercase tracking-[0.3em] text-[10px] font-black mb-10">Unser Versprechen</div>
            <h2
              ref={headingRef}
              className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto tracking-tight scroll-reveal-text"
            >
              Wir machen dich zum Weltklasse-Marketer, der mit Top-Brands auf Share-Deal-Basis arbeitet.
            </h2>
            <p className="text-lg md:text-xl text-[#111111]/60 mt-12 max-w-3xl mx-auto leading-relaxed">
              Bei Fullstack lernst du nicht nur alle Disziplinen des Marketings – du lernst auch, wie man Deals verhandelt, Teams aufbaut und Projekte auf echte Flughöhe bringt.
            </p>
          </div>
        </section>

        <ProblemSlider />

        <section className="py-32 bg-[#000000] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-bold mb-16 tracking-tighter text-white">
              Bist du bereit für das <br /> <span className="text-[#ff3d00] italic font-serif">nächste Level?</span>
            </h2>

            <button
              onClick={onCtaClick}
              className="btn-premium scale-110 md:scale-125 px-10"
            >
              <div className="icon-circle">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-xl">Jetzt Strategie anfordern</span>
            </button>

            <p className="mt-20 text-white/20 text-xs font-bold uppercase tracking-[0.2em]">
              Werde zur nächsten Erfolgsgeschichte unserer Elite.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#ff3d00]/10 blur-[180px] rounded-full -z-0"></div>
        </section>

        <ExpertiseSection />

        <ExpertSlider />

        <OfferSection onCtaClick={onCtaClick} />

        <StrategicSystemsSection />

        <VideoSection />

        <CalendarSection />

        <Testimonials />

        <FAQSection />
      </main>

      <footer className="py-16 border-t border-white/5 bg-[#000000] text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>© 2024 Fullstack Marketer. Premium Excellence.</div>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
