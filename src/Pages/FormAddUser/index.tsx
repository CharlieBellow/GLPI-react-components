import CardAddUser from "../../components/CardAddUser";
import { Page } from "../../components/Page";

function FormNewUser() {
	return (
		<>
			<Page pageTitle={"Cadastro de Usuários - GLPI"} contentPage={ 
				<CardAddUser/>				
			}/>
		</>
	);
}

export default FormNewUser;
