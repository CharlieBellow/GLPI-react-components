
import { ButtonHTMLAttributes } from "react";
import * as Icon from "phosphor-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string;
	icon?: Icon.IconProps;
	theme:
		"primary" |
		"secondary" |
		"tertiary" |
		"primaryAction" |
		"secondaryAction" |
		"textOnly" |
		"primaryMobile" |
		"tertiaryMobile" |
		"withIcon";
}

export function Button(props: ButtonProps) {
  return (
		<button
			{...props}
			className={`
				hover:bg-opacity-80 font-bold rounded-md focus:outline-blue-ufal
				${
					props.theme === "primary"
					// text- base for text-xl
					? "bg-blue-ufal focus:outline-light-bg text-white-100 text-xl px-13 h-12 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "secondary"
					? "bg-gray-text text-white-100 text-base px-13 h-12 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "tertiary"
					// text- base for text-xl
					? "bg-gray-medium text-gray-text text-xl px-13 h-12 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "tertiaryMobile"
					? "bg-gray-medium text-gray-text text-sm px-5 py-2 shadow-button"
					: ""
				}
        ${
					props.theme === "primaryAction"
					? "bg-blue-ufal focus:outline-light-bg w-22 text-white-100 text-base px-2.5 h-11 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "secondaryAction"
					? "bg-gray-medium text-gray-text text-base w-22 px-2.5 h-11 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "textOnly"
					? "bg-transparent text-blue-ufal text-base w-full py-4"
					: ""
				}
				${
					props.theme === "primaryMobile"
					? "bg-blue-ufal focus:outline-light-bg text-white-100 text-sm px-5 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "withIcon"
					? `flex items-center justify-center gap-2 bg-blue-ufal focus:outline-light-bg lg:py-6 lg:px-3 py-4 px-4 min-w-[3.75rem]
					lg:h-10 h-15 lg:rounded-md rounded-full text-base text-white-100 shadow-button` 
					: ""
				}
			`}
		>	
			<>
				{props.icon}
			</>
			{props.title}
		</button>
	);
}
