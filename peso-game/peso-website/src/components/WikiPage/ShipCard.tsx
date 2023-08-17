"use client";

import { useTranslation } from "@/app/i18n/client";
import { LanguageShipComponentsProps } from "@/interfaces/Props.interface";
import { FC, useEffect, useState } from "react";
import dataShip from "../../../public/data/dataShip.json";
import localFont from "next/font/local";
import { Canvas } from "@react-three/fiber";
import ShipImg from "../Wiki/ShipImg";
import { OrbitControls } from "@react-three/drei";
import logoWiki from "../../assets/icon/logoWiki.svg";
import iconDegree from "../../assets/icon/360-degrees.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

// type Ship = {
//   id: string;
//   name: string;
//   img: string;
//   options: object;
// };

export const ShipCard: FC<LanguageShipComponentsProps> = ({ lng, id }) => {
  const { t } = useTranslation(lng, "wiki");
  const textAccentFont = myFont.className;
  //   const [shipInfo, setShipInfo] = useState<Ship[]>(dataShip);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/data/dataShip.json");
  //       const data = await response.json();
  //       console.log("data", data);
  //       setShipInfo(data.filter((elem: any) => elem.id === id));
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const ship = dataShip.filter((elem: any) => elem.id === id);
  const oneShip = ship[0];
  console.log("oneShip", oneShip.model?.url);

  return (
    <div className="bg-accent-background w-screen flex justify-center">
      <div className="layout mx-5 sm:w-[278px] md:w-[658px] md:mx-[55px] lg:w-[998px] lg:mx-[75px]">
        <div className="ml-auto mr-auto lg:flex flex-row-reverse mt-12">
          <div>
            <div className="h-[171px] md:h-[402px] bg-main-background mb-6 md:mb-12 lg:w-[500px] lg:h-[400px] relative">
              <Canvas camera={{ position: [20, 1, 1], fov: 25 }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {oneShip.model?.url && <ShipImg glbUrl={oneShip.model.url} />}
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
              </Canvas>
              <Image
                src={logoWiki}
                width={65.52}
                height={43}
                alt="logo"
                className="hidden lg:block lg:absolute bottom-5 right-5"
              />
              <Image
                src={iconDegree}
                width={50}
                height={50}
                alt="degree"
                className="absolute bottom-1 left-4 opacity-30"
              />
            </div>
          </div>

          <div className=" lg:pr-[75px]">
            <Image
              src={logoWiki}
              width={65.52}
              height={43}
              alt="logo"
              className="sm:hidden lg:block mb-6"
            />
            <h2
              className={`text-center font-marcellus-sc text-2xl mb-6 md:text-left md:mb-[15px] ${textAccentFont}`}
            >
              {t(`ship${id}.name`)}
            </h2>
            <p className="text-sm text-opacity-font-2 text-sans text-justify mb-6 lg:text-lg">
              {t(`ship${id}.text`)}
            </p>
            <div className="h-px bg-main-font-color w-full mb-6"></div>
          </div>
        </div>
        <ul className="md:grid grid-cols-2 pb-20">
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiPoints")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {oneShip.options.points}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiSpeed")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {oneShip.options.speed}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiArmor")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {oneShip.options.armor}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiCannons")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {oneShip.options.cannons}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiHarpoons")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {oneShip.options.harpoons}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiWeapons")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {oneShip.options.weapons}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiAbility")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {oneShip.options.ability}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiSight")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {oneShip.options.sight}
            </span>
          </li>
        </ul>
        <h2
          className={`underline text-lg text-center mb-6 md:text-right lg:text-2xl ${textAccentFont}`}
        >
          {t("wikiReadMore")}
        </h2>
      </div>
    </div>
  );
};
