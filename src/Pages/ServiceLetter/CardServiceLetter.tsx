import { InfoServiceItem } from "./InfoService";
import * as Icon from 'phosphor-react'
import { Button } from "../../components/Button";

const servicesList = [
	{
		title: "Nome da informação 1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non. rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
	},
	{
		title: "Nome da informação 2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
	},
	{
		title: "Nome da informação 3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem.",
	},
	{
		title: "Nome da informação 4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
	},
	{
		title: "Nome da informação 5",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
	},
	{
		title: "Nome da informação 6",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
	},
	{
		title: "Nome da informação 7",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
	},
	{
		title: "Nome da informação 8",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta ad inventore molestiae sunt quos delectus ratione magni odio, deserunt quam dolorem eos eaque quis illum nam blanditiis praesentium impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae! Excepturi non inventore facilis voluptatibus magnam dolorum eaque harum, asperiores veniam quis facere impedit, rerum cupiditate perferendis. Facere, dolore maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, porro velit, sunt, fugiat repudiandae quo mollitia autem nesciunt commodi adipisci vero et esse recusandae perspiciatis quas cupiditate! Esse, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, exercitationem. Reiciendis inventore ut repellendus corporis, repudiandae est alias odit eius! Recusandae quia veniam voluptates ab atque incidunt alias sunt non.",
	},
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
					<div className="fixed top-[630px] right-2 lg:right-22 lg:top-202">
						<Button
							title={floatingButton ? "" : "Solicitar serviço"}
							theme="withIcon"
							icon={<Icon.PhoneOutgoing size={24} />}
						/>
					</div>
				</div>
				<InfoServiceItem
					icon={<Icon.Target size={20} weight="bold" className="" />}
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