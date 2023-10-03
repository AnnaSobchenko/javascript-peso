"use client";
import { FC } from "react";
import SwiperCore, {
  Pagination,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
SwiperCore.use([
  [Pagination],
  Keyboard,
  EffectCoverflow,
  Autoplay,
  SwiperCore.Loop,
]);
import dataShip from "../../../../public/data/dataShip.json";
import React from "react";

const PhotoSlider: FC = () => {
  return (
    <div className="relative mx-auto">
      <Swiper
        className="relative mx-auto !pb-10 w-80 h-44 md:!pb-14 md:px-0 md:w-screen md:h-[40vw] lg:!pb-14 lg:h-[32vw]"
        loop={true}
        pagination={{ clickable: true }}
        style={
          {
            // "--swiper-pagination-color": "#FFFFFF",
            // "--swiper-pagination-bullet-inactive-color": "#999999",
            // "--swiper-pagination-bullet-inactive-opacity": "1",
            // "--swiper-pagination-bullet-size": "8px",
            // "--swiper-pagination-bullet-horizontal-gap": "6px",
            // "--swiper-pagination-progressbar-size": "4px",
          }
        }
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        centeredSlides={true}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2.01,
            pagination: {
              enabled: false,
            },
          },
          1200: {
            slidesPerView: 2.01,
            pagination: {
              enabled: false,
            },
          },
        }}
        slidesPerView={2.1}
        modules={[EffectCoverflow, Pagination]}
        // centeredSlides
        keyboard={true}
        mousewheel={true}
        autoplay={{
          delay: 7000,
        }}
      >
        {dataShip.map(({ id, img }) => (
          <SwiperSlide
            key={id}
            className="relative z-10 shadow-[0_12px_22px_5px_rgba(14,14,14,1)] md:shadow-[0_25px_30px_10px_rgba(14,14,14,1)] lg:md:shadow-[0_25px_30px_10px_rgba(14,14,14,1)]"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              objectFit: "contain",
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
