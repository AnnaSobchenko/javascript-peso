"use client";
import { useTranslation } from "@/app/i18n/client";
export default function Forum({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng, "forum");
  return (
    <h3 className=" layout text-accent-color text-4xl pt-20">
      {t("forumTitle")}
      &#128676;
    </h3>
  );
}
