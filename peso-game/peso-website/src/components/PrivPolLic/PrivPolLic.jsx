import s from "./PrivPolLic.module.scss";
import Image from "next/image";
import Close from "../../assets/icon/close.svg";
import ThreeVertDots from "../../components/UI/ThreeVertDots/ThreeVertDots";
import { useState } from "react";

const PrivPolLic = ({ onClick }) => {
  const [license, setLicense] = useState(false);
  return (
    <div className={`layout ${s.privpollic}`}>
      {license && (
        <div className={s.privpollic__license}>
          <ul className={s.privpollic__list}>
            <li className={s.privpollic__item}>
              <div className=" mr-4">
                <ThreeVertDots />
              </div>
              <p className={s.privpollic__text}>
                @ The headsail can be masthead-rigged or fractional-rigged.
              </p>
            </li>
            <li className={s.privpollic__item}>
              <div className=" mr-4">
                <ThreeVertDots />
              </div>
              <p className={s.privpollic__text}>
                @ On a masthead-rigged sloop, the forestay (on which the
                headsail is carried) attaches at the top of the mast.
              </p>
            </li>
            <li className={s.privpollic__item}>
              <div className=" mr-4">
                <ThreeVertDots />
              </div>
              <p className={s.privpollic__text}>
                @ The headsail can be masthead-rigged or fractional-rigged.
              </p>
            </li>
            <li className={s.privpollic__item}>
              <div className=" mr-4">
                <ThreeVertDots />
              </div>
              <p className={s.privpollic__text}>
                @ On a masthead-rigged sloop, the forestay (on which the
                headsail is carried) attaches at the top of the mast. License
              </p>
            </li>
          </ul>
          <p className={s.privpollic__text_description}>
            @ The headsail can be masthead-rigged or fractional-rigged. On a
            masthead-rigged sloop, the forestay (on which the headsail is
            carried) attaches at the top of the mast. On a fractional-rigged
            sloop, the forestay attaches to the mast at a point below the top. A
            sloop may use a bowsprit, a spar that projects forward from the bow.
            The headsail can be masthead-rigged or fractional-rigged. On a
            masthead-rigged sloop, the forestay (on which the headsail is
            carried) attaches at the top of the mast.
          </p>
        </div>
      )}
      {!license && (
        <div className={s.privpollic__privpol}>
          <ul className={s.privpollic__list}>
            <li className={s.privpollic__item}>
              <div className=" mr-4">
                <ThreeVertDots />
              </div>
              <p className={s.privpollic__text}>
                @ The headsail can be masthead-rigged or fractional-rigged.
              </p>
            </li>
            <li className={s.privpollic__item}>
              <div className=" mr-4">
                <ThreeVertDots />
              </div>
              <p className={s.privpollic__text}>
                @ On a masthead-rigged sloop, the forestay (on which the
                headsail is carried) attaches at the top of the mast.
              </p>
            </li>
            <li className={s.privpollic__item}>
              <div className=" mr-4">
                <ThreeVertDots />
              </div>
              <p className={s.privpollic__text}>
                @ The headsail can be masthead-rigged or fractional-rigged.
              </p>
            </li>
            <li className={s.privpollic__item}>
              <div className=" mr-4">
                <ThreeVertDots />
              </div>
              <p className={s.privpollic__text}>
                @ On a masthead-rigged sloop, the forestay (on which the
                headsail is carried) attaches at the top of the mast.
              </p>
            </li>
          </ul>
          <p className={s.privpollic__text_description}>
            @ The headsail can be masthead-rigged or fractional-rigged. On a
            masthead-rigged sloop, the forestay (on which the headsail is
            carried) attaches at the top of the mast. On a fractional-rigged
            sloop, the forestay attaches to the mast at a point below the top. A
            sloop may use a bowsprit , a spar that projects forward from the
            bow. The headsail can be masthead-rigged or fractional-rigged. On a
            masthead-rigged sloop, the forestay (on which the headsail is
            carried) attaches at the top of the mast.
          </p>
        </div>
      )}
      <div className={s.privpollic__bottom}>
        <div className={s.privpollic__links_bottom}>
          <button
            type="button"
            onClick={() => setLicense(false)}
            className={license ? s.privpollic__link : s.privpollic__link_active}
          >
            Privacy Policy
          </button>
          <div className={s.privpollic__line}></div>
          <button
            type="button"
            onClick={() => setLicense(true)}
            className={license ? s.privpollic__link_active : s.privpollic__link}
          >
            License
          </button>
        </div>
        <button type="button" onClick={onClick} className={s.privpollic__btn}>
          <p className={s.privpollic__btn_text}> Close</p>
          <Image src={Close} width={30} height={30} alt="X" />
        </button>
      </div>
    </div>
  );
};

export default PrivPolLic;
