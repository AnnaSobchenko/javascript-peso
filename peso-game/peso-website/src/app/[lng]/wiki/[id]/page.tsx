"use client";

import { useTranslation } from "@/app/i18n/client";
import { ShipCard } from "@/components/WikiPage/ShipCard";

type Props = {
  params: {
    ship: string;
  };
};

export default function ShipCardPage({
  params: { lng, id },
}: {
  params: { lng: string; id: string };
}) {
  const { t } = useTranslation(lng, "wiki");
  return <ShipCard lng={lng} id={id} />;
}
