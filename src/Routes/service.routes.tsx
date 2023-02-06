import { Routes, Route, useParams } from "react-router-dom";
import { CategoryProvider } from "../Contexts/CategoryContext";
import { ServiceProvider } from "../Contexts/ServiceContext";
import { ServiceLetterProvider } from "../Contexts/ServiceLetterContext";
import { SubcategoryProvider } from "../Contexts/SubcategoryContext";
import AddCategory from "../pages/AddCategory";
import AddSubcategory from "../pages/AddSubcategory";
import CreateService from "../pages/CreateService";
import CategoriaHome from "../pages/CategoryHome";
import Subcategory from "../pages/Subcategory";
import { ServiceLetter } from "../pages/ServiceLetter";
import ServicesByCategory from "../pages/ServicesByCategory";
import ServicesPage from "../pages/ServicesPage";
import routes from "../components/Category";
import { categoryModel } from "../Utils/ServiceModels";
import { CategoryRoutes } from "./category.routes";
import Category from "../components/Category";
import RoutesProvider from "../Contexts/RouteContext";

export function ServiceRoutes () {

  const { titleCategory } = useParams();

  return (
    <ServiceProvider>
      <ServiceLetterProvider>
        <SubcategoryProvider>
          <RoutesProvider>
          <CategoryProvider>
            <CategoryRoutes />
            <Routes>


              <Route
                path="/servicebook"
                element={ <Category /> }
              >
                <Route
                  path=":titleCategory"
                  element={ <Subcategory /> }
                >



                  <Route
                    path={`/servicebook/:titleCategory/:titleSubcategory`}
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
          </RoutesProvider>
        </SubcategoryProvider>
      </ServiceLetterProvider>
    </ServiceProvider>

  );
}