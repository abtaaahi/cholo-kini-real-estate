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

const textArrayHouse = [
  'The design should reflect the unique personality and lifestyle of the residents. Tailoring the space to the client’s specific tastes, needs, and daily routines helps create a home that feels truly theirs. This could include custom furniture, bespoke décor items, and personalized color schemes that evoke comfort and familiarity.  ',
  'A well-planned layout is essential. Ensure that spaces are not only visually appealing but also practical. For example, consider open-plan living spaces that encourage interaction, yet still provide areas for privacy. Multi-purpose rooms, integrated storage, and flexible furniture allow the home to adapt to changing needs over time. ',
  'Comfort is at the heart of residential design. Materials like soft fabrics, plush rugs, and ergonomic furniture should enhance comfort. The overall design should focus on creating an environment that promotes well-being, incorporating elements like good air quality, efficient temperature control, and restful lighting. ',
  'Aim for a timeless design that won’t easily date. Neutral tones, classic materials like wood and stone, and clean lines ensure that the home feels sophisticated and current without following fleeting trends. These elements allow the home to evolve with the client\'s changing preferences over the years.',
  'Sustainability is increasingly important in modern interior design. Using eco-friendly materials, energy-efficient appliances, and sustainable building techniques helps reduce the environmental footprint. Sustainable design isn’t just about materials—it also involves considering the longevity of the design, using pieces that will last and adapting spaces for future needs.',
  'Technology should seamlessly blend into the design, providing convenience without dominating the space. Smart home features like automated lighting, climate control, and security systems can be integrated into the home’s design, allowing residents to easily manage their environment through smart devices.',
  'Lighting should be both functional and atmospheric. Natural light is vital for creating warmth and energy, while artificial lighting can be layered to suit different moods. Task lighting, accent lighting, and ambient lighting should be used in harmony, with carefully chosen fixtures that add to the overall aesthetic of the space.',
  'Bringing the outdoors inside creates a serene, calming environment. Incorporating large windows, open balconies, and indoor plants creates a natural flow between the indoor and outdoor spaces. In urban areas, even small outdoor spaces like balconies or rooftop gardens can enhance the living experience, offering residents a peaceful retreat.',
  'Materials should be carefully selected not only for their aesthetic appeal but also for their durability and tactile quality. Mixing textures, such as wood, stone, and metals, adds depth and interest to a room. Using natural materials can also enhance the overall ambiance, making the space feel grounded and connected to nature.',
  'Thoughtful details, such as custom cabinetry, statement lighting fixtures, or unique accessories, can elevate the design. Small elements—like carefully chosen handles, knobs, or textiles—add personality and make the space feel finished and considered. These details play an important role in making the home feel unique and cohesive.',
  'Balance is key in achieving harmony within a space. The proportions of furniture, accessories, and architectural elements should complement each other to create a visually pleasing and functional environment. Avoid overcrowding, and ensure that each piece has room to breathe and make its impact.',
  'Personalization is crucial in creating a space that feels truly like home. Incorporating elements that reflect the residents experiences, values, and memories, such as family heirlooms, artworks, or travel souvenirs, helps establish a deep emotional connection to the space, making it feel uniquely theirs.'
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

const textArrayOffice = [
  'The design should reflect the company\'s brand values, culture, and vision. Elements like color schemes, textures, logos, and signage can be used to visually communicate the brand’s personality. A cohesive and well-thought-out interior design reinforces the company’s identity and creates a sense of belonging for employees and a memorable experience for clients and visitors.',
  'Commercial spaces must be practical and adaptable to changing needs. Whether it’s an office, retail space, or hospitality venue, the layout should optimize space for functionality. In office design, for example, open floor plans, collaborative workspaces, and private meeting rooms balance transparency and privacy. Multi-purpose furniture, modular walls, and adjustable layouts allow the space to evolve as business needs shift.',
  'A key consideration in commercial design is creating an environment that promotes employee well-being and productivity. Comfortable ergonomic furniture, natural light, and noise-reducing elements are essential. The use of biophilic design, such as indoor plants or natural materials, can improve air quality and create a calming atmosphere, boosting employee morale and focus.',
  'In commercial spaces like retail stores or hospitality venues, the customer experience is paramount. The interior should create an inviting atmosphere that encourages engagement, exploration, and interaction with the space. Thoughtful layout design, comfortable seating, well-designed signage, and clear navigation all contribute to a positive customer journey. A unique ambiance—whether through lighting, textures, or artwork—can also differentiate the business and create lasting impressions.',
  'Incorporating sustainable practices into commercial interior design is becoming increasingly important. This can include using eco-friendly materials, energy-efficient lighting and HVAC systems, and water-saving fixtures. Sustainable design not only benefits the environment but also reduces operational costs in the long term, making it a smart choice for businesses looking to improve both their bottom line and environmental impact.',
  'Commercial spaces, especially offices and conference rooms, benefit greatly from the seamless integration of technology. Smart lighting, climate control, and audio-visual systems can improve efficiency and enhance the user experience. For retail spaces, interactive displays, digital signage, and point-of-sale technology can provide added value and convenience for customers. The key is to ensure that technology complements the design rather than overwhelming the space.',
  'A visually appealing design enhances the overall mood and perception of the commercial space. Colors, textures, and finishes should align with the brand\'s personality while creating an inviting and professional atmosphere. For instance, calming neutral tones may be ideal for corporate offices, while vibrant, dynamic colors can be used in creative spaces or retail environments to foster energy and excitement.',
  'The layout of the commercial space should facilitate a logical flow that enhances productivity and movement. In office design, this includes clear delineation between open work areas and private spaces, while ensuring that key facilities like restrooms, kitchens, and meeting rooms are easily accessible. In retail spaces, the layout should guide customers intuitively, creating paths that lead to high-traffic areas or focal points.'
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
          <div key={index} className="image-item">
            <img
              src={image}
              alt={`Residence ${index + 1}`}
              className="gallery-image"
              onClick={() => handleImageClick(image)}
            />
            <p>{textArrayHouse[index]}</p>
          </div>
        ))}
      </div>

      <h2>Office:</h2>
      <div className="image-gallery">
        {imageArrayOffice.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image}
              alt={`Office ${index + 1}`}
              className="gallery-image"
              onClick={() => handleImageClick(image)}
            />
            <p>{textArrayOffice[index]}</p>
          </div>
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
