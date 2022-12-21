import { Page } from "../../components/Page";
import { CardServiceLetter } from './CardServiceLetter'
import {services} from './ServicesList'

export function ServiceLetter() {
  return (
		<Page
			pagetitle={"Carta de Serviço"}
			contentpage={ <CardServiceLetter service={ services } index={1} />}
		/>
	);
}
