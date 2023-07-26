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

const CHANNEL_ID = 'UC_x5XG1OV2P6uZZ5FSM9Ttw';
const YOUTUBE_API_KEY = 'AIzaSyCDwJ2yWZlmQFyHVTXaRcH5vRHHvZF-j8I';
const YOUTUBE_GET_DATA = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&key=${YOUTUBE_API_KEY}`;


interface Item {
  id: {
    videoId: string;
  };
}

function Slider () {
    const { data } = useSWR<{ items: Item[] }>(YOUTUBE_GET_DATA, async () => {
      const response = await axios.get(YOUTUBE_GET_DATA);
      return response.data;
    });
    
    return (
      <div className={s.swiperContainer}>
        <Swiper className={s.swiperSlideWrapper}
          loop={true} 
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 1,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            centeredSlides: true,
          }}
          slidesPerView={2.1}
          modules={[EffectCoverflow, Pagination]}
          centeredSlides
        >
          {data && data.items.map((item) => (
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
  }
  
  export default Slider;
