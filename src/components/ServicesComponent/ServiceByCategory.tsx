import {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllServices, getSubGroup } from "../../Utils/server/getInfo";
import {Service} from "../../Utils/server/types"
import CardGroup from "../../components/CardGroup";
import * as  Icon  from "phosphor-react";


const ServiceByCategory = ( ) => {
  

  const router = useRouter();
  const {subGroupId} = router.query
  
  const [listServices, setListServices] = useState<Service[]>([])
  const [subcategoryDescription, setSubcategoryDescription] = useState<string>("")
  
  const isAdmin = true;

 useEffect(() => {
  if(!router.isReady) return;
  const fetchData = async () => {

    const subcategoryGet = await getSubGroup(subGroupId as string);


  
    const response = await getAllServices(subGroupId as string);

    setSubcategoryDescription(subcategoryGet.description)
    setListServices(response)

    console.log("sub", response)
    return subcategoryGet
  }
   
  fetchData()
}, [router.isReady, subGroupId] )


	return (
	
				<>
					<h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
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
								className="text-blue-ufal font-bold text-xl hover:underline hover:underline-offset-2"
									>
										{service.title}
							</Link>
						
               
					);
        })}
        
        {isAdmin ? (
          <div className="flex gap-8">
            <CardGroup link={`/servicebook/subgroup/${subGroupId}/getAllServices/createservice`} Name={"Criar Serviço"} Icon={<Icon.Plus size={27} />} idGroup={''} />
            <CardGroup link={`/servicebook/subgroup/${subGroupId}/getAllServices/deleteservice`} Name={"Deletar Serviço"} Icon={<Icon.Trash size={27} />} idGroup={''} />
            </div>
            ) : <></>}
      </div>

    
				</>
          )
}
	

export default ServiceByCategory;
