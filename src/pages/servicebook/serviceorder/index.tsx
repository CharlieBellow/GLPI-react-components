
import Head from "next/head";
import ServicesOrder from "../../../components/ServicesComponent/ServicesOrder";

// * ordens de serviço do usuário '/servicebook/serviceorder'
export default function MyServices() {

  return (
    <>
      <Head>
        <title>{"Minhas ordens de serviço"}</title>
      </Head>
      <div className="h-full">
        <ServicesOrder/>
      </div>
    </>

  )
}