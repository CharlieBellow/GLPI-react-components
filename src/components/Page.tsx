import { Menu } from "../components/organisms/Menu";
import { Header } from "../components/organisms/Header";

interface PageProps extends React.HTMLAttributes<HTMLElement> {
	pagetitle: string;
	contentpage: any;
}

export function Page(props: PageProps) {
	document.title = props.pagetitle;
	return (
		<>
			<div className="layout__menu-header bg-white-strong-ice " {...props}>
				<div className="flex max-w-13xl mx-auto" {...props}>
					<div className="flex" {...props}>
						<Menu />
					</div>

					<div className="pageContent w-full flex flex-col" {...props}>
						<div {...props}>
							<Header page={props.pagetitle} />
						</div>

						<div {...props} className="content">
							{props.contentpage}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
