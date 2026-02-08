
import React, { useState, useEffect, useRef } from 'react';

interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  desc: string;
  videoUrl: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    id: "01",
    number: "01",
    title: "Performance-Marketing wie die Marktführer",
    desc: "Strategien aus über 70 Mio € Adspend, individuell für dein Unternehmen zugeschnitten. Wir begleiten dich beim Entwickeln, Testen und Optimieren – bis deine Kampagnen planbar skalieren.",
    videoUrl: "https://cdn.pixabay.com/video/2020/09/24/51121-463870817_large.mp4"
  },
  {
    id: "02",
    number: "02",
    title: "Funnels, die konvertieren wie noch nie zuvor",
    desc: "Vergiss Standard-Templates. Wir bauen psychologisch fundierte Customer Journeys, die Besucher in begeisterte Käufer verwandeln und deinen Customer Lifetime Value maximieren.",
    videoUrl: "https://cdn.pixabay.com/video/2021/04/12/70878-537489569_large.mp4"
  },
  {
    id: "03",
    number: "03",
    title: "Branding & Design auf Weltklasse-Niveau",
    desc: "Eindruck schinden reicht nicht. Wir erschaffen Identitäten, die Vertrauen aufbauen und deine Marke zur Autorität in deinem Markt machen. Ästhetik trifft auf Strategie.",
    videoUrl: "https://cdn.pixabay.com/video/2024/02/10/199926-911462215_large.mp4"
  },
  {
    id: "04",
    number: "04",
    title: "Copywriting, welches Interessenten begeistert",
    desc: "Worte, die verkaufen. Wir formulieren Botschaften, die die Schmerzpunkte deiner Zielgruppe präzise treffen und eine unwiderstehliche Sogwirkung für dein Angebot erzeugen.",
    videoUrl: "https://cdn.pixabay.com/video/2024/01/21/197576-905141049_large.mp4"
  }
];

const ExpertiseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const lastIndexRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollHeight = rect.height;
      const viewHeight = window.innerHeight;
      
      const progress = Math.min(Math.max(-rect.top / (scrollHeight - viewHeight), 0), 1);
      
      const newIndex = Math.min(
        Math.floor(progress * expertiseData.length),
        expertiseData.length - 1
      );

      if (newIndex !== lastIndexRef.current) {
        setFade(false);
        setTimeout(() => {
          setActiveIndex(newIndex);
          setFade(true);
        }, 150); // Shorter fade for snappier response
        lastIndexRef.current = newIndex;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-[#fbfbfd]">
      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Main Grid: items-stretch keeps both columns at the same height natively */}
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24">
            
            {/* Left: Accordion List - Fixed height to prevent "bouncing" the video container */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center min-h-[500px] md:min-h-[600px] py-12">
              <div className="space-y-2">
                {expertiseData.map((item, index) => (
                  <div 
                    key={item.id}
                    className="group border-b border-black/5 pb-6 pt-2 last:border-0 transition-all duration-700"
                  >
                    <div className="flex items-center justify-between pointer-events-none">
                      <div className="flex items-center space-x-6">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-[10px] transition-all duration-500 ${activeIndex === index ? 'bg-[#ff3d00] text-white scale-110 shadow-lg shadow-[#ff3d00]/20' : 'bg-black/5 text-black/40'}`}>
                          {item.number}
                        </div>
                        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-500 ${activeIndex === index ? 'text-[#111111] translate-x-2' : 'text-[#111111]/25'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <div className={`transition-all duration-500 ${activeIndex === index ? 'rotate-180 opacity-100 text-[#ff3d00]' : 'rotate-0 opacity-0'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeIndex === index ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                      <p className="pl-16 text-[#111111]/50 leading-relaxed font-medium text-sm md:text-base pr-8">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Infinity Item - Stable anchor at the bottom */}
                <div className="flex items-center space-x-6 pt-8 opacity-20">
                  <div className="w-10 h-10 rounded-full bg-[#d4ff00] flex items-center justify-center font-black text-lg text-black">
                    ∞
                  </div>
                  <span className="text-lg font-bold tracking-tight">und weitere Disziplinen...</span>
                </div>
              </div>
            </div>

            {/* Right: Fixed-Height Video Container */}
            <div className="w-full lg:w-1/2 flex items-center py-12">
              <div className="relative w-full h-full min-h-[400px] md:min-h-[550px] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-[#050505] border border-black/5">
                
                {/* Video Layer Container */}
                <div className="absolute inset-0 w-full h-full">
                  <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                    <video 
                      key={expertiseData[activeIndex].videoUrl}
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover"
                    >
                      <source src={expertiseData[activeIndex].videoUrl} type="video/mp4" />
                    </video>
                    
                    {/* Premium Finishes */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Floating Progress UI */}
                <div className="absolute bottom-10 left-10 flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                   <div className="flex space-x-1.5">
                      {expertiseData.map((_, i) => (
                        <div key={i} className={`h-1 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-6 bg-[#ff3d00]' : 'w-1.5 bg-white/20'}`}></div>
                      ))}
                   </div>
                </div>

                {/* Decorative Brand Tag */}
                <div className="absolute top-10 right-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 rotate-90 origin-right">
                    Expertise {expertiseData[activeIndex].id}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
