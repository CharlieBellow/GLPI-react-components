import { Page } from "../../../../components/Page";
import CardUserInfo from "../../../../components/Cards/CardUserInfo";

function FormUserInfo() {
	document.title = "Criação de Usuários - GLPI";
	return (
		<>
			<Page
				pagetitle={"Cadastro de Usuários - GLPI"}
				contentpage={<CardUserInfo />}
			/>
		</>
	);
}

export default FormUserInfo;
