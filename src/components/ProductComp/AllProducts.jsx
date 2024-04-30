import React from "react";
import Card from "../Slider/ProductCard";

const AllProducts = () => {
  return (
    <div className="p-5 md:p-8 lg:p-12">
      <div>
        <h3 className="md:text-xl">Check out !</h3>
        <h2 className="text-3xl md:text-5xl font-medium text-primary">
          New Arrivals
        </h2>
      </div>
      {/* ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 py-10">
        {Array(15)
          .fill(15)
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
