import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative h-[65svh] md:h-[84vh] w-full overflow-hidden">
      {/* Image with gradient overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/homeBanner.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          position: "relative",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10">
          {/* Using linear gradient for overlay */}
          <div
            className="hidden md:block absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(0, 0, 0,0.8) 30%, rgba(0, 0, 0, 0) 100%)",
            }}
          ></div>
          <div
            className="md:hidden absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0,0.8) 30%, rgba(0, 0, 0, 0) 100%)",
            }}
          ></div>
        </div>

        {/* Text container on the right */}
        <div className="absolute inset-0 flex z-20 items-end md:items-center justify-end p-5 md:px-10 lg:px-20 text-white">
          <div className="w-full md:w-[40%] space-y-2 md:space-y-5">
            <h1 className="text-3xl lg:text-5xl font-medium">
              Premium Quality Leather Watch Straps
            </h1>
            <div className="h-0.5 rounded-full bg-white w-[70%]"></div>
            <p className=" tracking-wide text-[0.9rem] md:text-[1.2rem]">
              Indulge in the epitome of elegance with our collection of premium
              leather watch straps. Crafted from the finest leathers and
              meticulously designed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
