import { MagnifyingGlass } from "phosphor-react";

interface SearchProps {
  placeholder: string;
}


export default function Search(props: SearchProps) {
  return (
		<div className="relative flex justify-center">
			<MagnifyingGlass
				size={20}
				className="absolute top-[25%] left-[64px] lg:left-[18px] text-cinza-texto"
			/>
			<label htmlFor="search"></label>
			<input
				type="text"
				name="search"
				placeholder={props.placeholder}
				className=" text-cinza-texto bg-branco-gelo-forte rounded-xl focus:outline-azul-ufal border-none shadow-sombra-card py-2 pr-[101px] pl-[58px] text-base font-normal max-w-[80%]  lg:max-w-full lg:w-auto"
			/>
		</div>
	);
}