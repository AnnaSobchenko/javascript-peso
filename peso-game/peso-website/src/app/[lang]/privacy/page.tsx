import { PrivPolLic } from "@/components/PrivPolLic/PrivPolLic";
import { getDictionary } from "../dictionaries";

const Privacy = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <PrivPolLic textTr={dict.privacy} />
    </div>
  );
};

export default Privacy;
