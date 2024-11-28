import React, { useState, useEffect } from 'react';
import "./FloatingWhatsAppButton.css";
import 'remixicon/fonts/remixicon.css';


const FloatingWhatsAppButton = () => {
  const whatsappNumber = "+8801700707184";

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-buttons">
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-button"
    >
      <i class="ri-whatsapp-line"></i>
    </a>

    {showScrollTop && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          <i className="fa-solid fa-caret-up"></i>
        </button>
      )}
    </div>
  );
};

export default FloatingWhatsAppButton;