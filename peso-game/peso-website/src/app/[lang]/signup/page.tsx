import React from "react";
import { getDictionary } from "../dictionaries";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

const SignUp = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);
  return <SignUpForm textTr={dict.signUp} lang={lang} />;
};

export default SignUp;
