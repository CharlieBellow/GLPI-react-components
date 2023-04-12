import Head from "next/head";
import CardAddUser from "../../../components/Cards/CardAddUser";

// * adicionar novo usuário 'user/add'

function FormAddUser() {
	return (
		<>
			<Head>
				<title>Cadastro de Usuários - GLPI</title>
			</Head>
			<CardAddUser />
		</>
	);
}

export default FormAddUser;
