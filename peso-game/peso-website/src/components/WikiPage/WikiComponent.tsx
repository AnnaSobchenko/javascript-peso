import Link from "next/link";
import dataShip from "../../../public/data/dataShip.json";
import { LanguageShipComponentsProps } from "@/interfaces/Props.interface";
import { FC, useEffect, useState } from "react";
import localFont from "next/font/local";

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
    <div className="pt-20">
      <ul className="md:flex md:flex-wrap  gap-4 justify-center">
        {dataShip.map(({ id, img, nameEn, nameUa }) => (
          <li
            key={id}
            className="text-center pb-8 last:pb-14 hover:scale-110 duration-1000"
          >
            <Link href={`/${lang}/wiki/${id}`}>
              <h2 className={`mb-2.5 text-xl md:text-2xl ${textAccentFont}`}>
                {lang === "en" ? nameEn : nameUa}
              </h2>
              <img
                src={img}
                alt={lang === "en" ? nameEn : nameUa}
                className="w-[280px] h-[171px] md:w-[350px] md:h-[200px] md:m-2.5 lg:w-[500px] lg:h-[300px] m-auto"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
