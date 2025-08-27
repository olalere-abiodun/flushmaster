import React, { useState } from "react";
import images from "../../imagedata";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <span className="browse">Browse Our Work</span>
      <span className="prev" onClick={prevSlide}>
        Previous
      </span>

      <span className="next" onClick={nextSlide}>
        Next
      </span>
    </div>
  );
};

export default Slider;
