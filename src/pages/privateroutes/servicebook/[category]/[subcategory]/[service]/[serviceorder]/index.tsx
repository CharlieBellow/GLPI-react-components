import { Page } from "../../../../../../../components/Page";
import  CardServiceLetter  from './CardServiceLetter';
import { services } from './ServicesList';

export default function ServiceLetter () {
  return (
    <Page
      pagetitle={ "Carta de Serviço" }
      contentpage={ <CardServiceLetter service={ services } index={ 0 } /> }
    />
  );
}
