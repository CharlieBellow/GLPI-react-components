import Head from "next/head";
import { CardCreateGroup } from "../../../../components/Cards/CardCreateGroup";
import { Page } from "../../../../components/Page";

export default function CreateCategory() {
	
  return (
		<>
			<Head>
				<title>{"Abertura de Chamados - GLPI"}</title>
			</Head>
			<CardCreateGroup />
		</>

	);
}