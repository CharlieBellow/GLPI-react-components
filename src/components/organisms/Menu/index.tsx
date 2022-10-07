
import { FaUser, FaChevronDown, FaTools, FaListUl, FaExclamationCircle } from 'react-icons/fa';
import { FiGrid, FiSettings, FiAlertCircle, FiTool } from "react-icons/fi";
import {Link} from 'react-router-dom'
import logoUfal from '../../../assets/brasao-ufal.png'



function Menu() {
  return (
		<>
			<div className="menu h- bg-azul-final-gradiente w-[13.375rem] m-0 z-10">
				<img
					src={logoUfal}
					alt="logo da ufal"
					className="menu__logo w-[3.438rem] h-24 m-[1.625rem] bg-brasaoUfal"
				/>

				<div className="menu__geral flex flex-col items-start pl-6 pr-5 pb-[2.063rem]">
					<h4 className="menu__titleSection text-branco-100 font-bold text-sm">
						Geral
					</h4>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 pr-1">
							<FiGrid size={20} className="menu__icon mr-2" />
							Dashboard
						</p>
						<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-6 h-6" />
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 pr-1">
							<FaUser size={20} className="menu__icon mr-2 stroke-branco-100" />
							Perfil
						</p>
						<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-6 h-6" />
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
							<FaTools
								size={20}
								className="menu__icon mr-2 stroke-branco-100"
							/>
							<Link to="/FormService">Administração de setores</Link>
						</p>
						<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-6 h-6" />
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
							<FiTool
								size={20}
								className="menu__icon mr-2 text-branco-100"
							/>
							Configuração
						</p>
						<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-6 h-6" />
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
							<FaListUl
								size={20}
								className="menu__icon mr-2 stroke-branco-100"
							/>
							<Link to="/Table">Listas</Link>
						</p>
						<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-6 h-6" />
					</div>
				</div>

				<div className="menu__help flex flex-col items-start pl-6 pr-5 pb-[2.063rem]">
					<h4 className="menu__titleSection  text-branco-100 font-bold text-sm">
						Ajuda
					</h4>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
							<FiSettings
								size={20}
								className="menu__icon mr-2 stroke-branco-100"
							/>
							Configurações
						</p>
						<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-6 h-6" />
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
							<FaUser size={20} className="menu__icon mr-2 stroke-branco-100" />
							Perfil
						</p>
						<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-6 h-6" />
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
							<FaExclamationCircle size={20} className="menu__icon mr-2" />
							Sobre
						</p>
						<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-6 h-6" />
					</div>

					<div className="menu__itemOption w-full flex items-center content-between">
						<p className="menu__item text-white font-semibold text-sm flex flex-row items-center content-start w-full my-5 mx-0 mr-2">
							<FiAlertCircle
								size={20}
								className="menu__icon mr-2 stroke-branco-100"
							/>
							Ajuda
						</p>
						<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-6 h-6" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;