
import React, { useState, useEffect, useRef } from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const words = ["meistern", "skalieren", "dominieren", "optimieren"];
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Hover-Animation soll nur aktiv sein, wenn das Video NICHT spielt oder gerade pausiert ist
    if (!containerRef.current || !buttonRef.current || isPlaying) return;

    const btnRect = buttonRef.current.getBoundingClientRect();
    
    const centerX = btnRect.left + btnRect.width / 2;
    const centerY = btnRect.top + btnRect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Magnetic threshold: 250px
    if (distance < 250) {
      const pullFactor = 0.35; 
      setMagneticPos({
        x: distanceX * pullFactor,
        y: distanceY * pullFactor
      });
    } else {
      setMagneticPos({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setMagneticPos({ x: 0, y: 0 });
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
    // Wenn wir pausieren, setzen wir die Magnet-Position zurück
    if (isPlaying) {
      setMagneticPos({ x: 0, y: 0 });
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden grid-pattern min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Badge / Pill */}
        <div className="inline-block px-6 py-2 rounded-full border border-white/20 bg-black text-[11px] md:text-xs font-semibold tracking-wider uppercase mb-12 animate-fade-in shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          Für Anbieter hochpreisiger Produkte & Dienstleistungen
        </div>
        
        {/* Sub-Heading */}
        <div className="text-accent italic font-serif text-2xl md:text-4xl mb-4 opacity-90 tracking-tight">
          1:1 Marketing-Sparring mit führenden Experten
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-white max-w-5xl mx-auto">
          Online Marketing <br className="md:hidden" />
          <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom min-w-[320px] md:min-w-[480px]">
            <span 
              key={index}
              className="absolute inset-0 flex justify-center items-center animate-word"
            >
              {words[index]}
            </span>
          </span>
          <br /> mehr Umsatz machen.
        </h1>
        
        {/* Description */}
        <p className="max-w-xl mx-auto text-base md:text-lg text-white/50 mb-16 leading-relaxed">
          Mit unserem Team aus Weltklasse-Marketingexperten an deiner Seite machst du dein Marketing zur echten Wachstumsmaschine.
        </p>

        {/* Apple-Style Video Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={togglePlay}
          className="relative max-w-5xl mx-auto group cursor-pointer" 
        >
          <div className="aspect-video bg-[#050505] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.9)] relative transition-all duration-1000 group-hover:border-accent/30">
            
            {/* Vimeo Iframe Logic - Using controls=0 to hide Vimeo UI */}
            <div className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 ${isPlaying ? 'opacity-100 scale-100' : 'opacity-40 scale-105'}`}>
                <iframe 
                    src={isPlaying 
                      ? "https://player.vimeo.com/video/1158533673?autoplay=1&muted=0&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
                      : "https://player.vimeo.com/video/1158533673?badge=0&autopause=0&background=1&autoplay=1&loop=1&muted=1"
                    } 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101%] h-[101%]"
                    title="Main Video"
                ></iframe>
            </div>

            {/* Overlays - Visible when not playing */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none"></div>
                
                {/* Sound Icon (Top Left) */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center space-x-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-10 h-10 rounded-full glass-play-btn flex items-center justify-center space-x-1 px-2">
                    <div className="sound-bar" style={{ animationDuration: '0.8s' }}></div>
                    <div className="sound-bar" style={{ animationDuration: '1.1s' }}></div>
                    <div className="sound-bar" style={{ animationDuration: '0.9s' }}></div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Audio Inaktiv</span>
                </div>
                
                {/* Magnetic Glass Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    ref={buttonRef}
                    onClick={togglePlay}
                    style={{
                      transform: `translate(${magneticPos.x}px, ${magneticPos.y}px)`,
                    }}
                    className="glass-play-btn w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white relative group/btn overflow-hidden z-20"
                    aria-label="Video abspielen"
                  >
                    {/* Play Icon */}
                    <svg 
                      className="w-8 h-8 md:w-10 md:h-10 fill-white translate-x-1 relative z-10 transition-transform group-hover/btn:scale-110" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    
                    {/* Glow Ring */}
                    <div className="absolute inset-0 border-2 border-accent/0 rounded-full group-hover/btn:border-accent/40 transition-all duration-500 scale-110"></div>
                  </button>
                </div>
                
                {/* Subtitle text at bottom */}
                <div className="absolute bottom-10 w-full text-center pointer-events-none">
                  <p className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] transition-all duration-700 group-hover:tracking-[0.5em] group-hover:text-white/80">
                    Werde Teil der Elite
                  </p>
                </div>
            </div>

            {/* Custom Pause Overlay - Shows briefly on hover when playing */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isPlaying ? 'group-hover:opacity-100 opacity-0' : 'opacity-0'}`}>
                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                 </div>
            </div>
          </div>

          {/* Glow Effect behind video */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/5 blur-[150px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
        </div>

        {/* Action Button under Video */}
        <div className="mt-20">
            <button 
              onClick={onCtaClick}
              className="btn-premium scale-110"
            >
              <div className="icon-circle">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-lg">Jetzt Strategie anfordern</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
