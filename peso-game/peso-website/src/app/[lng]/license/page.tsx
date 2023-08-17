"use client";
import { useTranslation } from "@/app/i18n/client";
import { License } from "@/components/PrivPolLic/License";

export default function Privacy({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng, "wiki");
  return (
    <>
      <License lng={lng} />
    </>
  );
}
