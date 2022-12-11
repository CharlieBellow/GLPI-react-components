import { Page } from "../../components/Page";
import CardCreateService from "../../components/CardCreateService";
import { BasicForm } from "../../components/Form";



function Teste() {
	return (
		<>
			<Page
				pagetitle={"Página de Teste"}
				contentpage={
					<>
						{/*<CardCreateService />*/}
						<BasicForm/>
					</>
				}
			/>
		</>
	);
}

export default Teste;
