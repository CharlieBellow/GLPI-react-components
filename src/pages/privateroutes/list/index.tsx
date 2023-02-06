import { Page } from "../../../components/Page";
import TableList from "../../../components/TableList";
import { useEffect, useState } from "react";


const ItemSelect = [
	"Tudo",
	"Nome",
	"Email",
	"Data de Criação",
	"Matrícula",
	"Descrição",
];


export default function List() {
  const [lista, setLista] = useState([]);
  
  useEffect( () => {
    
  })
	
  
  useEffect( () => {
    if (localStorage.getItem("users") !== null) {
      
      const usersStorage = localStorage.getItem("users");
			const listas = JSON.parse(usersStorage)!;
			console.log("lista:", lista);
			setLista(listas);
			console.log(listas);
		}
	}, []);

	console.log(lista);
	return (
		<>
			<Page
				pagetitle={"Tabela"}
				contentpage={
					<TableList itemlist={lista} listselecbutton={ItemSelect} />
				}
			/>
		</>
	);
}


