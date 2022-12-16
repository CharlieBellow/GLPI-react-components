import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectIcon,
	SelectItem,
	SelectItemIndicator,
	SelectItemText,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
	SelectViewport,
} from "@radix-ui/react-select";
import * as Icon from "phosphor-react";

import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes, useState } from "react";

interface ButtonSelectProps extends React.HTMLAttributes<HTMLElement> {
	className?: string;
	listselecbutton: Array<any>;
	title?: string;
	placeholder?: any;
	icon?: Icon.IconProps;
	triggerWidth?: string;
	iconSelectItemIndicator?: Icon.IconProps | "";
	//register?: any;
	selectValue?: string;
	itemId?: number;
	name?: string;
	type?: string;
	label?: string;
}

export const MySelect = (
	props: ButtonSelectProps &
		InputHTMLAttributes<HTMLInputElement> &
		ClassAttributes<HTMLInputElement> &
		FieldHookConfig<string>
) => {
	const [field, meta] = useField(props);
	//console.log("FieldSelect: ", field);
	//console.log("metaSelect: ", meta);

	//const [value, setValue] = useState("");

	return (
		<>
			{/*<div
				className={`bg-gray-medium text-gray-text font-bold text-base py-2 px-2.5 rounded-md   block m-1 p-2  w-full cursor-pointer border-2
              ${meta.touched && meta.error ? " border-red-ufal" : ""}
            `}
				{...props}
			>
				<Select>
					<SelectTrigger
						{ ...field }
						
						name={props.name}
						aria-label="Filter"
						className={`flex justify-between ${props.triggerWidth}`}
					>
						<SelectValue placeholder={props.placeholder}></SelectValue>
						<SelectIcon>
							<>{props.icon}</>
						</SelectIcon>
					</SelectTrigger>

					<SelectContent>
						<SelectScrollUpButton>
							<FiChevronUp size={24} className="pl-1" />
						</SelectScrollUpButton>
						<SelectViewport className="bg-gray-medium rounded-md border-2">
							<SelectGroup className="px-1 py-1 h-full">
								<SelectLabel>{props.label}</SelectLabel>
								{props.listselecbutton.map(selectItem => {
									return (
										<SelectItem
											key={selectItem}
											value={selectItem}
											className="py-1 flex cursor-pointer hover:bg-blue-ufal outline-blue-ufal hover:text-white-100"
										>
											<SelectItemText className="text-md text-red-ufal">
												{selectItem}
											</SelectItemText>

											<SelectItemIndicator>
												<>
													{props.iconSelectItemIndicator === "" ? (
														<FiCheck size={24} className="pl-1" />
													) : (
														props.iconSelectItemIndicator
													)}
												</>
											</SelectItemIndicator>
										</SelectItem>
									);
								})}
							</SelectGroup>
						</SelectViewport>
						<SelectScrollDownButton>
							<FiChevronDown size={24} className="pl-1" />
						</SelectScrollDownButton>
					</SelectContent>
				</Select>
			</div>
			{meta.error ? <span className="text-red-ufal">{meta.error}</span> : null}*/}
			{/*
			<label>{props.label}</label>
			<select
				{...field}
				{...props}
				className={`block m-1 p-2  text-[#1a202c] rounded-md  w-full text-xs font-medium  cursor-pointer border-2
              ${meta.touched && meta.error ? " border-red-ufal" : ""}
            `}
			/>
			{meta.error ? <span className="text-red-ufal">{meta.error}</span> : null}*/}
		</>
	);
};
