import * as Icon from "phosphor-react";
import { Field, FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

interface CardLabelInputProps extends React.HTMLAttributes<HTMLElement> {
	label: string;
	type: string;
	inputid?: string;
	width: string;
	pattern?: string;
	icon?: Icon.IconProps;
	name: string;
}

function CardLabel ( props: CardLabelInputProps ) {
	return (
		<label
			{...props}
			htmlFor={props.inputid}
			className="absolute text-base peer-focus:bg-white-ice text-light-bg duration-300 transform
      -translate-y-5 scale-100 -top-1 origin-[0] peer-focus:px-2 peer-focus:text-blue-ufal
      peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
      peer-focus:peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:translate-x-1.5
      peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
		>
			{ props.label }
		</label>
	);
}

export function CardLabelInput ( props: CardLabelInputProps &InputHTMLAttributes<HTMLInputElement> &
ClassAttributes<HTMLInputElement> &
FieldHookConfig<string> ) {
	const [field, meta] = useField(props);
	return (
		<div className="relative flex items-start justify-center flex-col">
			<Field
				{...props}
				{...field}
				type={props.type}
				//name={props.name}
				pattern={props.pattern}
				className={`block px-2.5 py-2.5 text-base text-light-bg bg-gray-medium focus:bg-transparent
          max-h-11 rounded-lg appearance-none focus:outline-none
          focus:ring-0 focus:border-2  peer ${
						meta.error ? " border-red-ufal" : "focus:border-blue-ufal"
					} ${props.width}`}
				placeholder=" "
				//required
			/>
			<>{props.icon}</>

			<CardLabel
				label={ props.label }
				name={props.name}
				type={props.type}
				inputid={props.inputid}
				width={props.width}
				pattern={props.pattern}
			/>

			{meta.error && meta.touched ? (
				<span className="text-red-ufal text-sm">{meta.error}</span>
			) : null}
		</div>
	);
}
