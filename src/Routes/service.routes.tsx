import { Routes, Route, useParams } from "react-router-dom";
import { CategoryProvider } from "../Contexts/CategoryContext";
import { ServiceProvider } from "../Contexts/ServiceContext";
import { ServiceLetterProvider } from "../Contexts/ServiceLetterContext";
import { SubcategoryProvider } from "../Contexts/SubcategoryContext";
import AddCategory from "../Pages/AddCategory";
import AddSubcategory from "../Pages/AddSubcategory";
import CreateService from "../Pages/CreateService";
import CategoriaHome from "../Pages/CategoryHome";
import Subcategory from "../Pages/Subcategory";
import { ServiceLetter } from "../Pages/ServiceLetter";
import ServicesByCategory from "../Pages/ServicesByCategory";
import ServicesPage from "../Pages/ServicesPage";
import routes from "../components/Category";
import { categoryModel } from "../Utils/ServiceModels";
import { CategoryRoutes } from "./category.routes";
import Category from "../components/Category";

export function ServiceRoutes () {

  const { titleCategory } = useParams();

  return (
    <ServiceProvider>
      <ServiceLetterProvider>
        <SubcategoryProvider>
          <CategoryProvider>
            <CategoryRoutes />
            <Routes>


              <Route
                path="/servicebook/"
                element={ <Category /> }
              >
                <Route
                  path="/servicebook/:titleCategory"
                  element={ <Subcategory /> }
                >



                  <Route
                    path={ `/servicebook/:titleCategory/:titleSubcategory` }
                    element={ <ServicesByCategory /> }
                  >
                    {/* nessa rota pega o id da carta de serviço e passa pra próxima */ }
                    <Route path="servicebook/:titleCategory/:titleSubcategory/:serviceLetter/:idServiceLetter" element={ <ServiceLetter /> } >
                      {/* pegar o id da carta de serviço */ }
                      <Route path="servicebook/:titleCategory/:titleSubcategory/:serviceTitle/create" element={ <CreateService /> } />

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