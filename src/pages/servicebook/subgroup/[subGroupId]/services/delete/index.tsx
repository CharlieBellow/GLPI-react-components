import Head from "next/head";
import { CardDeleteService } from "../../../../../../components/Cards/CardDeleteService";
import { Layout } from "../../../../../../components/Layout";

// * deletar um serviço '/servicebook/subgroup/[id:subgrupo]/services/delete'


export default function deleteService() {
	
  return (
		<Layout>
			<Head>
				<title>{"Excluir Serviço"}</title>
			</Head>
			<CardDeleteService />
		</Layout>
	);
}