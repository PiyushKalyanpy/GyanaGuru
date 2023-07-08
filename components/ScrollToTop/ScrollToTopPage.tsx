import React, { useEffect, useState } from 'react';

const scrollToTopButtonStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'none',
  width: '50px',
  height: '50px',
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  lineHeight: '50px',
  fontSize: '20px',
  cursor: 'pointer',
  zIndex: 9999,
};

const ScrollToTopPage: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{ ...scrollToTopButtonStyle, display: showButton ? 'block' : 'none' }}
      onClick={scrollToTop}
    >
      &uarr;
    </div>
  );
};

export default ScrollToTopPage;
