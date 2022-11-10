import ButtonSelect from "../ButtonSelect";
import { Plus } from "phosphor-react";
import ButtonMainWithIcon from "../ButtonMainWithIcon";
import Search from "../Search";
import { FiChevronDown } from "react-icons/fi";
interface TableOptionsProps {
	listSelectButton: Array<any>;
	titleOfTable?: string;
}

export default function TableOptions(props: TableOptionsProps) {
	//const ItemSelect = ["Nome", "Email", "Data de Criação", "Matrícula"];
	return (
		<>
			<div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0 text-gray-text lg:mx-8 lg:my-6">
				<h4 className="font-medium text-lg lg:text-2xl hidden lg:flex">
					{props.titleOfTable}
				</h4>

				<div className="flex flex-row items-center">
					<label
						htmlFor="search"
						className="pr-4 font-normal text-xl hidden lg:flex"
					>
						Busca
					</label>

					<Search placeholder="pesquisar usuário" />
				</div>
				<div className="hidden lg:flex">
					<ButtonSelect
						placeholder="Filtrar por..."
						listSelectButton={props.listSelectButton}
						icon={<FiChevronDown size={24} className="pl-1 w-5" />}
					/>
				</div>
				<div className="relative">
					<ButtonMainWithIcon
						classname="hidden lg:flex items-center px-[0.625rem] py-2 bg-blue-ufal text-white-100 rounded-md shadow-button font-bold text-base"
						icon={<Plus className="mr-3" />}
						title="Adicionar"
					/>
				</div>
			</div>
		</>
	);
}
