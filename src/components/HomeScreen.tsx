import CardHomeMobile from "./Cards/CardHomeMobile";
import CardCategory from "./CardGroup/CardGroup";
import * as Icon from "phosphor-react";
import Search from "./Inputs/Search";

import CardTicketSummary from "./Cards/CardTicketSummary";
import CardServices from "./Cards/CardServices";
import CardGroups from "./Cards/CardGroups";


// * página inicial é exibida em '/' ou '/Dashboard'

function HomeScreen() {
	return (
		<div className="w-full h-screen lg:h-screen px-6">
			<div className="pt-20 lg:hidden ">
				<div className="flex flex-col mx-2 gap-6 items-center">
					<CardHomeMobile />
					<Search placeholder={"O que está procurando?"} />
				</div>

				<h1 className="font-semibold text-base my-6 ml-8">Categorias</h1>

				<div className="mx-auto flex flex-wrap gap-2 max-w-xl justify-center md:m-0">
					<CardCategory
						link="/"
						Name={"Biblioteca"}
						Icon={<Icon.BookOpen size={18} />} idGroup={""} />
					<CardCategory
						link="/"
						Name={"NTI"}
						Icon={<Icon.Cpu size={18} />} idGroup={""} />
					<CardCategory
						link="/"
						Name={"manutenção"}
						Icon={<Icon.Wrench size={18} />} idGroup={""} />
					<CardCategory
						link="/"
						Name={"Infraestrutura"}
						Icon={<Icon.FileText size={18} />} idGroup={""} />
					{/* Icon false */}
					<CardCategory
						link="/"
						Name={"CRCA"}
						Icon={<Icon.User size={18} />} idGroup={""} />
					<CardCategory
						link="/"
						Name={"NAE"}
						Icon={<Icon.Users size={18} />} idGroup={""} />
				</div>
			</div>

			<div className="flex pt-8 justify-between gap-6">
		
				
				
				<CardServices />
			
				
				<CardTicketSummary />
				<CardServices />
				<CardTicketSummary />
			</div>
			<div className="hidden lg:grid w-auto lg:grid-cols-2 items-center gap-4 m-4 lg:mx-5 tv:mx-auto tv:max-w-[75rem] mx-auto">
				<CardHomeMobile />
				<CardGroups />
			</div>
		</div>
	);
}

export default HomeScreen;
