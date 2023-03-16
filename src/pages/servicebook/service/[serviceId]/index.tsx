import { Page } from "../../../../components/Page";
import CardServiceDescription from '../../../../components/Cards/CardServiceDescription';
import services from '../../../../Utils/services';

export default function ServiceLetter () {
  return (
    <Page pagetitle={ "Serviço" }>
      <CardServiceDescription />
    </Page>
  );
}
