import Head  from "next/head";
import CardUpdateUser from "../../../components/Cards/CardUpdateUser";

function FormUpdateUser() {

	return (
		<>
			<Head>
				<title>{"Informações do Usuário"}</title>
      </Head>
				<CardUpdateUser />
		</>
	);
}

export default FormUpdateUser;
