import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShinyButton } from './ui/ShinyButton';

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-xl bg-white text-[#111111] rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
      >
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
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]/30 mb-2 ml-1">Vorname</label>
              <input
                required
                type="text"
                placeholder="Vorname"
                className="w-full px-7 py-4 rounded-2xl bg-[#f5f5f7] border border-transparent focus:border-[#ff3d00]/30 focus:bg-white transition-all outline-none font-medium"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]/30 mb-2 ml-1">Nachname</label>
              <input
                required
                type="text"
                placeholder="Nachname"
                className="w-full px-7 py-4 rounded-2xl bg-[#f5f5f7] border border-transparent focus:border-[#ff3d00]/30 focus:bg-white transition-all outline-none font-medium"
              />
            </div>
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

          <div className="flex items-start gap-3 px-1">
            <input
              required
              type="checkbox"
              id="privacy"
              className="mt-1 w-4 h-4 rounded border-gray-300 text-[#ff3d00] focus:ring-[#ff3d00]"
            />
            <label htmlFor="privacy" className="text-xs text-[#111111]/60 leading-relaxed cursor-pointer">
              Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden.
            </label>
          </div>

          <ShinyButton
            type="submit"
            disabled={loading}
            className="w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed text-center"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin block mx-auto"></span>
            ) : (
              "Jetzt Strategie anfordern"
            )}
          </ShinyButton>

          <p className="text-[10px] text-center text-[#111111]/30 mt-6 font-medium">
            Werde zur nächsten Erfolgsgeschichte unserer Elite.
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default PopupForm;
