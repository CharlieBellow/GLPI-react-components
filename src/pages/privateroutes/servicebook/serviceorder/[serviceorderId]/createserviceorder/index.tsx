import CardCreateServiceOrder from "../../../../../../components/Cards/CardCreateServiceOrder";
import { Page } from "../../../../../../components/Page";

function ServiceDescription () {
  return (
    <>
      <Page
        pagetitle={ "Abertura de Chamados - GLPI" }
        contentpage={ <CardCreateServiceOrder /> }
      />
    </>
  );
}

export default ServiceDescription;
