import * as  Icon from "phosphor-react";
import { Link } from "react-router-dom";
import CategoryHomeMobile from "./CategoryHomeMobile";

const CardCategory = () => {
  return (
		<>
			<div className="bg-white-ice w-auto h-auto py-4 px-4 rounded-lg shadow-card box-border">
				<h4 className="text-4xl mb-8 font-bold">Categorias</h4>
				<Link to="/PageCategoriaHome">
					<CategoryHomeMobile
						Name={"Biblioteca"}
						Icon={<Icon.BookOpen size={27} />}
					/>
				</Link>
			</div>
		</>
	);
}

export default CardCategory;