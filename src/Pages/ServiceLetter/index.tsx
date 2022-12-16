import { Page } from "../../components/Page";
import {CardServiceLetter} from './CardServiceLetter'

export function ServiceLetter() {
  return (
		<Page
			pagetitle={"Carta de Serviço"}
			contentpage={<CardServiceLetter serviceTitle={"Instalação e configuração de software (519)"} />}
		/>
	);
}
