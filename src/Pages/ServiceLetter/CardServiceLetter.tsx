import { InfoServiceItem } from "./InfoService";
import * as Icon from 'phosphor-react'
import { Button } from "../../components/Button";

const servicesList = [
	{
		title: "Público-alvo",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non. rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
		icon: <Icon.Target size={26} weight="bold"/>,
	},
	{
		title: "Requisitos",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
		icon: <Icon.CheckSquareOffset size={26} weight="bold"/>,
	},
	{
		title: "Tempo de espera",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem.",
		icon: <Icon.HourglassHigh size={26} weight="bold"/>,
	},
	{
		title: "Tempo necessário para execução",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
		icon: <Icon.Watch size={26} weight="bold"/>,
	},
	{
		title: "Horário de atendimento",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
		icon: <Icon.Clock size={26} weight="bold"/>,
	},
	{
		title: "Documentos necessários",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
		icon: <Icon.FilePlus size={26} weight="bold"/>,
	},
	{
		title: "Legislações",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
		icon: <Icon.FileText size={26} weight="bold"/>,
	},
	// {
	// 	title: "Nome da informação 8",
	// 	description:
	// 		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
	// },
]; 

interface CardServiceLetterProps {
	serviceTitle: string;
}

export function CardServiceLetter(props: CardServiceLetterProps) {

	

	return (
		<>
			<div className="lg:bg-white-100 lg:mx-10 lg:rounded-lg lg:px-8 lg:py-8 lg:my-8 md:mx-16 text-justify">
				<div className="lg:flex lg:justify-between lg:items-baseline">
					<h3 className="pt-4 font-medium ml-4 text-3xl lg:text-4xl lg:flex">
						{props.serviceTitle}
					</h3>
					<div className="mr-4 flex justify-end">
						<Button
								// ver alguma forma de nao usar margin, pois nao é a maneira ideal
								className="mt-128 lg:mt-0" 
								title="Solicitar serviço"
								theme="withIcon"
								icon={<Icon.PhoneOutgoing size={24} />}
						/>
					</div>
				</div>
				<InfoServiceItem
					// icon={<Icon.Target size={26} weight="bold" className=""/>}
					infos={servicesList}
				/>
				<div className="ml-4 mt-9 flex gap-3.5 lg:visible invisible">
					<Button
						title="Solicitar Serviço"
						theme="primaryActionWithIcon"
						icon={<Icon.PhoneOutgoing size={24} />}
					/>
					<Button
						title="Esclarecer Dúvidas"
						theme="secondaryActionWithIcon"
						icon={<Icon.Question size={24} />}
					/>
					<Button
						title="Relatar Problema"
						theme="tertiaryActionWithIcon"
						icon={<Icon.Warning size={24} />}
					/>
				</div>
			</div>
		</>
	);
}