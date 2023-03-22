import Head from "next/head";
import CardCreateServiceOrder from "../../../../../components/Cards/CardCreateServiceOrder";
import { Page } from "../../../../../components/Page";

function ServiceDescription () {
  return (
    <>
      <Head>
        <title>{"Criar Serviço"}</title>
      </Head>
        <CardCreateServiceOrder />
    </>
  );
}

export default ServiceDescription;
