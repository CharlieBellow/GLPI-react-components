import { Page } from "../../components/Page";
import FormikCardCreateService from "../../components/FormikCardCreateService";

function Teste() {
	return (
		<>
			<Page
				pageTitle={"Teste Formik"}
				contentPage={
					<>
						<FormikCardCreateService />
						<FormikCardCreateService />
					</>
				}
			/>
		</>
	);
}

export default Teste;
