import { Page } from "../../../../../../../components/Page";
import CardServiceLetter from './CardServiceLetter';
import services from '../../../../../../../Utils/services';

export default function ServiceLetter () {
  return (
    <Page
      pagetitle={ "Carta de Serviço" }
      contentpage={ <CardServiceLetter /> }
    />
  );
}
