
import { Link } from 'react-router-dom';
import { X, Bell, UserPlus, Question, List } from "phosphor-react";
import Search from '../../Search';

interface HeaderProps {
	page: string;
}

export function Header(props: HeaderProps) {
	return (
		<>
			<header
				className="flex lg:h-[7.75rem] h-[10rem]
			 rounded-b-lg lg:rounded-br-lg lg:rounded-bl-none text-white-100 bg-gradient justify-around"
			>
				<div className="bg-ufalBackground lg:box-content lg:w-[25.75rem] mt-[-6.5rem] bg-cover h-[14.25rem] absolute mr-[-17rem]"></div>
				<div className="flex flex-row items-center justify-between pt-[2.625rem] mr-4 lg:mr-[4.5rem] w-full pb-8 ml-[3.75rem]">
					<div className="flex items-start ml-[-3rem] lg:ml-0">
							<div className="lg:hidden flex items-start">
								<List size={24} weight="bold" />
							</div>
						<X
							size={18}
							weight="bold"
							className="flex w-6 h-6 invisible lg:visible"
						/>
						<h4 className="lg:text-[1.625rem] text-lg font-bold lg:font-normal lg:pl-2 lg:mr-[5.125rem] lg:pt-0 pt-16 ">
							{props.page} 
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
								<p className="text-blue-ufal no-underline hover:opacity-70">
									<Link to="/Login">Nome Completo</Link>
								</p>
								<p>email@email.com</p>
							</div>
							<div className="lg:w-[2.875rem] lg:h-[2.875rem] flex">
								<div className="lg:mt-0 mt-[-70px] lg:ml-0 flex flex-row items-center">
									<div className="lg:hidden  top-4 pr-6">
										<Question size={24} weight="bold" />
									</div>
									<div className="flex-1 flex">
										<Link to="/Login">
											<img
												src="https://www.github.com/charliebellow.png"
												alt="favicon"
												className=" lg:w-[2.875rem] lg:h-[2.875rem] w-8 h-8 rounded-full lg:relative   top-0 lg:right-0 lg:top-0"
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