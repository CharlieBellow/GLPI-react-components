import * as Icon from "@/components/icons";
import Link from "next/link";
import CardGroup from "../CardGroup/CardGroup";
//import { Link } from "react-router-dom";

const CardGroups = () => {
	return (
		<>
			<div className="box-border h-auto w-auto rounded-lg bg-white-ice p-4 shadow-card">
				<h4 className="mb-8 text-4xl font-bold">Grupos</h4>
				<div className="grid grid-cols-2">
						<CardGroup
							link="/servicebook"
							Name={ "Biblioteca" }
							Icon={ <Icon.BookOpen size={ 27 } /> } idGroup={ "" }	/>
					<div className="hover:cursor-pointer hover:text-blue-ufal-hover">
						<Link href="/servicebook/myservices">Meus Serviços</Link>
					</div>
					<div className="grid grid-cols-2 gap-3">
						{/*<Link to="/">Dashboard</Link>*/}
						{/*<Link to="/service/letter">Carta de Serviço</Link>*/}
						{/*<Link to="/service/create">Criar Serviço</Link>*/}
						{/*<Link to="/users/list">Tabela</Link>
						<Link to="/login">Login</Link>
						<Link to="/signup">Cadastro</Link>

						<Link to="/service/list">Lista de Serviços</Link>
						<Link to="/user/info">Informações do usuário</Link>
						<Link to="/user/create">Adicionar Usuário</Link>
						<Link to="/test/card"> Card Teste</Link>
						<Link to="/test">Teste </Link>
						<Link to="/servicebook/category">Categorias</Link>
						<Link to="/servicebook/subcategory">Subcategorias</Link>
						<Link to="/servicebook/category/create">Add Category </Link>
						<Link to="/servicebook/subcategory/create"> Add Subcategory</Link>
						<Link to="/servicebook/service"> Serviços por category</Link>*/}


					</div>
				</div>
			</div>
		</>
	);
};

export default CardGroups;