import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	theme?: "primary" | "secondary";
}

export function Button(props: ButtonProps) {
  return (
		<button
			{...props}
			className={`hover:bg-opacity-80 font-bold rounded-md
        focus:outline-blue-ufal
        ${props.theme === "primary" ? "bg-blue-ufal focus:outline-light-bg min-w-[84px] text-white-100 text-base px-[0.625rem] h-[2.625rem] py-2 shadow-button":""}
				${props.theme === "secondary" ? "bg-gray-medium text-gray-text text-base px-[0.625rem] h-[2.625rem] py-2 shadow-button":""}
			`}
		>	
			{props.title}
		</button>
	);
}
