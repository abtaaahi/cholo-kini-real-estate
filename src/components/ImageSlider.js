import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sliderProducts } from "../data/products";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderProducts.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Function to get the animation class based on the slide index
  const getAnimationClass = (index) => {
    switch (index % 3) {
      case 0:
        return "slideInLeft";
      case 1:
        return "zoomIn";
      case 2:
        return "slideInFromRight";
      default:
        return "";
    }
  };

  return (
    <div className="slider-container">
      {sliderProducts.map((product, index) => (
        <div
          key={product.id}
          className={`slide ${index === currentSlide ? "active" : ""} ${getAnimationClass(index)}`}
          onClick={() => handleImageClick(product.id)}
        >
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;