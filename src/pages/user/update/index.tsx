import Head  from "next/head";
import React from "react";
import CardUpdateUser from "../../../components/Cards/CardUpdateUser";
import { Layout } from "../../../components/Layout";
// * atualizar informações do usuario 'user/update'

function FormUpdateUser() {
	return (
		<Layout>
			<Head>
				<title>{"Informações do Usuário"}</title>
      		</Head>
			<CardUpdateUser />
		</Layout>
	);
}

export default FormUpdateUser;
