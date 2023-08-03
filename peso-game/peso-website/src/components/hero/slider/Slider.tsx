"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from "swiper";
import "swiper/scss";
import 'swiper/scss/pagination';
import "swiper/scss/effect-coverflow";
SwiperCore.use([Pagination, EffectCoverflow, Autoplay, SwiperCore.Loop]);
import * as s from "./slider.module.scss";

import React, { useEffect } from 'react'; 
import useSWR from 'swr';  
import axios from 'axios';
import { relative } from "path";

const CHANNEL_ID = 'UC_x5XG1OV2P6uZZ5FSM9Ttw';
const YOUTUBE_API_KEY = 'AIzaSyCDwJ2yWZlmQFyHVTXaRcH5vRHHvZF-j8I';
const YOUTUBE_GET_DATA = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&key=${YOUTUBE_API_KEY}`;


// interface Item {
//     id: {
//       videoId: string;
//     };
//   }

  // const requestOptions = {
  //   method: 'GET',
  //   disableDataSaver: true,
  // };

 function Slider () {
    //  const { data } = useSWR<{ items: Item[] }>(YOUTUBE_GET_DATA, async () => {
    //    const response = await axios.get(YOUTUBE_GET_DATA, requestOptions);
    //    return response.data;
    //  });
    
     return (
      <div className="relative  h-[227.57px] w-[280px] md:h-[399px] md:w-[768px] lg:h-[580px] lg:w-[1200px]">
        <Swiper className="relative !pb-[70px]"
          loop={true} 
          pagination={{ clickable: true, 
          // el: ".swiper-pagination", 
            //  bulletClass: ".swiper-pagination-color",
          // bulletActiveClass: "swiper-pagination-bullet-active",
          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '"></span>';
          // },
            // type: "bullets",
            // bulletClass: ".swiper-pagination-bullets",
            }}
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
              width: 320,
              slidesPerView: 1,
            },
            768: {
               width: 768,
               slidesPerView: 2.01,
               pagination: {
                enabled: false,
               }
             }, 
             1200: {
               width: 1200,
               slidesPerView: 2.01,
               pagination: {
                enabled: false,
               }
             }, 
          }
        }
          slidesPerView={2.01} 
          modules={[EffectCoverflow, Pagination]}
          centeredSlides
          autoplay={{delay: 2000}} 
        >
            
          <SwiperSlide className=" z-10 shadow-[0_25px_30px_10px_rgba(14,14,14,1)] md:h-[269px] md:w-[478px] lg:h-[425px] lg:w-[765px]">
           <img className=" h-full w-full" src="https://cdn.cloudflare.steamstatic.com/steam/apps/418180/ss_7b006b6e8f5835b835ac5cf06a6f94a803d51904.1920x1080.jpg?t=1682688945"/>
         </SwiperSlide>
         <SwiperSlide className=" z-10 shadow-[0_25px_30px_10px_rgba(14,14,14,1)] md:h-[269px] md:w-[478px] lg:h-[425px] lg:w-[765px]">
           <img className="h-full w-full" src="https://assets.vg247.com/current//2018/12/atlas_reveal_screen_5.jpg" />
         </SwiperSlide>
         <SwiperSlide className=" z-10 shadow-[0_25px_30px_10px_rgba(14,14,14,1)] md:h-[269px] md:w-[478px] lg:h-[425px] lg:w-[765px]">
           <img className=" h-full w-full" src="https://www.mercurynews.com/wp-content/uploads/2022/07/SB_Screenshot3_Comeback_300622_9AM_CEST.jpg?w=1024" />
         </SwiperSlide>
        
 </Swiper>         
 <div className="swiper-pagination relative mt-[-55px] ml-0 mr-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white ">
 {/* <div className="swiper-pagination-bullets w-[8px] h-[8px]">
    <svg className="swiper-pagination-color white fill-[white] fill-opacity-[0.35]" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="4" />
    </svg>
  </div> */}
  </div> 
</div>
       
)
 }


          {/* {data && data.items.map((item) => (
            <SwiperSlide key={item.id.videoId}>
              <iframe className={s.swiperSlideContainer} seamless width='100%' height='100%' 
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
              />
              <div className="swiper-pagination"></div> 
              <div  className={s.carouselControls}> </div>
              <button className={s.carouselControls} type="button"></button> 
            </SwiperSlide> 
          ))}
        </Swiper>
        </div>
    );
  } */}
  
  export default Slider;
// <{ items: Item[] }>


