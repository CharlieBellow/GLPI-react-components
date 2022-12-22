//rfce
import { Page } from "../../components/Page";
import { BasicForm } from "./BasicForm";

function Teste() {
	return (
		<>
			<Page
				pagetitle={"Página de Teste"}
				contentpage={
					<>
						<BasicForm />
					
					</>
				}
			/>
		</>
	);
}

export default Teste;
