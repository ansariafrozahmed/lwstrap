"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const CategorySection = () => {
  const getCat = async () => {
    const response = await fetch("/api/getAllCategories");
    const result = await response.json();
    console.log(result);
  };
  useEffect(() => {
    getCat();
  }, []);
  const category = [
    {
      name: "Crocs",
      slug: "crocs",
      img: "https://www.couplandleather.co.uk/cdn/shop/files/WhatsAppImage2023-10-24at15.01.45_e3c01d9c_700x.jpg?v=1698156152",
    },
    {
      name: "Sue",
      slug: "sue",
      img: "https://i.ebayimg.com/images/g/bEQAAOSwFC9kZIa5/s-l960.png",
    },
    {
      name: "Racer",
      slug: "racer",
      img: "https://cdn.shopify.com/s/files/1/0014/6158/3938/files/WU_M2P_PEANUT_5.jpg?v=1572996709",
    },
    {
      name: "Retro",
      slug: "retro",
      img: "/homeBanner.webp",
    },
  ];
  return (
    <section className="p-5 md:p-8 lg:p-12">
      <h3 className="md:text-xl">Check out !</h3>
      <h2 className="text-3xl md:text-5xl font-medium text-primary">
        Top Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
        {category.map((item, index) => (
          <div
            key={index}
            className="relative aspect-[4/2] md:aspect-[4/2.5]  overflow-hidden"
          >
            <Link href={`/category/${item.slug}`}>
              <div
                className="absolute hover:scale-105 transition-all inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 z-10">
                  {/* Using linear gradient for overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, rgba(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  ></div>
                </div>

                {/* Text container on the right */}
                <div className="absolute inset-0 flex z-20 items-end justify-start px-5 text-white">
                  <div className="py-3">
                    <h2 className="text-3xl font-medium">{item.name}</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
