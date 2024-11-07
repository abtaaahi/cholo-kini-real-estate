import React, { useState } from 'react';
import './CustomerReview.css';

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    email: '',
    rating: 0,
    image: null,
    designation: '',
  });

  const defaultImage = "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStarClick = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert("Please select a rating.");
      return;
    }
    const newReview = {
      ...formData,
      timePosted: new Date().toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        day: '2-digit',
        month: 'short',
        year: '2-digit'
      }),
      image: formData.image || defaultImage,
    };
    setReviews((prev) => [newReview, ...prev]);
    setFormData({ name: '', message: '', email: '', rating: 0, image: null, designation: '' });
  };

  return (
    <div className="customer-review-page">
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
      </div>

      <div className="reviews-list">
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
      </div>
    </div>
  );
};

export default CustomerReview;
