"use client";
import { useState, FC } from "react";
import { ErrorMessage, Formik, FormikValues, FormikHelpers } from "formik";
import localFont from "next/font/local";
import Link from "next/link";

import InputField from "../shared/InputField/InputField";
import AuthBtn from "../UI/AuthBtn/AuthBtn";
import SignUpPass from "./SignUpPass";
import { RegisterValidationSchema } from "../utils/validation/registervalid";

interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
}
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
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
            name: "",
          }}
          validationSchema={RegisterValidationSchema}
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

                  <label htmlFor="repeatPassword">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="repeatPassword"
                      placeholder="repeatPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repeatPassword}
                      className={`border-b-2  ${
                        errors.repeatPassword && touched.repeatPassword
                          ? "border-error-color"
                          : "border-main-font-color"
                      } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
                    />

                    <ErrorMessage
                      component="div"
                      name="repeatPassword"
                      className="mt-2 text-error-color"
                    />
                    <label className=" flex items-center mt-5 lg:hidden">
                      <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={toggleShowPassword}
                      />
                      <span className="ml-2">
                        "{textTr.signUpShowPassword}"
                      </span>
                    </label>
                    {showPasswordText && (
                      <div className="text-accent-element-color mt-4 text-xs lg:hidden">
                        {textTr.signUpPassText}
                      </div>
                    )}
                  </label>
                </div>
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
                  <p className=" text-sm text-opacity-font-2 lg:text-lg">
                    Already have an account?
                  </p>
                  <Link
                    href={`/${lang}/signup`}
                    className="ml-2 lg:hover:text-error-color  duration-200 text-sm  lg:text-lg"
                  >
                    Sign In
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

export default SignUpForm;
