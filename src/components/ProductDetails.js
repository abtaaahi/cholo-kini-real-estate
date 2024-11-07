// src/components/ProductDetails.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products, sliderProducts } from "../data/products";
import Slider from "react-slick"; // Import the slider component
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((p) => p.id === productId) ||
    sliderProducts.find((p) => p.id === productId);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="product-details">
      {product ? (
        <>
        
          <h1 className="product-title">{product.name}</h1>
          
          {/* Conditional rendering for the slider */}
          {product.moreImages && product.moreImages.length > 0 ? (
            <Slider {...sliderSettings} className="product-image-slider">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              {product.moreImages.map((img, index) => (
                <img
                  key={index}
                  className="product-image"
                  src={img}
                  alt={`More of ${product.name} ${index}`}
                />
              ))}
            </Slider>
          ) : (
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
          )}

          <p className="product-price">BDT {product.price}</p>
          <div className="card-content-details">
            <p className="locationdetails"><i class="fa-solid fa-location-dot"></i> {product.location}</p>
            <div className="detailsproduct">
              <span><i class="fa-solid fa-bed"></i>Beds: {product.beds}</span>
              <span><i class="fa-solid fa-bath"></i> Baths: {product.baths}</span>
              <span><i class="fa-solid fa-ruler"></i> Sqft: {product.area}</span>
            </div>
          </div>
          <p className="product-description">{product.description}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
