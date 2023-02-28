import { Page } from "../../../../../../components/Page";


import ServiceByCategory from "../../../../../../components/ServicesComponent/ServiceByCategory";

const ServicesByCategory = () => {
  return (
    <Page
      pagetitle={ "Subcategorias" }
      contentpage={
        <ServiceByCategory />
      }
    />
  );
};

export default ServicesByCategory;