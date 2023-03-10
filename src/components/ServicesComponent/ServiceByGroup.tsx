import {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {getAllServices, getSubGroup, getGroup} from "../../Utils/server/getInfo";
import { Service, SubGroup } from "../../Utils/server/types";


const ServiceByGroup = ( ) => {
  

  const router = useRouter()
  console.log("router" , router.query);
  //const {subgroup, service, serviceorder} = router.query
  const [services, setServices] = useState<Service[]>([])
  const [subgroup, setSubgroup] = useState<SubGroup>()

  useEffect(() => {

    const fetchData = async () => {
      const servicesResponse = await getAllServices(router.query.subgroupId as string);
	  const subgroupResponse = await getSubGroup(router.query.subgroupId as string);
      setServices(servicesResponse);      
	  setSubgroup(subgroupResponse);
    }

    fetchData(); 
  },[]);

 console.log(router.query.subgroupId)
	return (
			<>
				<h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
            		{subgroup && subgroup.description}
				</h4>
				<h5 className="text-xl font-bold m-8">Serviços disponíveis: </h5>
				<div className="lg:w-[59.5rem] m-15 flex flex-col gap-x-10  gap-y-6 mt-0" >
					{services && services.map( ( service: any ) => {
          			return (
            			<>
							<Link
								id={ service.title }
								href={ `/privateroutes/servicebook/service/${ service.id }` }
								key={ service.id }
								className="text-blue-ufal font-bold text-xl hover:underline hover:underline-offset-2"
								>
									{service.title}
							</Link>	
                		</>
					);
				})}
			</div>
		</>
    )
}

export default ServiceByGroup;
