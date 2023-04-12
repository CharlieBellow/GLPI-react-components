import Head from "next/head";
import { CardDeleteService } from "../../../../../../components/Cards/CardDeleteService";

// * deletar um serviço '/servicebook/subgroup/[id:subgrupo]/services/delete'


export default function deleteService() {
	
  return (
		<>
			<Head>
				<title>{"Excluir Serviço"}</title>
			</Head>
			<CardDeleteService />
		</>
	);
}