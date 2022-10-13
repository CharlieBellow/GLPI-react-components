
import { Link } from 'react-router-dom';
import { X, Bell, UserPlus } from "phosphor-react";
import Search from '../../Search'

function Header() {
  
	return (
		<>
			<header className="flex h-[7.75rem] w-full rounded-br-lg text-branco-100 bg-gradiente justify-around">
				<div className="bg-backgroundUfal box-content w-[25.75rem] mt-[-6.5rem] bg-cover h-[14.25rem] absolute mr-[-17rem]"></div>
				<div className="flex flex-row items-center justify-between pt-[2.625rem] mr-[4.5rem] w-full pb-8 ml-[3.75rem]">
					<div className="flex items-center">
						<X size={18} weight="bold" className="header__iconSearch" />
						<h4 className="text-[1.625rem] font-normal pl-2 mr-[5.125rem]">
							Nome da Página
						</h4>
					</div>
					<Search placeholder="o que você está buscando?"/>
					
					<div className="flex row items-center">
						<div className="header__icons flex ml-[7.563rem] mr-8 border-r-2 pr-6">
							<div className="header__iconsChild pr-6">
								<Bell size={24} />
							</div>
							<div className="header__iconsChild">
								<UserPlus size={24} />
							</div>
						</div>

						<div className="profile flex items-center">
							<div className="profile-title flex flex-col pr-3 items-end">
								<p className="profile__title text-azul-ufal no-underline hover:opacity-70">
									<Link to="/Login">Nome Completo</Link>
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
			</header>
		</>
	);
}

export default Header;