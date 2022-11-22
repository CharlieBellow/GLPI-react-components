import { MagnifyingGlass } from "phosphor-react";

interface SearchProps {
  placeholder: string;
}


export default function Search(props: SearchProps) {
  return (
		<div className="relative flex justify-center">
			<MagnifyingGlass
				size={20}
				className="absolute top-[25%] left-[64px] lg:left-[18px] text-gray-text"
			/>
			<label htmlFor="search"></label>
			<input
				type="text"
				name="search"
				placeholder={props.placeholder}
				className=" text-gray-text bg-white-strong-ice rounded-xl focus:outline-blue-ufal border-none shadow-card py-2  pl-[58px] text-base font-normal max-w-[100%]  lg:max-w-full lg:w-auto"
			/>
		</div>
	);
}