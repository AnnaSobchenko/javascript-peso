import { FC } from "react";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import LanguageSection from "../LanguageSection/LanguageSection";
import Modal from "../../shared/Modal/Modal";
import PrivatPolic from "../../PrivPolLic/PrivPolLic";
import { IHeaderProps } from "@/interfaces/Props.interface";

const UpperHeader: FC<IHeaderProps> = async ({ active, lng, onClick }) => {
  // const UpperHeader: FC<UpperHeaderProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "main");
  return (
    <div className="w-screen bg-accent-background">
      <div className="layout">
        <div className=" flex justify-between items-center h-12">
          <div className="flex items-center sm:justify-between sm:w-full md:justify-normal md:w-auto">
            <LanguageSection lng={lng} />
            <div className=" flex justify-between ml-6">
              <button
                type="button"
                onClick={onClick}
                className="sm:hidden md:inline-block text-xs md:text-sm bg-transparent pt-4 pb-4 hover:scale-125 mr-6"
              >
                {t("headerPrivacy")}
              </button>
              <Link
                href=""
                className=" text-xs md:text-sm bg-transparent pt-4 pb-4 hover:scale-125"
              >
                {t("headerContact")}
              </Link>
            </div>
          </div>
          <Link
            href=""
            className=" sm:hidden md:inline-block text-xs md:text-sm bg-transparent pt-4 pb-4 hover:scale-125"
          >
            {t("headerDonate")}
          </Link>
        </div>
      </div>
      <Modal active={active}>
        <PrivatPolic onClick={onClick} />
      </Modal>
    </div>
  );
};

export default UpperHeader;

{
  /* <Link href="/">Back to the HomePage</Link>; */
}
