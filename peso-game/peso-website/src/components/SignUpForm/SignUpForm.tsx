"use client";
import { useState, FC } from "react";
import { ErrorMessage, Formik, FormikValues, FormikHelpers } from "formik";
import localFont from "next/font/local";
import Link from "next/link";

import { RegisterValidationSchema } from "@/components/utils/validation/registervalid";
// import CustomErrorMessage from "../UI/CustomError/CustomError";
import AuthBtn from "../UI/AuthBtn/AuthBtn";
import { useTranslation } from "@/app/i18n/client";
import AuthField from "../UI/AuthField/AuthField";

interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
}
interface SignUpForm {
  lng: string;
}

// // Define an interface for the form submission function
// interface FormSubmissionFunction {
//   onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void | Promise<any>;
// }
const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});
const SignUpForm: FC<SignUpForm> = ({ lng }) => {
  const { t } = useTranslation(lng, "signup");
  const [showPassword, setShowPassword] = useState(false);
  console.log("showPassword", showPassword);
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
            // other Formik props
          }) => (
            <div className="px-5 py-14 lg:flex lg:px-12 lg:py-12">
              <form onSubmit={handleSubmit} className="lg:basis-3/5 lg:mr-16">
                <h2 className={`${myFont.className} text-3xl`}>{t("title")}</h2>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2  mt-12">
                  <AuthField
                    name="name"
                    placeholder="Your public name.."
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors.name}
                  />
                  <AuthField
                    name="email"
                    placeholder="Your email.."
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors.email}
                  />

                  <label htmlFor="password">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Your password.."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={`border-b-2  ${
                        errors.password
                          ? "border-error-color"
                          : "border-main-font-color"
                      } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="mt-2 text-error-color"
                    />
                    <label className="hidden lg:flex lg:items-center mt-5">
                      <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={toggleShowPassword}
                      />
                      <span className="ml-2">Show Password</span>
                    </label>
                  </label>
                  <label htmlFor="repeatPassword">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="repeatPassword"
                      placeholder="Repeat your password.."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repeatPassword}
                      className={`border-b-2  ${
                        errors.repeatPassword
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
                      <span className="ml-2">Show Password</span>
                    </label>
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
                      Sign in to My Account
                    </p>
                  </div>
                </button>
                <div className="flex mt-6">
                  <p className="text-opacity-font-2">
                    Doesn't have an account?
                  </p>
                  <Link
                    href={`/${lng}/signup`}
                    className="ml-2 lg:hover:text-error-color  duration-200"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>

              <AuthBtn />
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
