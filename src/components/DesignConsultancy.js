import React, { useState, useEffect } from 'react';
import './DesignConsultancy.css';

const imageArray = [
  'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560185009-5bf9f2849488?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];


const DesignConsultancy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="design-consultancy">
      <h1>Design Consultancy</h1>
      <div
        className="slideshow-container"
        style={{ backgroundImage: `url(${imageArray[currentIndex]})` }}
      >
        <img
          src={imageArray[currentIndex]}
          alt={`Design Consultancy ${currentIndex + 1}`}
          className="slideshow-image"
        />
      </div>
      <p className="subtitleDesign">
        Our Design Consultancy services offer innovative solutions tailored to meet your unique needs, blending 
        creativity with functionality to deliver exceptional outcomes. Whether you're looking to revamp a single 
        space or develop a comprehensive design strategy, our team of experts will guide you through every stage 
        of the process. We pride ourselves on attention to detail, contemporary aesthetics, and a personalized 
        approach that aligns with your vision, ensuring a seamless transformation that enhances both form and 
        function. Discover the difference that professional design expertise can make in achieving your goals.
      </p>
    </div>
  );
};

export default DesignConsultancy;
