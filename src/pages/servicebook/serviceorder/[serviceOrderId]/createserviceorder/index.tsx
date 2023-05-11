import Head from "next/head";
import CardCreateServiceOrder from "../../../../../components/Cards/CardCreateServiceOrder";
import {useEffect} from "react"

// * criar ordem de serviço 'serviceorder/[id:serviceorder]/create'


function CreateServiceOrder() {
  
  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://cdn.tiny.cloud/1/3enajksx9oylqgylfxulwceq3qb751gxke444j4ld79w9rz1/tinymce/6/tinymce.min.js"

    // src.async = true;

    document.body.appendChild(script)
  })
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
