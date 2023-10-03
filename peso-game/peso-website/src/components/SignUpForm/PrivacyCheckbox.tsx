import { ErrorMessage } from "formik";
import Link from "next/link";
import React, { FC } from "react";
interface PrivacyCheckboxProps {
  lang: string;
  value: boolean;
  setFieldValue(field: keyof any, value: any): void;
}
const PrivacyCheckbox: FC<PrivacyCheckboxProps> = ({
  value,
  setFieldValue,
  lang,
}) => {
  return (
    <>
      <div className="flex items-center mt-12">
        <input
          type="checkbox"
          id="policy"
          name="policy"
          checked={value}
          onChange={() => setFieldValue("policy", !value)}
        />
        <label htmlFor="policy" className="ml-2">
          <p className="text-xs text-opacity-font-2  md:text-sm lg:text-lg">
            By using our service you fully agree with our
            <Link
              href={`/${lang}/privacy`}
              className="ml-2 lg:hover:text-error-color text-main-font-color  duration-200 text-xs md:text-sm lg:text-lg"
            >
              Privacy Policy..
            </Link>
          </p>
        </label>
      </div>
      <ErrorMessage
        component="div"
        name="policy"
        className="mt-2 absolute text-error-color text-xs md:text-sm lg:text-lg"
      />
    </>
  );
};

export default PrivacyCheckbox;
