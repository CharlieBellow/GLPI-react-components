import { Menu } from "../components/organisms/Menu";
import { Header } from "../components/organisms/Header";

interface PageProps extends React.HTMLAttributes<HTMLElement>{
  pageTitle: string;
  contentPage: any;
}

export function Page(props: PageProps) {
	document.title = props.pageTitle;
	return (
		<>
			<div className="layout__menu-header bg-white-strong-ice" {...props}>
				<div className="flex max-w-[128rem] mx-auto" {...props}>
					<div className="flex" {...props}>
						<Menu />
					</div>

					<div className="pageContent w-screen flex flex-col" {...props}>
						<div {...props}>
							<Header page={props.pageTitle} />
						</div>

						<div {...props} className="content ">
							{props.contentPage}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
