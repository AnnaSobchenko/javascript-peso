"use client";
import { useState, FC } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import localFont from "next/font/local";
import Link from "next/link";

import InputField from "../shared/InputField/InputField";
import AuthBtn from "../UI/AuthBtn/AuthBtn";
import SignUpPass from "./SignUpPass";
import { RegisterValidationSchema } from "../utils/validation/registervalid";
import SignUpRepeatPass from "./SignUpRepeatPass";

import UploadImage from "./UploadImage";
import PrivacyCheckbox from "./PrivacyCheckbox";

interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  file: File | null;
  policy: boolean;
}
const initialValues: FormValues = {
  email: "",
  password: "",
  repeatPassword: "",
  name: "",
  file: null,
  policy: false,
};
interface SignUpForm {
  lang: string;
  textTr: {
    [key: string]: any;
  };
}

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

const SignUpForm: FC<SignUpForm> = ({ textTr, lang }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordText, setShowPasswordText] = useState(false);

  const toggleShowPasswordText = () => {
    setShowPasswordText(!showPasswordText);
  };
  const handleBlurPassword = () => {
    setShowPasswordText(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="layout">
      <div className="bg-accent-background">
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterValidationSchema}
          onSubmit={async (
            values: FormValues,
            { resetForm }: FormikHelpers<FormValues>
          ) => {
            console.log("values", values);
            await resetForm();
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
            setFieldValue,
          }) => (
            <div className="px-5 py-14 lg:flex lg:px-12 lg:py-12">
              <Form onSubmit={handleSubmit} className="lg:basis-3/5 lg:mr-16">
                <h2 className={`${myFont.className} text-3xl`}>
                  {textTr.signUpTitle}
                </h2>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2  mt-12">
                  <InputField
                    name="name"
                    placeholder={textTr.signUpName}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors.name}
                    touched={touched.name}
                  />
                  <InputField
                    name="email"
                    placeholder={textTr.signUpEmail}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors.email}
                    touched={touched.email}
                  />
                  <SignUpPass
                    textTr={textTr}
                    value={values.password}
                    errors={errors.password}
                    touched={touched.password}
                    showPassword={showPassword}
                    showPasswordText={showPasswordText}
                    onChange={handleChange}
                    onBlur={handleBlurPassword}
                    toggleShowPasswordText={toggleShowPasswordText}
                    toggleShowPassword={toggleShowPassword}
                  />
                  <SignUpRepeatPass
                    textTr={textTr}
                    value={values.repeatPassword}
                    errors={errors.repeatPassword}
                    touched={touched.repeatPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    showPassword={showPassword}
                    toggleShowPassword={toggleShowPassword}
                  />
                </div>
                <UploadImage
                  value={values.file}
                  setFieldValue={setFieldValue}
                />
                <PrivacyCheckbox
                  value={values.policy}
                  setFieldValue={setFieldValue}
                  lang={lang}
                />

                <button
                  type="submit"
                  className=" w-full h-fit bg-transparent pt-1 pb-1 pr-[5px] pl-[5px] mt-12 border border-solid border-accent-element-color lg:hover:-translate-y-1 lg:hover:scale-110  duration-200"
                >
                  <div className=" flex items-center py-3 px-3  bg-main-font-color justify-center">
                    <p
                      className={`${myFont.className} text-md text-main-background leading-6 lg:text-xl`}
                    >
                      {textTr.signUpSubmitBtn}
                    </p>
                  </div>
                </button>
                <div className="flex mt-6">
                  <p className=" text-xs text-opacity-font-2 md:text-sm lg:text-lg">
                    {textTr.signUpTransition}
                  </p>
                  <Link
                    href={`/${lang}/signin`}
                    className="ml-2 lg:hover:text-error-color  duration-200 text-xs md:text-sm lg:text-lg"
                  >
                    {textTr.signUpLink}
                  </Link>
                </div>
              </Form>
              <AuthBtn textTr={textTr} />
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
