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
		<div className="h-screen w-full px-12 lg:h-screen">
			<div className="pt-20 lg:hidden ">
				<div className="mx-2 flex flex-col items-center gap-6">
					<CardHomeMobile />
					<Search placeholder={"O que está procurando?"} />
				</div>

				<h1 className="my-6 ml-8 text-base font-semibold">Categorias</h1>

				<div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 md:m-0">
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

			<div className="hidden justify-between gap-6 pt-8 lg:flex ">
				<CardServices />
				<CardTicketSummary />
				<CardServices />
				<CardTicketSummary />
			</div>
			<div className="m-4 mx-auto hidden w-auto items-center gap-4 lg:mx-5 lg:grid lg:grid-cols-2 tv:mx-auto tv:max-w-[75rem]">
				<CardHomeMobile />
				<CardGroups />
			</div>
		</div>
	);
}

export default HomeScreen;
