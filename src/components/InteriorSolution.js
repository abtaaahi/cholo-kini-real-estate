import React, { useState } from 'react'; 
import './InteriorSolution.css';
import WhatWeDo from './WhatWeDo';

const imageArrayHouse = [
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263348/IMG-20241110-WA0010_tbmqbf.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263349/IMG-20241110-WA0003_acgttg.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263348/IMG-20241110-WA0011_myancp.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263349/IMG-20241110-WA0004_lmormf.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263349/IMG-20241110-WA0012_bqmxkq.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263350/IMG-20241110-WA0002_txpcth.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263348/IMG-20241110-WA0009_ngylfz.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263351/IMG-20241110-WA0005_wh41m1.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731947405/IMG-20241118-WA0007_zxtlpm.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731947720/IMG-20241118-WA0005_vxcxze.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731947722/IMG-20241118-WA0004_flgvks.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731947728/IMG-20241118-WA0009_cs1id1.jpg'
];

const imageArrayOffice = [
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263291/IMG-20241110-WA0016_tf56fh.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263291/IMG-20241110-WA0014_fpyrji.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731947403/IMG-20241118-WA0002_fs4rjo.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263291/IMG-20241110-WA0013_yv4rfq.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731947402/IMG-20241118-WA0008_tcch83.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731263291/IMG-20241110-WA0015_xs5di0.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731947560/IMG-20241118-WA0003_jrn06s.jpg',
  'https://res.cloudinary.com/dasqmi9fl/image/upload/v1731947643/IMG-20241118-WA0006_l0scbt.jpg'
];

const InteriorSolution = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="interior-solution">
      <h1>Interior Solution</h1>
      <p className="subtitleinterior">
        Our Interior Solution services are designed to transform your space into a functional, aesthetic, and harmonious environment. 
        Whether it's residential or commercial, we ensure every detail aligns with your vision and meets the highest standards of design and quality. 
        From initial consultations to detailed plans and expert installation, our team brings experience, creativity, and precision to every project. 
        We prioritize sustainability, functionality, and timeless elegance, making sure your space is as unique and inspiring as you are.
      </p>

      <WhatWeDo/>

      <h2>Residence:</h2>
      <div className="image-gallery">
        {imageArrayHouse.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Residence ${index + 1}`}
            className="gallery-image"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      <h2>Office:</h2>
      <div className="image-gallery">
        {imageArrayOffice.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Office ${index + 1}`}
            className="gallery-image"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className={`fullscreen-overlay ${selectedImage ? 'show' : ''}`} onClick={closeFullScreen}>
          <img src={selectedImage} alt="Full Screen" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

export default InteriorSolution;