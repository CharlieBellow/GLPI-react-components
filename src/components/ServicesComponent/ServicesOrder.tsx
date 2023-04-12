
import * as React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as Icon from "phosphor-react";


import CardServiceOrder from "./CardServiceOrder";
import { useEffect, useState } from "react";
import { ServiceOrder } from "../../Utils/server/types";
import { getRequesterService, getResponsibleService  } from "../../Utils/server/getInfo";
import { Spinner } from "@chakra-ui/react";
import {CardLabelInputCheckbox} from "../../components/Inputs/CardLabelInputCheckbox"
import { Formik, FormikHelpers, FormikValues } from "formik";




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
 
	
	const [requesterList, setRequesterList] = useState<ServiceOrder[]>([])
	const [responsibleList, setResponsibleList] = useState<ServiceOrder[]>([])
	const [servicesList, setServicesList] = useState<ServiceOrder[]>([])
	const [servicesStatus, setServicesStatus] = useState<ServiceOrder[]>([])
	
	
	const token = localStorage.getItem("token");
  
	useEffect(() => {
    const fetchData = async () => {
			const responseRequester = await getRequesterService(myuser.id, token as string);
			const responseResponsible = await getResponsibleService(myuser.id, token as string);
			// console.log(responseRequester);
			

      setRequesterList(responseRequester)
      setResponsibleList(responseResponsible)
			setServicesList([...responseRequester, responseResponsible])
			// setServicesStatus(servicesList)
    }
    fetchData()
  }, [servicesList, requesterList, responsibleList, token])



	const toogle = "responsible"
	const value = "";
	const [values, setValues] = useState<ServiceOrder[]>([])

  return (
		<>
			<div className="lg:m-8 bg-white-100 gap-8 py-6 px-4 flex flex-col rounded-xl">
				<h2 className="lg:text-5xl text-2xl font-bold">Meus Serviços</h2>
				
				<div className='flex flex-col items-center '>
					<p className="text-lg">Filtro:</p>
					<ToggleGroup.Root
						type="single"
						className='flex sm:flex-row flex-col border-2 border-blue-ufal rounded-lg '
						value={value}
						defaultValue={"todos"}
						onValueChange={(value) => {
							if (value === "atribuido") {
								setValues(responsibleList)
								console.log("chamou atribuido");
							} else
								if (value === "proprietario") {
									setValues(requesterList)
								console.log("chamou proprietario");
								}
								else if (value === "status") {
									servicesList.map(item => {
										if (item.status === "Aberto")
										return (
											setServicesStatus([... servicesStatus, item])
										)
									})
									
									setValues(servicesStatus)
								console.log("chamou proprietario");
								}
								else {
								
								console.log("chamou todos");
								setValues(servicesList)
							}
			}}
    >
      <ToggleGroup.Item value="atribuido" className="flex items-center gap-2  p-2  ToggleGroupItem hover:bg-gray-medium focus:relative focus:shadow-blue-ufal focus:bg-blue-ufal focus:rounded-tl-sm focus:rounded-bl-sm hover:rounded-tl-md hover:rounded-bl-md">
							<Icon.UserList size={26} />
							Atribuído a mim
      </ToggleGroup.Item>  
      <ToggleGroup.Item value="proprietario"className="flex items-center gap-2  p-2   ToggleGroupItem hover:bg-gray-medium focus:relative focus:shadow-blue-ufal focus:bg-blue-ufal ">
							<Icon.User size={26} />
							Proprietário
      </ToggleGroup.Item> 
      <ToggleGroup.Item value="status"className="flex items-center gap-2  p-2   ToggleGroupItem hover:bg-gray-medium focus:relative focus:shadow-blue-ufal focus:bg-blue-ufal ">
							<Icon.EnvelopeSimpleOpen size={26} />
							Status
      </ToggleGroup.Item> 
      <ToggleGroup.Item value="todos"className="flex items-center gap-2 p-2   ToggleGroupItem hover:bg-gray-medium focus:relative focus:shadow-blue-ufal focus:bg-blue-ufal focus:rounded-tr-sm focus:rounded-br-sm hover:rounded-tr-md hover:rounded-br-md">
							<Icon.ListBullets size={26} />
							Todos
      </ToggleGroup.Item>
    </ToggleGroup.Root>

</div>
				<div className="lg:grid lg:w-full flex-wrap mx-auto justify-around gap-9 lg:grid-cols-2 tv:grid-cols-2 grid-cols-1 w-full">
					<>
						
						{values ?
								values.map((item: any) => {
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
						}): <div className="flex justify-center"><Spinner size="lg" /></div>}
					</>
				</div>
			</div>
		</>
	);
}