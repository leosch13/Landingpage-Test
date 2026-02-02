
import React, { useState } from 'react';

interface PopupFormProps {
  onClose: () => void;
  onSubmit: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose, onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSubmit();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#000000]/95 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-white text-[#111111] rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-[#111111]/20 hover:text-[#111111] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3 tracking-tight">Dein Intro-Call</h2>
          <p className="text-[#111111]/40 font-medium">Sichere dir deinen Platz für das Share-Deal Mentoring.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]/30 mb-2 ml-1">Vollständiger Name</label>
            <input 
              required
              type="text" 
              placeholder="Vor- und Nachname"
              className="w-full px-7 py-4 rounded-2xl bg-[#f5f5f7] border border-transparent focus:border-[#ff3d00]/30 focus:bg-white transition-all outline-none font-medium"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]/30 mb-2 ml-1">E-Mail Adresse</label>
            <input 
              required
              type="email" 
              placeholder="name@business.de"
              className="w-full px-7 py-4 rounded-2xl bg-[#f5f5f7] border border-transparent focus:border-[#ff3d00]/30 focus:bg-white transition-all outline-none font-medium"
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className="btn-premium w-full justify-start disabled:opacity-50"
          >
            <div className="icon-circle">
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
            <span className="text-lg">Jetzt Strategie anfordern</span>
          </button>
          
          <p className="text-[10px] text-center text-[#111111]/30 mt-6 font-medium">
             Werde zur nächsten Erfolgsgeschichte unserer Elite.
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
