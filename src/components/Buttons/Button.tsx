import { ButtonHTMLAttributes } from "react";
import * as Icon from "phosphor-react";
import { Spinner } from "@chakra-ui/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string;
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
		| "dropdowMenu"
		| "primaryActionWithIcon"
		| "secondaryActionWithIcon"
		| "tertiaryMobile"
		| "tertiaryActionWithIcon";
	disabled?: boolean;
	isSubmitting?: boolean;
}

export function Button({ isSubmitting, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			type={props.type}
			className={`
				rounded-md font-bold focus:outline-blue-ufal
				${
					props.theme === "primary"
						? "flex h-12 items-center justify-center gap-1 bg-blue-ufal p-2 text-base text-white-100 shadow-button hover:bg-blue-ufal-hover focus:outline-light-bg lg:px-13"
						: ""
				}
				${
					props.theme === "secondary"
						? "flex h-12 items-center gap-2 bg-gray-text p-2 text-base text-white-100 shadow-button hover:bg-opacity-80 lg:px-10"
						: ""
				}
				${
					props.theme === "tertiary"
						? // text- base for text-xl
						  "h-12 bg-gray-medium px-13 py-2 text-base text-gray-text shadow-button hover:bg-opacity-80"
						: ""
				}
				${
					props.theme === "tertiaryMobile"
						? "bg-gray-medium px-5 py-2 text-sm text-gray-text shadow-button"
						: ""
				}
        ${
					props.theme === "primaryAction"
						? "h-11 w-24 bg-blue-ufal px-2.5 py-2 text-base text-white-100 shadow-button hover:bg-blue-ufal-hover focus:outline-light-bg"
						: ""
				}
				${
					props.theme === "secondaryAction"
						? "h-11 w-22 bg-gray-medium px-2.5 py-2 text-base text-gray-text shadow-button hover:bg-opacity-80"
						: ""
				}
				${
					props.theme === "textOnly"
						? "w-full bg-transparent py-4 text-base text-blue-ufal hover:bg-opacity-80"
						: ""
				}
				${
					props.theme === "primaryMobile"
						? "bg-blue-ufal px-5 py-2 text-sm text-white-100 shadow-button hover:bg-blue-ufal-hover focus:outline-light-bg lg:px-25 lg:py-4 lg:text-base"
						: ""
				}
				${
					props.theme === "withIcon"
						? `relative flex h-15 min-w-[3.75rem] flex-row-reverse items-center justify-center gap-2 rounded-full bg-blue-ufal p-4 text-base text-white-100
					shadow-button hover:bg-blue-ufal-hover focus:outline-light-bg lg:h-10 lg:rounded-md lg:px-3 lg:py-6${props.className}`
						: ""
				}
				${
					props.theme === "dropdowMenu"
						? `relative flex h-15 min-w-[3.75rem] flex-row-reverse items-center justify-center gap-2 rounded-full bg-blue-ufal p-4 text-base text-white-100
					shadow-button hover:bg-blue-ufal-hover focus:outline-light-bg lg:h-10 lg:rounded-full lg:px-3 lg:py-6${props.className}`
						: ""
				}
				${
					props.theme === "primaryActionWithIcon"
						? `flex items-center justify-center gap-2 bg-blue-ufal p-4 text-xl font-bold text-white-100 shadow-button hover:bg-blue-ufal-hover
					focus:outline-light-bg`
						: ""
				}
				${
					props.theme === "secondaryActionWithIcon"
						? `flex items-center justify-center gap-2 bg-gray-text p-4 text-xl font-bold text-white-100 shadow-button
					hover:bg-opacity-80`
						: ""
				}
				${
					props.theme === "tertiaryActionWithIcon"
						? `flex items-center justify-center gap-2 bg-gray-medium p-4 text-xl font-bold text-gray-text shadow-button
					hover:bg-opacity-80`
						: ""
				}
				${
					props.disabled === true
						? "bg-gray-text opacity-60 hover:bg-gray-text hover:opacity-60"
						: ""
				}
			`}
		>
      <>
  			<>{props.icon}</>
  			{isSubmitting ? <Spinner size="md" /> : props.title}
      </>
		</button>
	);
}
