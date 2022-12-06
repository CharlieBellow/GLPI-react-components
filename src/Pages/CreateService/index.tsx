import CardCreateService from "../../components/CardCreateService";
import { Page } from "../../components/Page";

function CreateService() {
	return (
		<>
			<Page
				pagetitle={"Abertura de Chamados - GLPI"}
				contentpage={<CardCreateService />}
			/>
		</>
	);
}

export default CreateService;
