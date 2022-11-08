

import TableTeste from "./TableTeste";
import { Page } from "../../components/Page";

function Teste() {
	return (
		<>
			<Page
				pageTitle={"Página de Teste"}
				contentPage={<TableTeste />}
			/>
		</>
	);
}

export default Teste;