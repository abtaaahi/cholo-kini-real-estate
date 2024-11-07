import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="about-title">About Us</h1>
      <div className="image-cards">
        {[
          {
            imgUrl: "https://res.cloudinary.com/dasqmi9fl/image/upload/v1730308972/1_49_qzps3i.jpg",
            text: "Our Vision",
            subtext: "We aim to redefine the real estate experience by providing personalized solutions that meet the unique needs of every client, ensuring transparency and trust at every step of the journey."
          },
          {
            imgUrl: "https://res.cloudinary.com/dasqmi9fl/image/upload/v1730308965/1_36_pkyqky.jpg",
            text: "Quality Services",
            subtext: "Providing top-notch services to our clients by leveraging the latest technology and market insights, ensuring efficient and effective real estate transactions that exceed expectations."
          },
          {
            imgUrl: "https://res.cloudinary.com/dasqmi9fl/image/upload/v1730308956/1_12_t8ireb.jpg",
            text: "Community Focus",
            subtext: "Building better communities together through sustainable practices, local partnerships, and a commitment to enhancing the quality of life for residents, making a positive impact in every neighborhood."
          }
        ].map((item, index) => (
          <ImageCard key={index} imgUrl={item.imgUrl} text={item.text} subtext={item.subtext} />
        ))}
      </div>
    </div>
  );
};

const ImageCard = ({ imgUrl, text, subtext }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="image-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} 
    >
      <img src={imgUrl} alt={text} />
      <div className={`overlay ${isHovered ? 'hovered' : ''}`}>
        <p className="text">{text}</p>
        <p className={`subtext ${isHovered ? 'visible' : ''}`}>{subtext}</p>
      </div>
    </div>
  );
};

export default AboutUs;