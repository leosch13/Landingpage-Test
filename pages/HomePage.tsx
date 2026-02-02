
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import ProblemSlider from '../components/ProblemSlider';

interface HomePageProps {
  onCtaClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-[#000000] text-white">
      <Navbar onCtaClick={onCtaClick} />
      
      <main>
        <Hero onCtaClick={onCtaClick} />
        
        <LogoTicker />

        <section className="py-32 bg-[#000000] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="text-[#ff3d00] uppercase tracking-[0.3em] text-[10px] font-black mb-10">Unser Versprechen</div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto tracking-tight">
              Wir machen dich zum Weltklasse-Marketer, der mit Top-Brands auf Share-Deal-Basis arbeitet.
            </h2>
            <p className="text-lg md:text-xl text-white/40 mt-12 max-w-3xl mx-auto leading-relaxed">
              Bei Fullstack lernst du nicht nur alle Disziplinen des Marketings – du lernst auch, wie man Deals verhandelt, Teams aufbaut und Projekte auf echte Flughöhe bringt.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff3d00]/5 blur-[120px] rounded-full"></div>
        </section>

        <ProblemSlider />

        <section className="py-32 bg-[#000000]">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-bold mb-16 tracking-tighter">
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
