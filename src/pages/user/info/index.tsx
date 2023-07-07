import Head  from "next/head";
import CardUserInfo from "../../../components/Cards/CardUserInfo";
import { Layout } from "../../../components/Layout";
// * informação do usuário atual 'user/info'
function FormUserInfo() {
	return (
		<Layout>
			<Head>
				<title>{"Informações do Usuário"}</title>
			</Head>
			<CardUserInfo />
		</Layout>
	);
}

export default FormUserInfo;
