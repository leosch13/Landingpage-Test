
import React from 'react';
import { ShinyButton } from './ui/ShinyButton';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#000000]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#ff3d00] rounded-xl flex items-center justify-center font-bold text-xl italic shadow-lg shadow-[#ff3d00]/20">F</div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">FULLSTACK</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-bold text-white/40">
          <a href="#agentur-dilemma" className="hover:text-white transition-colors">Dilemma</a>
          <a href="#der-aufbau" className="hover:text-white transition-colors">Der Aufbau</a>
          <a href="#fsm-connect" className="hover:text-white transition-colors">FSM Connect</a>
        </div>

        <div className="flex items-center">
          <ShinyButton
            onClick={onCtaClick}
            className="scale-75 md:scale-100 origin-right"
          >
            Intro Call buchen
          </ShinyButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
