import { Field, FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

interface CardLabelTextareaProps extends React.HTMLAttributes<HTMLElement> {
	label: string;
	textareaid?: string;
	register?: any;
	type?: string;
	name: string;
}

function CardLabel(props: CardLabelTextareaProps ) {
	return (
		<label
			{...props}
			htmlFor={props.textareaid}
			className="absolute -top-1 left-1 origin-[0] -translate-y-5 scale-100
      text-base text-light-bg duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-1.5
      peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:bg-white-ice
      peer-focus:px-2 peer-focus:text-blue-ufal peer-focus:peer-placeholder-shown:-translate-x-0"
		>
			{props.label}
		</label>
	);
}

export function CardLabelTextarea(
	props: CardLabelTextareaProps &
		InputHTMLAttributes<HTMLInputElement> &
		ClassAttributes<HTMLInputElement> &
		FieldHookConfig<string>
) {
	const [field, meta] = useField(props);
	return (
		<div className="relative">
			<Field
				as="textarea"
				{...props}
				{...field}
				name={props.name}
				id={props.label}
				type={props.type}
				className={`peer block h-40 max-h-40 min-h-full w-full appearance-none rounded-lg bg-gray-medium
          p-2.5 text-base text-light-bg focus:border-2 focus:bg-transparent
          focus:outline-none focus:ring-0${
						meta.error ? " border-red-ufal" : "focus:border-blue-ufal"
					}`}
				placeholder=" "
			/>

			<CardLabel
				name={props.name}
				label={props.label}
				textareaid={props.textareaid}
			/>

			{meta.error && meta.touched ? (
				<span className="text-sm text-red-ufal">{meta.error}</span>
			) : null}
		</div>
	);
}
