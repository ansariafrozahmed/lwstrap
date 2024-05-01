"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductImageCarousel = () => {
  return (
    <>
      <div className="text-white text-[20px] w-full mx-auto sticky top-[50px]">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          <img src="/strap.webp" />

          <img src="/strap2.webp" />
          <img src="/strap4.webp" />
          <img src="/strap.webp" />
          <img src="/strap2.webp" />
        </Carousel>
      </div>
    </>
  );
};

export default ProductImageCarousel;
