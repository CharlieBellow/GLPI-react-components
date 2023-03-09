import {useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {getAllServices, listServices, getSubcategory, subCategory} from "../../Utils/server/getInfo";


const ServiceByCategory = ( ) => {
  

  const router = useRouter()
  console.log("router" , router.query);
  const {subcategory, service, serviceorder} = router.query

 useEffect(() => {
  getSubcategory(router.query.subgroupId)
  getAllServices(router.query.subgroupId)
 }, [])

 console.log(router.query.subgroupId)
	return (
	
				<>
					<h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
            {subCategory.description}
					</h4>

					<h5 className="text-xl font-bold m-8">Serviços disponíveis: </h5>
					<div className="lg:w-[59.5rem] m-15 flex flex-col gap-x-10  gap-y-6 mt-0" >
				{ listServices.map( ( service: any ) => {
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
	

export default ServiceByCategory;
