
import React, { useState, useRef, useEffect } from 'react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const [videoScale, setVideoScale] = useState(0.95);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendPlayerCommand = (method: string, value?: any) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method, value }),
        '*'
      );
    }
  };

  useEffect(() => {
    if (isPlaying) {
      sendPlayerCommand('play');
      sendPlayerCommand('setVolume', 1);
    } else if (hasInteracted) {
      sendPlayerCommand('pause');
    }
  }, [isPlaying, hasInteracted]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / rect.height, 0), 1);
      const newScale = 0.95 + (progress * 0.05);
      setVideoScale(newScale);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

    if (distance < 250) {
      setMagneticPos({ x: distanceX * 0.3, y: distanceY * 0.3 });
    } else {
      setMagneticPos({ x: 0, y: 0 });
    }
  };

  const togglePlay = () => {
    if (!hasInteracted) setHasInteracted(true);
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative py-40 overflow-hidden bg-black flex flex-col items-center">
      
      {/* Background Humanity Image */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div 
          className="w-full h-full bg-center bg-cover opacity-40 scale-110 blur-[2px]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop')`,
            maskImage: 'linear-gradient(to bottom, black 10%, rgba(0,0,0,0.8) 40%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 10%, rgba(0,0,0,0.8) 40%, transparent 90%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-20 text-white max-w-3xl mx-auto leading-tight">
          Marketing Exzellenz trifft <br /> Menschlichkeit.
        </h2>

        {/* Video Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMagneticPos({ x: 0, y: 0 })}
          onClick={togglePlay}
          style={{ transform: `scale(${videoScale})`, transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
          className="relative max-w-5xl mx-auto group cursor-pointer" 
        >
          <div className="aspect-video bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_60px_150px_rgba(0,0,0,0.8)] relative">
            
            {/* Vimeo Iframe */}
            <div className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 ${isPlaying ? 'opacity-100 scale-100' : 'opacity-30 scale-105'}`}>
                <iframe 
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1158533673?autoplay=1&muted=1&loop=1&controls=0&api=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101%] h-[101%]"
                ></iframe>
            </div>

            {/* Overlays */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {/* Magnetic Play Button (Neon Version) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    ref={buttonRef}
                    style={{ transform: `translate(${magneticPos.x}px, ${magneticPos.y}px)` }}
                    className="w-24 h-16 md:w-32 md:h-20 bg-[#d4ff00] rounded-2xl flex items-center justify-center text-black shadow-[0_0_40px_rgba(212,255,0,0.4)] hover:shadow-[0_0_60px_rgba(212,255,0,0.6)] transition-shadow duration-500"
                  >
                    <svg className="w-8 h-8 fill-black" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>

                {/* Subtitle Placeholder */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center w-full px-10">
                   <p className="text-white/80 text-lg font-bold bg-black/40 backdrop-blur-sm inline-block px-4 py-1 rounded-lg">
                      ist einfach so,
                   </p>
                </div>

                {/* Mute Indicator */}
                <div className="absolute top-8 right-8">
                  <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z"/>
                    </svg>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
