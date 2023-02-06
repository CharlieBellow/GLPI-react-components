import { useBreakpointValue } from "@chakra-ui/react";
import { Trash } from "phosphor-react";
import { Button } from "../Buttons/Button";

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

interface ServiceProps {
	name: string;
	title: string;
	servicelocal: string;
	description: string;
	id: string;
}

export default function Service(props: ServiceProps) {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});
	return (
		<div
			className="text-light-bg w-full h-full bg-white-ice py-3 px-4 rounded-xl shadow-card lg:w-[24rem] lg:h-[45rem] flex flex-col lg:py-4  cursor-pointer my-4 justify-between"
			{...props}
			key={props.id}
			id={props.id}
		>
			<div>
				<strong className="text-sm mt-3 font-bold lg:text-xl">
					Titulo: {props.title}
				</strong>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Nome: </strong>
						{props.name}
					</p>
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Descrição: </strong>
						{props.description}
					</p>
				</div>
				<div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Bloco: </strong>
						{props.servicelocal}
					</p>
				</div>
			</div>
			<div>
				<Button
					className="flex"
					icon={<Trash className="" weight="bold" size={20} />}
					title={isWideVersion ? "Excluir" : ""}
					theme={"primary"}
				/>
			</div>
		</div>
	);
}
