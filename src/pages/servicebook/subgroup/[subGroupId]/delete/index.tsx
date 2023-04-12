import { CardDeleteSubGroup } from "../../../../../components/Cards/CardDeleteSubGroup";
import Head  from "next/head";

// * deletar subgrupo '/servicebook/subgroup/[id:grupo]/delete'

export default function DeleteSubGroup() {
	
	return (
		<>
			<Head>
				<title>Deletar Subgrupo</title>
			</Head>
			<CardDeleteSubGroup />
		</>
		
	);
}