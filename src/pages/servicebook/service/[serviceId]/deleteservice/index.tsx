import { CardDeleteSubGroup } from "../../../../../components/Cards/CardDeleteSubGroup";
import Head  from "next/head";
import { Layout } from "../../../../../components/Layout";

export default function DeleteService() {
	return (
		<Layout>
			<Head>
				<title>Deletar Serviço</title>
			</Head>
			<CardDeleteSubGroup />
		</Layout>
	);
}