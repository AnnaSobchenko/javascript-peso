import Image from "next/image";
import imgPreloader from "../../../assets/img/home/preloader-site.png";

const PreloaderSite = () => {
  return (
    <div
      className={
        " w-screen h-screen bg-accent-background flex justify-center items-center flex-col "
      }
    >
      <Image
        src={imgPreloader}
        alt="One Peso Pirate"
        className=" w-[12.5rem] h-[6.6rem] md:w-[25rem] md:h-[13.2rem] "
        width={400}
        height={211}
        priority
      />
      <ul className=" mt-7 md:mt-5">
        <li className=" inline-block w-2 h-2 rounded-full bg-accent-element-color mr-4 animate-pulse-slow1 "></li>
        <li className=" inline-block w-2 h-2 rounded-full bg-accent-element-color mr-4 animate-pulse-slow2 "></li>
        <li className=" inline-block w-2 h-2 rounded-full bg-accent-element-color mr-0 animate-pulse-slow3 "></li>
      </ul>
    </div>
  );
};

export default PreloaderSite;
