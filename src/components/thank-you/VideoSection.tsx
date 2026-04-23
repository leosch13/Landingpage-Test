// VideoSection.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });

    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Scroll logic for zoom effect
    const { scrollY } = useScroll();
    // Adjust scroll range logic if needed for this section's position, 
    // but for now reusing similar effect or simplifying it. 
    // Since this section is further down, direct scrollY mapping might not work as intended for a parallax effect relative to viewport.
    // However, user asked for "identical" behavior.
    // Let's keep the scale effect based on relative scroll if possible, or just the container structure.
    // The original Hero uses scrollY from 0. Here we are further down.
    // We can use `useScroll({ target: containerRef })` to make it relative.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Map progress to scale - slight zoom in as it scrolls
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

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
        <section className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
            >
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Schritt 2: Sieh dir die <br className="md:hidden" />
                        <span className="font-serif italic text-white/80">Masterclass</span> von Adis an
                    </h2>
                </div>

                {/* Video Container Ported from Hero */}
                <motion.div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={togglePlay}
                    style={{ scale }}
                    className="relative w-full aspect-video bg-[#050505] rounded-[1.2rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.9)] transition-all duration-1000 group cursor-pointer hover:border-white/20"
                >
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
                            <motion.button
                                ref={buttonRef}
                                animate={{
                                    x: magneticPos.x,
                                    y: magneticPos.y
                                }}
                                transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
                                className="video-play-btn w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white relative z-20 group/btn"
                            >
                                {/* Centered Play Icon with optical adjustment */}
                                <svg className="w-6 h-6 md:w-8 md:h-8 fill-white translate-x-[2px]" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
