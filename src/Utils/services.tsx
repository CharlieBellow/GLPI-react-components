

import ServicesList from "./ServicesList"

const services = [
  {
    title: "Instalação de impressora",
    id: "002",
    link: "/servicebook/:titleCategory/:{titleSubcategory}/:serviceLetter/:idServiceLetter",
    serviceLetter: ServicesList,
  },
  {
    title: "Manutenção de Computadores",
    id: "0033",
    link: "/servicebook/:titleCategory/:titleSubcategory/:serviceLetter/:idServiceLetter",
    serviceLetter: ServicesList,
  },

];

export default services;