import * as  Icon from "phosphor-react";
import { Link } from "react-router-dom";
import CategoryHomeMobile from "./CategoryHomeMobile";

const CardCategory = () => {
  return (
		<>
			<div className="bg-white-ice w-auto h-auto py-4 px-4 rounded-lg shadow-card box-border">
				<h4 className="text-4xl mb-8 font-bold">Categorias</h4>
				<div className="grid grid-cols-2">
					<Link to="/PageCategoriaHome">
						<CategoryHomeMobile
							link="/"
							Name={"Biblioteca"}
							Icon={<Icon.BookOpen size={27} />}
						/>
					</Link>
					<div className="gap-3 grid grid-cols-2">
						<Link to="/">Dashboard</Link>
						<Link to="/ServiceLetter">Carta de Serviço</Link>
						<Link to="/CreateService">Criar Serviço</Link>
						<Link to="/List">Tabela</Link>
						<Link to="/Login">Login</Link>
						<Link to="/SignUp">Cadastro</Link>

						<Link to="/Services">Lista de Serviços</Link>
						<Link to="/UserInfo">Informações do usuário</Link>
						<Link to="/AddUser">Adicionar Usuário</Link>
						<Link to="/CardTest"> Card Teste</Link>
						<Link to="/Teste">Teste </Link>
						<Link to="/CategoriaHome">Categorias</Link>
						<Link to="/AddCategory" >Add Category </Link>
						<Link to="/AddSubcategory"> Add Subcategory</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardCategory;