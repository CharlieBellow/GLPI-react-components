import { servicesList } from "./Service";
import Service from "./Service"

export default function Services () {
  return (
		<div className="m-8 bg-white-100 gap-3">
			<h2 className="text-5xl font-bold ">Serviços</h2>

			<>
          {servicesList.map((user: any) => {
            return (
              <Service
                name={user.name}
                title={user.title}
                description={user.description}
                serviceLocal={user.serviceLocal}
                id={user.id}
                key={user.id}
              />
            );
          })}
          {console.log(servicesList)}
        </>
		</div>
	);
}