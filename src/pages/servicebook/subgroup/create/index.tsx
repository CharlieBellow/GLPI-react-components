import Head from "next/head";
import { CardCreateSubGroup } from "../../../../components/Cards/CardCreateSubGroup";
import { Layout } from "../../../../components/Layout";

// * criar subgrupos '/servicebook/subgroup/create'

export default function CreateSubcategory() {
	return (
		<Layout>
			<Head>
				<title>{"Criar Subgrupo"}</title>
			</Head>
			<CardCreateSubGroup />
		</Layout>
	);
}
