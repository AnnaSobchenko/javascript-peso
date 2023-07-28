import localFont from "next/font/local";

const myFont = localFont({
	src: "../../../../public/MyFont-Regular.otf",
	display: "swap",
});

const AuthBtn = () => {
	return (
		<div className="lg:flex lg:flex-col basis-1/3">
			<p className="mt-12 text-sm text-opacity-font-2 text-center lg:mt-0 lg:text-lg">
				Or, register using your account:
			</p>
			<button
				type="submit"
				className=" w-full h-fit bg-transparent pt-1 pb-1 pr-[5px] pl-[5px] mt-6 lg:mt-16 border border-solid border-accent-element-color lg:hover:-translate-y-1 lg:hover:scale-110  duration-200"
			>
				<div className=" flex items-center py-3 px-2  bg-main-font-color justify-center">
					<svg className=" w-6 h-6 mr-2 lg:w-9 lg:h-9">
						<use href="/sprite.svg#google"></use>
					</svg>
					<p
						className={`${myFont.className} text-sm text-main-background leading-6 lg:text-xl`}
					>
						Continue with Google
					</p>
				</div>
			</button>
			<button
				type="submit"
				className=" w-full h-fit bg-transparent pt-1 pb-1 pr-[5px] pl-[5px] mt-6 border border-solid border-accent-element-color lg:hover:-translate-y-1 lg:hover:scale-110  duration-200 "
			>
				<div className=" flex items-center justify-center py-3 px-2  bg-main-font-color  lg:py-4 lg:px-4 ">
					<svg className=" w-6 h-6 mr-2 lg:w-9 lg:h-9">
						<use href="/sprite.svg#steam"></use>
					</svg>
					<p
						className={`${myFont.className} text-sm text-main-background leading-6 lg:text-xl`}
					>
						Continue with Steam
					</p>
				</div>
			</button>
		</div>
	);
};

export default AuthBtn;
