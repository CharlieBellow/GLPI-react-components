import { ButtonHTMLAttributes } from "react";
import * as Icon from "phosphor-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string;
	//type: "button" | "submit" | "reset" | undefined;
	icon?: Icon.IconProps;
	theme:
		| "primary"
		| "secondary"
		| "tertiary"
		| "primaryAction"
		| "secondaryAction"
		| "textOnly"
		| "primaryMobile"
		| "withIcon"
		| "primaryActionWithIcon"
		| "secondaryActionWithIcon"
		| "tertiaryMobile"
		| "tertiaryActionWithIcon";
}

export function Button(props: ButtonProps) {
	return (
		<button
			{ ...props }
			type={props.type}
			className={`
				font-bold rounded-md focus:outline-blue-ufal
				${
					props.theme === "primary"
					? "bg-blue-ufal hover:bg-blue-ufal-hover focus:outline-light-bg text-white-100 text-base px-13 h-12 py-2 shadow-button focus:outline-light-bg text-xl"

					: ""
				}
				${
					props.theme === "secondary"
					? "bg-gray-text hover:bg-opacity-80 text-white-100 text-base px-13 h-12 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "tertiary"

					// text- base for text-xl
					? "bg-gray-medium hover:bg-opacity-80 text-gray-text text-base text-xl px-13 h-12 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "tertiaryMobile"
					? "bg-gray-medium text-gray-text text-sm px-5 py-2 shadow-button"
					: ""
				}
        ${
					props.theme === "primaryAction"
					? "bg-blue-ufal hover:bg-blue-ufal-hover focus:outline-light-bg w-22 text-white-100 text-base px-2.5 h-11 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "secondaryAction"
					? "bg-gray-medium hover:bg-opacity-80 text-gray-text text-base w-22 px-2.5 h-11 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "textOnly"
					? "bg-transparent hover:bg-opacity-80 text-blue-ufal text-base w-full py-4"
					: ""
				}
				${
					props.theme === "primaryMobile"
					? "bg-blue-ufal hover:bg-blue-ufal-hover focus:outline-light-bg text-white-100 text-sm lg:text-base lg:px-25 lg:py-4 shadow-button px-5 py-2"

					: ""
				}
				${
					props.theme === "withIcon"
					? `flex items-center justify-center gap-2 bg-blue-ufal hover:bg-blue-ufal-hover focus:outline-light-bg lg:py-6 lg:px-3 py-4 px-4 min-w-[3.75rem]
					lg:h-10 h-15 lg:rounded-md rounded-full text-base text-white-100 shadow-button relative ${props.className}` 
					: ""
				}
				${
					props.theme === "primaryActionWithIcon"
					? `flex items-center justify-center gap-2 bg-blue-ufal hover:bg-blue-ufal-hover focus:outline-light-bg py-4 px-4 text-xl font-bold
					text-white-100 shadow-button` 
					: ""
				}
				${
					props.theme === "secondaryActionWithIcon"
					? `flex items-center justify-center gap-2 bg-gray-text hover:bg-opacity-80 py-4 px-4 text-xl font-bold
					text-white-100 shadow-button` 
					: ""
				}
				${
					props.theme === "tertiaryActionWithIcon"
					? `flex items-center justify-center gap-2 bg-gray-medium hover:bg-opacity-80 py-4 px-4 text-xl font-bold
					text-gray-text shadow-button` 
					: ""
				}
			`}
		>
			<>{props.icon}</>
			{props.title}
		</button>
	);
}
