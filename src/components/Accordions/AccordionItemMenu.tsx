

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import * as Icon from "@/components/icons";
import { AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import Link from "next/link";

import { styled } from "@stitches/react";

import { ChevronDownIcon } from "@radix-ui/react-icons";
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
				<AccordionTrigger className="menu__itemOption mr-2 flex w-full items-center justify-around text-white-100 hover:text-blue-dark-final-gradient">
					<div className="aumentaIcone mx-0 my-5 flex w-full flex-row content-start justify-start pr-1 text-sm font-semibold">
						<>{ props.icon}</>
						<div className="text-hidden ml-2">{ props.title}</div>
					</div>
					<AccordionChevron aria-hidden className="text-hidden" />
				</AccordionTrigger>
				{props.content.map((item: { LinkTo: string; contentTitle: string }) => {
					return (
						<>
							<div className="text-hidden">
								<AccordionPrimitive.AccordionContent className="text-hidden flex items-center justify-start gap-1 text-white-100 hover:opacity-70">
                  <Link href={ item.LinkTo }>{ item.contentTitle }</Link>
                  
								</AccordionPrimitive.AccordionContent>
							</div>
						</>
					);
				})}
			</AccordionItem>

);

export default AccordionItemMenu;
