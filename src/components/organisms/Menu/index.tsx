import React from 'react';
import { FaUser, FaChevronDown, FaTools, FaListUl, FaExclamationCircle } from 'react-icons/fa'
import { GrConfigure } from 'react-icons/gr'
import { FiGrid, FiSettings, FiAlertCircle } from "react-icons/fi";
import {Link} from 'react-router-dom'
import logoUfal from '../../../assets/brasao-ufal.png'



function Menu() {
  return (
		<>
			<div className="menu h-screen bg-azul-final-gradiente w-[13.375rem] m-0 z-10 fixed">
				<img
					src={logoUfal}
					alt="logo da ufal"
					className="menu__logo w-[3.438rem] h-24 m-[1.625rem] bg-brasaoUfal"
				/>

				<div className="menu__geral flex flex-col items-start pl-6 pr-5 pb-[2.063rem]">
					<h4 className="menu__titleSection text-branco-100 font-bold text-sm">Geral</h4>

					<div className="menu__itemOption">
						<p className="menu__item text-white">
							<FiGrid size={20} className="menu__icon" />
							Dashboard
						</p>
						<FaChevronDown className="menu__icon-chevron" />
					</div>

					<div className="menu__itemOption">
						<p className="menu__item">
							<FaUser size={20} className="menu__icon" />
							Perfil
						</p>
						<FaChevronDown className="menu__icon-chevron" />
					</div>

					<div className="menu__itemOption">
						<p className="menu__item">
							<FaTools size={20} className="menu__icon" />
							<Link to="/FormService">Administração de setores</Link>
						</p>
						<FaChevronDown className="menu__icon-chevron" />
					</div>

					<div className="menu__itemOption">
						<p className="menu__item">
							<GrConfigure size={20} className="menu__icon" />
							Configuração
						</p>
						<FaChevronDown className="menu__icon-chevron" />
					</div>

					<div className="menu__itemOption">
						<p className="menu__item">
							<FaListUl size={20} className="menu__icon" />
							<Link to="/Table">Listas</Link>
						</p>
						<FaChevronDown className="menu__icon-chevron" />
					</div>
				</div>

				<div className="menu__help flex flex-col items-start pl-6 pr-5 pb-[2.063rem]">
					<h4 className="menu__titleSection">Ajuda</h4>

					<div className="menu__itemOption">
						<p className="menu__item">
							<FiSettings size={20} className="menu__icon" />
							Configurações
						</p>
						<FaChevronDown className="menu__icon-chevron" />
					</div>

					<div className="menu__itemOption">
						<p className="menu__item">
							<FaUser size={20} className="menu__icon" />
							Perfil
						</p>
						<FaChevronDown className="menu__icon-chevron" />
					</div>

					<div className="menu__itemOption">
						<p className="menu__item">
							<FaExclamationCircle size={20} className="menu__icon" />
							Sobre
						</p>
						<FaChevronDown className="menu__icon-chevron" />
					</div>

					<div className="menu__itemOption">
						<p className="menu__item">
							<FiAlertCircle size={20} className="menu__icon" />
							Ajuda
						</p>
						<FaChevronDown className="menu__icon-chevron" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;