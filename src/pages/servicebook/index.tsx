import Head from "next/head";
import GroupList  from "../../components/GroupList";

// * tela inicial do servidor, ou seja os grupos '/servicebook/'

export default function Servicebook () {
    return(
      <>
        <Head>
          <title>{"Grupos"}</title>
        </Head>
        <GroupList />
      </>
    );
}