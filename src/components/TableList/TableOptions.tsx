import ButtonSelect from "../ButtonSelect";
import { FaSearch, FaPlus } from "react-icons/fa";
import ButtonMainWithIcon from "../ButtonMainWithIcon";

export default function TableOptions() {
	return (
		<>
			<div className="flex flex-row items-center justify-between text-cinza-texto mx-8 my-6">
				<h4 className="font-medium text-2xl">Lista de usuário</h4>

				<div className="flex flex-row items-center">
					<label htmlFor="search" className="pr-6 font-normal text-xl">
						Busca
					</label>
					<div className="relative">
						<FaSearch
							size={18}
							className="header__iconSearch absolute top-[25%] left-[20px] text-cinza-texto"
						/>
						<input
							type="text"
							name="search"
							placeholder="pesquisar usuário"
							className="header__searchBar text-cinza-texto bg-branco-gelo-forte rounded-xl focus:outline-azul-ufal border-none shadow-sombra-card py-2 pr-[101px] pl-[58px] text-base font-normal"
						/>
					</div>
				</div>

				<ButtonSelect />
				<div className="relative">
					<ButtonMainWithIcon
						classname="flex items-center px-[0.625rem] py-2 bg-azul-ufal text-branco-100 rounded-md shadow-sombra-botao font-bold text-base"
						icon={<FaPlus className="mr-3" />}
						title="Adicionar"
					/>
				</div>
			</div>
		</>
	);
}
