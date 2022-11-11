import { MagnifyingGlass } from "phosphor-react";

interface SearchProps extends React.HTMLAttributes<HTMLElement>{
  placeholder: string;
}


export default function Search(props: SearchProps) {
  return (
		<div className="relative flex justify-center" {...props}>
			<MagnifyingGlass
				size={20}
				className="absolute top-[25%] left-[64px] lg:left-[18px] text-gray-text"
			/>
			<label {...props} htmlFor="search"></label>
			<input
				{...props}
				type="text"
				name="search"
				placeholder={props.placeholder}
				className=" text-gray-text bg-white-strong-ice rounded-xl focus:outline-blue-ufal border-none shadow-card py-2 pr-[101px] pl-[58px] text-base font-normal max-w-[80%]  lg:max-w-full lg:w-auto"
			/>
		</div>
	);
}