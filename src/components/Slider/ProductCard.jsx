import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <>
      <Link
        href={"/product/product_name"}
        className="overflow-hidden bg-white cursor-pointer"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            className="hover:scale-105 object-cover duration-200 object-center h-full w-full"
            src="/strap.webp"
            alt=""
          />
        </div>
        <div className="p-2 text-black/[0.9] space-y-2">
          <h2 className="text-sm">
            Black crocs leather straps premium quality
          </h2>
          <div>
            <span className="hover:bg-[#522f17]/90 bg-primary px-3 py-1.5 text-white text-xs font-sans">
              Select Size
            </span>
          </div>
          <div className="flex items-center justify-start">
            <p className="mr-2 text-lg font-sans lg:text-2xl text-primary font-bold">
              ₹100
            </p>
            <p className="font-sans text-sm font-medium text-gray-600 line-through">
              ₹200
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
