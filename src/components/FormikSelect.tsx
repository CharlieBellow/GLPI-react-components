import React from "react";

import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
import { Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport} from "@radix-ui/react-select";
import * as Icon from 'phosphor-react';
import { Field, useField } from "formik";

interface FormikSelectProps {
	label: string;
	name: string;
	optionsList: Array<any>;
}

export const FormikSelect = (props: FormikSelectProps) => {

	const [field, meta] = useField(props);
	return (
		<div
			className={`bg-gray-medium text-gray-text font-bold text-base py-2 px-2.5 rounded-md`}
			{...props}
		>
			{/*<label htmlFor="LocalService">Local do serviço:</label>*/}
			<Field
				{ ...props }
				as="select"
				label={ props.label }
				//name="LocalService"
				//placeholder={props.value}
				options={props.optionsList}
				className="w-full bg-gray-medium text-gray-text"
				{ ...field }
				
			>
				{/* estilizar e tirar essa borda preta feia */}
				<option value="" label="">
					Selecione o local:{" "}
				</option>
				{props.optionsList.map(item => {
					return (
						<option value={item.value} key={item.value} id={item.value}>
							{item.label}
						</option>
					);
				})}
			</Field>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};
