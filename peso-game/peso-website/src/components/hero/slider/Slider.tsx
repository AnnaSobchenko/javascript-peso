"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
SwiperCore.use([Pagination, EffectCoverflow, Autoplay, SwiperCore.Loop]);

const Slider: FC = () => {
  return (
    <div className="relative h-[227.57px] md:h-[399px]  lg:h-[580px] w-screen">
      <Swiper
        className="relative !pb-[65px]"
        loop={true}
        pagination={{ clickable: true }}
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 5,
          depth: 60,
          modifier: 1,
          slideShadows: true,
          centeredSlides: true,
        }}
        breakpoints={{
          320: {
            // width: 320,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 2.01,
            pagination: {
              enabled: false,
            },
          },
          1200: {
            // width: 1200,
            slidesPerView: 2.01,
            pagination: {
              enabled: false,
            },
          },
        }}
        slidesPerView={2.01}
        modules={[EffectCoverflow, Pagination]}
        centeredSlides
        autoplay={{ delay: 7000 }}
      >
        <SwiperSlide className=" z-10 shadow-[0_25px_30px_10px_rgba(14,14,14,1)] md:h-[269px] md:w-[478px] lg:h-[425px] lg:w-[756px]">
          <img
            className="h-full w-full"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/418180/ss_7b006b6e8f5835b835ac5cf06a6f94a803d51904.1920x1080.jpg?t=1682688945"
          />
        </SwiperSlide>
        <SwiperSlide className=" z-10 shadow-[0_25px_30px_10px_rgba(14,14,14,1)] md:h-[269px] md:w-[478px] lg:h-[425px] lg:w-[756px]">
          <img
            className="h-full w-full"
            src="https://assets.vg247.com/current//2018/12/atlas_reveal_screen_5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className=" z-10 shadow-[0_25px_30px_10px_rgba(14,14,14,1)] md:h-[269px] md:w-[478px] lg:h-[425px] lg:w-[756px]">
          <img
            className="h-full w-full"
            src="https://www.mercurynews.com/wp-content/uploads/2022/07/SB_Screenshot3_Comeback_300622_9AM_CEST.jpg?w=1024"
          />
        </SwiperSlide>
      </Swiper>
      <div className="relative">
        <div className="swiper-pagination absolute mt-[-55px] ml-0 mr-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white "></div>
      </div>
    </div>
  );
};

export default Slider;
