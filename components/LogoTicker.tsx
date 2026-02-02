
import React from 'react';

const LogoTicker: React.FC = () => {
  const logos = [
    "IMMO TOMMY", "CRYPTORY", "PROF. FINANZEN", "ADHOUSE", "FULLSTACK", "STRATEGY PRO"
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-sm uppercase tracking-widest text-white/40 font-bold">
          Erfahrung aus über <span className="text-white">250 Mio. Umsatz</span> aus Projekten wie:
        </p>
      </div>
      <div className="flex overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-12 text-2xl font-black text-white/20 hover:text-white transition-colors cursor-default">
              {logo}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default LogoTicker;
