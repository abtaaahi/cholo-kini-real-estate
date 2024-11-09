import React, { useState, useEffect } from 'react';
import './InteriorSolution.css';

const imageArray = [
  'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1618222104927-33e0bd5f8dae?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1617104833784-3b37a50d1c76?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1618220321979-ecb3a975aa82?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1617104611622-d5f245d317f0?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1618219788702-20a1ef509691?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const InteriorSolution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="interior-solution">
      <h1>Interior Solution</h1>
      <div
        className="slideshow-container-interior"
        style={{ backgroundImage: `url(${imageArray[currentIndex]})` }}
      >
        <img
          src={imageArray[currentIndex]}
          alt={`Interior ${currentIndex + 1}`}
          className="slideshow-image-interior"
        />
      </div>
      <p className="subtitleinterior">
        Our Interior Solution services are designed to transform your space into a functional, aesthetic, and harmonious environment. 
        Whether it's residential or commercial, we ensure every detail aligns with your vision and meets the highest standards of design and quality. 
        From initial consultations to detailed plans and expert installation, our team brings experience, creativity, and precision to every project. 
        We prioritize sustainability, functionality, and timeless elegance, making sure your space is as unique and inspiring as you are.
      </p>
    </div>
  );
};

export default InteriorSolution;