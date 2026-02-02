
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';
import PopupForm from './components/PopupForm';

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
        <HomePage onCtaClick={handleOpenPopup} />
      ) : (
        <ThankYouPage onHomeClick={() => setCurrentPage('home')} />
      )}

      {isPopupOpen && (
        <PopupForm onClose={handleClosePopup} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
