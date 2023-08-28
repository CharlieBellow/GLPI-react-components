"use client"
import * as Icon from "@/components/icons";
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as React from "react";


import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getRequesterService, getResponsibleService } from "../../Utils/server/getInfo";
import { ServiceOrder } from "../../Utils/server/types";
import CardServiceOrder from "./CardServiceOrder";




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

	const [value, setValue] = React.useState('');
	
	
	// const token = localStorage.getItem("token");
  
	useEffect(() => {
    const fetchData = async () => {
			const responseRequester = await getRequesterService(myuser.id);
			const responseResponsible = await getResponsibleService(myuser.id);
			// console.log(responseRequester);
			

      setRequesterList(responseRequester)
      setResponsibleList(responseResponsible)
			setServicesList([...responseRequester, responseResponsible])
			// setServicesStatus(servicesList)
    }
    fetchData()

		setValue('todos')
  }, [])

	useEffect(()=>{
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
	},[value])


	const toogle = "responsible";	
	const [values, setValues] = useState<ServiceOrder[]>([])

  return (
		<>
			<div className="flex flex-col gap-8 rounded-xl bg-white-100 px-4 py-6 lg:m-8">
				<h2 className="text-2xl font-bold lg:text-5xl">Meus Serviços</h2>
				
				<div className='flex flex-col items-center '>
					<p className="text-lg">Filtro:</p>
					<ToggleGroup.Root
						type="single"
						className='flex flex-col rounded-lg border-2 border-blue-ufal sm:flex-row '
						value={value}
						defaultValue={"todos"}
						onValueChange={(value) => {
							setValue(value);
			}}
    >
      <ToggleGroup.Item value="atribuido" className="ToggleGroupItem flex items-center  gap-2  rounded-l-sm p-2 hover:rounded-bl-lg hover:rounded-tl-md hover:bg-gray-medium focus:relative focus:rounded-l-sm focus:bg-blue-ufal focus:shadow-blue-ufal data-[state=on]:bg-red-500" >
							<Icon.UserList size={26} />
							Atribuído a mim
      </ToggleGroup.Item>  
      <ToggleGroup.Item value="proprietario"className="ToggleGroupItem flex items-center  gap-2  p-2 hover:bg-gray-medium focus:relative focus:bg-blue-ufal  focus:shadow-blue-ufal">
							<Icon.User size={26} />
							Proprietário
      </ToggleGroup.Item> 
      <ToggleGroup.Item value="status"className="ToggleGroupItem flex items-center  gap-2   p-2 hover:bg-gray-medium focus:relative focus:bg-blue-ufal focus:shadow-blue-ufal ">
							<Icon.EnvelopeSimpleOpen size={26} />
							Status
      </ToggleGroup.Item> 
      <ToggleGroup.Item value="todos"className="ToggleGroupItem flex items-center gap-2   rounded-r-sm p-2 hover:rounded-r-md hover:bg-gray-medium focus:relative focus:rounded-r-sm focus:bg-blue-ufal focus:shadow-blue-ufal">
							<Icon.ListBullets size={26} />
							Todos
      </ToggleGroup.Item>
    </ToggleGroup.Root>

</div>
				<div className="mx-auto w-full grid-cols-1 flex-wrap justify-around gap-9 lg:grid lg:w-full lg:grid-cols-2 tv:grid-cols-2">
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