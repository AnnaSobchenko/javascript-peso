"use client";
import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper/core";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
SwiperCore.use([
  Pagination,
  Keyboard,
  EffectCoverflow,
  Autoplay,
  SwiperCore.Loop,
]);
import useSWR from "swr";
import PhotoSlider from "./PhotoSlider";

const YOUTUBE_GET_DATA = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&maxResults=10&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;

interface Item {
  id: {
    videoId: string;
  };
}

const SliderSwiper: FC = () => {
  const [had403Error, setHad403Error] = useState(false);

  const { data, error } = useSWR<{ items: Item[] }>(
    YOUTUBE_GET_DATA,
    async () => {
      try {
        if (had403Error) {
          throw new Error("Forbidden");
        }

        const response = await fetch(YOUTUBE_GET_DATA);
        if (!response.ok) {
          if (response.status == 403) {
            setHad403Error(true);
            throw new Error("Forbidden");
          }
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        return { items: jsonData.items };
      } catch (err) {
        console.error("Failed to fetch data:", err);
        throw err;
      }
    },
    { revalidateOnFocus: false }
  );

  if (error || had403Error) {
    console.error("Error loading data:", error);
    return <PhotoSlider />;
  }

  return (
    <div className="relative mx-auto">
      <Swiper
        className="relative mx-auto !pb-10 w-80 h-44 md:!pb-14 md:px-0 md:w-screen md:h-[40vw] lg:!pb-14 lg:h-[32vw] xl:h-[24vw]"
        loop={true}
        pagination={{ clickable: true }}
        // style={{
        //   "--swiper-pagination-color": "#FFFFFF",
        //   "--swiper-pagination-bullet-inactive-color": "#999999",
        //   "--swiper-pagination-bullet-inactive-opacity": "1",
        //   "--swiper-pagination-bullet-size": "8px",
        //   "--swiper-pagination-bullet-horizontal-gap": "6px",
        //   "--swiper-pagination-progressbar-size": "4px",
        // }}
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
            autoplay: {
              delay: 7000,
            },
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
          1440: {
            slidesPerView: 2.01,
            coverflowEffect: {
              modifier: 1.2,
            },
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
      >
        {data &&
          data.items.map((item) => (
            <SwiperSlide
              key={item.id.videoId}
              className="relative z-10 shadow-[0_12px_22px_5px_rgba(14,14,14,1)] md:shadow-[0_25px_30px_10px_rgba(14,14,14,1)] lg:md:shadow-[0_25px_30px_10px_rgba(14,14,14,1)]"
            >
              <div className="absolute w-full h-full"></div>
              <iframe
                className="w-full h-full"
                seamless
                src={`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1&mute=1`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
