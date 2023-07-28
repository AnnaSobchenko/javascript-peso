"use client";
import { useTranslation } from "@/app/i18n/client";

export default function Wiki({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng, "wiki");
  return (
    <h3 className=" layout text-accent-element-color text-4xl pt-20">
      {t("wikiTitle")} &#129299;
    </h3>
  );
}
