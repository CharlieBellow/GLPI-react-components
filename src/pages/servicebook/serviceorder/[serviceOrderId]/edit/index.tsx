import Head from "next/head";
import CardUpdateServiceOrder from "../../../../../components/Cards/CardUpdateServiceOrder";
import { Layout } from "../../../../../components/Layout";

// * editar ordem de serviço 'serviceorder/[id:serviceorder]/edit'

function EditServiceOrder () {
  return (
    <Layout>
      <Head>
        <title>{"Editar Ordem Serviço"}</title>
      </Head>
        <CardUpdateServiceOrder />
    </Layout>
  );
}

export default EditServiceOrder;
