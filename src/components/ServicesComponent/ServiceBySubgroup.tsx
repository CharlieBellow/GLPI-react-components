import {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllServices, getSubGroup } from "../../Utils/server/getInfo";
import {Service} from "../../Utils/server/types";
import {CardList} from "../../components/Cards/CardList"


// * lista de serviços de um subgrupo, exibida em '/subgroup/[id:subgroup]/services'



const ServicesBySubgroup = ( ) => {
  

  const router = useRouter();
  const {subGroupId} = router.query
  
  const [listServices, setListServices] = useState<Service[]>([])
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
    setListServices(services)
    console.log(listServices)
    return subgroups;

  }
   
  fetchData()
}, [router.isReady, subGroupId] )


	return (
	
				<>
					<h4 className="m-15 mb-9 text-4xl font-semibold text-light-bg ">
            {subcategoryDescription}
					</h4>

					<h5 className="m-8 text-xl font-bold">Serviços disponíveis: </h5>
					<div className="m-15 mt-0 flex flex-col gap-x-10  gap-y-6 lg:w-[59.5rem]" >
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
