import AccordionMenu from "../../AccordionMenu";
import {Link} from "react-router-dom"


import { Gear, WarningCircle, User, Question } from "phosphor-react";

import logoUfal from "../../../assets/brasao-ufal.png";

export function Menu() {
	return (
		<>
			<aside className="hidden lg:block lg:bg-azul-final-gradiente lg:w-[13.375rem] lg:m-0 lg:z-10 ">
				<img
					src={logoUfal}
					alt="logo da ufal"
					className="w-[3.438rem] h-24 m-[1.625rem] bg-brasaoUfal mx-auto"
				/>

				<div className="flex flex-col  pl-6 pr-5 pb-[2.063rem]">
					<h4 className="text-branco-100 font-bold text-sm ">
						Geral
					</h4>
					<AccordionMenu />
				</div>

				<div className="flex flex-col items-start pl-6 pr-5 pb-[2.063rem]">
					<h4 className="text-branco-100 font-bold text-sm">
						Ajuda
					</h4>

					<div className=" w-full flex items-center content-between">
						<p className=" text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-azul-fundo-gradiente-dark">
							<Gear size={20} className="mr-2 stroke-branco-100" />
							Configurações
						</p>
					</div>

					<div className="w-full flex items-center content-between">
						<Link to="/SignUp">
							<p className="text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-azul-fundo-gradiente-dark">
								<User size={20} className="mr-2 stroke-branco-100" />
								Perfil
							</p>
						</Link>
					</div>

					<div className="w-full flex items-center content-between">
						<Link to="/Login">
							<p className="text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-azul-fundo-gradiente-dark">
								<Question size={20} className="mr-2" />
								Sobre
							</p>
						</Link>
					</div>

					<div className="w-full flex items-center content-between">
						<Link to="/Teste">
							<p className="text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-azul-fundo-gradiente-dark">
								<WarningCircle
									size={20}
									className="mr-2 stroke-branco-100"
								/>
								Ajuda
							</p>
						</Link>
					</div>
				</div>
			</aside>
		</>
	);
}
