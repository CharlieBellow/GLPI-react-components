import Head from "next/head";
import { CardDeleteGroup } from "../../../../components/Cards/CardDeleteGroup";

// * tela de grupos 'servicebook/group/delete'


export default function DeleteGroup() {
	
	return (
		<>
			<Head>
				<title>Excluir Grupo</title>
			</Head>
			<CardDeleteGroup />
		</>
	);
}