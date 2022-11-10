
import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
import { Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport} from "@radix-ui/react-select";
interface ButtonSelectProps {
	className?: string;
	listSelectButton: Array<any>;
	title?: string;
	placeholder?: any;
	icon?: any;
}


export const ButtonSelect = (props: ButtonSelectProps) => (
	<div
		className={`bg-gray-medium text-gray-text font-bold text-base py-2 px-[0.625rem] rounded-md`}
		{...props}
	>
		<Select>
			<SelectTrigger
				aria-label="Filter"
				className="flex lg:w-[11rem] justify-between"
			>
				<SelectValue placeholder={props.placeholder} />
				<SelectIcon>
					{props.icon}
				</SelectIcon>
			</SelectTrigger>
			<SelectContent>
				<SelectScrollUpButton>
					<FiChevronUp size={24} className="pl-1" />
				</SelectScrollUpButton>
				<SelectViewport className="bg-gray-medium rounded-md border-2">
					<SelectGroup className="px-1 py-1 h-full">
						<SelectLabel>{props.title}</SelectLabel>
						{props.listSelectButton.map(selectItem => {
							return (
								<SelectItem
									key={selectItem}
									value={selectItem}
									className="py-1 flex hover:bg-blue-ufal outline-blue-ufal hover:text-white-100"
								>
									<SelectItemText>{selectItem}</SelectItemText>
									<SelectItemIndicator>
										<FiCheck size={24} className="pl-1" />
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
	</div>
);

export default ButtonSelect;
