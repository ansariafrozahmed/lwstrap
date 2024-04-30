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
          <img src="https://i0.wp.com/ajwa.in/wp-content/uploads/2022/04/blue-stag-skin-strap-by-ajwain.jpg?fit=610%2C763&ssl=1" />

          <img src="https://i0.wp.com/ajwa.in/wp-content/uploads/2022/04/blue-stag-skin-strap-by-ajwain.jpg?fit=610%2C763&ssl=1" />
          <img src="https://i0.wp.com/ajwa.in/wp-content/uploads/2022/04/blue-stag-skin-strap-by-ajwain.jpg?fit=610%2C763&ssl=1" />
          <img src="https://i0.wp.com/ajwa.in/wp-content/uploads/2022/04/blue-stag-skin-strap-by-ajwain.jpg?fit=610%2C763&ssl=1" />
          <img src="https://i0.wp.com/ajwa.in/wp-content/uploads/2022/04/blue-stag-skin-strap-by-ajwain.jpg?fit=610%2C763&ssl=1" />
          <img src="https://i0.wp.com/ajwa.in/wp-content/uploads/2022/04/blue-stag-skin-strap-by-ajwain.jpg?fit=610%2C763&ssl=1" />
          <img src="https://i0.wp.com/ajwa.in/wp-content/uploads/2022/04/blue-stag-skin-strap-by-ajwain.jpg?fit=610%2C763&ssl=1" />
        </Carousel>
      </div>
    </>
  );
};

export default ProductImageCarousel;
