import React, { useEffect} from "react";
import { Menu } from "../components/organisms/Menu";
import { Header } from "../components/organisms/Header";
import Head from "next/head";
interface PageProps extends React.HTMLAttributes<HTMLElement> {
	pagetitle: string;
  children: React.ReactNode;
}

export function Page ( {pagetitle, children, ...rest }: PageProps ) {
	return (
    <>
      <Head>
        <title>{pagetitle}</title>
      </Head>
			<div className="layout__menu-header bg-white-strong-ice" {...rest}>
				<div className="flex max-w-13xl mx-auto" {...rest}>					<div className="flex" {...rest}>
						<Menu />
					</div>

					<div className="pageContent w-full h-screen flex flex-col" {...rest}>
						<div { ...rest } >
							<Header page={pagetitle} />
            </div>


						<div {...rest} className="content ">
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
