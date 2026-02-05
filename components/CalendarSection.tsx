
import React, { useEffect, useRef } from 'react';

const CalendarSection: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initCalendly = () => {
      if ((window as any).Calendly && widgetRef.current) {
        // Leeren des Containers vor Neu-Initialisierung (verhindert Duplikate bei Re-Renders)
        widgetRef.current.innerHTML = '';
        
        (window as any).Calendly.initInlineWidget({
          // hide_event_type_details=0 zeigt das Profilbild und den Text aus Calendly an
          // hide_gdpr_banner=1 unterdrückt den Cookie Banner
          url: 'https://calendly.com/ingo-schwaiger/erstgespraech-buchen?hide_gdpr_banner=1&hide_event_type_details=0&primary_color=ff3d00&text_color=1a202c',
          parentElement: widgetRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    if (!(window as any).Calendly) {
      const script = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
      if (script) {
        script.addEventListener('load', initCalendly);
      }
    } else {
      initCalendly();
    }
  }, []);

  return (
    <section id="booking" className="py-24 bg-[#f3f4f8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-black/[0.02] overflow-hidden min-h-[750px]">
          
          {/* Header für die Sektion */}
          <div className="p-10 md:p-16 border-b border-black/[0.05] bg-white flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a202c] leading-[1.1] tracking-tight mb-4">
                Let's Build Your <span className="text-[#ff3d00]">Strategy</span>
              </h2>
              <p className="text-[#718096] text-lg font-medium">
                Wähle einen Termin für dein kostenloses Erstgespräch. Wir analysieren dein Potenzial für das Share-Deal Modell.
              </p>
            </div>
            
            <div className="hidden md:flex space-x-3">
              {[
                { name: 'FB', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { name: 'IG', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 007.5 21z' },
                { name: 'IN', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' }
              ].map((social) => (
                <div key={social.name} className="w-11 h-11 rounded-full border border-black/[0.06] flex items-center justify-center text-[#718096] hover:text-[#1a202c] hover:border-[#1a202c] transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={social.icon} />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Full Width Calendly Widget - Hier zeigt Calendly seine eigene Sidebar links an */}
          <div className="p-4 md:p-8 bg-white relative">
            <div 
              ref={widgetRef} 
              className="calendly-inline-widget w-full rounded-2xl overflow-hidden" 
              style={{ minWidth: '320px', height: '750px', background: '#ffffff' }}
            >
              {/* Calendly wird hier hinein gerendert und zeigt seine nativen Details (Bild/Text) */}
            </div>

            <p className="text-[11px] text-[#718096] mt-8 text-center font-medium leading-relaxed">
              Mit der Buchung akzeptierst du unsere 
              <a href="#" className="text-[#ff3d00] underline ml-1 hover:text-[#1a202c] transition-colors">Datenschutzerklärung</a>.
              <br />Wir nutzen Calendly zur professionellen Terminverwaltung.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
