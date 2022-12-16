export const servicesList = [{id: "00", name:"Socorro Jesus", title: "Preciso de ajuda!", description: "Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.", serviceLocal: "Bloco A" }]

interface ServiceProps {
	name: string;
	title: string;
	serviceLocal: string;
	description: string;
	id: string;
}


export default function Service(props: ServiceProps) {
	return (
    <div className="text-light-bg w-36 h-20 bg-white-ice pt-3 px-3 rounded-lg shadow-card lg:w-52 lg:h-full flex flex-col lg:gap-1 lg:py-4 lg:px-4 cursor-pointer" { ...props } key={ props.id } id={props.id}>
      <strong className="text-sm mt-3 font-medium lg:text-xl">Titulo: {props.title}</strong>
			<p className="text-sm mt-3 font-medium lg:text-xl">Nome: {props.name}</p>
			<p className="text-sm mt-3 font-medium lg:text-xl">
				Descrição: {props.description}
			</p>
			<p className="text-sm mt-3 font-medium lg:text-xl">
				Bloco: {props.serviceLocal}
			</p>
		</div>
	);
}
