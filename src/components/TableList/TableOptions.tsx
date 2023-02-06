import ButtonSelect from "../Buttons/ButtonSelect";
import { Plus } from "phosphor-react";
import { Button } from "../Buttons/Button";
import Search from "../Inputs/Search";
import { FiChevronDown } from "react-icons/fi";

import { useBreakpointValue } from "@chakra-ui/react";

interface TableOptionsProps {
	listselecbutton: Array<any>;
	titleOfTable?: string;
}

export default function TableOptions(props: TableOptionsProps) {
	//const ItemSelect = ["Nome", "Email", "Data de Criação", "Matrícula"];
	//const title = isWideVersion ? "Adicionar" : "";

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});
	return (
		<>
			<div className="flex flex-row items-center justify-between gap-3 lg:gap-0 text-gray-text lg:mx-8 lg:my-6 mx-6">
				<h4 className="font-medium text-lg lg:text-lg hidden lg:flex">
					{props.titleOfTable}
				</h4>

				<div className="flex flex-row items-center">
					<label htmlFor="search" className="pr-4 font-normal text-xl hidden">
						Busca
					</label>

					<Search placeholder="pesquisar usuário" />
				</div>
				<div className="hidden lg:flex">
					<ButtonSelect
						placeholder="Filtrar por..."
						listselecbutton={props.listselecbutton}
						icon={<FiChevronDown size={24} className="pl-1 w-5" />}
					/>
				</div>
				<div className="relative">
					<Button
						className="flex items-center px-[0.625rem] py-2 bg-blue-ufal text-white-100 rounded-md shadow-button font-bold text-base"
						icon={<Plus className="lg:mr-3 mr-0" />}
						title={isWideVersion ? "Adicionar" : ""}
						theme={"primary"}
					/>
				</div>
			</div>
		</>
	);
}
