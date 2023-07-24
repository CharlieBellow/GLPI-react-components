import * as Icon from "phosphor-react";
import Link from "next/link";

interface groupProps {
	Name: String;
	Icon: Icon.IconProps;
	link: string;
	idGroup: string;
	style?: string
}

// * card de cada grupo a ser exibido em groupList

export default function CardGroup( props: groupProps ) {

	return (
    <Link href={props.link}>
			<div className={`flex h-20 w-36 cursor-pointer flex-col rounded-lg bg-white-ice px-3 pt-3 text-light-bg shadow-card hover:border-2 hover:border-blue-ufal-hover hover:bg-opacity-20 lg:h-26 lg:w-52 lg:gap-2 lg:px-4 lg:pt-4 ${props.style}`}>
				<>{props.Icon}</>
				<p className={`mt-3 text-sm font-medium lg:text-xl`}>{props.Name}</p>
			</div>
		</Link>
	);
}


