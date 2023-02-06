

import Link from "next/link";
import { useRouter } from "next/router"



interface ServiceByCategoryProps {
  listservices: Array<object>;
  subcategory: string;
}

const ServiceByCategory = ( props: ServiceByCategoryProps ) => {
  
  const title = props.listservices;


  const router = useRouter()
  console.log("router" , router.query);
  const {subcategory, service, serviceorder} = router.query

  

	return (
	
				<>
					<h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
            {props.subcategory}
					</h4>

					<h5 className="text-xl font-bold m-8">Serviços disponíveis: </h5>
					<div className="lg:w-[59.5rem] m-15 flex flex-col gap-x-10  gap-y-6 mt-0" >
				{ props.listservices.map( ( service: any, index ) => {
					return (
						<>
							<Link
								id={ service.title }
								href={ `/privateroutes/servicebook/category/${ router.query.subcategory }/${ router.query.service }/${service.id}` }
								key={ service.title }
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
