"use client";
import UpperHeader from "../UpperHeader/UpperHeader";
// import NavBar from "./NavBar";
import { FC, useEffect } from "react";
import { LanguageFCComponentsProps } from "../../interfaces/Props.interface";
import NavSection from "../NavSection/NavSection";

const Header: FC<LanguageFCComponentsProps> = ({ lng }) => {
  console.log("Header lng :>> ", lng);
  // const Header = ({ lng }: IHeaderProps) => {
  useEffect(() => {
    Boolean(localStorage.getItem("lng")) || localStorage.setItem("lng", lng);
  }, [lng]);
  return (
    <header className="bg-main-background">
      {/* <UpperHeader lng={lng} /> */}
      <UpperHeader lng={lng} />
      {/* <NavBar setActive={setActiveLogIn} /> */}
      <NavSection lng={lng} />
    </header>
  );
};

export default Header;
