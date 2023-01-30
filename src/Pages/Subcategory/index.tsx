import { Page } from "../../components/Page";
import * as Icon from "phosphor-react"

import CardCategory from "../../components/CardCategory";
import { useParams } from "react-router-dom";
import { categoryModel, subcategoryModel } from "../../Utils/ServiceModels";
import { RoutesContext } from "../../Contexts/RouteContext";
import { useContext } from "react";

interface CategoriaProps {
	categoryId?: string;
}

const Subcategory = ( { categoryId }: CategoriaProps ) => {

	const { titleCategory } = useParams()
	const parametros = useParams()
	console.log(parametros);
	
	console.log( "titleCategory", titleCategory );

  const {  category } = useContext( RoutesContext );
  console.log( "category", category );


  return (
		<Page
			pagetitle={"Subcategorias"}
			contentpage={
				<>
					<h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
						Subcategorias
					</h4>

					<h5 className="text-xl font-bold m-8">GTI</h5>
					<div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10  gap-y-6 mt-0">
						{/*<div className="flex flex-col gap-4 ">*/}
						<div>
							<CardCategory
								link={`/servicebook/${ titleCategory }/${ subcategoryModel[ 0 ].titleSubcategory }` }
								Name={ subcategoryModel[ 0 ].titleSubcategory }
								Icon={ <Icon.Cpu size={ 27 } /> } idCategory={ "" }								
								
							/>
							<p>
								Clique no card para solicitar um serviço relacionado a Rede de
								internet
							</p>
						</div>
						<CardCategory
							link="/ListServices"
							Name={ "Sistemas" }
							Icon={ <Icon.Cpu size={ 27 } /> } idCategory={ "" }						/>
						<CardCategory
							link="/ListServices"
							Name={ "Manutenção" }
							Icon={ <Icon.Wrench size={ 27 } /> } idCategory={ "" }						/>
						{/*</div>*/}

						{/*<div className="flex flex-col gap-4 ">
							<h5 className="text-xl font-bold">Administrativo</h5>
							<CardCategory
								link="/ServiceLetter"
								Name={"DCE"}
								Icon={<Icon.Wrench size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"CRCA"}
								Icon={<Icon.FileText size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"Coordenação"}
								Icon={<Icon.Wrench size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"Financeiro"}
								Icon={<Icon.User size={27} />}
							/>
						</div>

						<div className="flex flex-col gap-4 ">
							<h5 className="text-xl font-bold">Biblioteca</h5>
							<CardCategory
								link="/ServiceLetter"
								Name={"CRCA"}
								Icon={<Icon.BookOpen size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"NAE"}
								Icon={<Icon.User size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"CRCA"}
								Icon={<Icon.Users size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"NAE"}
								Icon={<Icon.User size={27} />}
							/>
						</div>
						<div className="flex flex-col gap-4 ">
							<h5 className="text-xl font-bold">GAE</h5>
							<CardCategory
								link="/ServiceLetter"
								Name={"NAE"}
								Icon={<Icon.CrosshairSimple size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"DAP"}
								Icon={<Icon.Stack size={27} />}
							/>
						</div>*/}
					</div>
				</>
			}
		/>
	);
}
 
export default Subcategory;