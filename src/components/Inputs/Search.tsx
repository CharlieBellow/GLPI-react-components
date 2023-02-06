import { MagnifyingGlass } from "phosphor-react";
interface SearchProps extends React.HTMLAttributes<HTMLElement>{
	placeholder: string;
	theme?: "outline-gray" | ""

}


export default function Search(props: SearchProps) {
  return (
		<div
			className={`flex bg-white-strong-ice rounded-xl shadow-card focus-within:ring-2 ring-blue-ufal ${props.theme === "outline-gray" ?  "ring-light-bg" : "" } items-center gap-1 px-2`}
			{...props}
		>
			<MagnifyingGlass
				size={20}
				className=" text-gray-text"
			/>
			<label {...props} htmlFor="search"></label>
			<input
				{...props}
				type="text"
				name="search"
				placeholder={props.placeholder}
				className="text-gray-text bg-white-strong-ice outline-none border-none  py-2 text-base font-normal lg:max-w-full lg:w-auto max-w-[9rem]"
			/>
		</div>
	);
}