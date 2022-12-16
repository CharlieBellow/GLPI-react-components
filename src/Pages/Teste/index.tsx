import { Page } from "../../components/Page";
import { BasicForm } from "../../components/CardUser";



function Teste() {
	return (
		<>
			<Page
				pagetitle={"Página de Teste"}
				contentpage={
					<>
						<BasicForm/>
					</>
				}
			/>
		</>
	);
}

export default Teste;
