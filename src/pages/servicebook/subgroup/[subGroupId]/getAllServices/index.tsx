import { Page } from "../../../../../components/Page";


import ServiceByCategory from "../../../../../components/ServicesComponent/ServiceByCategory";

const ServicesByCategory = () => {
  return (
    <Page pagetitle={ "Lista de Serviços" }>
      <ServiceByCategory />
    </Page>
  );
};

export default ServicesByCategory;