
import CardCreateService from '../../components/CardCreateService';
import { Page } from "../../components/Page";

function CreateService() {
  return (
		<>
			<Page
				pageTitle={"Abertura de Chamados - GLPI"}
				contentPage={<CardCreateService />}
			/>
		</>
	);
}

export default CreateService;