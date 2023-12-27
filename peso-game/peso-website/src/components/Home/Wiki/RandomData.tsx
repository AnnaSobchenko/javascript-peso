"use client";
import dynamic from "next/dynamic";
import { ShipData } from "@/interfaces/Props.interface";
import { Canvas } from "@react-three/fiber";
const ShipImg = dynamic(() => import("./ShipImg"));
import { OrbitControls } from "@react-three/drei";
import Image from "next/image";
import localFont from "next/font/local";
import logoWiki from "../../../../public/assets/icon/logoWiki.svg";
import iconDegree from "../../../../public/assets/icon/360-degrees.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import PreloaderSite from "@/components/shared/PreloaderSite/PreloaderSite";

const myFont = localFont({
  src: "../../../../public/MyFont-Regular.otf",
  display: "swap",
});

interface RandomElementProps {
  data: ShipData[];
  lang: string;
  textTr: {
    [key: string]: any;
  };
}

export const RandomElement = ({ data, lang, textTr }: RandomElementProps) => {
  const [randomItem, setRandomItem] = useState<ShipData | null>(null);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomData = data[randomIndex];
    setRandomItem(randomData);
  }, [data]);

  const textAccentFont = myFont.className;

  return (
    <>
      {randomItem ? (
        <div className="layout mx-5 md:w-[658px] md:mx-[55px] lg:w-[998px] lg:mx-[75px]">
          <div className="ml-auto mr-auto lg:flex flex-row-reverse mt-12">
            <div>
              <div className="h-[270px] md:h-[402px] bg-main-background mb-6 md:mb-12 lg:w-[500px] lg:h-[400px] relative">
                <Canvas camera={{ position: [20, 1, 1], fov: 25 }}>
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <ShipImg glbUrl={randomItem.model.url} />
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
                {lang === "en" ? randomItem.nameEn : randomItem.nameUa}
              </h2>
              <p className="text-sm text-opacity-font-2 text-sans text-justify mb-6 lg:text-lg">
                {lang === "en" ? randomItem.textEn : randomItem.textUa}
              </p>
              <div className="h-px bg-main-font-color w-full mb-6"></div>
            </div>
          </div>
          <ul className="md:grid grid-cols-2 pb-20">
            <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
              {textTr.wikiPoints}
              <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
                {randomItem.options.points}
              </span>
            </li>
            <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
              {textTr.wikiSpeed}
              <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
                {randomItem.options.speed}
              </span>
            </li>
            <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
              {textTr.wikiArmor}
              <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
                {randomItem.options.armor}
              </span>
            </li>
            <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
              {textTr.wikiCannons}
              <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
                {randomItem.options.cannons}
              </span>
            </li>
            <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
              {textTr.wikiHarpoons}
              <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
                {randomItem.options.harpoons}
              </span>
            </li>
            <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
              {textTr.wikiWeapons}
              <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
                {randomItem.options.weapons}
              </span>
            </li>
            <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
              {textTr.wikiAbility}
              <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
                {randomItem.options.ability}
              </span>
            </li>
            <li className={`text-sm mb-2 lg:text-lg ${textAccentFont}`}>
              {textTr.wikiSight}
              <span className="ml-2 text-opacity-font-2 text-sm lg:text-lg">
                {randomItem.options.sight}
              </span>
            </li>
          </ul>

          <Link href={`/${lang}/wiki/${randomItem.id}`}>
            <h2
              className={`underline text-lg text-center mb-6 md:text-right lg:text-2xl ${textAccentFont}`}
            >
              {textTr.wikiReadMore}
            </h2>
          </Link>
        </div>
      ) : (
        <PreloaderSite />
      )}
    </>
  );
};
