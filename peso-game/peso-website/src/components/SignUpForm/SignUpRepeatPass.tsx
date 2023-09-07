import React, { FC } from "react";
import { ErrorMessage } from "formik";

interface SignUpRepeatPassProps {
  showPassword: boolean;

  value: string;
  toggleShowPassword: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors?: string;
  touched: boolean | string | undefined;
  textTr: {
    [key: string]: any;
  };
}
const SignUpRepeatPass: FC<SignUpRepeatPassProps> = ({
  textTr,
  value,
  showPassword,
  onChange,
  onBlur,
  toggleShowPassword,
  errors,
  touched,
}) => {
  return (
    <label htmlFor="repeatPassword" className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name="repeatPassword"
        placeholder={textTr.repeatPassword}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`border-b-2  ${
          errors && touched ? "border-error-color" : "border-main-font-color"
        } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
      />

      <ErrorMessage
        component="div"
        name="repeatPassword"
        className="mt-2 absolute text-error-color"
      />
      <label className=" flex items-center mt-10 lg:hidden">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={toggleShowPassword}
        />
        <span className="ml-2">{textTr.signUpShowPassword}</span>
      </label>
    </label>
  );
};

export default SignUpRepeatPass;
