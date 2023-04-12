import { useBreakpointValue } from "@chakra-ui/react";
import { Trash } from "phosphor-react";
import { Button } from "../Buttons/Button";
import { deleteServiceOrder } from "../../Utils/server/delInfo";
import {Service} from "../../Utils/server/types"

export const servicesList = [
	{
		id: "00",
		name: "Socorro Jesus",
		title: "Manutenção de Computadore",
		description:
			"Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.",
		serviceLocal: "Bloco A",
	},
];

interface ServiceOrderProps {
	servicelocal?: string;
	description?: string;
	id: string;
	patrimonyId: string;
	service: Service;
	status: string;
	createdAt: string;
	estimatedAt: string;
	responsibleId: string;
	requesterId: string;
	updatedAt: string
	
}

export default function CardServiceOrder(props: ServiceOrderProps) {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const token = localStorage.getItem("token");
	
	// não exclui por algum erro no servidor
	async function delService (id: string) {
		const del = await deleteServiceOrder(id, token as string)
	}
	
	

	return (
		<div
			className="text-light-bg w-full h-full bg-white-ice py-3 px-4 rounded-xl shadow-card lg:w-auto lg:h-auto flex flex-col lg:py-4 my-4 justify-between"
			{...props}
			key={props.id}
			id={props.id}
		>
			<div>
				<div>
					<p className="text-xs mt-3 font-medium lg:text-xl">
						<strong>Descrição: </strong>
						{props.description}
					</p>
				</div>
				<div>
					{props.patrimonyId ? (<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Patrimônio: </strong>
						{props.patrimonyId}
					</p> ): <></>}
					
				</div>
				<div>
					{props.service ? (<p className="text-xs mt-3 font-medium lg:text-xl">
						<strong>Serviço: </strong>

						{props.service.title}
						{props.service.description}
					</p>) : (<p className="text-xs mt-3 font-medium lg:text-xl">
						<strong>Serviço: </strong>

						{ props.service   }
					</p>)}
				
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Status: </strong>
						{props.status}
					</p>
				</div>
				{/* <div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Local: </strong>
						{props.servicelocal}
					</p>
				</div> */}
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Responsável pelo serviço: </strong>
						{props.responsibleId}
					</p>
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Solicitante: </strong>
						{props.requesterId}
					</p>
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Criado: </strong>
						{props.createdAt}
					</p>
				</div>
				{/* <div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Estimativa de Conclusão: </strong>
						{props.estimatedAt}
					</p>
				</div> */}
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Atualizado em: </strong>
						{props.updatedAt}
					</p>
				</div>
			</div>
			<div className="pt-3 w-fit">
				<Button
					className="flex"
					icon={<Trash className="" weight="bold" size={20} />}
					title={isWideVersion ? "Excluir" : ""}
					theme={"primary"}
					onClick={() => delService(props.id)}
				/>
			</div>
		</div>
	);
}
