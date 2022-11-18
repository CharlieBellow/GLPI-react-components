import { InfoServiceItem } from "./InfoService";
import * as Icon from 'phosphor-react'

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
	
	

]; 


export function CardServiceLetter() {
  return (
		<>
			<div className="">
				
					<InfoServiceItem
						icon={<Icon.Target size={20} weight="bold" className="" />}
						//title={info.title}
						//description={ info.descripton}
						infos={servicesList}
					/>;
				
			</div>
		</>
	);
}