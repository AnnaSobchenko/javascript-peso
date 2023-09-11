"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from "swiper";
import "swiper/scss";
import 'swiper/scss/pagination';
import "swiper/scss/effect-coverflow";
SwiperCore.use([Pagination, EffectCoverflow, Autoplay, SwiperCore.Loop]);

import React, { useEffect } from 'react'; 
import useSWR from 'swr';  

const YOUTUBE_GET_DATA = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&maxResults=10&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;

interface Item {
   id: {
      videoId: string;
    };
 }

 const SliderSwiper: FC = () => {
    const { data, error } = useSWR<{ items: Item[] }>(YOUTUBE_GET_DATA, async () => {
      try {
        const response = await fetch(YOUTUBE_GET_DATA);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        return jsonData;
      } catch (err) {
        throw new Error("Failed to fetch data");
      }
    });
  
    if (error) {
      return <div>Error loading data</div>;
    }
         
    return (
      <div className="relative mx-auto custom-box-shadow px-5 ">
        <Swiper className="relative !pb-14 w-[280px] h-40 md:px-0 md:w-screen md:h-[269px] lg:h-[425px] lg:px-0 lg:w-screen"
          loop={true} 
          pagination={{ clickable: true }}
          style={{
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-progressbar-size": "4px",
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 1,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            centeredSlides: true,
          }}
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
          centeredSlides
          autoplay={{ delay: 7000, disableOnInteraction: true, pauseOnMouseEnter: true}}
        >
          {data && data.items.map((item) => (
            <SwiperSlide key={item.id.videoId} className="z-10 shadow-[0_25px_30px_10px_rgba(14,14,14,1)] w-[280px] h-40 md:h-[269px] md:w-[478px] lg:h-[425px] lg:w-[756px]">
              <iframe className="h-full w-full" seamless  
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
              />
            </SwiperSlide> 
          ))}
        </Swiper>
        </div>
      
    );
  }
  
  export default SliderSwiper;