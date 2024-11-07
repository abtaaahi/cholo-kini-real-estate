import React, { useEffect, useState } from 'react';
import './DreamHome.css';

const phrases = [
  "Dream House",
  "Perfect Home",
  "Luxury Villa",
  "Cozy Cabin",
  "Ideal Space",
  "Elite Lodge",
  "Modern Flat",
  "Stylish Den",
  "Luxe Retreat",
  "Serene Place",
  "Prime Estate",
];

const DreamHome = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dream-home-container">
      <h1 className="main-title">
        Find Your{" "}
        <span
          className={`phrase ${isAnimating ? "fade-out-down" : "fade-in-up"}`}
          key={currentPhraseIndex}
        >
          {phrases[currentPhraseIndex]}
        </span>
      </h1>
      <div className="image-section">
        <img
          src="https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="House"
          className="house-image"
        />
        <div className="overlayhero left-overlay">
          <p>Expert in apartment resales & investments, ensuring smooth transactions & great returns!</p>
        </div>
        <div className="overlayhero right-overlay">
          <p>Support in project management, legal checks, design, & property transactions for a seamless experience!</p>
        </div>
      </div>
    </div>
  );
};

export default DreamHome;