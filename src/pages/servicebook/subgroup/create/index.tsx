import Head from "next/head";
import { CardCreateSubGroup } from "../../../../components/Cards/CardCreateSubGroup";

// * criar subgrupos '/servicebook/subgroup/create'

export default function CreateSubcategory() {
	return (
		<>
			<Head>
				<title>{"Criar Subgrupo"}</title>
			</Head>
			<CardCreateSubGroup />
		</>
	);
}
