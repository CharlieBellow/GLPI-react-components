import Head  from "next/head";
import React from "react";
import CardUpdateUser from "../../../components/Cards/CardUpdateUser";

// * atualizar informações do usuario 'user/update'

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
