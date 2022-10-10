import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@radix-ui/react-accordion";
import { Link } from "react-router-dom";
import { Horse, Heart, Cube } from "phosphor-react";

import {
	FaUser,
	FaChevronDown,
	FaTools,
	FaListUl,
	FaExclamationCircle,
} from "react-icons/fa";
import { FiGrid, FiSettings, FiAlertCircle, FiTool } from "react-icons/fi";

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
					<p className="flex flex-row text-white font-semibold text-sm items-center content-start w-full my-5 mx-0 pr-1">
						<FiGrid size={20} className="menu__icon mr-2" />
						<Link to="/FormService">Dashboard</Link>
					</p>
					{/*<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-4 h-4" />*/}
				</AccordionTrigger>
			</AccordionItem>

			<AccordionItem value="Perfil">
				<AccordionTrigger className="menu__itemOption w-full flex items-center justify-around mr-2 text-branco-100 hover:text-azul-ufal">
					<p className="flex flex-row  font-semibold text-sm  content-start justify-start w-full my-5 mx-0 pr-1">
						<FiGrid size={20} className="menu__icon mr-2" />
						Perfil
					</p>
					<FaChevronDown className="menu__icon-chevron active:rotate-180 w-4 h-4" />
				</AccordionTrigger>
				<div className="">
					<AccordionPrimitive.AccordionContent className="flex items-center justify-center gap-1 text-branco-100 hover:opacity-80 border-b-2">
						<Link to="/FormService">Alterar Dados</Link>
					</AccordionPrimitive.AccordionContent>
					<AccordionPrimitive.AccordionContent className="flex items-center justify-center gap-1 text-branco-100 hover:opacity-80 border-b-2">
						<Link to="/FormService">Editar Perfil</Link>
					</AccordionPrimitive.AccordionContent>
				</div>
			</AccordionItem>

			<AccordionItem value="AdmSectors">
				<AccordionTrigger className="w-full flex items-center content-between">
					<p className="flex flex-row text-branco-100 font-semibold text-sm items-center content-start w-full my-5 mx-0 mr-2">
						<Heart weight="fill" size={20} className="mr-2 text-branco-100" />
						Administração de Setores
					</p>
					<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-4 h-4" />
				</AccordionTrigger>
				<AccordionPrimitive.AccordionContent className="flex items-center justify-center gap-1 text-branco-100 hover:opacity-80">
					<Link to="/FormService">Secretaria</Link>
				</AccordionPrimitive.AccordionContent>
				<AccordionPrimitive.AccordionContent className="flex items-center justify-center gap-1 text-branco-100 hover:opacity-80">
					<Link to="/FormService">NTI</Link>
				</AccordionPrimitive.AccordionContent>
			</AccordionItem>

			<AccordionItem value="Configuration">
				<AccordionTrigger className="w-full flex items-center content-between">
					<p className="flex flex-row text-branco-100 font-semibold text-sm items-center content-start w-full my-5 mx-0 mr-2">
						<FiGrid size={20} className="menu__icon mr-2" />
						Configuração
					</p>
					<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-4 h-4" />
				</AccordionTrigger>
				<AccordionPrimitive.AccordionContent className="flex items-center justify-center gap-1 text-branco-100 hover:opacity-80">
					<Link to="/FormService">Geral</Link>
				</AccordionPrimitive.AccordionContent>
				<AccordionPrimitive.AccordionContent className="flex items-center justify-center gap-1 text-branco-100 hover:opacity-80">
					<Link to="/FormService">Dark Mode</Link>
				</AccordionPrimitive.AccordionContent>
			</AccordionItem>

			<AccordionItem value="Lists">
				<AccordionTrigger className="w-full flex items-center content-between">
					<p className="flex flex-row text-branco-100 font-semibold text-sm items-center content-start w-full my-5 mx-0 mr-2">
						<FiGrid size={20} className="menu__icon mr-2" />
						Listas
					</p>
					<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-4 h-4" />
				</AccordionTrigger>
				<AccordionPrimitive.AccordionContent className="flex items-center justify-center gap-1 text-branco-100 hover:opacity-80">
					<Link to="/FormService">Tabela de usuários</Link>
				</AccordionPrimitive.AccordionContent>
			</AccordionItem>
		</Accordion>
	</div>
);

export default AccordionMenu;
