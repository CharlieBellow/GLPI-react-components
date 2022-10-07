import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Accordion, AccordionItem, AccordionTrigger,  } from "@radix-ui/react-accordion";
import { Link } from 'react-router-dom'

import { FaUser, FaChevronDown, FaTools, FaListUl, FaExclamationCircle } from 'react-icons/fa';
import { FiGrid, FiSettings, FiAlertCircle, FiTool } from "react-icons/fi";

// estilizar o acordeon
export const AccordionMenu = () => (
	<div className="menu__itemOption w-full flex items-center content-between">
		<Accordion
			type="single"
			defaultValue="item-1"
			collapsible
			className="rounded-[6px] w-300px flex items-center justify-between flex-row"
		>
			<AccordionItem value="Dashboard">
				<AccordionTrigger className="menu__itemOption w-full flex items-center content-between mr-2">
					<p className="">
						<FiGrid
							size={20}
							className="menu__icon flex items-center justify-between flex-row"
						/>
						Dashboard
					</p>
					{/*<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-4 h-4" />*/}
				</AccordionTrigger>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">Item 1</Link>
				</AccordionPrimitive.AccordionContent>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">Item 2</Link>
				</AccordionPrimitive.AccordionContent>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">Item 3</Link>
				</AccordionPrimitive.AccordionContent>
			</AccordionItem>

			<AccordionItem value="Perfil">
				<AccordionTrigger className="menu__itemOption w-full flex items-center content-between">
					<p className="">
						<FiGrid size={20} className="menu__icon mr-2" />
						Perfil
					</p>
					<FaChevronDown className="menu__icon-chevron active:rotate-180 text-white w-4 h-4" />
				</AccordionTrigger>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">Editar Perfil</Link>
				</AccordionPrimitive.AccordionContent>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">Alterar Dados</Link>
				</AccordionPrimitive.AccordionContent>
			</AccordionItem>

			<AccordionItem value="AdmSectors">
				<AccordionTrigger>Administração de Setores</AccordionTrigger>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">Secretaria</Link>
				</AccordionPrimitive.AccordionContent>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">NTI</Link>
				</AccordionPrimitive.AccordionContent>
			</AccordionItem>

			<AccordionItem value="Configuration">
				<AccordionTrigger>Configuração</AccordionTrigger>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">Geral</Link>
				</AccordionPrimitive.AccordionContent>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">Dark Mode</Link>
				</AccordionPrimitive.AccordionContent>
			</AccordionItem>

			<AccordionItem value="Lists">
				<AccordionTrigger>Listas</AccordionTrigger>
				<AccordionPrimitive.AccordionContent>
					<Link to="/FormService">Tabela de usuários</Link>
				</AccordionPrimitive.AccordionContent>
			</AccordionItem>
		</Accordion>
	</div>
);

export default AccordionMenu;
