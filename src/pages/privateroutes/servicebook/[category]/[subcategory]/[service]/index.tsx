import { Page } from "../../../../../../components/Page";

import {serviceModel} from '../../../../../../Utils/ServiceModels';

import ServiceByCategory from "../../../../../../components/ServicesComponent/ServiceByCategory";

const ServicesByCategory = () => {
  return (
    <Page
      pagetitle={ "Subcategorias" }
      contentpage={
        <ServiceByCategory listservices={ serviceModel } subcategory={ "GTI" } />
      }
    />
  );
};

export default ServicesByCategory;