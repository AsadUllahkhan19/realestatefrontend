import React, { useState } from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const PropertyGallery = ({ images }) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.slice(0, 3).map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-auto cursor-pointer"
            onClick={toggleCarousel}
          />
          {index === 2 && images.length > 3 && (
            <div className="absolute inset-0 bg-black opacity-75 text-white flex justify-center items-center cursor-pointer">
              <p className="text-4xl">{`+${images.length - 3} images`}</p>
            </div>
          )}
        </div>
      ))}
      {showCarousel && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="container mx-auto h-screen p-4">
            <Gallery items={images.map((image) => ({ original: image.url, thumbnail: image.url }))} />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
            onClick={toggleCarousel}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;
