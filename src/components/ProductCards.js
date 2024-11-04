// src/components/ProductCards.js
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products"; // Import centralized products data
import "./ProductCards.css";

const ProductCards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'visible' class to the card when it is in view
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the card is visible

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      // Clean up observer on component unmount
      observer.disconnect();
    };
  }, []);

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page
  };

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div 
          className="product-card" 
          key={product.id} 
          ref={(el) => (cardRefs.current[index] = el)} 
          onClick={() => handleProductClick(product.id)}
        >
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {/* <button className="see-details">See Details</button> */}
        </div>
      ))}
    </div>
  );
};

export default ProductCards;