import React, { useEffect} from "react";
import { Menu } from "../components/organisms/Menu";
import { Header } from "../components/organisms/Header";
import Head from "next/head";
interface PageProps extends React.HTMLAttributes<HTMLElement> {
	pagetitle: string;
	contentpage: any;
}

export function Page ( props: PageProps ) {
	return (
    <>
      <Head>
        <title>{props.pagetitle}</title>
      </Head>
			<div className="layout__menu-header bg-white-strong-ice" {...props}>
				<div className="flex max-w-13xl mx-auto" {...props}>
					<div className="flex" {...props}>
						<Menu />
					</div>

					<div className="pageContent w-full h-screen flex flex-col" {...props}>
						<div { ...props } >
							<Header page={props.pagetitle} />
						</div>

						<div {...props} className="content ">
							{props.contentpage}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
