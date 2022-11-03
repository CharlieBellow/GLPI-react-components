
import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
import { Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport } from "@radix-ui/react-select";
interface SelectItemProps {
	className?: string

	value: string
}


export const ButtonSelect = (props: SelectItemProps) => (
	<>
		arr.map(
		<SelectItem
			value={props.value}
			className="py-1 flex hover:bg-azul-ufal outline-azul-ufal  hover:text-branco-100"
		>
			<SelectItemText>{props.value}</SelectItemText>
			<SelectItemIndicator>
				<FiCheck size={24} className="pl-1" />
			</SelectItemIndicator>
		</SelectItem>
		
		)
	</>
);

export default ButtonSelect;


{/*<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />
<SelectItem value="nome" />

cont arr = [
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
	nome,
]*/}
