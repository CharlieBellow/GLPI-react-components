import AccordionMenu from "../../AccordionMenu";
import {Link} from "react-router-dom"


import { Gear, WarningCircle, User, Question } from "phosphor-react";

import logoUfal from "../../../assets/brasao-ufal.png";

function Menu() {
	return (
		<>
			<aside className="menu bg-azul-final-gradiente w-[13.375rem] m-0 z-10">
				<img
					src={logoUfal}
					alt="logo da ufal"
					className="menu__logo w-[3.438rem] h-24 m-[1.625rem] bg-brasaoUfal"
				/>

				<div className="menu__geral flex flex-col  pl-6 pr-5 pb-[2.063rem]">
					<h4 className="menu__titleSection text-branco-100 font-bold text-sm">
						Geral
					</h4>
					<AccordionMenu />
				</div>

				<div className="menu__help flex flex-col items-start pl-6 pr-5 pb-[2.063rem]">
					<h4 className="menu__titleSection  text-branco-100 font-bold text-sm">
						Ajuda
					</h4>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
							<Gear size={20} className="menu__icon mr-2 stroke-branco-100" />
							Configurações
						</p>
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<Link to="/SignUp">
							<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
								<User size={20} className="menu__icon mr-2 stroke-branco-100" />
								Perfil
							</p>
						</Link>
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<Link to="/Login">
							<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
								<Question size={20} className="menu__icon mr-2" />
								Sobre
							</p>
						</Link>
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<Link to="/Teste">
							<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
								<WarningCircle
									size={20}
									className="menu__icon mr-2 stroke-branco-100"
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

export default Menu;