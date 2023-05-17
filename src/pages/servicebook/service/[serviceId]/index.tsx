import CardServiceDescription from '../../../../components/Cards/CardServiceDescription';
import Head from "next/head";
import { Layout } from "../../../../components/Layout";

export default function ServiceLetter () {
  return (
    <Layout>
      <Head>
        <title>{"Serviço"}</title>
      </Head>
      <CardServiceDescription />
    </Layout>
  );
}
