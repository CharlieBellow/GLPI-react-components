import { Page } from "../../Page";
import Services from "../Services";


export default function ServicesOrder() {
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