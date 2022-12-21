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
import { Field } from "formik";
import { string } from "yup/lib/locale";

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
	myName?: string;
	type?: string;
	atualValue?: string;
	label?: string;
	ariaLabel?: string;
}

export function ButtonSelectObject(props: ButtonSelectProps) {
	const serviceLocation = [
		{ id: 1, values: "Bloco A" },
		{ id: 2, values: "Bloco B" },
		{ id: 3, values: "Bloco C" },
		{ id: 4, values: "Bloco Med" },
		{ id: 5, values: "Bloco em L" },
		{ id: 6, values: "Casa Velha" },
		{ id: 7, values: "NCEX" },
		{ id: 8, values: "RU" },
		{ id: 9, values: "Administrativo" },
		{ id: 10, values: "Bloco Co}ordenações" },
		{ id: 11, values: "Transporte" },
	];

	return (
		<div
			className={`bg-gray-medium text-gray-text font-bold text-base py-2 px-2.5 rounded-md`}
			{...props}
		>
			{/*<Field as={props.type} name={props.myName}>*/}
			<Select>
				<SelectTrigger
					aria-label={props.ariaLabel}
					className={`flex justify-between ${props.triggerWidth}`}
				>
					<SelectValue placeholder={props.placeholder} />
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
							<SelectLabel>{props.title}</SelectLabel>
							{props.listselecbutton.map(selectItem => {
								return (
									<SelectItem
										key={selectItem.id}
										value={selectItem.values}
										className="py-1 flex cursor-pointer hover:bg-blue-ufal outline-blue-ufal hover:text-white-100"
										//ref={props.register}
										//onChange={e => {
										//	setSelectValue(e.target.value)
										//	console.log(e.target.value)
										//}}
									>
										<SelectItemText className="text-md text-red-ufal">
											{selectItem.values}
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

						<SelectSeparator />
					</SelectViewport>
					<SelectScrollDownButton>
						<FiChevronDown size={24} className="pl-1" />
					</SelectScrollDownButton>
				</SelectContent>
			</Select>
			{/*</Field>*/}
		</div>
	);
}

export default ButtonSelectObject;
