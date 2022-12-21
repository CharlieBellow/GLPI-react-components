import CardAddUser from "../../components/Cards/CardAddUser";
import { Page } from "../../components/Page";

function FormUserInfo() {
	return (
		<>
			<Page
				pagetitle={"Cadastro de Usuários - GLPI"}
				contentpage={<CardAddUser />}
			/>
		</>
	);
}

export default FormUserInfo;
