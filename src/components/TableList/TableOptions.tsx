import ButtonSelect from "../ButtonSelect";
import { Plus } from "phosphor-react";
import ButtonMainWithIcon from "../ButtonMainWithIcon";
import Search from "../Search";

export default function TableOptions() {
	const ItemSelect = ['Nome', 'Email', 'Data de Criação', 'Matrícula',]
	return (
		<>
			<div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0 text-cinza-texto lg:mx-8 lg:my-6">
				<h4 className="font-medium text-lg lg:text-2xl hidden lg:flex">
					Lista de usuário
				</h4>

				<div className="flex flex-row items-center">
					<label
						htmlFor="search"
						className="pr-6 font-normal text-xl hidden lg:flex"
					>
						Busca
					</label>

					<Search placeholder="pesquisar usuário" />
				</div>
				<div className="hidden lg:flex">
					<ButtonSelect value={ItemSelect} />
				</div>
				<div className="relative">
					<ButtonMainWithIcon
						classname="hidden lg:flex items-center px-[0.625rem] py-2 bg-azul-ufal text-branco-100 rounded-md shadow-sombra-botao font-bold text-base"
						icon={<Plus className="mr-3" />}
						title="Adicionar"
					/>
				</div>
			</div>
		</>
	);
}
