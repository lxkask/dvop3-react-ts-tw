import React, { useState } from "react";

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg z-10"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg z-10"
        onClick={nextSlide}
      >
        Next
      </button>
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-1/3 h-64 transition-transform duration-300 ${
              index === currentIndex ? "" : "transform translate-x-full"
            }`}
          >
            <img src={image} alt={`Slide ${index}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;