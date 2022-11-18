import { Page } from "../../components/Page";
import CardUserInfo from "../../components/CardUserInfo";

function FormUserInfo() {
	document.title = "Criação de Usuários - GLPI";
	return (
		<>
			<Page
				pageTitle={"Cadastro de Usuários - GLPI"}
				contentPage={<CardUserInfo />}
			/>
		</>
	);
}

export default FormUserInfo;
