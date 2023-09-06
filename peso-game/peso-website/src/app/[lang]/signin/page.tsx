import { getDictionary } from "../dictionaries";

const SignIn = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);
  return <div>SignIn</div>;
};

export default SignIn;
