import { Page } from "../../components/Page";
import TableTeste from "../Teste/TableTeste";
//import TableList from "../../components/TableList";

function TableList() {
	return (
		<>
			<Page pageTitle={"Dashboard"} contentPage={<TableTeste />} />
			{/*<TableTeste />*/}
			{/*<TableList itemList={users} listSelectButton={ItemSelect} />*/}
		</>
	);
}

export default TableList;
