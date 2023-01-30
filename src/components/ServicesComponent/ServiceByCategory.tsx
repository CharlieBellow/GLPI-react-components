

import { Link, useParams } from "react-router-dom";

interface ServiceByCategoryProps {
  listservices: Array<object>;
  subcategory: string;
}

const ServiceByCategory = ( props: ServiceByCategoryProps ) => {
  
  const title = props.listservices;

	console.log( "title: ", title );
	
	
	const aqui = document.getElementById( "serviceList" )
	//.addEventListener( "click", () => console.log( "clicou" ) );
  console.log("aqui", aqui);

	const { titleCategory, titleSubcategory } = useParams()
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
								to={ `/servicebook/${ titleCategory }/:${ titleSubcategory }/:serviceLetter/: idServiceLetter` }
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
