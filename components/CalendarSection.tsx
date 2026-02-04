
import React from 'react';

const CalendarSection: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-[#f3f4f8] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-black/[0.02] overflow-hidden flex flex-col lg:flex-row min-h-[750px]">
          
          {/* Left Side: Profile & Info */}
          <div className="lg:w-[40%] p-10 md:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-black/[0.05] bg-[#ffffff]">
            <div className="mb-10">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#f3f4f8] shadow-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                  alt="Mentor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a202c] mb-1">Raoul Plickat</h3>
              <p className="text-[#718096] text-sm font-semibold tracking-wide">Dein Strategischer Partner für Wachstum</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a202c] leading-[1.1] tracking-tight mb-8">
              Buche deine <br /> <span className="text-[#ff3d00]">Breakthrough</span> Session
            </h2>

            <p className="text-[#718096] text-lg leading-relaxed mb-12 max-w-sm">
              Bereit für echtes Wachstum? Erhalte Experten-Rat, maßgeschneiderte Strategien und skaliere mit Vertrauen.
            </p>

            <div className="space-y-6 mb-auto">
              <div className="flex items-center space-x-4 text-[#1a202c]/70">
                <div className="w-10 h-10 rounded-xl bg-[#f3f4f8] flex items-center justify-center text-black">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="font-bold">Montag - Freitag <span className="text-[#1a202c]">09:00 - 17:00</span></span>
              </div>
              <div className="flex items-center space-x-4 text-[#1a202c]/70">
                <div className="w-10 h-10 rounded-xl bg-[#f3f4f8] flex items-center justify-center text-black">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="font-bold">DACH Region <span className="text-[#1a202c]">Remote / Berlin</span></span>
              </div>
            </div>

            {/* Social Icons Placeholder */}
            <div className="flex space-x-4 pt-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border border-black/[0.08] flex items-center justify-center text-black/30 hover:text-black hover:border-black transition-all cursor-pointer">
                  <div className="w-5 h-5 bg-current rounded-sm opacity-20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Calendly Widget Container */}
          <div className="lg:w-[60%] p-6 md:p-10 flex flex-col justify-center bg-white relative">
            <div className="flex items-center space-x-4 mb-8 pl-4">
               <div className="w-10 h-10 rounded-full bg-[#f3f4f8] flex items-center justify-center text-black/40 hover:text-black cursor-pointer transition-colors">
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
               </div>
               <h4 className="text-xl font-bold text-[#1a202c]">Termin & Zeit wählen</h4>
            </div>

            <div className="calendly-wrapper w-full overflow-hidden rounded-2xl">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/ingo-schwaiger/erstgespraech-buchen?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=ff3d00&text_color=1a202c&embed_type=Inline" 
                style={{ minWidth: '320px', height: '650px', background: '#ffffff' }}>
              </div>
            </div>

            <p className="text-[11px] text-[#718096] mt-8 text-center font-medium">
              Mit der Buchung akzeptierst du unsere 
              <a href="#" className="text-[#ff3d00] underline ml-1 hover:text-black transition-colors">Datenschutzerklärung</a>.
              Wir nutzen Calendly zur Terminverwaltung.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
