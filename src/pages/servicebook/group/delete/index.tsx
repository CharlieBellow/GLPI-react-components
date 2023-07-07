import Head from "next/head";
import { CardDeleteGroup } from "../../../../components/Cards/CardDeleteGroup";
import { Layout } from "../../../../components/Layout";

// * tela de grupos 'servicebook/group/delete'


export default function DeleteGroup() {
	
	return (
		<Layout>
			<Head>
				<title>Excluir Grupo</title>
			</Head>
			<CardDeleteGroup />
		</Layout>
	);
}