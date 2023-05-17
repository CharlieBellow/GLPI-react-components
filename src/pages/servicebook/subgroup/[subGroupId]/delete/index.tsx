import { CardDeleteSubGroup } from "../../../../../components/Cards/CardDeleteSubGroup";
import Head from "next/head";
import { Layout } from "../../../../../components/Layout";

// * deletar subgrupo '/servicebook/subgroup/[id:grupo]/delete'

export default function DeleteSubGroup() {
	
	return (
		<Layout>
			<Head>
				<title>Deletar Subgrupo</title>
			</Head>
			<CardDeleteSubGroup />
		</Layout>
		
	);
}