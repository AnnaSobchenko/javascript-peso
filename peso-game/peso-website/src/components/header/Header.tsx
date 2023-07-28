"use client";
import UpperHeader from "../UpperHeader/UpperHeader";
// import NavBar from "./NavBar";
import { FC, useEffect } from "react";
import { LanguageFCComponentsProps } from "../../interfaces/Props.interface";
import NavSection from "../NavSection/NavSection";

const Header: FC<LanguageFCComponentsProps> = ({ lng }) => {
  // const Header = ({ lng }: IHeaderProps) => {
  useEffect(() => {
    Boolean(localStorage.getItem("lng")) || localStorage.setItem("lng", lng);
  }, []);
  return (
    <div className="bg-main-background">
      <UpperHeader lng={lng} />
      <NavSection lng={lng} />
    </div>
  );
};

export default Header;
