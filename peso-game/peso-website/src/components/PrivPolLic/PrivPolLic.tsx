import ThreeVertDots from "../UI/ThreeVertDots/ThreeVertDots";
import { FC } from "react";
import localFont from "next/font/local";
import { TextFCComponentsProps } from "@/interfaces/Props.interface";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

export const PrivPolLic: FC<TextFCComponentsProps> = ({ textTr }) => {
  const textAccentFont = myFont.className;
  const linkElement = (
    <a href="https://en.wikipedia.org/wiki/Bow_(watercraft)">link text</a>
  );

  return (
    <div className="w-full px-6 mt-20 mb-48 layout">
      <h1 className={`mb-12 text-4xl ${textAccentFont}`}>
        {textTr.privacyTitlePolicy}
      </h1>
      <ul className="">
        <li className="flex mb-2.5 py-4 px-11 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{textTr.privacyFirst}</p>
        </li>
        <li className="flex mb-2.5 py-4 px-11 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{textTr.privacySecond}</p>
        </li>
        <li className="flex mb-2.5 py-4 px-11 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{textTr.privacyThird}</p>
        </li>
        <li className="flex py-4 px-11 pb-6 bg-accent-background items-center">
          <div className=" mr-4">
            <ThreeVertDots />
          </div>
          <p className={`${textAccentFont} text-lg`}>{textTr.privacyFourth}</p>
        </li>
      </ul>

      <p className="px-11 pb-14 mb-5 bg-accent-background text-justify text-lg text-opacity-font-2">
        {textTr.privacyText}
      </p>
    </div>
  );
};
