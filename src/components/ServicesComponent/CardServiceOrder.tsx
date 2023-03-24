import { useBreakpointValue } from "@chakra-ui/react";
import { Pencil, Trash } from "phosphor-react";
import { Button } from "../Buttons/Button";
import { deleteServiceOrder } from "../../Utils/server/delInfo";

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
	service: object;
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
	async function delService (id) {
		const del = await deleteServiceOrder(id, token as string)
	}
	const createdAtDate = new Date(props.createdAt)
	const updatedAt = new Date(props.updatedAt)

	console.log()

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
					</p>) : (<p className="text-xs mt-3 font-medium lg:text-xl">
						<strong>Serviço: </strong>

						{ props.service   }
					</p>)}
				
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
				{/*
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Solicitante: </strong>
						{props.requesterId}
					</p>
				</div>
				*/}
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Status: </strong>
						<span className={`${props.status === "Aberto" ? "text-amber-500" :  props.status === "Fechado" ? "text-green-600" : ""}`}>{props.status}</span>

					</p>
				</div>
				<div className="flex flex-row gap-20">
					<div>
						<p className="text-sm mt-3 font-medium lg:text-xl">
							<strong>Criado: </strong>
							{createdAtDate.toLocaleDateString()}
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
							{updatedAt.toLocaleDateString()}
						</p>
					</div>
				</div>
				
			</div>
			<div className="pt-3 w-fit flex flex-row gap-4">
			<Button
					className="flex"
					icon={<Pencil className="" weight="bold" size={20} />}
					title={isWideVersion ? "Editar" : ""}
					theme={"primary"}
					onClick={() => delService(props.id)}
				/>
				<Button
					className="flex"
					icon={<Trash className="" weight="bold" size={20} />}
					title={isWideVersion ? "Excluir" : ""}
					theme={"secondary"}
					// TODO criar rota para editar ordem de serviço
					onClick={() => {}}
				/>

			</div>
		</div>
	);
}
