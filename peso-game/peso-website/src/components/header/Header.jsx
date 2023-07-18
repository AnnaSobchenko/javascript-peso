"use client";
import UpperHeader from "./UpperHeader/UpperHeader";
// import NavBar from "./NavBar";
import s from "./header.module.scss";
import { useEffect } from "react";

const Header = ({ lng, setActivePriv, setActiveLogIn }) => {
  useEffect(() => {
    Boolean(localStorage.getItem("lng")) || localStorage.setItem("lng", lng);
  }, [lng]);
  return (
    <header className={s.header}>
      <UpperHeader setActive={setActivePriv} lng={lng} />
      {/* <NavBar setActive={setActiveLogIn} /> */}
    </header>
  );
};

export default Header;
