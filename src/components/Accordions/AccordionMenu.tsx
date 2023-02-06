import * as AccordionPrimitive from "@radix-ui/react-accordion";

import {
	Accordion,
	AccordionItem,
	AccordionTrigger
} from "@radix-ui/react-accordion";
import Link from "next/link";
import { SquaresFour, User, Wrench, Gear, ListDashes } from "phosphor-react";

import { styled } from '@stitches/react';

import { ChevronDownIcon } from '@radix-ui/react-icons';


const AccordionChevron = styled(ChevronDownIcon, {

  transition: 'transform 300ms ',

	'[data-state=open] &': { transform: 'rotate(180deg)' }
	
});

// estilizar o acordeon
export const AccordionMenu = () => (
	<div className=" w-full">
		<Accordion
			type="single"
			defaultValue="item-1"
			collapsible
			className="rounded-[6px] flex-col pb-[2.063rem]"
		>
			<AccordionItem value="Dashboard">
				<AccordionTrigger className="w-full flex items-center justify-between mr-2">
					<div className="flex flex-row text-white-100 font-semibold text-sm items-center content-start w-full lg:my-4 my-2 mx-0  hover:text-blue-dark-final-gradient">
						<Link href="/privateroutes/dashboard" className="flex flex-row">
							<SquaresFour size={20} className="menu__icon mr-2" />
							<p className="text-invisible">Dashboard</p>
						</Link>
					</div>
				</AccordionTrigger>
			</AccordionItem>

			<AccordionItem value="Perfil">
				<AccordionTrigger className="w-full flex items-center justify-around mr-2 text-white-100 hover:text-blue-dark-final-gradient">
					<div className="flex flex-row font-semibold text-sm content-start justify-start w-full lg:my-4 my-2 mx-0  ">
						<User size={20} className="w-auto" />
						<p className="text-hidden ml-2">Perfil</p>
					</div>
					<AccordionChevron aria-hidden className="text-hidden" />
				</AccordionTrigger>
				<div className="text-hidden">
					<AccordionPrimitive.AccordionContent className="flex items-center justify-center my-1 py-1 gap-1 text-blue-ufal bg-white-100 rounded-xl hover:opacity-70 text-hidden">
						<Link href="/privateroutes/user/adduser">Alterar Dados</Link>
					</AccordionPrimitive.AccordionContent>
					<AccordionPrimitive.AccordionContent className="flex items-center justify-center my-1 py-1 gap-1 text-blue-ufal bg-white-100 rounded-xl hover:opacity-70 text-hidden">
						<Link href="/privateroutes/user/userinfo">Editar Perfil</Link>
					</AccordionPrimitive.AccordionContent>
				</div>
			</AccordionItem>

			<AccordionItem value="AdmSectors">
				<AccordionTrigger className="w-full flex items-center content-between text-white-100 hover:text-blue-dark-final-gradient">
					<div className="flex flex-row font-semibold text-sm items-center text-start content-start w-full lg:my-4 my-2 leading-4 mx-0">
						<Wrench weight="fill" size={20} className="" />
						<p className="text-hidden ml-2">Administração de Setores</p>
					</div>
					<AccordionChevron aria-hidden />
				</AccordionTrigger>
				<div className="text-hidden">
					<AccordionPrimitive.AccordionContent className="flex items-center justify-center my-1 py-1 gap-1 text-blue-ufal bg-white-100 rounded-xl hover:opacity-70">
						<Link href="/privateroutes/servicebook/createservice">Secretaria</Link>
					</AccordionPrimitive.AccordionContent>
					<AccordionPrimitive.AccordionContent className="flex items-center justify-center my-1 py-1 gap-1 text-blue-ufal bg-white-100 rounded-xl hover:opacity-70">
            <Link href="/privateroutes/servicebook/serviceletter">NTI</Link>
					</AccordionPrimitive.AccordionContent>
				</div>
			</AccordionItem>

			<AccordionItem value="Configuration">
				<AccordionTrigger className="w-full flex items-center content-between text-white-100 hover:text-blue-dark-final-gradient">
					<div className="flex flex-row font-semibold text-sm items-center content-start w-full lg:my-4 my-2 mx-0 ">
						<Gear size={20} className="" />
						<p className="text-hidden ml-2">Configuração</p>
					</div>
					<AccordionChevron aria-hidden />
				</AccordionTrigger>
				<div className="text-hidden">
					<AccordionPrimitive.AccordionContent className="flex items-center justify-center my-1 py-1 gap-1 text-blue-ufal bg-white-100 rounded-xl hover:opacity-70">
						<Link href="/publicroutes/">Geral</Link>
					</AccordionPrimitive.AccordionContent>
					<AccordionPrimitive.AccordionContent className="flex items-center justify-center my-1 py-1 gap-1 text-blue-ufal bg-white-100 rounded-xl hover:opacity-70">
            <Link href="/publicroutes/signup">Dark Mode</Link>
					</AccordionPrimitive.AccordionContent>
				</div>
			</AccordionItem>

			<AccordionItem value="Lists">
				<AccordionTrigger className="w-full flex items-center content-between text-white-100 hover:text-blue-dark-final-gradient">
					<div className="flex flex-row font-semibold text-sm items-center content-start w-full lg:my-4 my-2 mx-0">
						<ListDashes size={20} className="" />
						<p className="text-hidden ml-2">Listas</p>
					</div>
					<AccordionChevron aria-hidden />
				</AccordionTrigger>
				<div className="text-hidden">
					<AccordionPrimitive.AccordionContent className="flex text-center justify-center my-1 py-1 gap-1 text-blue-ufal bg-white-100 rounded-xl hover:opacity-70">
            <Link href="/privateroutes/list">Tabela de usuários</Link>
					</AccordionPrimitive.AccordionContent>
				</div>
			</AccordionItem>
		</Accordion>
	</div>
);

export default AccordionMenu;
