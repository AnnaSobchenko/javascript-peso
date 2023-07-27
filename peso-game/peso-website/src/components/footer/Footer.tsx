import Logo from "../../assets/icon/logo.svg";
import Image from "next/image";
import { FC } from "react";
interface FooterProps {
  lng: string;
}
const Footer: FC<FooterProps> = ({ lng }) => {
  // const openLisence = () => {
  //   setActivePriv((prev) => !prev);
  //   setLicense(true);
  // };
  // const openPrivPol = () => {
  //   setActivePriv((prev) => !prev);
  //   setLicense(false);
  // };

  return (
    <footer className='w-screen bg-accent-background'>
      <div className="layout">
        <div className="pt-16 pb-6 md:pl-9 md:pr-9">
          <div className="sm:h-16 sm:w-24 md:h-20 md:w-32 lg:w-40 lg:h-28">
             <Image
              src={Logo}
              alt="Logo"
              width={160}
              height={106}
            />
          </div>
          <div className="sm:hidden mt-6 md:flex md:items-center">
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
          <p className="sm:mt-6 sm:text-sm md:text-base lg:text-lg  ">@ The headsail can be masthead-rigged or fractional-rigged. On a masthead-rigged sloop, the forestay (on which the headsail is carried) attaches at the top of the mast. On a fractional-rigged sloop, the forestay attaches to the mast at a point below the top. A sloop may use a bowsprit, a spar that projects forward from the bow.The headsail can be masthead-rigged or fractional-rigged. On a masthead-rigged sloop, the forestay (on which the headsail is carried) attaches at the top of the mast.</p>
          <div className="flex items-center sm:flex-col  md:flex-row md:justify-between  mt-12">
            <div className="sm:mb-6 md:mb-0">
               <button type="button"  className="sm:text-sm md:text-base lg:text-lg">
                License
              </button>
              <span className='text-[#D9D9D9] mr-2.5 ml-2.5'>|</span>
              <button type="button" className="sm:text-sm md:text-base lg:text-lg">
                Privacy Policy
              </button>
            </div>
            <div className="flex">
            <svg className="w-10 h-10 mr-2.5">
              <use href="/sprite.svg#facebook"></use>
              </svg>
               <svg className="w-10 h-10 fill-[#fff]">
              <use href="/sprite.svg#reddit"></use>
            </svg>
            </div>
          </div>
          <p className="text-center sm:mt-14 md:mt-16 sm:text-sm md:text-base lg:text-lg">@copyright</p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
