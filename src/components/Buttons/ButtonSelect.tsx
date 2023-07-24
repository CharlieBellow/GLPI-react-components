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
//import { Field } from "formik";

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
}

export function ButtonSelect(props: ButtonSelectProps) {
	return (
		<div
			className={`rounded-md bg-gray-medium px-2.5 py-2 text-base font-bold text-gray-text`}
			{...props}
		>
			<Select>
				{/*<Field as="select"  name={ props.name } type={ props.type}>*/}
				<SelectTrigger
					aria-label="Filter"
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
					<SelectViewport className="rounded-md border-2 bg-gray-medium">
						<SelectGroup className="h-full p-1">
							<SelectLabel>{props.title}</SelectLabel>
							{props.listselecbutton.map(selectItem => {
								return (
									<SelectItem
										key={selectItem}
										value={selectItem}
										className="flex cursor-pointer py-1 outline-blue-ufal hover:bg-blue-ufal hover:text-white-100"
										//ref={props.register}
										//onChange={e => {
										//	setSelectValue(e.target.value)
										//	console.log(e.target.value)
										//}}
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

export default ButtonSelect;
