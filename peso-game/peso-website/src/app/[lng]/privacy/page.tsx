"use client";
import { useTranslation } from "@/app/i18n/client";
import { PrivPolLic } from "@/components/PrivPolLic/PrivPolLic";

export default function Privacy({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng, "wiki");
  return (
    <>
      <PrivPolLic lng={lng} />
    </>
  );
}
