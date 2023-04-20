import Head from "next/head";
import CardCreateServiceOrder from "../../../../../components/Cards/CardCreateServiceOrder";

// * criar ordem de serviço 'serviceorder/[id:serviceorder]/create'


function CreateServiceOrder () {
  return (
    <>
      <Head>
        <title>{"Criar Serviço"}</title>
      </Head>
        <CardCreateServiceOrder />
    </>
  );
}

export default CreateServiceOrder;
