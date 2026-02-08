
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';
import PopupForm from './components/PopupForm';
import { MenuBarDemo } from './components/MenuBarDemo';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'thankyou'>('home');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Sync scroll behavior on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleFormSubmit = () => {
    setIsPopupOpen(false);
    setCurrentPage('thankyou');
  };

  return (
    <div className="min-h-screen selection:bg-[#f05522] selection:text-white">
      {currentPage === 'home' ? (
        <>
          <HomePage onCtaClick={handleOpenPopup} />
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <MenuBarDemo />
          </div>
        </>
      ) : (
        <ThankYouPage onHomeClick={() => setCurrentPage('home')} />
      )}

      <AnimatePresence>
        {isPopupOpen && (
          <PopupForm onClose={handleClosePopup} onSubmit={handleFormSubmit} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
