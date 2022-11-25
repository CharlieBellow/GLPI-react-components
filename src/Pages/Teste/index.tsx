
import { Page } from "../../components/Page";
import CardCreateService from "../../components/CardCreateService";

function Teste() {
	return (
		<>
			<Page
				pageTitle={"Página de Teste"}
				contentPage={
					<>
					<CardCreateService />
					</>
				}
			/>
		</>
	);
}

export default Teste;