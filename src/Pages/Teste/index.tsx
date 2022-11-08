
import {Menu} from "../../components/organisms/Menu";
import { Header } from "../../components/organisms/Header";
import TableTeste from "./TableTeste";

function Teste() {
	return (
		<>
			<div className="layout__menu-header">
				<div className="flex bg-branco-gelo-forte">
					<div className="flex h-full">
						<Menu />
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header />
						</div>

						<div className="content">
							<TableTeste />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Teste;