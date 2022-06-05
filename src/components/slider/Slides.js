import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500  ",
    alt: "Item 1",
    desc: "Item 1",
  },
  {
    src:
      "https://images.pexels.com/photos/2582934/pexels-photo-2582934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Item 2",
    desc: "Item 2",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Item 3",
    desc: "Item 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
