import Head  from "next/head";
import CardUserInfo from "../../../components/Cards/CardUserInfo";

// * informação do usuário atual 'user/info'
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
