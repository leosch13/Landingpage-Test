
import React, { useState } from 'react';

interface Expert {
  id: string;
  name: string;
  tags: string[];
  bio: string;
  description: string;
  achievements: string[];
  quote: string;
  image: string;
}

const experts: Expert[] = [
  {
    id: "01",
    name: "Adis Pezerovic",
    tags: ["Strategie", "Branding", "PPC"],
    bio: "Einer der renommiertesten Online-Marketer im deutschsprachigen Raum steht dir und deinem Team als Lead-Mentor zur Seite.",
    description: "Anstatt wie in anderen Mentorings von unerfahrenen Junior-Coaches betreut zu werden, hast du bei Fullstack direkten Zugang zu einem Team aus absoluten Experten, die dich in allen relevanten Bereichen unterstützen.",
    achievements: [
      "hat mehrere Marktführer federführend betreut",
      "mehr als 200+ Mio produziertes Auftragsvolumen"
    ],
    quote: "Dein Marketing und deine Brand werden mit Adis' Unterstützung ein völlig neues Level erreichen.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Sarah Steiner",
    tags: ["Copywriting", "Psychologie"],
    bio: "Die Expertin für psychologische Trigger und High-Level Copywriting, die Worte in echtes Kapital verwandelt.",
    description: "Ihre Texte haben bereits Kampagnen im siebenstelligen Bereich befeuert. Bei ihr lernst du, wie man Botschaften formuliert, die man nicht ignorieren kann.",
    achievements: [
      "Über 500 erfolgreiche Salespages geschrieben",
      "Experte für verhaltenspsychologische Funnel-Optimierung"
    ],
    quote: "Copywriting ist kein Schreiben. Es ist die Architektur des Verlangens.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Marc Reuter",
    tags: ["Paid Ads", "Scaling"],
    bio: "Der Architekt hinter Skalierungsprozessen, die siebenstellige Monatsumsetze zur Normalität machen.",
    description: "Marc versteht Zahlen wie kein zweiter. Er zeigt dir, wie du mathematisch präzise skalierst, ohne deine Marge zu verbrennen.",
    achievements: [
      "Skalierung von 0 auf 1M Monthly Ad Spend",
      "Ehem. Head of Performance für DAX-Konzerne"
    ],
    quote: "Skalierung ist kein Glücksspiel. Es ist eine Frage der richtigen Hebel zur richtigen Zeit.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  }
];

const ExpertSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTransition = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Smooth exit phase
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 450); 
  };

  const nextExpert = () => {
    const next = (currentIndex + 1) % experts.length;
    handleTransition(next);
  };

  const prevExpert = () => {
    const prev = (currentIndex - 1 + experts.length) % experts.length;
    handleTransition(prev);
  };

  const expert = experts[currentIndex];

  return (
    <section className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left Side: Content & Navigation */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-lg">
                Echte Experten statt <br /> Theoretiker: Das ist <br /> dein Sparring-Team
              </h2>
              <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-md font-medium">
                Anstatt wie in anderen Mentorings von unerfahrenen Junior-Coaches betreut zu werden, 
                hast du bei Fullstack direkten Zugang zu einem Team aus absoluten Experten.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-10 pt-4">
              <div className="flex space-x-4">
                <button 
                  onClick={prevExpert}
                  disabled={isAnimating}
                  className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all group disabled:opacity-30"
                >
                  <svg className="w-6 h-6 text-white/40 group-hover:text-white transition-colors rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button 
                  onClick={nextExpert}
                  disabled={isAnimating}
                  className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center hover:bg-white/90 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] group disabled:opacity-30"
                >
                  <svg className="w-6 h-6 text-black group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-1">Expert Selection</div>
                <div className="text-sm font-black tracking-widest tabular-nums">
                  <span className="text-white">{currentIndex + 1}</span>
                  <span className="mx-2 text-white/20">/</span>
                  <span className="text-white/40">{experts.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Expert Card with "Wipe" Transition */}
          <div className="relative perspective-1000">
            {/* The main card container */}
            <div className={`relative transition-all duration-600 ease-[cubic-bezier(0.45,0,0.55,1)] ${isAnimating ? 'opacity-0 translate-x-12 blur-sm' : 'opacity-100 translate-x-0 blur-0'}`}>
              <div className="relative aspect-[0.85/1] rounded-[3rem] bg-[#080809] border border-white/[0.04] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-10 md:p-14 flex flex-col">
                
                {/* Background Image with optimized mask for premium look */}
                <div className="absolute top-0 right-0 w-3/4 h-full pointer-events-none z-0">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-[3s] ease-out hover:scale-105" 
                    style={{ 
                      backgroundImage: `url(${expert.image})`, 
                      maskImage: 'linear-gradient(to left, black 20%, rgba(0,0,0,0.6) 50%, transparent 90%), linear-gradient(to top, black 30%, transparent 95%)',
                      WebkitMaskImage: 'linear-gradient(to left, black 20%, rgba(0,0,0,0.6) 50%, transparent 90%), linear-gradient(to top, black 30%, transparent 95%)'
                    }}
                  ></div>
                </div>

                {/* Card Header: Tags */}
                <div className="flex flex-wrap gap-2 mb-10 relative z-10">
                  {expert.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] bg-white/[0.03] backdrop-blur-md text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Body: Info */}
                <div className="relative z-10 flex-grow flex flex-col">
                  <h3 className="text-4xl md:text-5xl font-bold mb-5 tracking-tighter">{expert.name}</h3>
                  <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-sm font-medium">
                    {expert.bio}
                  </p>
                  
                  {/* Achievements List */}
                  <div className="space-y-5 border-t border-white/5 pt-10 mt-auto">
                    {expert.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start space-x-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] mt-2 group-hover:scale-150 shadow-[0_0_10px_rgba(212,255,0,0.5)] transition-transform"></div>
                        <span className="text-sm md:text-base font-semibold text-white/70 leading-snug">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Quote Box: Finished Dark Look */}
                <div className="mt-10 bg-gradient-to-br from-[#12160d] to-[#0c0f08] border border-[#d4ff00]/10 p-7 rounded-[2rem] relative overflow-hidden group/quote">
                  <p className="text-sm md:text-base font-bold text-[#d4ff00]/90 leading-relaxed relative z-10 italic">
                    "{expert.quote}"
                  </p>
                  <div className="absolute -bottom-2 -right-2 p-4 opacity-5 group-hover/quote:opacity-10 transition-opacity">
                     <svg className="w-20 h-20 text-[#d4ff00]" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
                     </svg>
                  </div>
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d4ff00]/5 to-transparent pointer-events-none"></div>
                </div>

                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {/* Background decorative glow for the card */}
            <div className={`absolute -inset-10 bg-[#d4ff00]/5 blur-[80px] rounded-full -z-10 transition-opacity duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertSlider;
