import {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllServices, getSubGroup } from "../../Utils/server/getInfo";
import {Service} from "../../Utils/server/types";
import {CardList} from "../../components/Cards/CardList"


// * lista de serviços de um subgrupo, exibida em '/subgroup/[id:subgroup]/services'

const listServices = [
  {contactInfo: null, createdAt: "2023-02-17T14:31:38.105Z", deadline: null, definition: "Etapas para criação do email institucional", description: "Acessar perfil.ufal.br", glpiSla: null, id: "eff33f67-0d9d-402f-baa3-96a30df953f1", isPatromonyIdRequired: false, isPrioritaryService: false, openningHours: null, personType: "{Discente,Docente}", requiredDocuments: null, serviceLocation: null, serviceSubGroupId: "446ba367-8c8e-4f11-b920-413ef6e9e836", title: "Criar email institucional", updatedAt: "2023-02-17T14:31:38.105Z", waitingTime: null},
  {contactInfo: null, createdAt: "2023-02-17T14:31:38.105Z", deadline: null, definition: "Etapas para criação do email institucional", description: "Acessar perfil.ufal.br", glpiSla: null, id: "eff33f67-0d9d-402f-baa3-96a30df953f1", isPatromonyIdRequired: false, isPrioritaryService: false, openningHours: null, personType: "{Discente,Docente}", requiredDocuments: null, serviceLocation: null, serviceSubGroupId: "446ba367-8c8e-4f11-b920-413ef6e9e836", title: "Alterar email institucional", updatedAt: "2023-02-17T14:31:38.105Z", waitingTime: null},
  {contactInfo: null, createdAt: "2023-02-17T14:31:38.105Z", deadline: null, definition: "Etapas para criação do email institucional", description: "Acessar perfil.ufal.br", glpiSla: null, id: "eff33f67-0d9d-402f-baa3-96a30df953f1", isPatromonyIdRequired: false, isPrioritaryService: false, openningHours: null, personType: "{Discente,Docente}", requiredDocuments: null, serviceLocation: null, serviceSubGroupId: "446ba367-8c8e-4f11-b920-413ef6e9e836", title: "Criar perfil de acesso ao RU", updatedAt: "2023-02-17T14:31:38.105Z", waitingTime: null},
  {contactInfo: null, createdAt: "2023-02-17T14:31:38.105Z", deadline: null, definition: "Etapas para criação do email institucional", description: "Acessar perfil.ufal.br", glpiSla: null, id: "eff33f67-0d9d-402f-baa3-96a30df953f1", isPatromonyIdRequired: false, isPrioritaryService: false, openningHours: null, personType: "{Discente,Docente}", requiredDocuments: null, serviceLocation: null, serviceSubGroupId: "446ba367-8c8e-4f11-b920-413ef6e9e836", title: "Cadastrar Bolsistas e estagiários", updatedAt: "2023-02-17T14:31:38.105Z", waitingTime: null},
  {contactInfo: null, createdAt: "2023-02-17T14:31:38.105Z", deadline: null, definition: "Etapas para criação do email institucional", description: "Acessar perfil.ufal.br", glpiSla: null, id: "eff33f67-0d9d-402f-baa3-96a30df953f1", isPatromonyIdRequired: false, isPrioritaryService: false, openningHours: null, personType: "{Discente,Docente}", requiredDocuments: null, serviceLocation: null, serviceSubGroupId: "446ba367-8c8e-4f11-b920-413ef6e9e836", title: "Problemas no acesso ao sistema", updatedAt: "2023-02-17T14:31:38.105Z", waitingTime: null},
]

const ServicesBySubgroup = ( ) => {
  

  const router = useRouter();
  const {subGroupId} = router.query
  
  // const [listServices, setListServices] = useState<Service[]>([])
  const [subcategoryDescription, setSubcategoryDescription] = useState<string>("")
  
  const isAdmin = true;

 useEffect(() => {
  if(!router.isReady) return;
  const fetchData = async () => {

    const [subgroups, services] = await Promise.all([
      getSubGroup(subGroupId as string),
      getAllServices(subGroupId as string)
    ]);
    setSubcategoryDescription(subgroups.description)
    // setListServices(services)
    console.log(listServices)
    return subgroups;

  }
   
  fetchData()
}, [router.isReady, subGroupId] )


	return (
	
				<>
					<h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg ">
            {subcategoryDescription}
					</h4>

					<h5 className="text-xl font-bold m-8">Serviços disponíveis: </h5>
					<div className="lg:w-[59.5rem] m-15 flex flex-col gap-x-10  gap-y-6 mt-0" >
        { listServices && listServices.map( ( service ) => {
          return (
            <Link
            id={ service.title }
            href={ `/servicebook/service/${ service.id }` }
            key={ service.id }
            className="text-blue-ufal hover:underline hover:underline-offset-2"
            >
                    <CardList>
										{service.title}
            </CardList>
							</Link>
						
               
					);
        })}
      </div>

    
				</>
          )
}
	

export default ServicesBySubgroup;
