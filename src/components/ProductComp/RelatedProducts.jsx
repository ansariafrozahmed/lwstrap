import React from "react";
import Card from "../Slider/ProductCard";

const RelatedProducts = () => {
  return (
    <div className="py-10 lg:py-28">
      <div>
        <h3 className="md:text-xl">Check out !</h3>
        <h2 className="text-3xl md:text-5xl font-medium text-primary">
          Related Products
        </h2>
      </div>
      {/* ---------------- */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3 py-10">
        {Array(15)
          .fill(15)
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
