//rfc
import { Page } from "../../components/Page";
import { BasicForm } from "./BasicForm";
import ContextTest from "./ContextTest";

function Teste() {
	return (
		<>
			<Page
				pagetitle={"Página de Teste"}
				contentpage={
					<>
						{/*<BasicForm />*/ }
						<ContextTest/>
					
					</>
				}
			/>
		</>
	);
}

export default Teste;
