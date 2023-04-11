import Head from "next/head";
import { CardDeleteGroup } from "../../../../components/Cards/CardDeleteGroup";
import { Page } from "../../../../components/Page";

export default function DeleteCategory() {
	
	return (
		<>
			<Head>
			<title>Excluir Categoria</title>
			</Head>
				<CardDeleteGroup />
		</>
	);
}