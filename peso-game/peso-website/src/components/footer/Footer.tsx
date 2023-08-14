import { useTranslation } from "@/app/i18n";
import Logo from "../../assets/icon/logoWiki.svg";
import Image from "next/image";
import { FC } from "react";
import localFont from "next/font/local";
interface FooterProps {
  lng: string;
}

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});
const Footer: FC<FooterProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "main");
  // const openLisence = () => {
  //   setActivePriv((prev) => !prev);
  //   setLicense(true);
  // };
  // const openPrivPol = () => {
  //   setActivePriv((prev) => !prev);
  //   setLicense(false);
  // };

  return (
    <footer className="w-screen bg-accent-background">
      <div className="layout">
        <div className="pt-16 pb-6 md:pl-9 md:pr-9">
          <div className="h-16 w-24 md:h-20 md:w-32 lg:w-40 lg:h-28">
            <Image src={Logo} alt="Logo" width={160} height={106} />
          </div>
          <div className="hidden mt-6 md:flex md:items-center">
            <svg className="md:w-16 md:h-10 md:mr-2.5 lg:w-24 lg:h-16 lg:mr-5">
              <use href="/sprite.svg#mastercard"></use>
            </svg>
            <svg className="md:w-16 md:h-10 md:mr-2.5 lg:w-24 lg:h-16 lg:mr-5">
              <use href="/sprite.svg#visa"></use>
            </svg>
            <svg className="md:w-24 md:h-10 md:mr-2.5 lg:w-36 lg:mr-5">
              <use href="/sprite.svg#paypal"></use>
            </svg>
            <svg className="md:w-28 md:h-10 md:mr-2.5 lg:w-40 lg:mr-5">
              <use href="/sprite.svg#webmoney"></use>
            </svg>
            <svg className="md:w-32 md:h-10 md:mr-2.5 lg:w-48 lg:mr-5">
              <use href="/sprite.svg#bitcoin"></use>
            </svg>
          </div>
          <p className="mt-6 text-sm md:text-base lg:text-lg  ">
            @ {t("footerText")}
          </p>
          <div className="flex items-center sm:flex-col  md:flex-row md:justify-between  mt-12">
            <div className="mb-6 md:mb-0">
              <button
                type="button"
                className={`${myFont.className} text-sm md:text-base transition ease-in-out  lg:hover:text-error-color  duration-200`}
              >
                {t("footerLicense")}
              </button>
              <span className="text-[#D9D9D9] mr-2.5 ml-2.5">|</span>
              <button
                type="button"
                className={`${myFont.className} text-sm md:text-base transition ease-in-out  lg:hover:text-error-color  duration-200`}
              >
                {t("footerPrivacy")}
              </button>
            </div>
            <div className="flex">
              <svg className="w-10 h-10 mr-2.5 transition ease-in-out  lg:hover:-translate-y-1 lg:hover:scale-110  duration-200">
                <use href="/sprite.svg#facebook"></use>
              </svg>
              <svg className="w-10 h-10 fill-[#fff] transition ease-in-out  lg:hover:-translate-y-1 lg:hover:scale-110  duration-200">
                <use href="/sprite.svg#reddit"></use>
              </svg>
            </div>
          </div>
          <p className="text-center mt-14 md:mt-16 text-sm md:text-base lg:text-lg">
            @copyright
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
