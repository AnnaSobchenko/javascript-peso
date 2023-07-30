"use client";
import * as s from "./form.module.scss";
import React, { FC } from "react";
import { useState } from "react";
import Image from "next/image";
import profilePic from "../../../assets/img/home/desktop/enquete-captcha-voorbeeld.jpg";
import {
  FormData,
  LanguageFCComponentsProps,
} from "@/interfaces/Props.interface";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import localFont from "next/font/local";
import useTranslation from "@/app/i18n/client";

// import axios from "axios";

// const initialValues: FormData = {
//   name: "",
//   email: "",
//   message: "",
// };

// export const Form: FC = () => {
//   const [formData, setFormData] = useState(initialValues);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const feedBackData = { formData };
//     console.log(feedBackData);

//     // запрос для добавления отзыва в базу данных, адрес пока условный,
//     //  так как бека еще нет, потом поменям в случае чего
//     // пока закомментировала, чтоб ошибку в консоль не било

//     // const addFeedback = async()=>{
//     //   try {
//     //     await axios.post('http://localhost:3001/api/feedback/add', feedBackData)
//     //   } catch (err) {
//     //     console.log(err)
//     //   }
//     // }
//     // addFeedback();

//     reset();
//   };

//   const reset = () => {
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="">
//       <h2 className="">FeedBack Form</h2>
//       <p className="">
//         The video shows one guild attacking another guild. Enjoy the gameplay
//         right now.
//       </p>

//       <p className="">Drop Us a Line</p>
//       <form onSubmit={handleSubmit}>
//         <input
//           className=""
//           type="text"
//           placeholder="Your name & nickname.."
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я0-9_-]{3,16}$"
//           title="Name may contain only letters, apostrophe, dash and spaces, 3-16 symbols. "
//           required
//           value={name}
//           onChange={handleChange}
//         />

//         <input
//           className=""
//           type="email"
//           placeholder="Your email.."
//           name="email"
//           pattern="^([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([A-Za-z]{1,}\.){1,2}[a-z]{2,4}$"
//           title="The part of the email with the username can contain Latin letters, numbers, dot, hyphen, underscore."
//           required
//           value={email}
//           onChange={handleChange}
//         />

//         <input
//           className=""
//           type="text"
//           placeholder="Your message & question.."
//           name="message"
//           pattern="^[0-9A-Za-zА-Яа-яЁё]{10,200}*$"
//           title="10 to 200 symbols, numbers and letters"
//           required
//           value={message}
//           onChange={handleChange}
//         />

//         <div className="">
//           <Image src={profilePic} alt="Capcha" className="" />

//           <button type="submit" className="">
//             <div className="">
//               <p className="">Send Message</p>
//               <ul className="">
//                 <li className=""></li>
//                 <li className=""></li>
//                 <li className=""></li>
//               </ul>
//             </div>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

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
    // e.preventDefault();
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
      <div className="layout px-[30px] pt-[55px] pb-[30px] md:px-[55px] md:pt-[70px] md:pb-[50px] lg:px-[75px] lg:pt-[120px] lg:pb-[75px]">
        <h2
          className={`text-center mb-[5px] ${textAccentFont} font-normal text-lg md:text-2xl md:mb-[10px] lg:mb-[9px]`}
        >
          {t("feedBackHeader")}
        </h2>

        <p className="text-center font-normal text-sm text-opacity-font-2 md:text-base lg:w-full lg:text-lg">
          {t("feedBackText")}
        </p>
        <p
          className={`text-center mt-[65px] ${textAccentFont} font-normal text-3xl md:text-left md:mt-[76px] lg:mt-[69px]`}
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
                  className="outline-none w-full pb-[5px] mt-[52px] font-normal text-base text-opacity-font-2 bg-accent-background"
                />
                <div className="h-px bg-main-font-color w-full mb-[25px]"></div>
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
                  className="outline-none w-full pb-[5px] mt-[52px] font-normal text-base text-opacity-font-2 bg-accent-background"
                />
                <div className="h-px bg-main-font-color w-full mb-[25px]"></div>
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
                  className="outline-none w-full pb-[5px] mt-[52px] text-base text-opacity-font-2 bg-accent-background"
                />
                <div className="h-px bg-main-font-color w-full mb-[25px]"></div>
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error absolute text-error-color"
                />
              </div>
              <div className="mt-[90px] flex justify-center items-center flex-col md:flex-row-reverse md:m-auto md:mt-[70px] lg:mt-[80px]">
                {/* <ReCAPTCHA
                  sitekey="6LcAEmYnAAAAALf6zXE81rddyCfJ99W05t5i3ZxL"
                  onChange={(value: any) => console.log("recaptcha", value)}
                />
                <ErrorMessage
                  name="recaptcha"
                  component="div"
                  className="error"
                /> */}

                <button
                  type="submit"
                  className="mt-[25px] px-[8px] py-[4px] bg-accent-background border-accent-element-color md:mt-0"
                >
                  <div className="flex justify-center px-[24px] py-[18px] bg-accent-color items-center">
                    <p
                      className={`${textAccentFont} font-normal text-2xl text-main-font-color mr-[10px]`}
                    >
                      {t("feedBackBtn")}
                    </p>
                    <ul className="m-auto">
                      <li className="w-[4px] h-[4px] rounded-full mb-[4px] bg-opacity-font-3 last:mb-0"></li>
                      <li className="w-[4px] h-[4px] rounded-full mb-[4px] bg-opacity-font-3 last:mb-0"></li>
                      <li className="w-[4px] h-[4px] rounded-full mb-[4px] bg-opacity-font-3 last:mb-0"></li>
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
