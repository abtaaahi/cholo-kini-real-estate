import React, { useState, useRef } from 'react';
import './CustomerReview.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader";

const CustomerReview = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    email: '',
    rating: 0,
    image: null,
    designation: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStarClick = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formData.rating === 0) {
      alert("Please select a rating.");
      return;
    }

    const dataToSend = new FormData();
    dataToSend.append("name", formData.name);
    dataToSend.append("message", formData.message);
    dataToSend.append("email", formData.email || '');
    dataToSend.append("rating", formData.rating);
    dataToSend.append("designation", formData.designation);
    dataToSend.append("image", formData.image);

    try {
      const response = await fetch("https://info.backend.cholokini.sahossain.com/api/review", {
        method: "POST",
        body: dataToSend,
      });
  
      if (response.ok) {
        const result = await response.json();
        toast.success("Review submitted successfully!");

      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.error || "Failed to submit review."}`);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Something went wrong while submitting the review.");
    } finally {
      setIsLoading(false);
    }
    setFormData({ name: '', message: '', email: '', rating: 0, image: null, designation: '' });
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="customer-review-page">
      <ToastContainer />
      <h1 className="title">Customer Review</h1>
      <div className="review-section">
        <form onSubmit={handleSubmit} className="review-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Designation:
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email (optional):
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Profile Image (optional):
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
            />
          </label>
          <div className="rating">
            <label>Rating:</label>
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`star ${formData.rating >= index + 1 ? 'selected' : ''}`}
                  onClick={() => handleStarClick(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button type="submit">Submit Review</button>
        </form>

        <div className="review-text">
          <p>Your feedback is invaluable to us. Every review helps us enhance our services, ensuring we meet and exceed your expectations in finding your perfect property. Whether it's a home, office space, or investment opportunity, your insights guide us in delivering a seamless and personalized real estate experience.</p>
        </div>

        <Loader isVisible={isLoading} />
      </div>
    </div>
  );
};

export default CustomerReview;


// Review Design

  /* <div className="reviews-list">
    {reviews.map((review, index) => (
      <div key={index} className="review-card">
        <div className="review-header">
          <img
            src={review.image}
            alt="Profile"
            className="profile-image"
          />
          <div className="review-info">
            <h3 className="reviewName">{review.name}</h3>
            <p className="designation">{review.designation}</p>
          </div>
          <div className="star-rating-display">
            {'★'.repeat(review.rating)}
          </div>
        </div>
        <p className="time-posted">{review.timePosted}</p>
        <p className="reviewMessage">{review.message}</p>
      </div>
    ))}
  </div> */