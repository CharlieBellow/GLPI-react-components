import { CardCreateService } from "../../../../../../components/Cards/CardCreateService";
import { Page } from "../../../../../../components/Page";
import Head from "next/head";

export default function CreateCategory() {
	
  return (
    <>
      <Head>
        <title>{"Abertura de Chamados - GLPI"}</title>
      </Head>
      <CardCreateService />
    </>
  );
}
