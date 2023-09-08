import React from "react";
import { getDictionary } from "../dictionaries";

import SignInForm from "../../../components/SignInForm/SignInForm";

const SignIn = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <SignInForm textTr={dict.signIn} lang={lang} />
    </div>
  );
};

export default SignIn;
