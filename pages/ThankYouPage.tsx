
import React, { useEffect } from 'react';

interface ThankYouPageProps {
  onHomeClick: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onHomeClick }) => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 text-center relative overflow-hidden grid-pattern">
      <div className="relative z-10 max-w-2xl animate-fade-in-up">
        <div className="w-24 h-24 bg-accent/20 border border-accent/40 rounded-full flex items-center justify-center mx-auto mb-10">
          <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Vielen Dank!</h1>
        <p className="text-xl text-white/60 mb-12">
          Deine Anfrage ist bei uns eingegangen. Unser Team wird sich innerhalb der nächsten 24 Stunden bei dir melden, um deinen 1:1 Intro-Call zu bestätigen.
        </p>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 text-left">
          <h3 className="font-bold text-lg mb-4 text-accent">Nächste Schritte:</h3>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white flex-shrink-0">1</span>
              <span>Checke dein E-Mail Postfach (auch den Spam-Ordner).</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white flex-shrink-0">2</span>
              <span>Wir schicken dir einen Link zur Termin-Bestätigung.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white flex-shrink-0">3</span>
              <span>Bereite dich auf ca. 30 Minuten Deep-Dive vor.</span>
            </li>
          </ul>
        </div>

        <button 
          onClick={onHomeClick}
          className="text-white/40 hover:text-white transition-colors flex items-center justify-center mx-auto space-x-2 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span>Zurück zur Startseite</span>
        </button>
      </div>
      
      {/* Decorative blurs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default ThankYouPage;
