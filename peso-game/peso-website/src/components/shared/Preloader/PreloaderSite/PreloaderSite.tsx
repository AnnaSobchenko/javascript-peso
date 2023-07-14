import s from "./PreloaderSite.module.scss";
import Image from "next/image";
import imgPreloader from "../../../../assets/img/home/preloader-site.png";

const PreloaderSite = () => {
  return (
    <div className={s.preloaderSite}>
      <Image
        src={imgPreloader}
        alt="One Peso Pirate"
        className={s.preloaderSite_img}
        width={400}
        height={211}
        priority
      />
      <div className={s.preloaderSite_loader}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default PreloaderSite;
