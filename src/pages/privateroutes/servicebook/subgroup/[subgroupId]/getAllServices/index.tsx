import { Page } from "../../../../../../components/Page";


import ServiceByGroup from "../../../../../../components/ServicesComponent/ServiceByGroup";

const ServicesBySubgroup = () => {
  return (
    <Page
      pagetitle={ "Lista de Serviços" }
      contentpage={
        <ServiceByGroup />
      }
    />
  );
};

export default ServicesBySubgroup;