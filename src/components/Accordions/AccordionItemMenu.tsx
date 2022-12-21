

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Link, To } from "react-router-dom";
import * as Icon from "phosphor-react";

import { styled } from "@stitches/react";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
const AccordionChevron = styled(ChevronDownIcon, {
	transition: "transform 300ms ",

	"[data-state=open] &": { transform: "rotate(180deg)" },
});

interface AccordionItemMenuProps {
	title: string;
	value: string;
	linkTo?: string;
	icon?: Icon.IconProps;
	content: Array<any>;
}

// estilizar o acordeon
export const AccordionItemMenu = (props: AccordionItemMenuProps) => (
	
			<AccordionItem value={ props.value}>
				<AccordionTrigger className="menu__itemOption w-full flex items-center justify-around mr-2 text-white-100 hover:text-blue-dark-final-gradient">
					<div className="flex flex-row font-semibold text-sm content-start justify-start w-full my-5 mx-0 pr-1 aumentaIcone">
						<>{ props.icon}</>
						<div className="text-hidden ml-2">{ props.title}</div>
					</div>
					<AccordionChevron aria-hidden className="text-hidden" />
				</AccordionTrigger>
				{props.content.map((item: { LinkTo: string; contentTitle: string }) => {
					return (
						<>
							<div className="text-hidden">
								<AccordionPrimitive.AccordionContent className="flex items-center justify-start gap-1 text-white-100 hover:opacity-70 text-hidden">
									<Link to={item.LinkTo}>{item.contentTitle}</Link>
								</AccordionPrimitive.AccordionContent>
							</div>
						</>
					);
				})}
			</AccordionItem>

);

export default AccordionItemMenu;
