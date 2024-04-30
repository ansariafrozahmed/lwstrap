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
          <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5fcd7a50/images/Titan/Catalog/1001201824S_1.jpg?sw=800&sh=800" />

          <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5fcd7a50/images/Titan/Catalog/1001201824S_1.jpg?sw=800&sh=800" />
          <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5fcd7a50/images/Titan/Catalog/1001201824S_1.jpg?sw=800&sh=800" />
          <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5fcd7a50/images/Titan/Catalog/1001201824S_1.jpg?sw=800&sh=800" />
          <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5fcd7a50/images/Titan/Catalog/1001201824S_1.jpg?sw=800&sh=800" />
          <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5fcd7a50/images/Titan/Catalog/1001201824S_1.jpg?sw=800&sh=800" />
          <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5fcd7a50/images/Titan/Catalog/1001201824S_1.jpg?sw=800&sh=800" />
        </Carousel>
      </div>
    </>
  );
};

export default ProductImageCarousel;
