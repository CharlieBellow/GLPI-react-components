
import CardServiceOrder from "./CardServiceOrder";

import { useEffect, useState } from "react";
import { ServiceOrder } from "../../Utils/server/types";
import { getRequesterService, getResponsibleService  } from "../../Utils/server/getInfo";




const myuser = {
	id: "972e1f58-95c6-4582-ac05-fb385dbb557b",
	status: "Ativo",
	cpf: "08551062476",
	name: "Charlie Bellow de Oliveira",
	birthDate: "2023-03-02T17:00:26.157Z",
	gender: "M",
	created_at: "2023-03-02T20:00:24.955Z",
}
export default function ServicesOrder () {
 
/* closedAt
: 
"2023-03-02T17:09:25.173Z"
createdAt
: 
"2023-03-02T20:09:23.962Z"
description
: 
"minha ordem de serviço"
estimatedAt
: 
null
id
: 
"14ebb57f-5c74-4a71-9192-3c609aa310d6"
patrimonyId
: 
"123456"
requesterId
: 
"972e1f58-95c6-4582-ac05-fb385dbb557b"
responsibleId
: 
null
service
: 
{id: 'eff33f67-0d9d-402f-baa3-96a30df953f1', description: 'Acessar perfil.ufal.br, ', title: 'Criar email institucional', definition: 'Etapas para criação do email institucional', serviceSubGroupId: '446ba367-8c8e-4f11-b920-413ef6e9e836', …}
serviceId
: 
"eff33f67-0d9d-402f-baa3-96a30df953f1"
status
: 
"Aberto"
updatedAt
: 
"2023-03-02T20:09:23.962Z" */
	
	const [requesterList, setRequesterList] = useState<ServiceOrder[]>([])
	const [responsibleList, setResponsibleList] = useState<ServiceOrder[]>([])
	const [servicesList, setServicesList] = useState<ServiceOrder[]>([])
	
	
	const token = localStorage.getItem("token");
  
	useEffect(() => {
		

	
    const fetchData = async () => {
			const responseRequester = await getRequesterService(myuser.id, token);
			const responseResponsible = await getResponsibleService(myuser.id, token );
			console.log(responseRequester);
			

      setRequesterList(responseRequester)
      setResponsibleList(responseResponsible)
			setServicesList([responseResponsible, responseRequester])
    }
    fetchData()
  }, [servicesList, requesterList, responsibleList, token])

console.log("requesterList", requesterList);

	const toogle = "responsible"

  return (
		<>
			<div className="m-8 bg-white-100 gap-8 py-6 px-4 flex flex-col rounded-xl">
				<h2 className="text-5xl font-bold">Meus Serviços</h2>
				<div className="lg:grid lg:w-full flex-wrap mx-auto justify-around gap-9 lg:grid-cols-2 tv:grid-cols-2">
					<>
						
						{requesterList.map((item: any) => {
							return (
								<CardServiceOrder
			
						
									description={item.description}
									patrimonyId={item.patrimonyId}
									service={item.service}
									status={item.status}
									createdAt={item.createdAt}
									estimatedAt={item.estimatedAt}
									requesterId={item.requesterId}
									responsibleId={item.responsibleId}
									updatedAt={item.updatedAt}
						
									id={item.id}
									key={item.id}
								/>
							);
						})}
						{console.log("listServices", servicesList)}
					</>
				</div>
			</div>
		</>
	);
}