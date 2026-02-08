
import React, { useEffect, useRef, useState } from 'react';

const ProblemSlider: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      id: "01",
      title: "Zu viele Kunden, zu wenig Fokus",
      desc: "Echte Exzellenz entsteht nicht, wenn man 10–20 Projekte gleichzeitig betreut. Fokus ist deine wichtigste Währung.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      gridClass: "lg:col-span-7 lg:row-span-2 min-h-[380px] md:min-h-[460px]"
    },
    {
      id: "02",
      title: "Retainer, die dich klein halten",
      desc: "Du gibst 100%, bekommst aber nur ein Fixum für Ergebnisse, die Millionen wert sind.",
      img: "",
      gridClass: "lg:col-span-5 lg:row-span-1 min-h-[180px] md:min-h-[220px]",
      isIcon: false
    },
    {
      id: "04",
      title: "Umsatz ohne echte Marge",
      desc: "Nach Ads und Team bleibt kaum Gewinn. Wir ändern deine Marge radikal.",
      img: "",
      gridClass: "lg:col-span-5 lg:row-span-1 min-h-[180px] md:min-h-[220px]",
      isStatus: true
    },
    {
      id: "03",
      title: "Kein Asset-Aufbau",
      desc: "Keine Anteile, kein Equity – nur Dienstleistung gegen Zeit. Du bleibst im Hamsterrad des Agenturgeschäfts.",
      img: "",
      gridClass: "lg:col-span-12 lg:row-span-1 min-h-[160px] md:min-h-[200px] flex flex-col md:flex-row md:items-center md:gap-12",
      isIcon: true
    }
  ];

  return (
    <section ref={sectionRef} id="agentur-dilemma" className="py-20 bg-white text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Reveal Animation */}
        <div className={`max-w-3xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-[#ff3d00] uppercase tracking-[0.3em] text-[10px] font-black mb-4">Das Dilemma</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-[#111111]">
            Warum Top-Marketer im <br className="hidden md:block" />
            klassischen Modell <span className="text-[#ff3d00]">feststecken.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 auto-rows-fr">
          {problems.map((p, index) => (
            <div 
              key={p.id} 
              className={`group relative p-7 md:p-9 rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] bg-[#fbfbfd] border border-black/[0.03]
                ${p.gridClass}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Background Number Decoration */}
              <div className="absolute top-5 right-7 text-6xl font-black text-black/[0.02] group-hover:text-[#ff3d00]/5 transition-colors duration-700 pointer-events-none">
                {p.id}
              </div>

              {/* Content logic */}
              <div className={`relative z-10 h-full flex flex-col ${p.id === "03" ? "md:flex-row md:items-center md:gap-12" : ""}`}>
                <div className={`${p.id === "03" ? "md:w-3/4" : ""}`}>
                  {p.isIcon && (
                    <div className="w-10 h-10 bg-[#ff3d00] rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-[#ff3d00]/20 group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  )}
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-[#ff3d00] transition-colors duration-500">
                    {p.title}
                  </h3>
                  <p className="text-[#111111]/50 leading-relaxed font-medium text-sm md:text-base mb-6">
                    {p.desc}
                  </p>
                </div>

                {/* Visuals */}
                {p.img && (
                  <div className="rounded-2xl overflow-hidden shadow-inner relative mt-auto aspect-[4/3] bg-white border border-black/[0.02]">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0" 
                    />
                  </div>
                )}
                
                {p.isStatus && (
                   <div className="mt-auto flex items-end justify-between">
                      <div className="flex space-x-1">
                        <div className="w-1 h-6 bg-[#ff3d00]/10 rounded-full group-hover:h-8 transition-all duration-500"></div>
                        <div className="w-1 h-10 bg-[#ff3d00]/30 rounded-full group-hover:h-12 transition-all duration-500 delay-75"></div>
                        <div className="w-1 h-4 bg-[#ff3d00]/5 rounded-full group-hover:h-6 transition-all duration-500 delay-150"></div>
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-[#ff3d00]/30">Performance Gap</div>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSlider;
