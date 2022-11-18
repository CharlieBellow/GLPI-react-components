import * as AccordionPrimitive from "@radix-ui/react-accordion";

import {
	Accordion,
	AccordionItem,
	AccordionTrigger
} from "@radix-ui/react-accordion";
import { Link } from "react-router-dom";
import { SquaresFour, User, Wrench, Gear, ListDashes } from "phosphor-react";

import { styled } from '@stitches/react';

import { ChevronDownIcon } from '@radix-ui/react-icons';
const AccordionChevron = styled(ChevronDownIcon, {

  transition: 'transform 300ms ',

	'[data-state=open] &': { transform: 'rotate(180deg)' }
	
});



// estilizar o acordeon
export const AccordionMenu = () => (
	<div className="menu__itemOption w-full">
		<Accordion
			type="single"
			defaultValue="item-1"
			collapsible
			className="rounded-[6px] flex-col pb-[2.063rem]"
		>
			<AccordionItem value="Dashboard">
				<AccordionTrigger className="menu__itemOption w-full flex items-center justify-between mr-2">
					<p className="flex flex-row text-white-100 font-semibold text-sm items-center content-start w-full my-5 mx-0 pr-1  hover:text-blue-dark-final-gradient">
						<Link to="/CreateService" className="flex flex-row">
							<SquaresFour size={20} className="menu__icon mr-2" />
							{/* colocar nome da classe em inglês */}
							<p className="text-invisible  aumentaIcone">Dashboard</p>
						</Link>
					</p>
				</AccordionTrigger>
			</AccordionItem>

			<AccordionItem value="Perfil">
				<AccordionTrigger className="menu__itemOption w-full flex items-center justify-around mr-2 text-white-100 hover:text-blue-dark-final-gradient">
					<p className="flex flex-row font-semibold text-sm content-start justify-start w-full my-5 mx-0 pr-1 aumentaIcone">
						<User size={20} className="menu__icon w-auto" />
						<p className="text-hidden ml-2">Perfil</p>
					</p>
					<AccordionChevron aria-hidden className="text-hidden" />
				</AccordionTrigger>
				<div className="text-hidden">
					<AccordionPrimitive.AccordionContent className="flex items-center justify-start gap-1 text-white-100 hover:opacity-70 text-hidden">
						<Link to="/CreateService">Alterar Dados</Link>
					</AccordionPrimitive.AccordionContent>
					<AccordionPrimitive.AccordionContent className="flex items-center justify-start gap-1 text-white-100 hover:opacity-70 text-hidden">
						<Link to="/CreateService">Editar Perfil</Link>
					</AccordionPrimitive.AccordionContent>
				</div>
			</AccordionItem>

			<AccordionItem value="AdmSectors">
				<AccordionTrigger className="w-full flex items-center content-between text-white-100 hover:text-blue-dark-final-gradient">
					<p className="flex flex-row font-semibold text-sm items-center text-start content-start w-full my-5 mx-0 pr-1 aumentaIcone">
						<Wrench weight="fill" size={20} className="" />
						<p className="text-hidden ml-2">Administração de Setores</p>
					</p>
					<AccordionChevron aria-hidden />
				</AccordionTrigger>
				<div className="text-hidden">
					<AccordionPrimitive.AccordionContent className="flex items-center justify-start gap-1 text-white-100 hover:opacity-70">
						<Link to="/CreateService">Secretaria</Link>
					</AccordionPrimitive.AccordionContent>
					<AccordionPrimitive.AccordionContent className="flex items-center justify-start gap-1 text-white-100 hover:opacity-70">
						<Link to="/CreateService">NTI</Link>
					</AccordionPrimitive.AccordionContent>
				</div>
			</AccordionItem>

			<AccordionItem value="Configuration">
				<AccordionTrigger className="w-full flex items-center content-between text-white-100 hover:text-blue-dark-final-gradient">
					<p className="flex flex-row font-semibold text-sm items-center content-start w-full my-5 mx-0 pr-1 aumentaIcone">
						<Gear size={20} className="menu__icon " />
						<p className="text-hidden ml-2">Configuração</p>
					</p>
					<AccordionChevron aria-hidden />
				</AccordionTrigger>
				<div className="text-hidden">
					<AccordionPrimitive.AccordionContent className="flex items-center justify-start gap-1 text-white-100 hover:opacity-70">
						<Link to="/CreateService">Geral</Link>
					</AccordionPrimitive.AccordionContent>
					<AccordionPrimitive.AccordionContent className="flex items-center justify-start gap-1 text-white-100 hover:opacity-70">
						<Link to="/CreateService">Dark Mode</Link>
					</AccordionPrimitive.AccordionContent>
				</div>
			</AccordionItem>

			<AccordionItem value="Lists">
				<AccordionTrigger className="w-full flex items-center content-between text-white-100 hover:text-blue-dark-final-gradient">
					<p className="flex flex-row font-semibold text-sm items-center content-start w-full my-5 mx-0 pr-1 aumentaIcone">
						<ListDashes size={20} className="menu__icon " />
						<p className="text-hidden ml-2">Listas</p>
					</p>
					<AccordionChevron aria-hidden />
				</AccordionTrigger>
				<div className="text-hidden">
					<AccordionPrimitive.AccordionContent className="flex items-center justify-start gap-1 text-white-100 hover:opacity-70">
						<Link to="/CreateService">Tabela de usuários</Link>
					</AccordionPrimitive.AccordionContent>
				</div>

			</AccordionItem>
		</Accordion>
	</div>
);

export default AccordionMenu;
