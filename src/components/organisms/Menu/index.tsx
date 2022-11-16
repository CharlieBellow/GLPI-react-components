import AccordionMenu from "../../AccordionMenu";
import { Link } from "react-router-dom"
import { List } from "phosphor-react";

import { Gear, WarningCircle, User, Question } from "phosphor-react";

import logoUfal from "../../../assets/brasao-ufal.png";
import { ReactNode } from "react";

interface MenuProps extends React.HTMLAttributes<HTMLElement> {
	accordionMenu?: ReactNode;
}

export function Menu(props: MenuProps) {

	return (
		<>
			<input
				type="checkbox"
				name="checkbox"
				id="checkbox"
				className="floatToggle hidden"
				{...props}
			/>
			<aside className="checkbox-wrapper block bg-blue-final-gradient lg:w-53 lg:m-0 lg:z-10 w-0">
			<div className="lg:hidden  modal"></div>
				<label htmlFor="checkbox" className="floatToggle">
					<List size={24} className="invisible" />
					<div className="transition-[0.4s] change">
						<div className="after:content-[''] block border-b-2 border-solid border-branco-100 pt-1 change bar1"></div>
						<div className="after:content-[''] block border-b-2 border-solid border-branco-100 pt-1 change bar2"></div>
						<div className="after:content-[''] block border-b-2 border-solid border-branco-100 pt-1 change bar3"></div>
					</div>
				</label>
				<img
					src={logoUfal}
					alt="logo da ufal"
					className={
						"w-[3.438rem] h-24 mt-[1.625rem] bg-brasaoUfal mx-auto mb-3 mobile-hidden"
					}
				/>
				<div className="flex flex-col  pl-6 pr-5 pb-[.063rem] pt-6 mobile-hidden">
					<h4 className="text-white-100 font-bold text-sm text-invisible ">
						Geral
					</h4>
					<AccordionMenu />
					{/* substituir depois */}
					{props.accordionMenu}
				</div>

				<div className="flex flex-col items-start pl-6 pr-5 pb-[2.063rem] mobile-hidden">
					<h4 className="text-white-100 font-bold text-sm text-invisible">
						Ajuda
					</h4>

					<div className=" w-full flex items-center content-between">
						<p className=" text-white-100 font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-blue-dark-final-gradient">
							<Gear size={20} className=" stroke-white-100  increaseIcon" />
							<p className="text-hidden ml-2">Configurações</p>
						</p>
					</div>

					<div className="w-full flex items-center content-between">
						<Link to="/SignUp">
							<p className="text-white-100 font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-blue-dark-final-gradient">
								<User size={20} className="mr-2 stroke-white-100" />
								<p className="text-hidden">Perfil</p>
							</p>
						</Link>
					</div>

					<div className="w-full flex items-center content-between">
						<Link to="/Login">
							<p className="text-white-100 font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-blue-dark-final-gradient">
								<Question size={20} className="mr-2" />
								<p className="text-hidden">Sobre</p>
							</p>
						</Link>
					</div>

					<div className="w-full flex items-center content-between">
						<Link to="/Teste">
							<p className="text-white-100 font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2 hover:text-blue-dark-final-gradient">
								<WarningCircle size={20} className="mr-2 stroke-white-100" />
								<p className="text-hidden">Ajuda</p>
							</p>
						</Link>
					</div>
				</div>
			</aside>
		</>
	);
}
