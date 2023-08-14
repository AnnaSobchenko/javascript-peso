"use client";
import { useState, FC } from "react";
import { ErrorMessage, Formik, FormikValues, FormikHelpers } from "formik";
import localFont from "next/font/local";
import Link from "next/link";

import { SignInValidationSchema } from "@/components/utils/validation/registervalid";
// import CustomErrorMessage from "../UI/CustomError/CustomError";
import AuthBtn from "../UI/AuthBtn/AuthBtn";
import { useTranslation } from "@/app/i18n/client";

interface FormValues {
  email: string;
  password: string;
}
interface SignInProps {
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
const SignInForm: FC<SignInProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "signin");
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
            // other Formik props
          }) => (
            <div className="px-5 py-14 lg:flex lg:px-12 lg:py-12">
              <form onSubmit={handleSubmit} className="lg:basis-3/5 lg:mr-16">
                <h2 className={`${myFont.className} text-3xl`}>{t("title")}</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email.."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`border-b-2 mt-12 ${
                    errors.email
                      ? "border-error-color"
                      : "border-main-font-color"
                  } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="mt-2 text-error-color"
                />
                <div className="relative ">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Your password.."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={`border-b-2 mt-12 ${
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

                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-0 top-0 mt-14 mr-3 border-none bg-transparent"
                  >
                    {showPassword ? (
                      <svg className="fill-main-font-color w-5 h-5">
                        <use href="/sprite.svg#show"></use>
                      </svg>
                    ) : (
                      <svg className="fill-main-font-color w-5 h-5">
                        <use href="/sprite.svg#hide"></use>
                      </svg>
                    )}
                  </button>
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

export default SignInForm;
