import Head from "next/head";
import { Page } from "../../../../../components/Page";
import CardUpdateServiceOrder from "../../../../../components/Cards/CardUpdateServiceOrder";

function EditService () {
  return (
    <>
      <Head>
        <title>{"Editar Ordem Serviço"}</title>
      </Head>
        <CardUpdateServiceOrder />
    </>
  );
}

export default EditService;
