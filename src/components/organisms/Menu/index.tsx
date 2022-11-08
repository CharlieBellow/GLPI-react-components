import AccordionMenu from "../../AccordionMenu";
import { Link } from "react-router-dom"
import { List } from "phosphor-react";





import { Gear, WarningCircle, User, Question } from "phosphor-react";

import logoUfal from "../../../assets/brasao-ufal.png";


export function Menu() {

	return (
		<>
			<input type="checkbox" name="checkbox" id="checkbox" className="float hidden" />
			<aside className="checkbox-wrapper hidden lg:block lg:bg-azul-final-gradiente lg:w-[13.375rem] lg:m-0 lg:z-10  ">
				<label htmlFor="checkbox" className="float p-[-12px] ml-[-32px]">
					<List size={24} className="invisible"/>
					<div className="transition-[0.4s] change">
						<div className="after:content-[''] block border-b-2 border-solid border-branco-100 pt-1 change bar1"></div>
						<div className="after:content-[''] block border-b-2 border-solid border-branco-100 pt-1 change bar2"></div>
						<div className="after:content-[''] block border-b-2 border-solid border-branco-100 pt-1 change bar3"></div>
					</div>
				</label>
				<img
					src={logoUfal}
					alt="logo da ufal"
					className={"w-[3.438rem] h-24 m-[1.625rem] bg-brasaoUfal mx-auto"}
				/>

				<div className="flex flex-col  pl-6 pr-5 pb-[2.063rem] pt-6">
					<h4 className="text-branco-100 font-bold text-sm text-invisible">
						Geral
					</h4>
					<AccordionMenu />
				</div>

				<div className="flex flex-col items-start pl-6 pr-5 pb-[2.063rem]">
					<h4 className="text-branco-100 font-bold text-sm text-invisible">
						Ajuda
					</h4>

					<div className=" w-full flex items-center content-between">
						<p className=" text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-azul-fundo-gradiente-dark">
							<Gear size={20} className=" stroke-branco-100  aumentaIcone" />
							<p className="text-hidden ml-2">Configurações</p>
						</p>
					</div>

					<div className="w-full flex items-center content-between">
						<Link to="/SignUp">
							<p className="text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-azul-fundo-gradiente-dark">
								<User size={20} className="mr-2 stroke-branco-100" />
								<p className="text-hidden">Perfil</p>
							</p>
						</Link>
					</div>

					<div className="w-full flex items-center content-between">
						<Link to="/Login">
							<p className="text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-azul-fundo-gradiente-dark">
								<Question size={20} className="mr-2" />
								<p className="text-hidden">Sobre</p>
							</p>
						</Link>
					</div>

					<div className="w-full flex items-center content-between">
						<Link to="/Teste">
							<p className="text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-azul-fundo-gradiente-dark">
								<WarningCircle size={20} className="mr-2 stroke-branco-100" />
								<p className="text-hidden">Ajuda</p>
							</p>
						</Link>
					</div>
				</div>
			</aside>
		</>
	);
}
