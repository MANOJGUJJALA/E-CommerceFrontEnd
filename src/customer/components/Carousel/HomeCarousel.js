import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "./HomeCarouselData";
import { useNavigate } from "react-router-dom";
import "./Carousel.css"

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
    const navigate = useNavigate();
    
    const item = HomeCarouselData.map((item) => (
        <img
          className="cursor-pointer"
          onClick={() => navigate(item.path)}
          src={item.image}
          alt=""
          onDragStart={handleDragStart}
          role="presentation"
        />
      ));

      return (
        <AliceCarousel
          mouseTracking
          items={item}
          autoPlay
          infinite
          autoPlayInterval={1000}
          disableButtonsControls
        />
      );



}

export default HomeCarousel;

