import CardCreateServiceOrder from "../../../../../../components/Cards/CardCreateServiceOrder";
import { Page } from "../../../../../../components/Page";

function ServiceDescription () {
  return (
    <>
      <Page
        pagetitle={ "Criar serviço" }
        contentpage={ <CardCreateServiceOrder /> }
      />
    </>
  );
}

export default ServiceDescription;
