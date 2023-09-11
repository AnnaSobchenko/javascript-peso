import { LngTextFCComponentsProps } from "@/interfaces/Props.interface";
import { FC } from "react";
import UpperHeader from "./UpperHeader/UpperHeader";
import NavBar from "./NavBar/NavBar";

const Header: FC<LngTextFCComponentsProps> = ({ lang, textTr }) => {
  return (
    <div className="bg-main-background">
      <UpperHeader lang={lang} textTr={textTr} />
      <NavBar lang={lang} textTr={textTr} />
    </div>
  );
};

export default Header;
