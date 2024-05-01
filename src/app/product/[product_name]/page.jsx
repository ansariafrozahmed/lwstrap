// import RelatedProducts from "@/components/RelatedProducts";
import ProductImageCarousel from "../../../components/ProductComp/ProductImageCarousel";
import React from "react";
import RelatedProducts from "../../../components/ProductComp/RelatedProducts";

const ProductPage = () => {
  return (
    <>
      <div className="w-full py-10 px-5 md:py-10 md:px-12 lg:py-10 lg:px-28">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[15px] lg:gap-[100px]">
          {/* left col start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductImageCarousel />
          </div>
          {/* left col end */}

          {/* right col start */}

          <div className="flex-[1] py-3">
            {/* Product title */}
            <div className="text-[28px] lg:text-[34px] font-semibold mb-2 text-primary capitalize leading-tight">
              Black crocs leather straps premium quality
            </div>
            {/* Product title end */}

            {/* subtitle */}
            <div className="text-base font-medium text-gray-800 mb-5">
              Category
            </div>
            {/* subtitle */}

            {/* Price */}
            <div className="flex gap-2 items-center">
              <span className="text-4xl font-sans font-semibold text-primary">
                ₹ 100
              </span>
              <span className="text-base font-medium text-gray-600 line-through">
                ₹ 200
              </span>
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="my-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-4 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  12 MM
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  14 MM
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  16 MM
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  18 MM
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  20 MM
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  22 MM
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  24 MM
                </div>
              </div>

              {/* {Size End} */}

              {/* SHOW ERROR START */}
              <div className="text-red-600 mt-3 text-sm">
                Size selection is required
              </div>

              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE End */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-gray-900 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Buy Now
            </button>

            <div className="mt-5">
              <div className="text-2xl font-semibold mb-3">Product Details</div>
              {/* Description of product */}
              <div className="text-md mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio dolor in maxime corrupti? Quas assumenda temporibus
                nulla laborum ipsum mollitia. Soluta rem magnam ab sit,
                veritatis maiores adipisci necessitatibus natus quam dolores non
                ut perspiciatis quia explicabo culpa minus ipsa sequi quae cum
                fugit. Doloribus repellendus sit illum suscipit corporis!
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio dolor in maxime corrupti? Quas assumenda temporibus
                nulla laborum ipsum mollitia. Soluta rem magnam ab sit,
                veritatis maiores adipisci necessitatibus natus quam dolores non
                ut perspiciatis quia explicabo culpa minus ipsa sequi quae cum
                fugit. Doloribus repellendus sit illum suscipit corporis!
              </div>
            </div>
          </div>
          {/* right col end */}
        </div>

        <RelatedProducts />
      </div>
    </>
  );
};

export default ProductPage;
