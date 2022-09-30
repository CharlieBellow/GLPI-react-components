import * as React from 'react';
//import { Link } from 'react-router-dom';
//import "../../Styles/base.css"
//import "../../Styles/header.css"


import { FaRegBell, FaUserPlus, FaSearch} from 'react-icons/fa';


function Header() {
  
  
  return (
		<>
			<header className="h-28.75 w-full rounded-br-lg text-branco-100 bg-gradiente z-0">
				<div className=" bg-[left_48rem_top_-6.5rem] bg-backgroundUfal  bg-auto">
					<div className="flex flex-row items-start p-[2.625rem] w-auto h-[3.125rem] content-around">
						<h4 className="text-[1.625rem] font-normal">Nome da Página</h4>
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
						</div>
						<div className="header__icons flex">
							<div className="header__iconsChild pl-6">
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
				</div>
				<div className="caixa"></div>
			</header>
		</>
	);
}

export default Header;