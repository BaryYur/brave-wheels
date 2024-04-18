import React from "react";

import Slider from "react-slick";

import * as Elements from "./Elements";

type SliderProps = {
  children: React.ReactNode;
  dots: boolean;
  infinite: boolean;
  speed?: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive?: any[];
  centerMode: boolean;
}

export const SliderCarousel: React.FC<SliderProps> = ({
  children,
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
  responsive,
  centerMode,
}) => {
  const nextButton = <Elements.NavButton
    // aria-hidden="true"
    // aria-disabled={currentSlide === 0 ? true : false}
    // type="button"
  >
    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.01486 32L0 29.16L13.9703 16L0 2.84L3.01486 0L20 16L3.01486 32Z" fill="white"/>
    </svg>
  </Elements.NavButton>;

  const prevButton = <Elements.NavButton
    // aria-hidden="true"
    // aria-disabled={currentSlide === slideCount - 1 ? true : false}
    // type="button"
  >
    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9851 0L20 2.84L6.02972 16L20 29.16L16.9851 32L0 16L16.9851 0Z" fill="white"/>
    </svg>
  </Elements.NavButton>;

  return (
    <Slider
      arrows={true}
      dots={dots}
      infinite={infinite}
      speed={speed || 500}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      nextArrow={nextButton}
      prevArrow={prevButton}
      centerMode={centerMode}
      dotsClass="slick-dots"
      focusOnSelect={false}
      className="main-carousel"
      responsive={responsive}
    >
      {children}
    </Slider>
  );
}