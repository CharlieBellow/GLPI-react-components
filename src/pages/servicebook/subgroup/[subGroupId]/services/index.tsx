import Head from "next/head";

import { Layout } from "../../../../../components/Layout";
// * serviços de um subgrupo '/servicebook/subgroup/[id:subgrupo]/services'
import ServicesBySubGroup from "../../../../../components/ServicesComponent/ServiceBySubgroup";

const SubGroupServices = () => {
  return (
    <Layout>
      <Head>
        <title>{"Lista de Serviços"}</title>
      </Head>
      <ServicesBySubGroup />
    </Layout>
  );
};

export default SubGroupServices;
