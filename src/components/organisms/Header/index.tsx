
import { Link } from 'react-router-dom';
import { X, Bell, UserPlus, Question, List } from "phosphor-react";
import Search from '../../Search'

export function Header() {
  
	return (
		<>
			<header className="flex lg:h-[7.75rem] h-[10rem]
			 rounded-b-lg lg:rounded-br-lg text-branco-100 bg-gradiente justify-around">
				<div className="bg-backgroundUfal lg:box-content lg:w-[25.75rem] mt-[-6.5rem] bg-cover h-[14.25rem] absolute mr-[-17rem]"></div>
				<div className="flex flex-row items-center justify-between pt-[2.625rem] mr-[4.5rem] w-full pb-8 ml-[3.75rem]">
					<div className="flex items-center ml-[-3rem] lg:ml-0">
						<X size={18} weight="bold" className="flex w-6 h-6 invisible lg:visible" />
						<h4 className="lg:text-[1.625rem] text-lg font-bold lg:font-normal lg:pl-2 lg:mr-[5.125rem] lg:pt-0 pt-16 ">
							Nome da Página 
						</h4>
					</div>
					<div className="hidden lg:flex">
						<Search placeholder="o que você está buscando?" />
					</div>

					<div className="flex row items-center">
						<div className="lg:flex ml-[7.563rem] mr-8 border-r-2 pr-6 hidden ">
							<div className="pr-6">
								<Bell size={24} />
							</div>
							<div className="">
								<UserPlus size={24} />
							</div>
						</div>

						<div className="flex items-center relative">
							<div className="lg:flex flex-col pr-3 items-end hidden">
								<p className="text-azul-ufal no-underline hover:opacity-70">
									<Link to="/Login">Nome Completo</Link>
								</p>
								<p>email@email.com</p>
							</div>
							<div className="lg:w-[2.875rem] lg:h-[2.875rem] rounded-full">
								<div className="lg:hidden fixed left-3 top-4">
									<List size={24} weight="bold" />
								</div>
								<div className="lg:mt-0 mt-[-50px] lg:ml-0">
									<div className="lg:hidden fixed right-16 top-4">
										<Question size={24} weight="bold" />
									</div>
									<div className="flex-1 flex">
										<Link to="/Login">
											<img
												src="https://www.github.com/charliebellow.png"
												alt="favicon"
												className=" lg:w-[2.875rem] lg:h-[2.875rem] w-8 h-8 rounded-full lg:relative fixed right-3 top-3 lg:right-0 lg:top-0"
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}