import Head from "next/head";
import CardUpdateServiceOrder from "../../../../../components/Cards/CardUpdateServiceOrder";

// * editar ordem de serviço 'serviceorder/[id:serviceorder]/edit'

function EditServiceOrder () {
  return (
    <>
      <Head>
        <title>{"Editar Ordem Serviço"}</title>
      </Head>
        <CardUpdateServiceOrder />
    </>
  );
}

export default EditServiceOrder;
