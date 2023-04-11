import Head from "next/head";
import { CardCreateSubGroup } from "../../../../components/Cards/CardCreateSubGroup";
import { Page } from "../../../../components/Page";

export default function CreateSubcategory() {
	return (
		<>
			<Head>
				<title>{"Abertura de Chamados - GLPI"}</title>
			</Head>
			<CardCreateSubGroup />
		</>
	);
}
