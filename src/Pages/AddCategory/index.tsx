import { CardCreateCategory } from "../../components/Cards/CardCreateCategory";
import { Page } from "../../components/Page";

export default function AddCategory() {
  return (
		<>
			<Page
				pagetitle={"Abertura de Chamados - GLPI"}
				contentpage={<CardCreateCategory />}
			/>
		</>
	);
}