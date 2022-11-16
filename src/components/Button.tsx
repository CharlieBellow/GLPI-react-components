
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	theme: "primary" | "secondary" | "tertiary" | "primaryAction" | "secondaryAction" | "textOnly" | "primaryMobile";
}

export function Button(props: ButtonProps) {
  return (
		<button
			{...props}
			className={`
				hover:bg-opacity-80 font-bold rounded-md focus:outline-blue-ufal
				${
					props.theme === "primary"
					? "bg-blue-ufal focus:outline-light-bg text-white-100 text-base px-[3.25rem] h-12 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "secondary"
					? "bg-gray-text text-white-100 text-base px-[3.25rem] h-12 py-2 shadow-button"
					: ""
				}
				${
					props.theme === "tertiary"
					? "bg-gray-medium text-gray-text text-base px-[3.25rem] h-12 py-2 shadow-button"
					: ""
				}
        ${
					props.theme === "primaryAction"
					? "bg-blue-ufal focus:outline-light-bg w-[5.5rem] text-white-100 text-base px-[0.625rem] h-[2.625rem] py-2 shadow-button"
					: ""
				}
				${
					props.theme === "secondaryAction"
					? "bg-gray-medium text-gray-text text-base w-[5.5rem] px-[0.625rem] h-[2.625rem] py-2 shadow-button"
					: ""
				}
				${
					props.theme === "textOnly"
					? "bg-transparent text-blue-ufal text-base w-full py-4"
					: ""
				}
				${
					props.theme === "primaryMobile"
					? "bg-blue-ufal focus:outline-light-bg text-white-100 text-base px-[6.25rem] py-4 shadow-button"
					: ""
				}
			`}
		>	
			{props.title}
		</button>
	);
}
