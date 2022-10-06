
import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
import { Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport } from "@radix-ui/react-select";



export const ButtonSelect = () => (
	<div className="bg-cinza-medio text-cinza-texto font-bold text-base py-2 px-[0.625rem] rounded-md ">
		<Select>
			<SelectTrigger
				aria-label="Filter"
				className="flex w-[11rem] justify-between"
			>
				<SelectValue placeholder="Filtrar por…" />
				<SelectIcon>
					<FiChevronDown size={24} className="pl-1 w-5" />
				</SelectIcon>
			</SelectTrigger>
			<SelectContent>
				<SelectScrollUpButton>
					<FiChevronUp size={24} className="pl-1" />
				</SelectScrollUpButton>
				<SelectViewport className="bg-cinza-medio rounded-md">
					<SelectGroup className="px-1 py-1">
						<SelectLabel>Selecione uma opção:</SelectLabel>
						<SelectItem
							value="name"
							className="py-1 flex hover:bg-azul-ufal outline-azul-ufal  hover:text-branco-100"
						>
							<SelectItemText>Nome</SelectItemText>
							<SelectItemIndicator>
								<FiCheck size={24} className="pl-1" />
							</SelectItemIndicator>
						</SelectItem>
						<SelectItem
							value="email"
							className="py-1 flex hover:bg-azul-ufal outline-azul-ufal hover:text-branco-100"
						>
							<SelectItemText>Email</SelectItemText>
							<SelectItemIndicator>
								<FiCheck size={24} className="pl-1" />
							</SelectItemIndicator>
						</SelectItem>
						<SelectItem
							value="createdAt"
							className="py-1 flex hover:bg-azul-ufal outline-azul-ufal hover:text-branco-100"
						>
							<SelectItemText>Data de Criação</SelectItemText>
							<SelectItemIndicator>
								<FiCheck size={24} className="pl-1" />
							</SelectItemIndicator>
						</SelectItem>
						<SelectItem
							value="registrationNumber"
							className="py-1 flex hover:bg-azul-ufal outline-azul-ufal hover:text-branco-100"
						>
							<SelectItemText>Matrícula</SelectItemText>
							<SelectItemIndicator>
								<FiCheck size={24} className="pl-1" />
							</SelectItemIndicator>
						</SelectItem>
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
