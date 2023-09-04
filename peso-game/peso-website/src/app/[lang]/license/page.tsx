import { LicensePlc } from "@/components/PrivPolLic/License";
import { getDictionary } from "../dictionaries";

const License = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <LicensePlc textTr={dict.license} />
    </div>
  );
};

export default License;
