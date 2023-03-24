
import Head from "next/head";
import { Page } from "../../../components/Page";
import ServicesOrder from "../../../components/ServicesComponent/ServicesOrder";


export default function MyServices() {

  return (
    <>
      <Head>
        <title>{"Minhas ordens de serviço"}</title>
      </Head>
      <ServicesOrder />
    </>

  )
}