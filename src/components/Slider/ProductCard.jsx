import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <>
      <Link
        href={"/listing/listing-name"}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <div className="aspect-[3/4]">
          <img
            className="object-cover object-center h-full w-full"
            src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5fcd7a50/images/Titan/Catalog/1001201824S_1.jpg?sw=800&sh=800"
            alt=""
          />
        </div>
        <div className="p-4 text-black/[0.9] space-y-1">
          <h2 className="text-sm line-clamp-2">
            Black crocs leather straps premium quality
          </h2>
          <div className="flex items-center justify-between">
            <p className="mr-2 text-base lg:text-lg  font-semibold">₹100</p>
            <p className="text-base font-medium text-gray-700 line-through">
              ₹200
            </p>
            <p className="ml-auto text-xs lg:text-sm font-medium text-green-500">
              New Deal
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;