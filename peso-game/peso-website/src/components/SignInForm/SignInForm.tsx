"use client";
import React, { FC } from "react";
import Link from "next/link";
import { Formik, FormikHelpers } from "formik";

import localFont from "next/font/local";
import AuthBtn from "../UI/AuthBtn/AuthBtn";
import InputField from "../shared/InputField/InputField";
import { SignInValidationSchema } from "../utils/validation/registervalid";
import SignInPass from "./SignInPass";

interface FormValues {
  email: string;
  password: string;
}
interface SignInProps {
  lang: string;
  textTr: {
    [key: string]: any;
  };
}
const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

const SignInForm: FC<SignInProps> = ({ textTr, lang }) => {
  return (
    <div className="layout">
      <div className="bg-accent-background">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInValidationSchema}
          onSubmit={async (
            values: FormValues,
            { resetForm }: FormikHelpers<FormValues>
          ) => {
            console.log("values", values);
            // await resetForm();
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
            // other Formik props
          }) => (
            <div className="px-5 py-14 lg:flex lg:px-12 lg:py-12">
              <form onSubmit={handleSubmit} className="lg:basis-3/5 lg:mr-16">
                <h2 className={`${myFont.className} text-3xl`}>
                  {textTr.signInTitle}
                </h2>
                <div className="mt-12">
                  <InputField
                    name="email"
                    placeholder={textTr.signInEmail}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors.email}
                    touched={touched.email}
                  />
                  <SignInPass
                    placeholder={textTr.signInPassword}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors.password}
                    touched={touched.password}
                  />
                </div>
                <button
                  type="submit"
                  className=" w-full h-fit bg-transparent pt-1 pb-1 pr-[5px] pl-[5px] mt-12 border border-solid border-accent-element-color lg:hover:-translate-y-1 lg:hover:scale-110  duration-200"
                >
                  <div className=" flex items-center py-3 px-3  bg-main-font-color justify-center">
                    <p
                      className={`${myFont.className} text-sm text-main-background leading-6  md:text-xl`}
                    >
                      {textTr.signInSubmitBtn}
                    </p>
                  </div>
                </button>
                <div className="flex mt-6">
                  <p className="text-xs text-opacity-font-2 md:text-sm lg:text-lg">
                    {textTr.signInTransition}
                  </p>
                  <Link
                    href={`/${lang}/signup`}
                    className="ml-2 lg:hover:text-error-color  duration-200 text-xs md:text-sm lg:text-lg"
                  >
                    {textTr.signInLink}
                  </Link>
                </div>
              </form>

              <AuthBtn textTr={textTr} />
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;
