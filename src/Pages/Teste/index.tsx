import { Page } from "../../components/Page";
import CardCreateService from "../../components/CardCreateService";

function Teste() {
	return (
		<>
			<Page
				pagetitle={"Página de Teste"}
				contentpage={
					<>
						<CardCreateService />
					</>
				}
			/>
		</>
	);
}

export default Teste;
