import { Page } from "../../../../components/Page";
import CardServiceDescription from '../../../../components/Cards/CardServiceDescription';
import services from '../../../../Utils/services';
import Head from "next/head";

export default function ServiceLetter () {
  return (
    <>
      <Head>
        <title>{"Serviço"}</title>
      </Head>
      <CardServiceDescription />
    </>
  );
}
