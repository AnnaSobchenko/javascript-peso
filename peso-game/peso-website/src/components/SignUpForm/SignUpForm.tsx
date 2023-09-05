"use client";
import { useState, FC } from "react";
import { ErrorMessage, Formik, FormikValues, FormikHelpers } from "formik";
import localFont from "next/font/local";
import Link from "next/link";
import { RegisterValidationSchema } from "@/components/utils/validation/registervalid";
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
                <h2 className={`${myFont.className} text-3xl`}>{t("title")}</h2>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2  mt-12">
                  <AuthField
                    name="name"
                    placeholder={t("name")}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors.name}
                    touched={touched.name}
                  />
                  <AuthField
                    name="email"
                    placeholder={t("email")}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors.email}
                    touched={touched.email}
                  />

                  <label htmlFor="password">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder={t("password")}
                      onChange={handleChange}
                      onBlur={handleBlurPassword}
                      onFocus={toggleShowPasswordText}
                      value={values.password}
                      className={`border-b-2  ${
                        errors.password && touched.password
                          ? "border-error-color"
                          : "border-main-font-color"
                      } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
                    />

                    <ErrorMessage
                      component="div"
                      name="password"
                      className="mt-2 text-error-color"
                    />
                    <label className="hidden lg:flex lg:items-center mt-5 relative">
                      <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={toggleShowPassword}
                      />
                      <span className="ml-2">{t("showPassword")}</span>
                    </label>
                    {showPasswordText && (
                      <div
                        className={`p-1 ${
                          showPasswordText ? "fade-in" : "fade-out"
                        }`}
                      >
                        <p className="p-2  text-xs">{t("passText")}</p>
                      </div>
                    )}
                  </label>
                  <label htmlFor="repeatPassword">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="repeatPassword"
                      placeholder={t("repeatPassword")}
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
                      <span className="ml-2">{t("showPassword")}</span>
                    </label>
                    {showPasswordText && (
                      <div className="text-accent-element-color mt-4 text-xs lg:hidden">
                        {t("passText")}
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
                      {t("submitBtn")}
                    </p>
                  </div>
                </button>
                <div className="flex mt-6">
                  <p className=" text-sm text-opacity-font-2 lg:text-lg">
                    Doesn't have an account?
                  </p>
                  <Link
                    href={`/${lng}/signup`}
                    className="ml-2 lg:hover:text-error-color  duration-200 text-sm  lg:text-lg"
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
