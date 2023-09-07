import React, { FC } from "react";
import { ErrorMessage } from "formik";

interface SignUpPassProps {
  showPassword: boolean;
  showPasswordText: boolean;
  value: string;
  toggleShowPasswordText: () => void;
  toggleShowPassword: () => void;
  onBlur: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: string;
  touched: boolean | string | undefined;
  textTr: {
    [key: string]: any;
  };
}
const SignUpPass: FC<SignUpPassProps> = ({
  textTr,
  value,
  showPassword,
  showPasswordText,
  onChange,
  onBlur,
  toggleShowPasswordText,
  toggleShowPassword,
  errors,
  touched,
}) => {
  return (
    <label htmlFor="password" className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder={textTr.signUpPassword}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={toggleShowPasswordText}
        value={value}
        className={`border-b-2  ${
          errors && touched ? "border-error-color" : "border-main-font-color"
        } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
      />

      <ErrorMessage
        component="div"
        name="password"
        className="mt-2 absolute text-error-color"
      />
      <label className="hidden lg:flex lg:items-center mt-10 relative">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={toggleShowPassword}
        />
        <span className="ml-2">{textTr.signUpShowPassword}</span>
      </label>
      {showPasswordText && (
        <div className={`p-1 ${showPasswordText ? "fade-in" : "fade-out"}`}>
          <p className=" p-2  text-xs">{textTr.signUpPassText}</p>
        </div>
      )}
    </label>
  );
};

export default SignUpPass;
