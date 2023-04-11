import Head from "next/head";
import CardAddUser from "../../../components/Cards/CardAddUser";

function FormUserInfo() {
	return (
		<>
			<Head>
				<title>Cadastro de Usuários - GLPI</title>
				</Head>
				<CardAddUser />
		</>
	);
}

export default FormUserInfo;
