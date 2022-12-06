import { Gear, WarningCircle, User, Question } from "phosphor-react";
import { Link } from "react-router-dom";

export function AccordionMenuHelp() {
	return (
		<>
			<div className=" w-full flex items-center content-between">
				<p className=" text-white-100 font-semibold text-sm flex flex-row items-center content-start w-full lg:my-3 my-2 mx-0  hover:text-blue-dark-final-gradient">
					<Gear size={20} className=" stroke-white-100" />
					<Link to="/Teste">
						<p className="text-hidden ml-2">Configurações</p>
					</Link>
				</p>
			</div>

			<div className="w-full flex items-center content-between">
				<Link to="/SignUp">
					<p className="text-white-100 font-semibold text-sm flex flex-row items-center content-start w-full lg:my-3 my-2 mx-0 mr-2 hover:text-blue-dark-final-gradient">
						<User size={20} className="mr-2 stroke-white-100" />
						<p className="text-hidden">Perfil</p>
					</p>
				</Link>
			</div>

			<div className="w-full flex items-center content-between">
				<Link to="/PageCategoriaHome">
					<p className="text-white-100 font-semibold text-sm flex flex-row items-center content-start w-full lg:my-3 my-2 mx-0 mr-2 hover:text-blue-dark-final-gradient">
						<Question size={20} className="mr-2" />
						<p className="text-hidden">Sobre</p>
					</p>
				</Link>
			</div>

			<div className="w-full flex items-center content-between">
				<Link to="/Teste">
					<p className="text-white-100 font-semibold text-sm flex flex-row items-center content-start w-full lg:my-3 my-2 mx-0 mr-2 hover:text-blue-dark-final-gradient">
						<WarningCircle size={20} className="mr-2 stroke-white-100" />
						<p className="text-hidden">Ajuda</p>
					</p>
				</Link>
			</div>
		</>
	);
}
