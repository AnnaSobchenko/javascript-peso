import HeroForum from "../../../components/FAQ/HeroForum/HeroForum";
import ThemesForum from "../../../components/FAQ/ThemesForum/ThemesForum";
import { getDictionary } from "../dictionaries";

const Forum = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <HeroForum textTr={dict.faq} />
      <ThemesForum lang={lang} textTr={dict.faq} />
    </div>
  );
};

export default Forum;
