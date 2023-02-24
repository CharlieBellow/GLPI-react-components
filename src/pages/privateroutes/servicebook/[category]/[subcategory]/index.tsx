import axios from "axios";
import { Page } from "../../../../../components/Page";
import * as Icon from "phosphor-react"

import CardCategory from "../../../../../components/CardCategory";
//import { useParams } from "react-router-dom";
import { categoryModel, subcategoryModel } from "../../../../../Utils/ServiceModels";
import { RoutesContext } from "../../../../../Contexts/RouteContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";

import {getCategory, category} from "../../../../../Utils/server/getInfo"


//interface CategoriaProps {
//	categoryId?: string;
//}

//{ categoryId }: CategoriaProps

const Subcategory = (  ) => {

  const router = useRouter()

  //const [subcategoriesList, setSubcategoriesList] = useState([])
  //const url = `http://172.27.12.171:3333/servicebook/${router.query.subcategory}/` 
  

//a página renderiza o nome mas não aparece de imediato, é necessário criar um state ou um contexto para salvar o nome da categoria em tempo real
const [myCategory, setMyCategory] = useState(category)
  
getCategory(router.query.subcategory)


    console.log( "category", category )



//  async function getSubcategories() {
//    await axios.get(url)
  //.then(response => {
    //setSubcategoryList(response.data)
  //})
  //.catch( error => console.log(error))
//
//  } 
//getSubcategories()

//const nameCategory = axios.get(`http://172.27.12.171:3333/servicebook/group/${router.query.subcategory}`)


async function postCategory(values) {
  const nameCategory = await axios({
                method: 'get',
                baseURL: "http://172.27.12.171:3333",
                url: `/servicebook/group/${router.query.subcategory}`,
              }) 
              .then(response => console.log("response", response))
    }


console.log("router", router.query.subcategory)

  return (
		<Page
			pagetitle={"Subcategorias"}
			contentpage={
				<>
					<h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
						Subcategorias
					</h4>

          <h5 className="text-xl font-bold m-8">{category.description}</h5>
					<div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10  gap-y-6 mt-0">
					
					

              { subcategoryModel.map( ( subcategory ) => {
                
                return (
                  
                    <CardCategory link={ `/privateroutes/servicebook/category/${router.query.subcategory}/${ subcategory.description }` } Name={ subcategory.description } Icon={ <Icon.Archive size={ 27 }/> }
                      key={ subcategory.id }
                      idCategory={ subcategory.id }
                    />

                );
              } ) }

							
						
						{/*
            
            criar mais categorias dessa no serviceMod
            
            <CardCategory
							link="/ListServices"
							Name={ "Sistemas" }
							Icon={ <Icon.Cpu size={ 27 } /> } idCategory={ "" }						/>
						<CardCategory
							link="/ListServices"
							Name={ "Manutenção" }
							Icon={ <Icon.Wrench size={ 27 } /> } idCategory={ "" }						/>*/}
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