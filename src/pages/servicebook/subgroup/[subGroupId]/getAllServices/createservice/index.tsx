import { CardCreateService } from "../../../../../../components/Cards/CardCreateService";
import Head from "next/head";

export default function CreateService () {
  return (
    <>
      <Head>
        <title>{"Abertura de Chamados - GLPI"}</title>
      </Head>
      <CardCreateService />
    </>
  );
}