import { Page } from "../../../../components/Page";
import { CardCreateService } from "../../../../components/Cards/CardCreateService";

export function CreteService () {
  return (
    <>
      <Page
        pagetitle={ "Abertura de Chamados - GLPI" }
        contentpage={ <CardCreateService /> }
      />
    </>
  );
}
