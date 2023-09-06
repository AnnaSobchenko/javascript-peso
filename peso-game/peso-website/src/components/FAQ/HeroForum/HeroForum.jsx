import s from "./HeroForum.module.scss";
import Image from "next/image";
import Logo from "public/assets/icon/logoWiki.svg";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../../public/MyFont-Regular.otf",
  display: "swap",
});
const HeroForum = ({ textTr }) => {
  return (
    <div className={s.forum__hero}>
      <div className={`default layout ${s.forum__hero__container}`}>
        <div className={s.forum__hero__image}>
          <Image className={s.forum__hero__svg} src={Logo} alt="Logo" />
        </div>
        <h2 className={`${myFont.className} ${s.forum__hero__title} `}>
          {textTr.gameFAQ}
        </h2>
      </div>
    </div>
  );
};

export default HeroForum;
