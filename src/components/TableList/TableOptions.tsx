import ButtonSelect from "../ButtonSelect";
import { Plus } from "phosphor-react";
import ButtonMainWithIcon from "../ButtonMainWithIcon";
import Search from "../Search";

export default function TableOptions() {
	return (
		<>
			<div className="flex flex-col  lg:flex-row items-center justify-between text-cinza-texto mx-8 my-6">
				<h4 className="font-medium text-lg lg:text-2xl">Lista de usuário</h4>

				<div className="flex flex-row items-center ">
					<label htmlFor="search" className="pr-6 font-normal text-xl hidden lg:flex">
						Busca
					</label>

					<Search placeholder="pesquisar usuário"/>
				</div>

				<ButtonSelect />
				<div className="relative">
					<ButtonMainWithIcon
						classname="flex items-center px-[0.625rem] py-2 bg-azul-ufal text-branco-100 rounded-md shadow-sombra-botao font-bold text-base"
						icon={<Plus className="mr-3" />}
						title="Adicionar"
					/>
				</div>
			</div>
		</>
	);
}
