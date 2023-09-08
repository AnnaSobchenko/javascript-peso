import { ErrorMessage } from "formik";
import React, { useState, FC } from "react";

interface InputFieldsProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors?: string;
  touched: boolean | string | undefined;
}

const SignInPass: FC<InputFieldsProps> = ({
  placeholder,
  value,
  onChange,
  onBlur,
  errors,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = ({}) => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative ">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`border-b-2 mt-12 ${
          errors && touched ? "border-error-color" : "border-main-font-color"
        } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
      />
      <ErrorMessage
        component="div"
        name="password"
        className="mt-2  absolute text-error-color text-xs md:text-sm lg:text-lg"
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
  );
};

export default SignInPass;
