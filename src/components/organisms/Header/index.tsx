import * as React from 'react';
//import { Link } from 'react-router-dom';
//import "../../Styles/base.css"
//import "../../Styles/header.css"


import { FaRegBell, FaUserPlus, FaSearch } from 'react-icons/fa';
import logoTransparent from "../../../assets/ufal-sigla-branca-fundo-transparente-40por-cento.png";


function Header() {
  
  
  return (
		<>
			<header className="z-0 flex h-[7.75rem] w-full rounded-br-lg text-branco-100 bg-gradiente justify-around">
				<img
					alt="logo"
					src={logoTransparent}
					className="z-10 h-[7.75rem] border-box (attachment) w-[25.75rem] fixed bg-clip-content mt-[-104px] mr-[16.25rem] no-repeat"
				/>
				<div className="flex flex-row items-center justify-between pt-[2.625rem] mr-[4.5rem] w-full pb-8 ml-[3.75rem]">
					<div className="flex items-center">
						<FaSearch size={18} className="header__iconSearch" />
						<h4 className="text-[1.625rem] font-normal pl-2 mr-[5.125rem]">
							Nome da Página
						</h4>
					</div>

					<div className="relative header__inputIcon">
						<FaSearch
							size={18}
							className="header__iconSearch absolute top-[25%] left-[18px] text-cinza-texto"
						/>
						<label htmlFor="search"></label>
						<input
							type="text"
							name="search"
							placeholder="o que você está buscando?"
							className="header__searchBar text-cinza-texto bg-branco-gelo-forte rounded-xl focus:outline-azul-ufal border-none shadow-sombra-card py-2 pr-[101px] pl-[58px] text-base font-normal"
						/>
						{/*<img
									src="../../../assets/ufal-sigla-branca-fundo-transparente-40por-cento.png"
									alt="brasão ufal"
									className="bg-logoUfal left-[4.625rem] top[-1.5rem] center 0 no-repeat fixed"
								/>*/}
					</div>

					<div className="header__icons flex ml-[7.563rem] mr-8 border-r-2 pr-6">
						<div className="header__iconsChild pr-6">
							<FaRegBell size={24} />
						</div>
						<div className="header__iconsChild">
							<FaUserPlus size={24} />
						</div>
					</div>

					<div className="profile flex items-center">
						<div className="profile-title flex flex-col pr-3 items-end">
							<p className="profile__title text-azul-ufal no-underline hover:opacity-70">
								Nome Completo
							</p>
							<p>email@email.com</p>
						</div>
						<img
							src="https://www.github.com/charliebellow.png"
							alt="favicon"
							className="profile-photo w-[2.875rem] h-[2.875rem] rounded-full"
						/>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;