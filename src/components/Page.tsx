import { Menu } from "../components/organisms/Menu";
import { Header } from "../components/organisms/Header";

interface PageProps {
  pageTitle: string;
  contentPage: any;
}

export function Page(props: PageProps) {
	document.title = props.pageTitle;
	return (
		<>
			<div className="layout__menu-header">
				<div className="flex bg-white-strong-ice">
					<div className="flex">
						<Menu />
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header page={props.pageTitle} />
						</div>

						<div className="content">{props.contentPage}</div>
					</div>
				</div>
			</div>
		</>
	);
}
