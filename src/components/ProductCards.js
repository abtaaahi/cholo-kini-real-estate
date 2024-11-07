import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { products } from "../data/products";
import "react-toastify/dist/ReactToastify.css";
import "./ProductCards.css";

const ProductCards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navigate = useNavigate();

  const handleProductClick = (id, isAvailable) => {
    if (!isAvailable) {
      toast.error("This product is currently not available.");
      return;
    }
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div 
          className="product-card" 
          key={product.id} 
          ref={(el) => (cardRefs.current[index] = el)} 
          onClick={() => handleProductClick(product.id, product.isAvailable)}
        >
          <div className="card-image">
            <img src={product.image} alt={product.name} />
            <div className="badges">
              <span className="badge featured">Featured</span>
              <span className="badge for-sale">For Sale</span>
            </div>
          </div>
          <div className="card-content">
            <p className="location"><i className="fa-solid fa-location-dot"></i> {product.location}</p>
            <h3>{product.name}</h3>
            <div className="details">
              <span><i className="fa-solid fa-bed"></i>Beds: {product.beds}</span>
              <span><i className="fa-solid fa-bath"></i> Baths: {product.baths}</span>
              <span><i className="fa-solid fa-ruler"></i> Sqft: {product.area}</span>
            </div>
            <p className="price">BDT {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
