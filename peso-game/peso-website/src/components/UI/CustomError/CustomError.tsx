'use client'
import { ErrorMessage } from "formik";
import localFont from "next/font/local";


const myFont = localFont({
	src: "../../../../public/MyFont-Regular.otf",
	display: "swap",
});
const CustomErrorMessage = ({ name, show }: { name: string; show: boolean }) => {
	return show ? (
		<div className="w-full h-fit bg-transparent pt-1 pb-1 pr-[5px] pl-[5px] mt-6 border border-solid border-error-color">
			<div className="py-6 px-7 bg-error-color">
				<h2 className={`${myFont.className} text-2xl leading-6 mb-4`}>Error!</h2>
				<ErrorMessage name={name} />
			</div>
		</div>
	) : null;
};

export default CustomErrorMessage;