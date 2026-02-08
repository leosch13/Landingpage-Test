import React from 'react';
import { motion } from 'framer-motion';

const StrategicSystemsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#000000] text-white overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full border border-[#ff3d00]/30 bg-[#ff3d00]/5 text-[#ff3d00] text-[10px] font-black uppercase tracking-[0.2em] mb-4"
            >
              Systematische Skalierung
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
            >
              Scale Through <br />
              Strategic Systems<span className="text-[#ff3d00]">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
            >
              Hör auf, der Flaschenhals in deinem eigenen Business zu sein. Unser <span className="text-white font-bold italic">MBA Leverage System</span> baut eine effiziente Infrastruktur auf, die deinen Umsatz vervielfacht – ohne dass du ausbrennst oder dein Team massiv vergrößern musst.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex items-center space-x-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-white/40 uppercase tracking-widest">+120 Marken skaliert</p>
            </motion.div>
          </div>

          {/* Right Column: Visual Re-creation of the provided image */}
          <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center">

            {/* The Cards Stack */}
            <div className="relative w-full max-w-lg h-full flex items-center">

              {/* Focused Card (Left/Center) - Growth Gauge */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute left-0 z-30 w-[280px] md:w-[320px] aspect-[3/4] rounded-3xl border border-[#ff3d00]/30 bg-gradient-to-br from-[#0a0402] to-black shadow-[0_30px_100px_rgba(255,61,0,0.1)] p-8 flex flex-col items-center justify-center text-center"
              >

                {/* Gauge Visual */}
                <div className="relative mb-8">
                  <svg className="w-36 h-36 transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      fill="transparent"
                      stroke="rgba(255,255,255,0.03)"
                      strokeWidth="12"
                    />
                    <motion.circle
                      cx="72"
                      cy="72"
                      r="60"
                      fill="transparent"
                      stroke="#ff3d00"
                      strokeWidth="12"
                      strokeDasharray="377"
                      strokeDashoffset="377"
                      whileInView={{ strokeDashoffset: 105 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Growth</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-4xl font-black"
                    >
                      72%
                    </motion.span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Active Customers</p>
                  <p className="text-3xl font-bold">12,346</p>
                </div>

                <div className="mt-10">
                  <div className="w-12 h-12 rounded-full bg-[#ff3d00]/10 flex items-center justify-center border border-[#ff3d00]/20">
                    <svg className="w-6 h-6 text-[#ff3d00] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>

                {/* The "Slider Handle" from image */}
                <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-7 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center z-40 cursor-pointer hover:scale-110 transition-all border-4 border-black">
                  <div className="flex flex-col space-y-1">
                    <div className="w-0.5 h-0.5 bg-black rounded-full"></div>
                    <div className="w-0.5 h-4 bg-black rounded-full"></div>
                    <div className="w-0.5 h-0.5 bg-black rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Second Card (Right) - Ad Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[260px] md:w-[300px] aspect-[3/4] rounded-3xl border border-white/10 bg-[#050505] p-5 shadow-2xl origin-right translate-x-4 opacity-90 overflow-hidden"
              >

                {/* Floating Social Icons above the preview */}
                <div className="flex justify-center space-x-3 mb-8">
                  {['video', 'meta', 'google', 'mail', 'linkedin'].map((type, i) => (
                    <div key={i} className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                  ))}
                </div>

                {/* Ad Content Re-creation */}
                <div className="bg-white rounded-[1.5rem] overflow-hidden text-black h-full flex flex-col shadow-inner">
                  <div className="p-4 flex items-center space-x-3 border-b border-black/5">
                    <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center text-[10px] font-bold text-white">RP</div>
                    <div className="text-[9px]">
                      <p className="font-bold">Raoul Plickat</p>
                      <p className="text-black/40">Premium Strategy</p>
                    </div>
                  </div>
                  <div className="flex-grow bg-gray-50 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1557426282-08ee027bf096?q=80&w=400&auto=format&fit=crop"
                      className="w-full h-full object-cover"
                      alt="Success Story"
                    />
                    <div className="absolute bottom-5 left-0 w-full text-center px-5">
                      <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-black/5">
                        <p className="text-[7px] font-black uppercase tracking-[0.3em] text-[#ff3d00] mb-2">Webinar</p>
                        <p className="text-[11px] font-bold leading-tight">How I Scaled to a <br /> <span className="text-lg block mt-1 tracking-tighter">$6.4M Brand</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex justify-between items-center bg-white border-t border-black/5">
                    <div className="flex space-x-3">
                      <div className="w-4 h-4 border border-black/10 rounded-full hover:bg-black/5 transition-colors"></div>
                      <div className="w-4 h-4 border border-black/10 rounded-full hover:bg-black/5 transition-colors"></div>
                    </div>
                    <div className="w-4 h-4 border border-black/10 rounded-md bg-black/5"></div>
                  </div>
                </div>
              </motion.div>

              {/* Third Card (Far Right) - Stylized Outline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute right-[-80px] top-1/2 -translate-y-1/2 z-10 w-[260px] aspect-[3/4] rounded-3xl border border-white/5 bg-transparent scale-90 translate-x-12 overflow-hidden pointer-events-none"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-2 border-dashed border-white/20 rounded-full animate-spin-slow"></div>
                </div>
              </motion.div>

            </div>

            {/* Background Glow - Very Subtle on black */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ff3d00]/5 blur-[150px] rounded-full pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategicSystemsSection;
