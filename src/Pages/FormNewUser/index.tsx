import { Page } from "../../components/Page";
import CardNewUser from "../../components/CardNewUser";

function FormNewUser() {
	document.title = "Criação de Usuários - GLPI";
	return (
		<>
			<Page
				pageTitle={"Cadastro de Usuários - GLPI"}
				contentPage={<CardNewUser />}
			/>
		</>
	);
}

export default FormNewUser;
