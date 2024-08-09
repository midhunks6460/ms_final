import type { NextPage } from "next";
import { useState, useEffect } from "react";

export type CarouselType = {
  className?: string;
  images: string[]; // Array of image URLs
};

const Carousel: NextPage<CarouselType> = ({ className = "", images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImages = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }
  };

  const prevImages = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 2 + images.length) % images.length
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Adjust duration to match animation time

    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <div
      className={`w-[800px] h-[560px] flex flex-col items-center justify-start py-[40px] px-[64px] box-border gap-[24px] max-w-full ${className} 
        sm:w-full sm:h-auto sm:px-4 sm:py-2`} // Responsive styles
    >
      <div className="flex flex-row justify-center gap-[16px]">
        {/* Display two images at a time */}
        {images.slice(currentIndex, currentIndex + 2).map((src, index) => (
          <img
            key={index}
            className={`flex-1 h-[600px] w-[900px] object-cover transition-transform duration-500 ${isAnimating ? "animate-fade" : ""}`}
            loading="lazy"
            alt={`Image ${currentIndex + index + 1}`}
            src={src}
          />
        ))}
      </div>
      <div className="relative w-full h-[10px] bg-gray-300 rounded">
        <div
          className="absolute h-full bg-blue-500 rounded transition-all duration-500"
          style={{
            width: `${(((currentIndex + 2) % images.length) / images.length) * 100}%`,
          }}
        ></div>
      </div>
      <div className="flex flex-row items-center justify-center p-[8px] gap-[8px]">
        <button
          className="flex flex-row items-start justify-start p-[8px]"
          onClick={prevImages}
          disabled={isAnimating}
        >
          <img
            className="h-[24px] w-[24px] relative"
            loading="lazy"
            alt="Previous"
            src="/arrow-left.svg"
          />
        </button>
        <button
          className="flex flex-row items-start justify-start p-[8px]"
          onClick={nextImages}
          disabled={isAnimating}
        >
          <img
            className="h-[24px] w-[24px] relative"
            loading="lazy"
            alt="Next"
            src="/arrow-right.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
