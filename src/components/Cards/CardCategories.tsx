import * as  Icon from "phosphor-react";
//import { Link } from "react-router-dom";
import CardCategory from "../CardCategory";

const CardCategories = () => {
	return (
		<>
			<div className="bg-white-ice w-auto h-auto py-4 px-4 rounded-lg shadow-card box-border">
				<h4 className="text-4xl mb-8 font-bold">Categorias</h4>
				<div className="grid grid-cols-2">
					{/*<Link to="/PageCategoriaHome">*/}
						<CardCategory
							link="/"
							Name={ "Biblioteca" }
							Icon={ <Icon.BookOpen size={ 27 } /> } idCategory={ "" }						/>
					{/*</Link>*/}
					<div className="gap-3 grid grid-cols-2">
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

export default CardCategories;