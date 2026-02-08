
import React from 'react';

interface OfferSectionProps {
  onCtaClick: () => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  const mbaFeatures = [
    "Complete MBA system",
    "Weekly coaching calls",
    "Category creation blueprints",
    "Email marketing automation systems",
    "High-converting copywriting frameworks",
    "MBA Webinar Playbook",
    "KFC Method",
    "Reality Engineering courses"
  ];

  const coachingFeatures = [
    "Monthly strategy calls with Raoul Plickat",
    "Weekly 1-on-1 strategic coaching",
    "Custom framework development",
    "Exclusive entrepreneur network",
    "7-figure campaign templates",
    "Advanced sales training",
    "Exclusive masterclass and webinar access",
    "Complete MBA system"
  ];

  return (
    <section className="py-24 bg-[#f9f9f9] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight">
          Accelerate & Scale<span className="text-[#ff3d00]">.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-black/[0.03] overflow-hidden">
          
          {/* Left Column: MBA Marketing System */}
          <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-black/[0.05]">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Learn the MBA Marketing System<span className="text-[#ff3d00]">.</span>
            </h3>
            <p className="text-[#111111]/60 text-lg mb-10 leading-relaxed font-medium">
              Master the <span className="text-black font-bold">asymmetric leverage frameworks</span> yourself. <br />
              Access the system behind 400+ scaled brands.
            </p>

            <button 
              onClick={onCtaClick}
              className="flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-[1.02] transition-transform shadow-xl mb-14"
            >
              <div className="w-6 h-6 bg-[#ff3d00] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span>Book a Call Now</span>
              <svg className="w-4 h-4 ml-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-4">Learn the MBA Marketing System Includes:</p>
              {mbaFeatures.map((item, i) => (
                <div key={i} className="flex items-center space-x-4 py-4 border-b border-black/[0.03] last:border-0 group">
                  <div className="w-4 h-4 bg-black/80 rounded-[4px] group-hover:bg-[#ff3d00] transition-colors flex-shrink-0"></div>
                  <span className="text-base font-semibold text-black/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Coaching & Training */}
          <div className="p-10 md:p-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Coaching & Training<span className="text-[#ff3d00]">.</span>
            </h3>
            <p className="text-[#111111]/60 text-lg mb-10 leading-relaxed font-medium">
              Individual mentorship to <span className="text-black font-bold">rebuild your strategic foundation.</span> <br />
              Transform from competitor to category leader.
            </p>

            <button 
              onClick={onCtaClick}
              className="flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-[1.02] transition-transform shadow-xl mb-14"
            >
              <div className="w-6 h-6 bg-[#ff3d00] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span>Book a Call Now</span>
              <svg className="w-4 h-4 ml-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-4">Coaching & Training Includes:</p>
              {coachingFeatures.map((item, i) => (
                <div key={i} className="flex items-center space-x-4 py-4 border-b border-black/[0.03] last:border-0 group">
                  <div className="w-4 h-4 bg-black/80 rounded-[4px] group-hover:bg-[#ff3d00] transition-colors flex-shrink-0"></div>
                  <span className="text-base font-semibold text-black/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfferSection;
