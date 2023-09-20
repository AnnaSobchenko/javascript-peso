"use client";

import React, { FC } from "react";
import { FormData, TextFCComponentsProps } from "@/interfaces/Props.interface";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import localFont from "next/font/local";
import ButtonMain from "@/components/UI/ButtonMain/ButtonMain";

const myFont = localFont({
  src: "../../../../public/MyFont-Regular.otf",
  display: "swap",
});

const initialValues: FormData = {
  name: "",
  email: "",
  message: "",
};

export const MessageForm: FC<TextFCComponentsProps> = ({ textTr }) => {
  const textAccentFont = myFont.className;

  const handleSubmit = (values: FormData) => {
    console.log(values);
  };

  const validate = (values: FormData) => {
    const errors: Partial<FormData> = {};

    if (!values.name) {
      errors.name = textTr.feedBackErrorTextNickname;
    }

    if (!values.email) {
      errors.email = textTr.feedBackErrorTextEmail;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = textTr.feedBackErrorEmail;
    }

    if (!values.message) {
      errors.message = textTr.feedBackErrorTextMessage;
    }

    return errors;
  };

  return (
    <div
      id="form"
      className="bg-accent-background w-screen flex justify-center"
    >
      <div className="layout px-7 pt-14 pb-7 md:px-14 md:pt-16 md:pb-12 lg:px-20 lg:pt-30 lg:pb-20">
        <h2
          className={`text-center mb-1.5 ${textAccentFont} font-normal text-lg md:text-2xl md:mb-2.5 lg:mb-2.5`}
        >
          {textTr.feedBackHeader}
        </h2>

        <p className="text-center font-normal text-sm text-opacity-font-2 md:text-base lg:w-full lg:text-lg">
          {textTr.feedBackText}
        </p>
        <p
          className={`text-center mt-16 ${textAccentFont} font-normal text-3xl md:text-left md:mt-20 lg:mt-16`}
        >
          {textTr.feedBackFormHeader}
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="relative">
                <Field
                  name="name"
                  id="name"
                  type="text"
                  placeholder={textTr.feedBackFormName}
                  className={`border-b-2 mt-12 ${
                    errors.name && touched.name
                      ? "border-error-color"
                      : "border-main-font-color"
                  } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  className="ml-2 mt-2 error absolute text-error-color"
                />
              </div>

              <div className="relative">
                <Field
                  name="email"
                  id="email"
                  type="email"
                  placeholder={textTr.feedBackFormEmail}
                  className={`border-b-2 mt-12 ${
                    errors.email && touched.email
                      ? "border-error-color"
                      : "border-main-font-color"
                  } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="ml-2 mt-2 error absolute text-error-color"
                />
              </div>

              <div className="relative">
                <Field
                  name="message"
                  id="message"
                  type="message"
                  placeholder={textTr.feedBackFormMessage}
                  className={`border-b-2 mt-12 ${
                    errors.message && touched.message
                      ? "border-error-color"
                      : "border-main-font-color"
                  } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="ml-2 mt-2 error absolute text-error-color"
                />
              </div>
              <div className="mt-24 flex justify-center items-center flex-col md:flex-row-reverse md:m-auto md:mt-16 lg:mt-20">
                <ReCAPTCHA
                  sitekey="6Lcc1WknAAAAAHxRlLXuD8WhkOXTlR31zYR1XU7m"
                  onChange={(value: any) => console.log("recaptcha", value)}
                  className="mb-6 md:mb-0 "
                />

                <ErrorMessage
                  name="recaptcha"
                  component="div"
                  className="error"
                />
                <div className="md:mr-6">
                  <ButtonMain text={textTr.feedBackBtn} onClick={() => {}} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
