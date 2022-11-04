
import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
import { Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport} from "@radix-ui/react-select";
interface ButtonSelectProps {
	className?: string;
	listSelectButton: Array<any>;
	title?: string;
	placeholder: string;
}


export const ButtonSelect = (props: ButtonSelectProps) => (
	<div
		className={`bg-cinza-medio text-cinza-texto font-bold text-base py-2 px-[0.625rem] rounded-md`}
		{...props}
	>
		<Select>
			<SelectTrigger
				aria-label="Filter"
				className="flex lg:w-[11rem] justify-between"
			>
				<SelectValue placeholder={props.placeholder} />
				<SelectIcon>
					<FiChevronDown size={24} className="pl-1 w-5" />
				</SelectIcon>
			</SelectTrigger>
			<SelectContent>
				<SelectScrollUpButton>
					<FiChevronUp size={24} className="pl-1" />
				</SelectScrollUpButton>
				<SelectViewport className="bg-cinza-medio rounded-md border-2 border-azul-ufal">
					<SelectGroup className="px-1 py-1 h-full">
						<SelectLabel>{props.title}</SelectLabel>
						{props.listSelectButton.map(selectItem => {
							return (
								<SelectItem
									key={selectItem}
									value={selectItem}
									className="py-1 flex hover:bg-azul-ufal outline-azul-ufal hover:text-branco-100"
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
