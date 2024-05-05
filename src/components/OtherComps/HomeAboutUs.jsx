import Link from "next/link";
import React from "react";

const HomeAboutUs = () => {
  return (
    <div className="py-5 px-3 md:p-8 lg:p-12 lg:flex gap-10 w-full">
      <div className="w-full lg:w-1/2">
        <img src="/homeBanner.webp" alt="" />
      </div>
      <div className="w-full lg:w-1/2 space-y-5 py-5 my-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-primary">
          About Leather Watch Strap & Co
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          earum, provident itaque reiciendis ea quisquam a reprehenderit odio
          quod non. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Hic, inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quod,
          sequi minima accusamus saepe porro. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit.
        </p>
        <div>
          <Link href={"/about"}>
            <button className="px-6 py-2 bg-primary text-white">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
