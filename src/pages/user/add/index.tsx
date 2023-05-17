import Head from "next/head";
import CardAddUser from "../../../components/Cards/CardAddUser";
import { Layout } from "../../../components/Layout";

// * adicionar novo usuário 'user/add'

function FormAddUser() {
	return (
		<Layout>
			<Head>
				<title>Cadastro de Usuários - GLPI</title>
			</Head>
			<CardAddUser />
		</Layout>
	);
}

export default FormAddUser;
