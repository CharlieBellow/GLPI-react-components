import Head from "next/head";
import { Page } from "../../../../../components/Page";


import ServiceByCategory from "../../../../../components/ServicesComponent/ServiceByCategory";

const ServicesByCategory = () => {
  return (
    <>
      <Head>
        <title>{"Lista de Serviços"}</title>
      </Head>
      <ServiceByCategory />
    </>
  );
};

export default ServicesByCategory;