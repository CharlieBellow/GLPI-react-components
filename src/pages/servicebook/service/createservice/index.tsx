import CardCreateService from "../../../../components/Cards/CardCreateService";
import Head from "next/head";
import { Layout } from "../../../../components/Layout";

export default function CreateService() {
	
	return (
		<Layout>
			<Head>
			<title>Criar Serviço</title>
			</Head>
				<CardCreateService />
		</Layout>
	);
}