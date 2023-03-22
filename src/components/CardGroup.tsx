import * as Icon from "phosphor-react";
import Link from "next/link";
import { groupModel } from "../Utils/ServiceModels";

interface groupProps {
	Name: String;
	Icon: Icon.IconProps;
	link: string;
	idGroup: string
}

export default function CardGroup( props: groupProps ) {
	
  const id = groupModel.map( group =>
    group.id === props.idGroup
      ? group.titleGroup 
      :  "" 
  );

	return (
    <Link href={props.link}>
			<div className="text-light-bg w-36 h-20 bg-white-ice pt-3 px-3 rounded-lg shadow-card lg:w-52 lg:h-26 flex flex-col lg:gap-2 lg:pt-4 lg:px-4 cursor-pointer hover:bg-opacity-20 hover:border-2 hover:border-blue-ufal-hover">
				<>{props.Icon}</>
				<p className="text-sm mt-3 font-medium lg:text-xl">{props.Name}</p>
			</div>
		</Link>
	);
}


