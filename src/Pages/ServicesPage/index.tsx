import { Page } from "../../components/Page";
import Services from "../../components/Services";


export default function ServicesPage() {
  return (
		<>
			<Page
				pagetitle={"Services"}
				contentpage={
					
					<Services />
				}
			/>
		</>
	);
}