import Link from "next/link";
import { Bell, UserPlus, Question, List } from "phosphor-react";
import Search from "../../Inputs/Search";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
	page: string;
}

export function Header(props: HeaderProps) {
	return (
		<>
			<header
				className="flex lg:h-31 h-40 rounded-b-lg lg:rounded-br-lg lg:rounded-bl-none text-white-100 bg-gradient justify-around"
				{...props}
			>
				<div className="bg-ufalBackground lg:box-content lg:w-103 -mt-26 bg-cover h-57 absolute lg:mr-16 tv:-mr-26"></div>
				<div className="flex flex-row items-center justify-between pt-10 mr-4 lg:mr-18 w-full pb-8 ml-15">
					<div className="flex items-start -ml-12 lg:ml-0">
						<div className="lg:hidden invisible flex items-start">
							<List size={24} weight="bold" />
						</div>
						<h4 className="lg:text-3xl text-lg font-bold lg:font-normal lg:mr-5 lg:pt-0 pt-16">
							{props.page}
						</h4>
					</div>
					<div className="hidden lg:flex m-0">
						<Search
							theme="outline-gray"
							placeholder="o que você está buscando?"
						/>
					</div>

					<div className="flex row items-center">
						<div className="lg:flex ml-6 mr-7 border-r-2 pr-6 hidden">
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
									<Link href="/privateroutes/user/userinfo">Nome Completo</Link>
								</p>
								<span>email@email.com</span>
							</div>
							<div className="lg:w-11 lg:h-11 flex">
								<div className="lg:mt-0 mt-[-70px] lg:ml-0 flex flex-row items-center">
									<div className="lg:hidden top-4 pr-6">
										<Question size={24} weight="bold" />
									</div>
									<div className="flex-1 flex">
										<Link href="/privateroutes/user/userinfo">
											<img
												src="https://www.github.com/charliebellow.png"
												alt="favicon"
												className=" lg:w-11 lg:h-11 w-8 h-8 rounded-full lg:relative top-0 lg:right-0 lg:top-0"
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
