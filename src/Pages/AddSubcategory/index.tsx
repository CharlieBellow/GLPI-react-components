import { CardCreateSubcategory } from "../../components/Cards/CardCreateSubategory";
import { Page } from "../../components/Page";

export default function AddSubcategory() {
	return (
		<>
			<Page
				pagetitle={"Abertura de Chamados - GLPI"}
				contentpage={<CardCreateSubcategory />}
			/>
		</>
	);
}
