import React, { FC } from "react";
import { ErrorMessage } from "formik";

interface AuthFieldsProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors?: string;
  touched: boolean | string | undefined;
}

const AuthField: FC<AuthFieldsProps> = ({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  errors,
  touched,
}) => (
  <label htmlFor={name}>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={`border-b-2 ${
        errors && touched ? "border-error-color" : "border-main-font-color"
      } appearance-none bg-transparent py-2 px-2 w-full text-gray-700 mr-3 leading-tight focus:outline-none`}
    />
    <ErrorMessage
      component="div"
      name={name}
      className="mt-2 text-error-color"
    />
  </label>
);

export default AuthField;
