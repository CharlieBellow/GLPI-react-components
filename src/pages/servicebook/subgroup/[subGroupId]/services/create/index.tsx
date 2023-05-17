import { CardCreateService } from "../../../../../../components/Cards/CardCreateService";
import Head from "next/head";
import { Layout } from "../../../../../../components/Layout";


// * criar um serviço '/servicebook/subgroup/[id:subgrupo]/services/create'

export default function CreateService () {
  return (
    <Layout>
      <Head>
        <title>{"Abertura de Chamados - GLPI"}</title>
      </Head>
      <CardCreateService />
    </Layout>
  );
}