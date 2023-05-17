import Head from "next/head";
import GroupList  from "../../components/GroupList";
import { Layout } from "../../components/Layout";

// * tela inicial do servidor, ou seja os grupos '/servicebook/'

export default function Servicebook () {
    return(
      <Layout>
        <Head>
          <title>{"Grupos"}</title>
        </Head>
        <GroupList />
      </Layout>
    );
}