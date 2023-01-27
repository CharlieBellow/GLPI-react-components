import * as Icon from 'phosphor-react'

export const ServicesList = [
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
];

export const services = [
	{
		title: "Instalação de impressora",
		link: "/servicebook/:titleCategory/:{titleSubcategory}/:serviceLetter/:idServiceLetter",
		serviceLetter: ServicesList,
	},
	{
		title: "Manutenção de Computadores",
		link: "/servicebook/:titleCategory/:titleSubcategory/:serviceLetter/:idServiceLetter",
		serviceLetter: ServicesList,
	},

];