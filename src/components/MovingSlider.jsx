import React from "react";
import Marquee from "react-fast-marquee";

const MovingSlider = () => {
  const images = [
    { src: "1.png", alt: "VIHANG" },
    {
      src: "2.png",
      alt: "assimulate",
    },
    { src: "3.png", alt: "MOBILITY" },
    {
      src: "4.png",
      alt: "Articulate",
    },
    {
      src: "5.png",
      alt: "Creative Swatch",
    },
    { src: "6.png", alt: "NAR" },
    { src: "7.png", alt: "MOBILITY" },
    { src: "8.png", alt: "USER7" },
    { src: "9.png", alt: "NAR" },
    {
      src: "10.png",
      alt: "Articulate",
    },
  ];

  return (
    <div className="bg-white py-8 mt-8">
      <h2 className="text-center text-lg font-bold mb-14">HAPPY USERS</h2>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="space-x-8"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-32 h-auto mx-4 object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MovingSlider;
