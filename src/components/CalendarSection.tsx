import React from 'react';

const CalendarSection: React.FC = () => {
  return (
    <section id="cal-handbuch" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Buche dir jetzt dein Kennenlerngespräch
          </h2>
        </div>

        {/* Calendly Container (Iframe Implementation) */}
        <div className="calendly-wrapper w-full px-4" style={{ maxWidth: '1060px', margin: '0 auto' }}>

          <div
            className="w-full relative"
            style={{ minWidth: '320px', height: '700px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', background: '#ffffff', overflow: 'hidden' }}
          >
            <iframe
              src="https://calendly.com/ingo-schwaiger/erstgespraech-buchen?hide_gdpr_banner=1&hide_event_type_details=0&primary_color=ff3d00&text_color=1a202c&embed_domain=landingpage-test.com&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduling Page"
              style={{ minHeight: '700px' }}
            ></iframe>
          </div>

          <p style={{ fontSize: '12px', color: '#718096', marginTop: '16px', textAlign: 'center' }}>
            Mit der Buchung akzeptierst du unsere
            <a href="/datenschutz" style={{ color: '#ff3d00', textDecoration: 'underline', marginLeft: '4px' }}>Datenschutzerklärung</a>.
            Wir nutzen Calendly zur Terminverwaltung.
          </p>

        </div>

        <div className="mt-16 w-full flex flex-col items-center">
          <div className="text-center mb-8">
            <div className="text-lg text-black/60 font-medium">
              Erfahrung aus über <span className="text-black font-bold">250 Mio. Umsatz</span> aus Projekten wie:
            </div>
          </div>

          <div className="w-full overflow-hidden relative">
            <div className="flex w-max animate-scroll">
              <div className="flex items-center gap-12 px-6">
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac2fae79478284a81ca_Frame%202087327037.avif" alt="Logo 1" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac26f7f2433d563b1d9_Frame%202087327037-1.avif" alt="Logo 2" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac2225ba5828d3e0855_Frame%202087327036.avif" alt="Logo 3" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac2e8507cbdd0d4c42d_Frame%202087327036-1.avif" alt="Logo 4" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac2e4bfda8858dddf02_Frame%202087327036-2.avif" alt="Logo 5" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac25ad79e1580bb2d7e_Frame%202087327037-2.avif" alt="Logo 6" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="flex items-center gap-12 px-6">
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac2fae79478284a81ca_Frame%202087327037.avif" alt="Logo 1" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac26f7f2433d563b1d9_Frame%202087327037-1.avif" alt="Logo 2" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac2225ba5828d3e0855_Frame%202087327036.avif" alt="Logo 3" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac2e8507cbdd0d4c42d_Frame%202087327036-1.avif" alt="Logo 4" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac2e4bfda8858dddf02_Frame%202087327036-2.avif" alt="Logo 5" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="https://cdn.prod.website-files.com/65573c446874868ee0fa68b5/68348ac25ad79e1580bb2d7e_Frame%202087327037-2.avif" alt="Logo 6" className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CalendarSection;
