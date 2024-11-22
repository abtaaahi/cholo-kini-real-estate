import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products, sliderProducts } from "../data/products";
import ReactMarkdown from "react-markdown"; 
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);

  const [selectedImage, setSelectedImage] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const product = products.find((p) => p.id === productId) ||
    sliderProducts.find((p) => p.id === productId);

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="product-details-main">
    <div className="product-details">
      {product ? (
        <>
          <div className="product-image-info">
            <div className="product-image-gallery">
              <div className="main-image-wrapper" onClick={handleImageClick}>
                <img
                  className="main-image"
                  src={selectedImage || product.image}
                  alt={product.name}
                />
              </div>
              <div className="thumbnail-gallery">
                {product.moreImages &&
                  product.moreImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      onClick={() => setSelectedImage(img)}
                      className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div className="product-details-info">
            <h1 className="product-name-details">{product.name}</h1>
            <p className="rating-details">⭐⭐⭐⭐⭐</p>
          <p className="product-price">Tk. {product.price}</p>
          <div className="card-content-details">
            <p className="locationdetails"><i class="fa-solid fa-location-dot"></i> {product.location}</p>
            <div className="detailsproduct">
              <table>
                <tbody>
                <tr>
                    <td><i className="fa-solid fa-ruler"></i> Sqft:</td>
                    <td>{product.area}</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-bed"></i> Beds:</td>
                    <td>{product.beds}</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-bath"></i> Baths:</td>
                    <td>{product.baths}</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-kitchen-set"></i> Kitchen:</td>
                    <td>{product.kitchen}</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-couch"></i> Living:</td>
                    <td>{product.living}</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-utensils"></i> Dining:</td>
                    <td>{product.dining}</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-people-roof"></i> Terrace:</td>
                    <td>{product.terrace}</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-bed"></i> Servant Bed:</td>
                    <td>{product.serventBed}</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-toilet"></i> Servant Toilet:</td>
                    <td>{product.serventToilet}</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-car"></i> Parking:</td>
                    <td>{product.parking}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <span>Parking Place: {product.parkingPlace}</span>
          <span>Other Facilities: {product.otherFacilities}</span> */}
          </div>

          {isFullScreen && (
            <div className="fullscreen-overlay show" onClick={closeFullScreen}>
              <img src={selectedImage || product.image} alt="Full Screen" className="fullscreen-image" />
            </div>
          )}
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
    <div className="product-description">
            <ReactMarkdown>{product.description}</ReactMarkdown>
          </div>
    </div>
  );
};

export default ProductDetails;