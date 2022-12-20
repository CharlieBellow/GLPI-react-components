import { Page } from "../../components/Page";

import ServiceByCategory from "../../components/ServiceByCategory";

const list = [
	{ title: "Instalação e configuração de software (1)", link: "/ServiceLetter" },
	{ title: "título 2", link: "/ServiceLetter" },
];

const ServicesByCategory = () => {
	return (
		<Page
			pagetitle={"Subcategorias"}
			contentpage={
				<ServiceByCategory listservices={ list } subcategory={ "GTI" } />
			}
		/>
	);
};

export default ServicesByCategory;