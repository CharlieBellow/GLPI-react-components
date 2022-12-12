import * as Icon from "phosphor-react";

interface categoriaProps {
	Name: String;
	Icon: Icon.IconProps;
}

function CategoriaHomeMobile(props: categoriaProps) {
	return (
		<div className="text-light-bg w-36 h-20 bg-white-ice pt-3 px-3 rounded-lg shadow-card lg:w-52 lg:h-26 flex flex-col lg:gap-2 lg:pt-4 lg:px-4 cursor-pointer hover:bg-opacity-20">
			<>{props.Icon}</>
			<p className="text-sm mt-3 font-medium lg:text-xl">{props.Name}</p>
		</div>
	);
}

export default CategoriaHomeMobile;
