import Head from "next/head";
import { CardCreateGroup } from "../../../../components/Cards/CardCreateGroup";


// * tela de grupos 'servicebook/group/create'

export default function CreateGroup() {
	
  return (
		<>
			<Head>
				<title>{"Criar Grupo"}</title>
			</Head>
			<CardCreateGroup />
		</>

	);
}