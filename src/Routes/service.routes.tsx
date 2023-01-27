import { Routes, Route } from "react-router-dom";
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


export function ServiceRoutes () {
  return (
    <ServiceProvider>
      <ServiceLetterProvider>
          <SubcategoryProvider>
        <CategoryProvider>
            
            <Routes>
              
              <Route
                path="/servicebook/:titleCategory"
                element={ <ScreenCategoriaHome /> }
              />

              <Route
                path="/servicebook/:c/:titleSubcategory"
                element={ <PageSubcategory /> }
              />
              
              <Route
                path="/servicebook/:titleCategory/:titleSubcategory"
                element={ <ServicesByCategory /> }
              />
              
              <Route path="/servicebook/:titleCategory/:titleSubcategory/:serviceLetter/:idServiceLetter" element={ <ServiceLetter /> } />

              <Route path="/servicebook/:titleCategory/:titleSubcategory/:serviceLetter/:idServiceLetter/service/create" element={ <CreateService /> } />

        <Route path="/service/list" element={ <ServicesPage /> } />

       
      
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