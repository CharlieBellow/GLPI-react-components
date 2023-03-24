import { Page } from "../../../components/Page";
import CardUserInfo from "../../../components/Cards/CardUserInfo";
import Head from "next/head";

function FormUserInfo() {
	return (
		<>
			<Head>
				<title>{"Informações do Usuário"}</title>
			</Head>
			<CardUserInfo />
		</>
	);
}

export default FormUserInfo;
