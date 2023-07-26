"use client";
import UpperHeader from "./UpperHeader/UpperHeader";
// import NavBar from "./NavBar";
import { useEffect } from "react";
import IHeaderProps from "../../interfaces/Props.interface";

const Header = ({ active, lng, onClick }: IHeaderProps) => {
  // const Header = ({ lng }: IHeaderProps) => {
  useEffect(() => {
    Boolean(localStorage.getItem("lng")) || localStorage.setItem("lng", lng);
  }, [lng]);
  return (
    <header className="bg-main-background">
      {/* <UpperHeader lng={lng} /> */}
      <UpperHeader active={active} lng={lng} onClick={onClick} />
      {/* <NavBar setActive={setActiveLogIn} /> */}
    </header>
  );
};

export default Header;
