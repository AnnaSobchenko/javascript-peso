import { FC } from "react";
import Link from "next/link";
import { Marcellus_SC } from "next/font/google";
import { LanguageFCComponentsProps } from "@/interfaces/Props.interface";

const marcellusSC = Marcellus_SC({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const LanguageSection: FC<LanguageFCComponentsProps> = ({ lng }) => {
  return (
    <div className={`flex items-center ${marcellusSC.className}`}>
      <Link
        href="/en"
        className={
          lng === "en"
            ? "text-xs  w-3.5 h-3.5 rounded-full hover:scale-125 focus:scale-125 bg-accent-color "
            : "text-xs bg-transparent w-3.5 h-3.5 rounded-full hover:scale-125 focus:scale-125"
        }
        onClick={() => localStorage.setItem("lng", "en")}
      >
        En
      </Link>
      <span className=" text-xs pr-1 pl-1">/</span>
      <Link
        href="/ua"
        className={
          lng === "ua"
            ? "text-xs w-3.5 h-3.5 rounded-full hover:scale-125 focus:scale-125 bg-accent-color "
            : "text-xs bg-transparent w-3.5 h-3.5 rounded-full hover:scale-125 focus:scale-125"
        }
        onClick={() => localStorage.setItem("lng", "ua")}
      >
        Ua
      </Link>
    </div>
  );
};
export default LanguageSection;
