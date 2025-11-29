import React, { useState } from 'react';
import './Carousel.css';
import hurricaneVideo from "../../assets/Hurricane.mp4";
import tornadoVideo from "../../assets/Tornado.mp4";
import wildFireVideo from "../../assets/WildFire.mp4";
import floodingVideo from "../../assets/Flooding.mp4";

/* Modified it to have a coulmn beside the image carousel */
const slides = [
{
    video: hurricaneVideo,
    title: "Hurricane Readiness",
    text: "Stay ahead of tropical threats with real-time updates and impact analysis.",
    button: "National Hurricane Center",
    link: "https://www.nhc.noaa.gov/"
  },
  {
    video: tornadoVideo, /*From Pinterest: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F439101032407740001%2F&psig=AOvVaw0pzGAMZO0lUUUc1ULPaPNE&ust=1764450168192000&source=images&cd=vfe&opi=89978449&ved=0CBYQjhxqFwoTCICN0KDflZEDFQAAAAAdAAAAABAE */
    title: "Tornado Preparedness",
    text: "Instant tornado and storm intelligence to keep communities safer.",
    button: "National Severe Storms Laboratory",
    link: "https://www.nssl.noaa.gov/education/svrwx101/tornadoes/"
  },
  {
    video: wildFireVideo, /* From Gif abyss: https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifs.alphacoders.com%2Fgifs%2Fview%2F23360&psig=AOvVaw069KGU5XcnG2qsuR2ZyBcn&ust=1764457419669000&source=images&cd=vfe&opi=89978449&ved=0CBYQjhxqGAoTCPitsKX6lZEDFQAAAAAdAAAAABCsAQ */
    title: "Wildfire Recovery",
    text: "Critical situational awareness to help you prepare and respond efficiently.",
    button: "National Interagency Fire Center",
    link: "https://www.nifc.gov/programs/post-fire-recovery"
  },
  {
    video: floodingVideo, /* From gif abyss: https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifs.alphacoders.com%2Fgifs%2Fview%2F151175&psig=AOvVaw1OF-vMMKxZG1Jq1C7ujJtO&ust=1764460787412000&source=images&cd=vfe&opi=89978449&ved=0CBYQjhxqFwoTCIC-r_OGlpEDFQAAAAAdAAAAABBp */
    title: "Flood Ready",
    text: "Stay informed and prepared for incoming flooding.",
    button: "FloodSmart",
    link: "https://www.floodsmart.gov/"
}
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentSlide = slides[currentIndex];

    const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToIndex = (index) => {
    setCurrentIndex(index);
    };

    return (
    <div className="carousel-wrapper">
        {/* Left: Full-width carousel */}
        <div className="carousel">
        {/* Slides */}
        <div className="carousel__slides">
            {slides.map((slide, idx) => (
            <div
            key={idx}
            className={`carousel__slide ${idx === currentIndex ? 'active' : ''}`}
            >
            <video
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
            />
            
            </div>
        ))}
        </div>

        {/* Arrows */}
        <button className="carousel__arrow carousel__arrow--left" onClick={goPrev}>
        ‹
        </button>
        <button className="carousel__arrow carousel__arrow--right" onClick={goNext}>
        ›
        </button>

        {/* Indicators */}
        <div className="carousel__indicators">
            {slides.map((_, idx) => (
            <button
            key={idx}
            className={`indicator ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(idx)}
            />
        ))}
        </div>
    </div>

    {/* RIGHT: TEXT THAT CHANGES WITH SLIDE */}
      <div className="carousel-text-panel">
        <h2>{currentSlide.title}</h2>
        <p>{currentSlide.text}</p>

        <a 
            href={currentSlide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="carousel-cta-btn"
        >
          {currentSlide.button}
        </a>
        
      </div>

    </div>
  );
};

export default Carousel;