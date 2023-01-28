import { Routes, Route, useParams } from "react-router-dom";
import ScreenCategoriaHome from "../components/ScreenHomeCategoria";
import { CategoryProvider } from "../Contexts/CategoryContext";
import { ServiceProvider } from "../Contexts/ServiceContext";
import { ServiceLetterProvider } from "../Contexts/ServiceLetterContext";
import { SubcategoryProvider } from "../Contexts/SubcategoryContext";
import AddCategory from "../Pages/AddCategory";
import AddSubcategory from "../Pages/AddSubcategory";
import CreateService from "../Pages/CreateService";
import PageCategoriaHome from "../Pages/PageCategoriaHome";
import PageSubcategory from "../Pages/PageSubcategory";
import { ServiceLetter } from "../Pages/ServiceLetter";
import ServicesByCategory from "../Pages/ServicesByCategory";
import ServicesPage from "../Pages/ServicesPage";
import routes from "../components/ScreenHomeCategoria"
import { categoryModel } from "../Utils/ServiceModels";
import {CategoryRoutes} from "./category.routes";

export function ServiceRoutes () {

  const { titleCategory } = useParams()
  
  return (
    <ServiceProvider>
      <ServiceLetterProvider>
          <SubcategoryProvider>
        <CategoryProvider>
              <CategoryRoutes />
            <Routes>
     

              {/*aqui vou ter que pegar o array de categorias, subcategoria e tudo mais... e fazer um map para criar rotas baseado no nome das categorias
              não sei se criar uma rota dentro da outra vai ajudar.. ou se criar as rootas já dentro do componente que faz o map pra exibir.. e depois importar aqui..
            */}
              
              <Route
                path="/servicebook/category"
                element={ <ScreenCategoriaHome /> }
              >
                <Route
                  path=":titleCategory"
                  element={ <PageSubcategory /> }
                >
                  
                  

                  <Route
                    path={ `:titleSubcategory`}
                    element={ <ServicesByCategory /> }
                  >
                    {/* nessa rota pega o id da carta de serviço e passa pra próxima */}
                    <Route path=":serviceLetter/:idServiceLetter" element={ <ServiceLetter /> } >
                      {/* pegar o id da carta de serviço */}
                      <Route path=":idServiceLetter/create" element={ <CreateService /> } />

                    </Route>
                  </Route>
                </Route>


              </Route>

            
              
          
             

              

              <Route path="/service/list" element={ <ServicesPage /> } />
              {/*  fazer o map com as rotas*/ }
              
          
        
       

       
      
        <Route
          path="/servicebook/category/create"
          element={ <AddCategory /> }
          />
        <Route
          path="/servicebook/subcategory/create"
          element={ <AddSubcategory /> }
          />
      </Routes>

          </CategoryProvider>
            </SubcategoryProvider>
        </ServiceLetterProvider>
    </ServiceProvider>

  );
}