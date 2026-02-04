
import React, { useState, useRef, useEffect } from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const [videoScale, setVideoScale] = useState(0.9);
  
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Send messages to Vimeo Player API
  const sendPlayerCommand = (method: string, value?: any) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method, value }),
        '*'
      );
    }
  };

  // Handle Play/Pause logic
  useEffect(() => {
    if (isPlaying) {
      sendPlayerCommand('play');
      sendPlayerCommand('setVolume', 1);
    } else if (hasInteracted) {
      sendPlayerCommand('pause');
    }
  }, [isPlaying, hasInteracted]);

  // Scroll logic for the zoom effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top > windowHeight) {
        setVideoScale(0.9);
      } else if (rect.bottom < windowHeight) {
        setVideoScale(1.0);
      } else {
        const progress = Math.min(Math.max((windowHeight - rect.top) / rect.height, 0), 1);
        const newScale = 0.9 + (progress * 0.1);
        setVideoScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !buttonRef.current || isPlaying) return;

    const btnRect = buttonRef.current.getBoundingClientRect();
    const centerX = btnRect.left + btnRect.width / 2;
    const centerY = btnRect.top + btnRect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < 200) {
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
    if (!hasInteracted) setHasInteracted(true);
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      setMagneticPos({ x: 0, y: 0 });
    }
  };

  return (
    <section ref={sectionRef} className="relative pt-40 pb-40 overflow-hidden bg-black min-h-screen flex flex-col items-center justify-start">
      
      {/* Background Product Image - Apple Style Fade */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-cover opacity-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000&auto=format&fit=crop')`,
            maskImage: 'radial-gradient(ellipse 70% 60% at center, black 0%, rgba(0,0,0,0.8) 20%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at center, black 0%, rgba(0,0,0,0.8) 20%, transparent 75%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        {/* Sub-Heading */}
        <div className="text-white/60 text-sm md:text-base font-medium tracking-tight mb-4 animate-fade-in">
          Fullstack Marketing Sparring
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white max-w-4xl mx-auto leading-[1.1] animate-fade-in">
          Online Marketing meistern <br className="hidden md:block" />
          & mehr Umsatz machen.
        </h1>
        
        {/* Description */}
        <p className="max-w-xl mx-auto text-base md:text-lg text-white/40 mb-16 leading-relaxed font-medium animate-fade-in">
          Wir begleiten dich dabei, dein Marketing zur profitabelsten <br className="hidden md:block" /> Wachstumsmaschine deines Unternehmens zu machen.
        </p>

        {/* Video Player Section with Scroll-Scale Effect */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={togglePlay}
          style={{ transform: `scale(${videoScale})`, transition: 'transform 0.1s ease-out' }}
          className="relative max-w-4xl mx-auto group cursor-pointer" 
        >
          <div className="aspect-video bg-[#050505] rounded-[1.2rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.9)] relative transition-all duration-1000 group-hover:border-white/20">
            
            {/* Vimeo Iframe */}
            <div className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}>
                <iframe 
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1158533673?autoplay=1&muted=1&loop=1&controls=0&api=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101%] h-[101%]"
                    title="Product Video"
                ></iframe>
            </div>

            {/* Overlays */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {/* Sound Icon */}
                {!hasInteracted && (
                  <div className="absolute top-6 left-6 flex items-center space-x-3 opacity-40 pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center space-x-1 px-2 border border-white/10">
                      <div className="sound-bar" style={{ animationDuration: '0.8s' }}></div>
                      <div className="sound-bar" style={{ animationDuration: '1.1s' }}></div>
                      <div className="sound-bar" style={{ animationDuration: '0.9s' }}></div>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Intro Preview</span>
                  </div>
                )}
                
                {/* Symmetrical Magnetic Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    ref={buttonRef}
                    onClick={togglePlay}
                    style={{
                      transform: `translate(${magneticPos.x}px, ${magneticPos.y}px)`,
                    }}
                    className="video-play-btn w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white relative z-20 group/btn"
                  >
                    {/* Centered Play Icon with optical adjustment */}
                    <svg className="w-6 h-6 md:w-8 md:h-8 fill-white translate-x-[2px]" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
            </div>
          </div>
        </div>

        {/* Premium CTA Button below video */}
        <div className="mt-16 flex justify-center">
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

      {/* Decorative bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[#0066cc]/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
