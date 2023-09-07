import React, { FC, useRef, useEffect } from "react";
import PreviewImage from "./PreviewImage";
import localFont from "next/font/local";
import { ErrorMessage } from "formik";

interface UploadImageProps {
  value: File | null;
  setFieldValue(field: keyof any, value: any): void;
}
const myFont = localFont({
  src: "../../../public/MyFont-Regular.otf",
  display: "swap",
});
const UploadImage: FC<UploadImageProps> = ({ value, setFieldValue }) => {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mt-12">
      {!value ? (
        <p className="mb-6 text-xs text-opacity-font-2 md:text-lg">
          Please, select your game avatar..
        </p>
      ) : null}

      <div className="flex flex-col md:flex-row">
        <input
          ref={fileRef}
          hidden
          type="file"
          name="file"
          onChange={(e) => {
            const selectedFile = e.target?.files?.[0];
            if (selectedFile) {
              setFieldValue("file", selectedFile);
            }
          }}
        />

        <button
          type="button"
          onClick={() => {
            fileRef.current!.click();
          }}
          className="h-fit bg-transparent py-[20px] px-[30px]  border border-solid border-accent-element-color md:w-64 lg:hover:-translate-y-1 lg:hover:scale-110  duration-200"
        >
          <p className={`${myFont.className} text-xs  leading-6 md:text-lg`}>
            Choose an avatar:
          </p>
        </button>
        <div className="flex items-center mt-6 md:ml-12 md:mt-0">
          {value ? (
            <PreviewImage file={value} />
          ) : (
            <img
              src="/Avatar.png"
              alt="preview"
              className="rounded-full  w-16 h-16"
              onClick={() => {
                fileRef.current!.click();
              }}
            />
          )}
          <svg className="w-10 h-10 fill-opacity-font-2">
            <use href="/sprite.svg#dots"></use>
          </svg>
        </div>
      </div>
      <ErrorMessage
        component="div"
        name="file"
        className="mt-2 text-error-color"
      />
    </div>
  );
};

export default UploadImage;
