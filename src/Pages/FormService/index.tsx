
import CardFormService from '../../components/CardFormService';
import { Page } from "../../components/Page";

function FormService() {
  return (
		<>
			<Page
				pageTitle={"Abertura de Chamados - GLPI"}
				contentPage={<CardFormService />}
			/>
		</>
	);
}

export default FormService;