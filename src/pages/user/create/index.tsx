
import CardCreateUser from "../../../components/Cards/CardCreateUser";
import Head from "next/head";
import { Layout } from "../../../components/Layout";

// * criar novo usuário '/user/create'

function FormCreateUser() {

	return (
		<Layout>
			<Head>
				<title>Criar Usuário</title>
			</Head>
			<CardCreateUser />
		</Layout>
	);
}

export default FormCreateUser;
