import AccordionMenu from "../../Accordions/AccordionMenu";
import { AccordionMenuHelp } from "../../Accordions/AccordionMenuHelp";

import { List } from "phosphor-react";

import logoUfal from "../../../assets/brasao-ufal.png";
import { ReactNode } from "react";
import { MenuMobile } from "./MenuMobile";
import { useMenu } from '../../../Contexts/MenuContext';

interface MenuProps extends React.HTMLAttributes<HTMLElement> {
	accordionMenu?: ReactNode;
}

export function Menu ( props: MenuProps ) {

	// usando o contexto para abrir e fechar o menu. trocar os nomes das classes para open e close
	const {changeIsMenuOpen, isMenuOpen} = useMenu()

	return (
		<>
			<input
				type="checkbox"
				name="checkbox"
				id="checkbox"
				className="floatToggle hidden"
				{ ...props }
			/>		
			
			{/*{ isMenuOpen ? console.log( "menu aberto" ) : console.log( "menu fechado" ) }*/}
			
			<aside className="checkbox-wrapper block h-full lg:bg-blue-final-gradient lg:bg-none bg-gradient lg:w-40 lg:max-w-52 lg:m-0 w-0">
				<div className="lg:hidden  modal"></div>

				<label htmlFor="checkbox" className={ `floatToggle ` } >
					{/*<List size={ 24 } className="invisible hidden lg:block lg:invisible" />*/}

					<button onClick={() => {changeIsMenuOpen(isMenuOpen)}} className="text-red-500">fechar: <List size={ 24 } className="invisible hidden lg:block lg:invisible bg-red-500" /> </button>

					<div className="transition-[0.4s] change">
						<div className="after:content-[''] block border-b-2 border-solid border-branco-100 pt-1 change bar1"></div>
						<div className="after:content-[''] block border-b-2 border-solid border-branco-100 pt-1 change bar2"></div>
						<div className="after:content-[''] block border-b-2 border-solid border-branco-100 pt-1 change bar3"></div>
					</div>
				</label>
				<div className="lg:hidden visible -ml-2">
					<MenuMobile />
				</div>

				<img
					src={logoUfal}
					alt="logo da ufal"
					className={"w-14 h-24 mt-7 mx-auto mb-3 mobile-hidden"}
				/>
				<div className="flex flex-col pl-6 pr-5 pb-px  pt-2 lg:pt-5 mobile-hidden">
					<h4 className="text-white-100 font-bold text-sm text-invisible ">
						Geral
					</h4>
					<AccordionMenu />
					{/* substituir depois */}
					{/*{props.accordionMenu}*/}
				</div>

				<div className="flex flex-col items-start pl-6 pr-5 mobile-hidden">
					<h4 className="text-white-100 font-bold text-sm text-invisible">
						Ajuda
					</h4>
					<AccordionMenuHelp />
				</div>
			</aside>
		</>
	);
}
