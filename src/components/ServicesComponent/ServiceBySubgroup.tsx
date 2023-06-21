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
