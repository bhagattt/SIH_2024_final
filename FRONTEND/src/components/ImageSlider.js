import React, { useState, useEffect } from "react";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";

function ImageSlider() {
  const images = [image1, image2, image3, image4];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="image-slider">
      <div className="slider">
        <div className="slide">
          <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;
