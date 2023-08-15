"use client";

import React, { FC } from "react";
import {
  FormData,
  LanguageFCComponentsProps,
} from "@/interfaces/Props.interface";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import localFont from "next/font/local";
import { useTranslation } from "@/app/i18n/client";

const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});

const initialValues: FormData = {
  name: "",
  email: "",
  message: "",
};

export const MessageForm: FC<LanguageFCComponentsProps> = ({ lng }) => {
  const textAccentFont = myFont.className;
  const { t } = useTranslation(lng, "main");

  const handleSubmit = (values: FormData) => {
    console.log(values);
  };

  const validate = (values: FormData) => {
    const errors: Partial<FormData> = {};

    if (!values.name) {
      errors.name = t("feedBackError");
    }

    if (!values.email) {
      errors.email = t("feedBackError");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = t("feedBackErrorEmail");
    }

    if (!values.message) {
      errors.message = t("feedBackError");
    }

    return errors;
  };

  return (
    <div className="bg-accent-background w-screen flex justify-center">
      <div className="layout px-7 pt-14 pb-7 md:px-14 md:pt-16 md:pb-12 lg:px-20 lg:pt-30 lg:pb-20">
        <h2
          className={`text-center mb-1.5 ${textAccentFont} font-normal text-lg md:text-2xl md:mb-2.5 lg:mb-2.5`}
        >
          {t("feedBackHeader")}
        </h2>

        <p className="text-center font-normal text-sm text-opacity-font-2 md:text-base lg:w-full lg:text-lg">
          {t("feedBackText")}
        </p>
        <p
          className={`text-center mt-16 ${textAccentFont} font-normal text-3xl md:text-left md:mt-20 lg:mt-16`}
        >
          {t("feedBackFormHeader")}
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {() => (
            <Form>
              <div className="relative">
                <Field
                  name="name"
                  id="name"
                  type="text"
                  placeholder={t("feedBackFormName")}
                  className="outline-none w-full pb-1.5 mt-12 font-normal text-base text-opacity-font-2 bg-accent-background"
                />
                <div className="h-px bg-main-font-color w-full"></div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error absolute text-error-color"
                />
              </div>

              <div className="relative">
                <Field
                  name="email"
                  id="email"
                  type="email"
                  placeholder={t("feedBackFormEmail")}
                  className="outline-none w-full pb-1.5 mt-12 font-normal text-base text-opacity-font-2 bg-accent-background"
                />
                <div className="h-px bg-main-font-color w-full"></div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error absolute text-error-color"
                />
              </div>

              <div className="relative">
                <Field
                  name="message"
                  id="message"
                  type="message"
                  placeholder={t("feedBackFormMessage")}
                  className="outline-none w-full pb-1.5 mt-12 text-base text-opacity-font-2 bg-accent-background"
                />
                <div className="h-px bg-main-font-color w-full"></div>
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error absolute text-error-color"
                />
              </div>
              <div className="mt-24 flex justify-center items-center flex-col md:flex-row-reverse md:m-auto md:mt-16 lg:mt-20">
                <ReCAPTCHA
                  sitekey="6Lcc1WknAAAAAHxRlLXuD8WhkOXTlR31zYR1XU7m"
                  onChange={(value: any) => console.log("recaptcha", value)}
                />
                <ErrorMessage
                  name="recaptcha"
                  component="div"
                  className="error"
                />

                <button
                  type="submit"
                  className="mt-6 px-2 py-1 bg-accent-background border-accent-element-color md:mt-0"
                >
                  <div className="flex justify-center px-6 py-5 bg-accent-color items-center">
                    <p
                      className={`${textAccentFont} font-normal text-2xl text-main-font-color mr-2.5`}
                    >
                      {t("feedBackBtn")}
                    </p>
                    <ul className="m-auto">
                      <li className="w-1 h-1 rounded-full mb-1 bg-opacity-font-3 last:mb-0"></li>
                      <li className="w-1 h-1 rounded-full mb-1 bg-opacity-font-3 last:mb-0"></li>
                      <li className="w-1 h-1 rounded-full mb-1 bg-opacity-font-3 last:mb-0"></li>
                    </ul>
                  </div>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
