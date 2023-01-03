// usar UUID

//import { servicesList } from "./Service";
import Service from "./Service"
import { useEffect, useState } from "react";

export default function Services () {
  const servicesStorage = localStorage.getItem( "services" );
  const [ listServices, setServices ] = useState( [] );


  useEffect( () => {
    if ( servicesStorage ) {
      const servicesList = JSON.parse( servicesStorage );
      console.log( "servicesList: ", servicesList );
      setServices( servicesList )
      console.log("listServices: useState", listServices);
      
      
    }
  }, [])

      //console.log  ("servicesList: ", servicesList);

  return (
		<>
			<div className="m-8 bg-white-100 gap-8 py-6 px-4 flex flex-col">
				<h2 className="text-5xl font-bold">Serviços</h2>
				<div className="lg:grid lg:w-full flex-wrap mx-auto justify-around gap-9 lg:grid-cols-2 tv:grid-cols-3">
					<>
						{listServices.map((user: any) => {
							return (
								<Service
									name={user.name}
									title={user.title}
									description={user.description}
									servicelocal={user.serviceLocal}
									id={user.id}
									key={user.id}
								/>
							);
						})}
						{console.log("listServices", listServices)}
					</>
				</div>
			</div>
		</>
	);
}