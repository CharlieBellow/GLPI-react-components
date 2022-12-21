import CardHomeMobile from "./Cards/CardHomeMobile";
import CategoryHomeMobile from "./CategoryHomeMobile";
import * as Icon from "phosphor-react";
import Search from "./Inputs/Search";

import CardCategory from "./Cards/CardCategory";
import CardTicketSummary from "./Cards/CardTicketSummary";
import CardServices from "./Cards/CardServices";

function ScreenHomeMobile() {
	return (
		<div className="w-full h-screen">
			<div className="lg:hidden">
				<div className=" flex flex-col mx-2 gap-6 items-center">
					<CardHomeMobile />
					<Search placeholder={"O que está procurando?"} />
				</div>

				<h1 className="font-semibold text-base my-6 ml-8">Categorias</h1>

				<div className="mx-auto flex flex-wrap gap-2 max-w-xl justify-center md:m-0">
					<CategoryHomeMobile
						link="/"
						Name={"Biblioteca"}
						Icon={<Icon.BookOpen size={18} />}
					/>
					<CategoryHomeMobile
						link="/"
						Name={"NTI"}
						Icon={<Icon.Cpu size={18} />}
					/>
					<CategoryHomeMobile
						link="/"
						Name={"manutenção"}
						Icon={<Icon.Wrench size={18} />}
					/>
					<CategoryHomeMobile
						link="/"
						Name={"Infraestrutura"}
						Icon={<Icon.FileText size={18} />}
					/>
					{/* Icon false */}
					<CategoryHomeMobile
						link="/"
						Name={"CRCA"}
						Icon={<Icon.User size={18} />}
					/>
					<CategoryHomeMobile
						link="/"
						Name={"NAE"}
						Icon={<Icon.Users size={18} />}
					/>
				</div>
			</div>

			<div className="hidden lg:grid w-auto lg:grid-cols-2 items-center h-auto gap-4 m-4 lg:mx-5 tv:mx-auto tv:max-w-[75rem] mx-auto">
				<CardHomeMobile />
				<CardCategory />
				<CardServices />
				<CardTicketSummary />
			</div>
		</div>
	);
}

export default ScreenHomeMobile;
