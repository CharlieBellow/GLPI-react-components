
import {Menu} from "../../components/organisms/Menu";
import {Header} from "../../components/organisms/Header";

function Teste() {
	document.title = "Página de Testes - GLPI";
	return (
		<>
			<div className="layout__menu-header">
				<div className="flex bg-white-strong-ice">
					<div className="flex h-full">
						<Menu/>
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header page="Página de Testes" />
						</div>

						<div className="content">
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Teste;