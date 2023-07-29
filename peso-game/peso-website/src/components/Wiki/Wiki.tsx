"use client";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import logoWiki from "../../assets/icon/Logo.svg";
import iconDegree from "../../assets/icon/360-degrees.svg";

import { Canvas } from "@react-three/fiber";
import ShipImg from "./ShipImg";
import { OrbitControls } from "@react-three/drei";
import { FC } from "react";
import { Marcellus_SC } from "next/font/google";
import localFont from "next/font/local";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";

const MarcellusSC = Marcellus_SC({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

const options = {
  points: "2500.hp",
  armor: "2.am",
  harpoons: "4.un",
  weapons: "200.m",
  ultimate_ability: "none",
  range_of_sight: "350.m",
  speed: "9.2.knots",
  cannons: "6.un",
};

export const Wiki: FC<LanguageFCComponentsProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "main");
  const textAccentFont = myFont.className;
  const {
    points,
    armor,
    harpoons,
    weapons,
    ultimate_ability,
    range_of_sight,
    speed,
    cannons,
  } = options;
  return (
    <div className="bg-accent-background w-screen flex justify-center">
      <div className="mx-[20px] sm:w-[278px] md:w-[658px] md:mx-[55px] lg:w-[998px] lg:mx-[75px]">
        <div className="ml-auto mr-auto lg:flex flex-row-reverse mt-[50px]">
          <div>
            <div className="h-[171px] md:h-[402px] bg-main-background mb-[25px] md:mb-[50px] lg:w-[500px] lg:h-[400px] relative">
              <Canvas camera={{ position: [20, 1, 1], fov: 25 }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <ShipImg glbUrl="/assets/img/3dImg/fullQ/1kMesh.gltf" />
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
                className="hidden lg:block lg:absolute bottom-[20px] right-[20px]"
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
              className="sm:hidden lg:block mb-[23px]"
            />
            <h2
              className={`text-center font-marcellus-sc text-2xl mb-[25px] md:text-left md:mb-[15px] ${textAccentFont}`}
            >
              {t("wikiHeader")}
            </h2>
            <p className="text-sm text-opacity-font-2 text-sans text-justify mb-[50px] lg:text-lg">
              {t("wikiText")}
            </p>
            <div className="h-px bg-main-font-color w-full mb-[25px]"></div>
          </div>
        </div>
        <ul className="md:grid grid-cols-2 pb-20">
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiPoints")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {points}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiSpeed")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {speed}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiArmor")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {armor}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiCannons")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {cannons}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiHarpoons")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {harpoons}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiWeapons")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {weapons}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiAbility")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {ultimate_ability}
            </span>
          </li>
          <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
            {t("wikiSight")}
            <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
              {range_of_sight}
            </span>
          </li>
        </ul>
        <h2
          className={`underline text-lg text-center mb-[25px] md:text-right lg:text-2xl ${textAccentFont}`}
        >
          {t("wikiReadMore")}
        </h2>
      </div>
    </div>
  );
};