"use client"
import { useEffect, useRef } from "react";
import axios from 'axios';
import useSWR from 'swr';  
import { FC } from "react";

const CHANNEL_ID = 'UC_x5XG1OV2P6uZZ5FSM9Ttw';
const YOUTUBE_API_KEY = 'AIzaSyCDwJ2yWZlmQFyHVTXaRcH5vRHHvZF-j8I';
const YOUTUBE_GET_DATA = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&key=${YOUTUBE_API_KEY}`;

const ITEM_DISTANCE = 200;
const ITEM_ANGLE = -45;
const CENTER_ITEM_POP = 500;
const CENTER_ITEM_DISTANCE = 80;

interface Item {
  id: {
    videoId: string;
  };
}

const Coverflow = (props: { videoData: string[] }) => {
  const { data } = useSWR<{ items: Item[] }>(YOUTUBE_GET_DATA, async () => {
    const response = await axios.get(YOUTUBE_GET_DATA);
    return response.data;
  });

  const el = useRef<HTMLDivElement>(null);

  function setTransform(el: HTMLDivElement, xpos: number, zpos: number, yAngle: number) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${yAngle}deg)`;
  }

 
  useEffect(() => {
    if (data) {
      target(Math.floor(data.items.length * 0.5));
    }
  }, [data]);

  function target(index: number) {
    const items = el.current!.children;

    for (let i = 0; i < items.length; i++) {
    const item = items[i] as HTMLDivElement;

       if (i === index) {
        setTransform(item, 0, CENTER_ITEM_POP, 0);
       } else if (i < index) {
         setTransform(item, (i - index) * ITEM_DISTANCE - CENTER_ITEM_DISTANCE, 0, -ITEM_ANGLE);
       } else {
         setTransform(item, (i - index) * ITEM_DISTANCE + CENTER_ITEM_DISTANCE, 0, ITEM_ANGLE);
       }
     }
  }

  return (
    <div className="container my-4">
      <div className="coverflow" ref={el}>
        {data?.items.map((it, index) => (
          <iframe
            className="coverflow-item"
            seamless
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${it.id.videoId}`}
            onClick={() => target(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Coverflow;