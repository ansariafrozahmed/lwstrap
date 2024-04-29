"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Link from "next/link";
import Card from "./ProductCard";

const Slider = () => {
  return (
    <div className="py-10 lg:py-20 mx-5 lg:mx-14">
      <div className="flex items-center justify-between leading-none font-SecondaryFont">
        <div>
          <h3 className="md:text-xl">Check out !</h3>
          <h2 className="text-3xl md:text-5xl">New Arrivals</h2>
        </div>
      </div>
      <div>
        <Swiper
          className="!py-10"
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={6}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            // when window width is >= 1200px (desktop)
            1200: {
              slidesPerView: 5,
            },
            1000: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1.5,
            },
            300: {
              slidesPerView: 1.5,
            },
          }}
        >
          {Array(10)
            .fill()
            .map((index) => (
              <SwiperSlide key={index}>
                <Card />
              </SwiperSlide>
            ))}
          <div className="swiper-button-next !text-white"></div>
          <div className="swiper-button-prev !text-white"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
