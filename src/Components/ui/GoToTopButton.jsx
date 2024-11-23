// Components/GoToTopButton.js
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GoToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <button
    data-aos='fade-up'
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-primary text-white rounded-full px-6 py-4 z-50 shadow-lg transition"
      aria-label="Go to top"
    >
      <FontAwesomeIcon icon={faArrowUp} className='h-4'/>
    </button>
  );
};

export default GoToTopButton;