import Head from "next/head";
import { CardCreateGroup } from "../../../../components/Cards/CardCreateGroup";
import { Layout } from "../../../../components/Layout";


// * tela de grupos 'servicebook/group/create'

export default function CreateGroup() {
	
  return (
		<Layout>
			<Head>
				<title>{"Criar Grupo"}</title>
			</Head>
			<CardCreateGroup />
		</Layout>

	);
}