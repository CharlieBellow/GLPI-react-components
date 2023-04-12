import { CardCreateService } from "../../../../../../components/Cards/CardCreateService";
import Head from "next/head";


// * criar um serviço '/servicebook/subgroup/[id:subgrupo]/services/create'

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