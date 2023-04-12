
import CardCreateUser from "../../../components/Cards/CardCreateUser";
import Head from "next/head";


// * criar novo usuário '/user/create'

function FormCreateUser() {

	return (
		<>
			<Head>
				<title>Criar Usuário</title>
			</Head>
			<CardCreateUser />
		</>
	);
}

export default FormCreateUser;
