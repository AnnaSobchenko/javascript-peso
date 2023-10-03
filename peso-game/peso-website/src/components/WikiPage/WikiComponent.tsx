import Link from "next/link";
import dataShip from "../../../public/data/dataShip.json";
import { LanguageShipComponentsProps } from "@/interfaces/Props.interface";
import { FC, useEffect, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

export const WikiComponent: FC<LanguageShipComponentsProps> = ({
  lang,
  id,
}) => {
  const textAccentFont = myFont.className;

  // const [shipData, setShipData] = useState([]);
  // console.log(shipData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/data/dataShip.json");
  //       const data = await response.json();
  //       setShipData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div className="pt-20 layout">
      <ul className="md:flex md:flex-wrap gap-4 justify-center">
        {dataShip.map(({ id, img, nameEn, nameUa }) => (
          <li
            key={id}
            className="text-center pb-12 last:pb-14 hover:scale-110 duration-1000"
          >
            <Link href={`/${lang}/wiki/${id}`}>
              <h2 className={`mb-2.5 text-xl md:text-2xl ${textAccentFont}`}>
                {lang === "en" ? nameEn : nameUa}
              </h2>
              <Image
                src={img}
                alt={lang === "en" ? nameEn : nameUa}
                width={640}
                height={640}
                className="w-full h-full md:w-[330px] md:h-[330px] md:m-2.5 lg:w-[500px] lg:h-[500px] m-auto"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
