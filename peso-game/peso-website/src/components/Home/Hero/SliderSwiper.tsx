"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import Image from "next/image";
SwiperCore.use([
  Pagination,
  Navigation,
  Keyboard,
  EffectCoverflow,
  Autoplay,
  SwiperCore.Loop,
]);

// import useSWR from "swr";

// const YOUTUBE_GET_DATA = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&maxResults=10&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;

interface Item {
  id: {
    videoId: string;
  };
}

const SliderSwiper: FC = () => {
  //   const { data, error } = useSWR<{ items: Item[] }>(YOUTUBE_GET_DATA, async () => {
  //   try {
  //     const response = await fetch(YOUTUBE_GET_DATA);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const jsonData = await response.json();
  //     return jsonData;
  //   } catch (err) {
  //     throw new Error("Failed to fetch data");
  //   }
  // });

  // if (error) {
  //   return <div>Error loading data</div>;
  // }

  const data = [
    { id: "1", src: "/assets/img/hero/hero-bg-tab-2x.jpg" },
    { id: "2", src: "/assets/img/hero/hero-bg-tab-2x.jpg" },
    { id: "3", src: "/assets/img/hero/hero-bg-tab-2x.jpg" },
  ];

  return (
    <div className="relative mx-auto">
      <Swiper
        className="relative mx-auto !pb-10 w-80 h-44 md:!pb-14 md:px-0 md:w-screen md:h-[40vw] lg:!pb-14 lg:h-[32vw]"
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        centeredSlides
        keyboard={true}
        mousewheel={true}
      >
        {data &&
          data.map((item) => (
            // data.items.map((item) => (
            <SwiperSlide
              key={item.id}
              className="z-10 shadow-[0_12px_22px_5px_rgba(14,14,14,1)] md:shadow-[0_25px_30px_10px_rgba(14,14,14,1)] lg:md:shadow-[0_25px_30px_10px_rgba(14,14,14,1)]"
            >
              {/* <iframe
                className="w-full h-full"
                seamless
                src={`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1&mute=1`}
              />   */}

              <Image
                // src={item.src}
                width={756}
                height={425}
                alt="logo"
                // className="hidden lg:block lg:absolute bottom-5 right-5"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
