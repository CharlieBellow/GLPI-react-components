import Head from "next/head";

// * serviços de um subgrupo '/servicebook/subgroup/[id:subgrupo]/services'

import ServicesBySubGroup from "../../../../../components/ServicesComponent/ServiceBySubgroup";

const SubGroupServices = () => {
  return (
    <>
      <Head>
        <title>{"Lista de Serviços"}</title>
      </Head>
      <ServicesBySubGroup />
    </>
  );
};

export default SubGroupServices;